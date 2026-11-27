import {NextRequest,NextResponse} from "next/server";
import {db} from "@/lib/firebase-admin";
import {claimFingerprint,normalizeClaim,resolveClaimSubject} from "@/lib/claim-utils";
import {getPublishedRecords} from "@/lib/data";
export const runtime="nodejs";
const recent=new Map<string,{count:number;start:number}>();
const allowedTypes=["public-statement","campaign-promise","election-information","statistics","image-video","policy","other"];
function safeUrl(value:unknown){
 const raw=String(value||"").trim();
 if(!raw)return "";
 try{const parsed=new URL(raw);return parsed.protocol==="https:"||parsed.protocol==="http:"?parsed.toString():"";}catch{return "";}
}
function safeUrlList(value:unknown){
 const entries=Array.isArray(value)?value:[];
 return [...new Set(entries.map(safeUrl).filter(Boolean))].slice(0,8);
}
function tokens(value:string){
 const stop=new Set(["the","a","an","and","or","of","to","in","on","at","for","by","is","was","were","are","be","been","has","have","had","that","this","with","from","as","it","its","he","she","they","his","her","their","said","says"]);
 return new Set(normalizeClaim(value).split(" ").filter(word=>word.length>2&&!stop.has(word)));
}
function similarity(a:string,b:string){
 const left=tokens(a),right=tokens(b);
 if(!left.size||!right.size)return 0;
 let overlap=0;for(const word of left)if(right.has(word))overlap++;
 const jaccard=overlap/(left.size+right.size-overlap);
 const containment=overlap/Math.min(left.size,right.size);
 return Math.max(jaccard,containment*0.82);
}
async function findExistingClaim(fingerprint:string,normalized:string){
 const index=await db.collection("claimFingerprints").doc(fingerprint).get();
 if(index.exists)return {kind:"index" as const,data:index.data()||{}};
 const queued=await db.collection("claims").where("claimFingerprint","==",fingerprint).limit(1).get();
 if(!queued.empty)return {kind:"queue" as const,data:{claimId:queued.docs[0].id,origin:"reader-submission",queueStatus:"queued"}};
 const legacy=await db.collection("claims").where("normalizedClaim","==",normalized).limit(1).get();
 if(!legacy.empty)return {kind:"queue" as const,data:{claimId:legacy.docs[0].id,origin:"reader-submission",queueStatus:"queued"}};
 const recentClaims=await db.collection("claims").orderBy("createdAt","desc").limit(300).get();
 const legacyDuplicate=recentClaims.docs.find(doc=>normalizeClaim(doc.data().claim||"")===normalized);
 if(legacyDuplicate)return {kind:"queue" as const,data:{claimId:legacyDuplicate.id,origin:"reader-submission",queueStatus:"queued"}};
 return null;
}
function publicSummary(record:Record<string,any>,exact=false){
 return {title:String(record.title||record.claim||"Previously reviewed claim"),claim:String(record.claim||""),url:"/fact-check/"+String(record.slug||record.id||""),subject:String(record.subject||""),subjectKey:String(record.subjectKey||""),verdict:String(record.verdict||""),impact:String(record.impact||"unclear"),origin:String(record.origin||"unspecified"),originLabel:String(record.originLabel||(record.origin==="reader-submission"?"Reader submission":record.origin==="sabi-research"?"Sabi newsroom research":"Origin not recorded")),publishedAt:String(record.publishedAt||""),exact};
}
async function dispatchClaimAlert(payload:Record<string,unknown>){
 const endpoint=process.env.SABI_CLAIM_ALERT_WEBHOOK_URL;
 if(!endpoint)return "not_configured";
 try{
  const parsed=new URL(endpoint);
  if(!["https:","http:"].includes(parsed.protocol))return "invalid_endpoint";
  const headers:Record<string,string>={"Content-Type":"application/json"};
  if(process.env.SABI_CLAIM_ALERT_SECRET)headers.Authorization="Bearer "+process.env.SABI_CLAIM_ALERT_SECRET;
  const response=await fetch(parsed.toString(),{method:"POST",headers,body:JSON.stringify(payload),signal:AbortSignal.timeout(6000),cache:"no-store"});
  return response.ok?"sent":"failed";
 }catch{return "failed";}
}
export async function GET(req:NextRequest){
 try{
  const claim=String(req.nextUrl.searchParams.get("claim")||"").trim();
  const normalized=normalizeClaim(claim);
  if(normalized.length<12)return NextResponse.json({error:"Enter at least 12 characters to check for existing claims."},{status:400});
  const fingerprint=claimFingerprint(claim);
  const existing=await findExistingClaim(fingerprint,normalized);
  const published=await getPublishedRecords("factchecks");
  const exactRecord=published.find(record=>normalizeClaim(record.claim||"")===normalized);
  const exactMatch=exactRecord?publicSummary(exactRecord,true):null;
  const similar=published.map(record=>({record,score:similarity(claim,String(record.claim||""))}))
   .filter(item=>item.score>=0.55&&normalizeClaim(item.record.claim||"")!==normalized)
   .sort((a,b)=>b.score-a.score).slice(0,5).map(item=>publicSummary(item.record,false));
  const queued=Boolean(existing&&(existing.kind==="queue"||!existing.data.factcheckSlug));
  return NextResponse.json({exactMatch,alreadyInQueue:queued,suggestions:similar.filter(item=>item.url!==exactMatch?.url)},{headers:{"Cache-Control":"no-store"}});
 }catch(error){
  console.error("Claim duplicate check failed",error instanceof Error?error.message:"unknown error");
  return NextResponse.json({error:"We could not check the archive right now. You can try again shortly."},{status:503});
 }
}
export async function POST(req:NextRequest){
 try{
  const body=await req.json();
  const claim=String(body.claim||"").trim();
  if(String(body.website||"").trim())return NextResponse.json({ok:true},{status:200});
  if(claim.length<12||claim.length>2500)return NextResponse.json({error:"Please provide the exact claim (12–2,500 characters)."}, {status:400});
  const normalized=normalizeClaim(claim);
  if(normalized.length<12)return NextResponse.json({error:"Please provide a more specific claim."},{status:400});
  const fingerprint=claimFingerprint(claim);
  const archive=await getPublishedRecords("factchecks");
  const publishedDuplicate=archive.find(record=>normalizeClaim(record.claim||"")===normalized);
  if(publishedDuplicate)return NextResponse.json({duplicate:true,error:"This exact claim has already been checked and published.",existingUrl:"/fact-check/"+String(publishedDuplicate.slug||publishedDuplicate.id)},{status:409});
  const existing=await findExistingClaim(fingerprint,normalized);
  if(existing){
   const slug=String(existing.data.factcheckSlug||"");
   return NextResponse.json({duplicate:true,error:slug?"This exact claim has already been checked and published.":"This exact claim is already in the newsroom queue.",existingUrl:slug?"/fact-check/"+slug:undefined},{status:409});
  }
  const ip=(req.headers.get("x-forwarded-for")||"unknown").split(",")[0].trim();
  const now=Date.now();const current=recent.get(ip);
  if(current&&now-current.start<3600000&&current.count>=4)return NextResponse.json({error:"Please wait before submitting another claim."},{status:429});
  recent.set(ip,!current||now-current.start>=3600000?{count:1,start:now}:{count:current.count+1,start:current.start});
  const claimType=allowedTypes.includes(String(body.claimType))?String(body.claimType):"other";
  const sourceUrl=safeUrl(body.sourceUrl);
  const supportingUrls=safeUrlList(body.supportingUrls);
  const subjectInfo=resolveClaimSubject(body.subject||"");
  const submittedAt=new Date().toISOString();
  const record={claim,normalizedClaim:normalized,claimFingerprint:fingerprint,claimType,subject:subjectInfo.subject,subjectKey:subjectInfo.subjectKey,subjectType:subjectInfo.subjectType,impact:"unclear",origin:"reader-submission",originLabel:"Reader submission",state:String(body.state||"").trim().slice(0,80),context:String(body.context||"").trim().slice(0,800),sourceUrl,supportingUrls,contact:String(body.contact||"").trim().slice(0,200),isTimeSensitive:Boolean(body.isTimeSensitive),status:"submitted",reviewStatus:"queued",reviewPriority:body.isTimeSensitive?"time-sensitive":"standard",researchNotes:"",reviewSummary:"",findings:"",verdict:"",evidence:[],createdAt:submittedAt,submittedAt,updatedAt:submittedAt,alertStatus:"pending"};
  const claimRef=db.collection("claims").doc();
  const indexRef=db.collection("claimFingerprints").doc(fingerprint);
  const transactionResult=await db.runTransaction(async tx=>{
   const indexSnap=await tx.get(indexRef);
   if(indexSnap.exists)return {duplicate:true,data:indexSnap.data()||{}};
   const queueSnap=await tx.get(db.collection("claims").where("claimFingerprint","==",fingerprint).limit(1));
   if(!queueSnap.empty)return {duplicate:true,data:{claimId:queueSnap.docs[0].id}};
   tx.set(claimRef,record);
   tx.set(indexRef,{fingerprint,claimId:claimRef.id,queueStatus:"queued",origin:"reader-submission",subjectKey:subjectInfo.subjectKey,createdAt:submittedAt});
   return {duplicate:false,data:{}};
  });
  if(transactionResult.duplicate){
   const slug=String(transactionResult.data.factcheckSlug||"");
   return NextResponse.json({duplicate:true,error:"This exact claim is already in the newsroom queue or verified archive.",existingUrl:slug?"/fact-check/"+slug:undefined},{status:409});
  }
  const alertStatus=await dispatchClaimAlert({event:"sabi.claim.created",claimId:claimRef.id,submittedAt,claimType,claim,subject:record.subject,subjectKey:record.subjectKey,state:record.state,context:record.context,sourceUrl,supportingUrls,isTimeSensitive:record.isTimeSensitive,reviewPriority:record.reviewPriority,origin:record.origin,newsroomPath:"/studio",privacy:"Submitter contact details are intentionally not included in webhook alerts."});
  await claimRef.update({alertStatus,alertUpdatedAt:new Date().toISOString()});
  return NextResponse.json({ok:true,id:claimRef.id,alertStatus},{status:201});
 }catch(error){
  console.error("Claim submission failed",error instanceof Error?error.message:"unknown error");
  return NextResponse.json({error:"The submission service is temporarily unavailable. Please try again later."},{status:503});
 }
}
