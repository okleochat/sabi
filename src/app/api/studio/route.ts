import {NextRequest,NextResponse} from "next/server";
import {getAuth} from "firebase-admin/auth";
import {FieldValue} from "firebase-admin/firestore";
import {app,db} from "@/lib/firebase-admin";
import {starterResearchClaims} from "@/data/research-claim-seeds";
import {claimFingerprint,resolveClaimSubject} from "@/lib/claim-utils";
export const runtime="nodejs";
const statuses=["submitted","triaged","researching","editor_review","closed"];
const verdicts=["True","Mostly true","Half true","Misleading","Mostly false","False","Unproven","Outdated","Insufficient evidence"];
const impacts=["positive","negative","mixed","neutral","unclear"];
async function requireEditor(req:NextRequest){
 const header=req.headers.get("authorization")||"";
 const token=header.startsWith("Bearer ")?header.slice(7):"";
 if(!token)throw new Error("AUTH_REQUIRED");
 const decoded=await getAuth(app).verifyIdToken(token);
 const ref=await db.collection("editors").doc(decoded.uid).get();
 if(!ref.exists)throw new Error("EDITOR_PENDING:"+decoded.uid+":"+String(decoded.email||""));
 const editor=ref.data()||{};
 if(!["admin","editor","factchecker"].includes(String(editor.role||"")))throw new Error("EDITOR_ROLE_MISSING");
 return {uid:decoded.uid,email:decoded.email||"",role:String(editor.role||"")};
}
function safeUrl(value:unknown){
 const raw=String(value||"").trim();
 try{const parsed=new URL(raw);return ["https:","http:"].includes(parsed.protocol)?parsed.toString():"";}catch{return "";}
}
function safeEvidence(value:unknown){
 if(!Array.isArray(value))return [];
 return value.slice(0,20).map((item:any)=>({title:String(item?.title||"").trim().slice(0,240),publisher:String(item?.publisher||"").trim().slice(0,160),url:safeUrl(item?.url),sourceType:String(item?.sourceType||"").trim().slice(0,80)})).filter(item=>item.url);
}
function slugify(value:string){return value.toLowerCase().normalize("NFKD").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,90)||"fact-check";}
function claimClassification(body:any,current:any){
 const subjectInfo=resolveClaimSubject(body.subject!==undefined?body.subject:current.subject, String(body.subjectType||current.subjectType||""));
 const requestedImpact=String(body.impact||current.impact||"unclear");
 return {subject:subjectInfo.subject,subjectKey:subjectInfo.subjectKey,subjectType:subjectInfo.subjectType,impact:impacts.includes(requestedImpact)?requestedImpact:"unclear"};
}
async function seedEditorialResearch(){
 const collection=db.collection("claims");
 const refs=starterResearchClaims.map(record=>collection.doc(String(record.id)));
 const snapshots=await db.getAll(...refs);
 const batch=db.batch();let writes=0;
 snapshots.forEach((snap,index)=>{
  if(!snap.exists){batch.set(refs[index],{...starterResearchClaims[index],status:starterResearchClaims[index].status||"researching",reviewStatus:"researching",origin:"sabi-research",originLabel:"Sabi newsroom research"});writes++;}
 });
 if(writes)await batch.commit();
}
async function saveHistory(id:string,event:Record<string,unknown>){
 await db.collection("claims").doc(id).update({reviewHistory:FieldValue.arrayUnion(event)});
}
export async function GET(req:NextRequest){
 try{
  const editor=await requireEditor(req);
  await seedEditorialResearch();
  const snap=await db.collection("claims").orderBy("createdAt","desc").limit(200).get();
  const claims=snap.docs.map(d=>({id:d.id,...d.data()}));
  return NextResponse.json({editor,claims});
 }catch(error){
  const message=error instanceof Error?error.message:"UNKNOWN";
  if(message.startsWith("EDITOR_PENDING:")){const [,uid,email]=message.split(":");return NextResponse.json({pending:true,uid,email},{status:403});}
  if(message==="AUTH_REQUIRED"||message.toLowerCase().includes("auth")||message.toLowerCase().includes("token"))return NextResponse.json({error:"Please sign in again."},{status:401});
  if(message==="EDITOR_ROLE_MISSING")return NextResponse.json({error:"Your account does not have an editor role."},{status:403});
  console.error("Studio access failed",message);return NextResponse.json({error:"Studio is temporarily unavailable."},{status:503});
 }
}
export async function POST(req:NextRequest){
 try{
  const editor=await requireEditor(req);
  const body=await req.json();
  const id=String(body.id||"").trim();
  if(!id)return NextResponse.json({error:"A claim reference is required."},{status:400});
  const claimRef=db.collection("claims").doc(id);
  const claimSnap=await claimRef.get();
  if(!claimSnap.exists)return NextResponse.json({error:"That claim could not be found."},{status:404});
  const current=claimSnap.data()||{};
  const now=new Date().toISOString();
  if(body.action==="update-claim"){
   const status=String(body.status||"");
   if(!statuses.includes(status))return NextResponse.json({error:"Invalid claim status."},{status:400});
   await claimRef.update({status,reviewStatus:status,updatedAt:now,updatedBy:editor.uid});
   await saveHistory(id,{action:"status-change",status,at:now,by:editor.uid});
   return NextResponse.json({ok:true});
  }
  if(body.action==="save-claim-research"){
   const status=String(body.status||"researching");
   if(!statuses.includes(status))return NextResponse.json({error:"Invalid claim status."},{status:400});
   const verdict=verdicts.includes(String(body.verdict||""))?String(body.verdict):"";
   const evidence=safeEvidence(body.evidence);
   const classification=claimClassification(body,current);
   const patch={status,reviewStatus:status,verdict,...classification,
    researchNotes:String(body.researchNotes||"").trim().slice(0,8000),
    reviewSummary:String(body.reviewSummary||"").trim().slice(0,2500),
    findings:String(body.findings||"").trim().slice(0,12000),
    evidence,updatedAt:now,updatedBy:editor.uid};
   await claimRef.update(patch);
   await saveHistory(id,{action:"research-saved",status,verdict,subjectKey:classification.subjectKey,impact:classification.impact,at:now,by:editor.uid,evidenceCount:evidence.length});
   return NextResponse.json({ok:true,classification});
  }
  if(body.action==="publish-factcheck"){
   if(!["admin","editor"].includes(editor.role))return NextResponse.json({error:"A newsroom editor or administrator must approve publication."},{status:403});
   if(body.humanReviewConfirmed!==true)return NextResponse.json({error:"Confirm that a human editor has checked the wording, evidence and verdict."},{status:400});
   const title=String(body.title||"").trim().slice(0,220);
   const summary=String(body.summary||"").trim().slice(0,1800);
   const findings=String(body.findings||"").trim().slice(0,16000);
   const verdict=String(body.verdict||"");
   const evidence=safeEvidence(body.evidence);
   if(title.length<8||summary.length<30||findings.length<80||!verdicts.includes(verdict)||evidence.length<1){
    return NextResponse.json({error:"Publication needs a title, summary, detailed findings, an approved verdict and at least one source link."},{status:400});
   }
   const classification=claimClassification(body,current);
   const origin=current.origin==="sabi-research"?"sabi-research":"reader-submission";
   const originLabel=origin==="sabi-research"?"Sabi newsroom research":"Reader submission";
   const fingerprint=String(current.claimFingerprint||claimFingerprint(current.claim||""));
   const indexRef=db.collection("claimFingerprints").doc(fingerprint);
   const baseSlug=slugify(title);
   let createdSlug="";
   for(let suffix=1;suffix<=8;suffix++){
    const slug=suffix===1?baseSlug:baseSlug+"-"+suffix;
    const factRef=db.collection("factchecks").doc(slug);
    const publishedAt=now.slice(0,10);
    const factcheck={slug,title,claim:String(current.claim||""),claimType:String(current.claimType||"other"),
     claimSource:String(current.claimSource||current.sourceUrl||""),summary,findings,verdict,evidence,
     ...classification,origin,originLabel,published:true,status:"published",publishedAt,createdAt:now,updatedAt:now,
     sourceClaimId:id,claimFingerprint:fingerprint,publishedBy:editor.uid,reviewedBy:editor.uid,reviewStandard:"human-editor-approved"};
    const outcome=await db.runTransaction(async tx=>{
     const indexSnap=await tx.get(indexRef);
     const factSnap=await tx.get(factRef);
     if(factSnap.exists)return "slug-taken";
     if(indexSnap.exists&&String(indexSnap.data()?.claimId||"")!==id)return "duplicate";
     tx.set(factRef,factcheck);
     tx.update(claimRef,{status:"closed",reviewStatus:"published",publishedAt,factcheckSlug:slug,publishedBy:editor.uid,updatedAt:now,updatedBy:editor.uid,...classification,verdict,reviewHistory:FieldValue.arrayUnion({action:"factcheck-published",slug,verdict,impact:classification.impact,at:now,by:editor.uid,evidenceCount:evidence.length})});
     tx.set(indexRef,{fingerprint,claimId:id,queueStatus:"published",factcheckSlug:slug,origin,subjectKey:classification.subjectKey,updatedAt:now},{merge:true});
     return "published";
    });
    if(outcome==="published"){createdSlug=slug;break;}
    if(outcome==="duplicate")return NextResponse.json({error:"This exact claim is already linked to another published fact-check."},{status:409});
   }
   if(!createdSlug)return NextResponse.json({error:"Could not reserve a unique fact-check URL. Please try again."},{status:409});
   return NextResponse.json({ok:true,slug:createdSlug,url:"/fact-check/"+createdSlug},{status:201});
  }
  return NextResponse.json({error:"Unsupported newsroom action."},{status:400});
 }catch(error){
  const message=error instanceof Error?error.message:"UNKNOWN";
  if(message.startsWith("EDITOR_PENDING:"))return NextResponse.json({error:"Editor access is not approved."},{status:403});
  if(message==="AUTH_REQUIRED"||message.toLowerCase().includes("auth")||message.toLowerCase().includes("token"))return NextResponse.json({error:"Please sign in again."},{status:401});
  if(message==="EDITOR_ROLE_MISSING")return NextResponse.json({error:"Your account does not have an editor role."},{status:403});
  console.error("Studio action failed",message);return NextResponse.json({error:"Could not complete the newsroom action."},{status:503});
 }
}
