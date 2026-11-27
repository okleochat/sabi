import {NextRequest,NextResponse} from "next/server";
import {getAuth} from "firebase-admin/auth";
import {FieldValue} from "firebase-admin/firestore";
import {app,db} from "@/lib/firebase-admin";
export const runtime="nodejs";
const statuses=["submitted","triaged","researching","editor_review","closed"];
const verdicts=["True","Mostly true","Half true","Misleading","Mostly false","False","Unproven","Outdated","Insufficient evidence"];
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
async function saveHistory(id:string,event:Record<string,unknown>){
 await db.collection("claims").doc(id).update({reviewHistory:FieldValue.arrayUnion(event)});
}
export async function GET(req:NextRequest){
 try{
  const editor=await requireEditor(req);
  const snap=await db.collection("claims").orderBy("createdAt","desc").limit(150).get();
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
   await claimRef.update({
    status,
    reviewStatus:status,
    verdict,
    researchNotes:String(body.researchNotes||"").trim().slice(0,8000),
    reviewSummary:String(body.reviewSummary||"").trim().slice(0,2500),
    findings:String(body.findings||"").trim().slice(0,12000),
    evidence,
    updatedAt:now,
    updatedBy:editor.uid,
  });
   await saveHistory(id,{action:"research-saved",status,verdict,at:now,by:editor.uid,evidenceCount:evidence.length});
   return NextResponse.json({ok:true});
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
   const baseSlug=slugify(title);let slug=baseSlug;let suffix=2;
   while((await db.collection("factchecks").doc(slug).get()).exists){slug=baseSlug+"-"+suffix;suffix++;}
   const publishedAt=now.slice(0,10);
   const factcheck={
    slug,title,claim:String(claimSnap.data()?.claim||""),
    summary,findings,verdict,evidence,
    published:true,status:"published",
    publishedAt,createdAt:now,updatedAt:now,
    sourceClaimId:id,publishedBy:editor.uid,reviewedBy:editor.uid,
    reviewStandard:"human-editor-approved",
  };
   await db.collection("factchecks").doc(slug).set(factcheck);
   await claimRef.update({status:"closed",reviewStatus:"published",publishedAt,factcheckSlug:slug,publishedBy:editor.uid,updatedAt:now,updatedBy:editor.uid});
   await saveHistory(id,{action:"factcheck-published",slug,verdict,at:now,by:editor.uid,evidenceCount:evidence.length});
   return NextResponse.json({ok:true,slug,url:"/fact-check/"+slug},{status:201});
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
