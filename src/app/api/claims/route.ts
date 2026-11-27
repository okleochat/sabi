import {NextRequest,NextResponse} from "next/server";
import {db} from "@/lib/firebase-admin";
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
async function dispatchClaimAlert(payload:Record<string,unknown>){
 const endpoint=process.env.SABI_CLAIM_ALERT_WEBHOOK_URL;
 if(!endpoint)return "not_configured";
 try{
  const parsed=new URL(endpoint);
  if(!["https:","http:"].includes(parsed.protocol))return "invalid_endpoint";
  const headers:Record<string,string>={"Content-Type":"application/json"};
  if(process.env.SABI_CLAIM_ALERT_SECRET)headers.Authorization="Bearer "+process.env.SABI_CLAIM_ALERT_SECRET;
  const response=await fetch(parsed.toString(),{
   method:"POST",
   headers,
   body:JSON.stringify(payload),
   signal:AbortSignal.timeout(6000),
   cache:"no-store",
  });
  return response.ok?"sent":"failed";
 }catch{return "failed";}
}
export async function POST(req:NextRequest){
 try{
  const body=await req.json();
  const claim=String(body.claim||"").trim();
  if(String(body.website||"").trim())return NextResponse.json({ok:true},{status:200});
  if(claim.length<12||claim.length>2500)return NextResponse.json({error:"Please provide the exact claim (12–2,500 characters)."}, {status:400});
  const ip=(req.headers.get("x-forwarded-for")||"unknown").split(",")[0].trim();
  const now=Date.now();const current=recent.get(ip);
  if(current&&now-current.start<3600000&&current.count>=4)return NextResponse.json({error:"Please wait before submitting another claim."},{status:429});
  recent.set(ip,!current||now-current.start>=3600000?{count:1,start:now}:{count:current.count+1,start:current.start});
  const claimType=allowedTypes.includes(String(body.claimType))?String(body.claimType):"other";
  const sourceUrl=safeUrl(body.sourceUrl);
  const supportingUrls=safeUrlList(body.supportingUrls);
  const submittedAt=new Date().toISOString();
  const record={
   claim,
   claimType,
   subject:String(body.subject||"").trim().slice(0,160),
   state:String(body.state||"").trim().slice(0,80),
   context:String(body.context||"").trim().slice(0,800),
   sourceUrl,
   supportingUrls,
   contact:String(body.contact||"").trim().slice(0,200),
   isTimeSensitive:Boolean(body.isTimeSensitive),
   status:"submitted",
   reviewStatus:"queued",
   reviewPriority:body.isTimeSensitive?"time-sensitive":"standard",
   researchNotes:"",
   reviewSummary:"",
   findings:"",
   verdict:"",
   evidence:[],
   createdAt:submittedAt,
   submittedAt,
   updatedAt:submittedAt,
   origin:"public-form",
   alertStatus:"pending",
  };
  const ref=await db.collection("claims").add(record);
  const alertStatus=await dispatchClaimAlert({
   event:"sabi.claim.created",
   claimId:ref.id,
   submittedAt,
   claimType,
   claim,
   subject:record.subject,
   state:record.state,
   context:record.context,
   sourceUrl,
   supportingUrls,
   isTimeSensitive:record.isTimeSensitive,
   reviewPriority:record.reviewPriority,
   newsroomPath:"/studio",
   privacy:"Submitter contact details are intentionally not included in webhook alerts.",
  });
  await ref.update({alertStatus,alertUpdatedAt:new Date().toISOString()});
  return NextResponse.json({ok:true,id:ref.id,alertStatus},{status:201});
 }catch(error){
  console.error("Claim submission failed",error instanceof Error?error.message:"unknown error");
  return NextResponse.json({error:"The submission service is temporarily unavailable. Please try again later."},{status:503});
 }
}
