import {NextRequest,NextResponse} from "next/server";
import {db} from "@/lib/firebase-admin";
export const runtime="nodejs";
const recent=new Map<string,{count:number;start:number}>();
export async function POST(req:NextRequest){
 try{
  const body=await req.json();const claim=String(body.claim||"").trim();
  if(String(body.website||"").trim())return NextResponse.json({ok:true},{status:200});
  if(claim.length<12||claim.length>2000)return NextResponse.json({error:"Please provide a claim between 12 and 2,000 characters."},{status:400});
  const ip=(req.headers.get("x-forwarded-for")||"unknown").split(",")[0].trim();const now=Date.now();const current=recent.get(ip);
  if(current&&now-current.start<3600000&&current.count>=4)return NextResponse.json({error:"Please wait before submitting another claim."},{status:429});
  recent.set(ip,!current||now-current.start>=3600000?{count:1,start:now}:{count:current.count+1,start:current.start});
  const ref=await db.collection("claims").add({claim,context:String(body.context||"").slice(0,500),sourceUrl:String(body.sourceUrl||"").slice(0,1500),contact:String(body.contact||"").slice(0,200),status:"submitted",createdAt:new Date().toISOString(),origin:"public-form"});
  return NextResponse.json({ok:true,id:ref.id},{status:201});
 }catch(error){console.error("Claim submission failed",error);return NextResponse.json({error:"The submission service is temporarily unavailable. Please try again later."},{status:503});}
}