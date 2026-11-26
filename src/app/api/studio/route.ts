import {NextRequest,NextResponse} from "next/server";
import {getAuth} from "firebase-admin/auth";
import {app,db} from "@/lib/firebase-admin";
export const runtime="nodejs";
const statuses=["submitted","triaged","researching","editor_review","closed"];
async function requireEditor(req:NextRequest){
 const header=req.headers.get("authorization")||"";
 const token=header.startsWith("Bearer ")?header.slice(7):"";
 if(!token)throw new Error("AUTH_REQUIRED");
 const decoded=await getAuth(app).verifyIdToken(token);
 const ref=await db.collection("editors").doc(decoded.uid).get();
 if(!ref.exists)throw new Error("EDITOR_PENDING:"+decoded.uid+":"+String(decoded.email||""));
 const editor=ref.data()||{};
 if(!["admin","editor","factchecker"].includes(String(editor.role||"")))throw new Error("EDITOR_ROLE_MISSING");
 return {uid:decoded.uid,email:decoded.email||"",role:editor.role};
}
export async function GET(req:NextRequest){
 try{
  const editor=await requireEditor(req);
  const snap=await db.collection("claims").orderBy("createdAt","desc").limit(100).get();
  const claims=snap.docs.map(d=>({id:d.id,...d.data()}));
  return NextResponse.json({editor,claims});
 }catch(error){
  const message=error instanceof Error?error.message:"UNKNOWN";
  if(message.startsWith("EDITOR_PENDING:")){const [,uid,email]=message.split(":");return NextResponse.json({pending:true,uid,email},{status:403});}
  if(message==="AUTH_REQUIRED"||message.includes("auth")||message.includes("token"))return NextResponse.json({error:"Please sign in again."},{status:401});
  if(message==="EDITOR_ROLE_MISSING")return NextResponse.json({error:"Your account does not have an editor role."},{status:403});
  console.error("Studio access failed",error);return NextResponse.json({error:"Studio is temporarily unavailable."},{status:503});
 }
}
export async function POST(req:NextRequest){
 try{
  const editor=await requireEditor(req);
  const body=await req.json();
  if(body.action!=="update-claim")return NextResponse.json({error:"Unsupported action."},{status:400});
  const id=String(body.id||"");const status=String(body.status||"");
  if(!id||!statuses.includes(status))return NextResponse.json({error:"Invalid claim or status."},{status:400});
  await db.collection("claims").doc(id).update({status,updatedAt:new Date().toISOString(),updatedBy:editor.uid});
  return NextResponse.json({ok:true});
 }catch(error){
  const message=error instanceof Error?error.message:"UNKNOWN";
  if(message.startsWith("EDITOR_PENDING:"))return NextResponse.json({error:"Editor access is not approved."},{status:403});
  if(message==="AUTH_REQUIRED"||message.includes("auth")||message.includes("token"))return NextResponse.json({error:"Please sign in again."},{status:401});
  if(message==="EDITOR_ROLE_MISSING")return NextResponse.json({error:"Your account does not have an editor role."},{status:403});
  console.error("Studio update failed",error);return NextResponse.json({error:"Could not update the claim."},{status:503});
 }
}