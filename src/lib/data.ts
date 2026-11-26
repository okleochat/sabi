import seed from "../data/inec-presidential-candidates.json";
import { db } from "./firebase-admin";
export type Candidate={id:string;officialName:string;displayName:string;partyCode:string;runningMateOfficialName?:string;ageAtPublication?:number;genderCode?:string;qualifications?:string;runningMateQualifications?:string;source?:{title:string;publisher:string;publishedAt:string;url:string;relatedUrl?:string;accessedAt?:string};recordStatus?:string};
const candidateSeed=(seed as {candidates:Candidate[]}).candidates;
export async function getCandidates():Promise<Candidate[]>{
 try{
  const collection=db.collection("candidates");const current=await collection.limit(1).get();
  if(current.empty&&candidateSeed.length){const batch=db.batch();for(const c of candidateSeed)batch.set(collection.doc(c.id),{...c,published:true,updatedAt:new Date().toISOString()});await batch.commit();}
  const snapshot=await collection.get();
  if(!snapshot.empty)return snapshot.docs.map(doc=>({...doc.data(),id:doc.id} as Candidate)).filter(c=>(c as Candidate&{published?:boolean}).published!==false).sort((a,b)=>a.officialName.localeCompare(b.officialName));
 }catch(error){console.error("Candidate database unavailable; using verified seed data.",error);}
 return candidateSeed.slice().sort((a,b)=>a.officialName.localeCompare(b.officialName));
}
export async function getPublishedRecords(name:"articles"|"factchecks"):Promise<Array<Record<string,any>>>{
 try{const snapshot=await db.collection(name).where("published","==",true).get();return snapshot.docs.map(doc=>({...doc.data(),id:doc.id} as Record<string,any>));}
 catch(error){console.error("Could not load "+name+" from Firestore.",error);return [];}
}
export async function getCandidate(id:string){return (await getCandidates()).find(c=>c.id===id);}
