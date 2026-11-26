import seed from "../data/inec-presidential-candidates.json";
import {starterArticles} from "../data/articles";
import {db} from "./firebase-admin";

export type Candidate={id:string;officialName:string;displayName:string;partyCode:string;runningMateOfficialName?:string;ageAtPublication?:number;genderCode?:string;qualifications?:string;runningMateQualifications?:string;source?:{title:string;publisher:string;publishedAt:string;url:string;relatedUrl?:string;accessedAt?:string};recordStatus?:string};
const candidateSeed=(seed as {candidates:Candidate[]}).candidates;

export async function getCandidates():Promise<Candidate[]>{
 try{
  const collection=db.collection("candidates");
  const refs=candidateSeed.map(c=>collection.doc(c.id));
  const snapshots=await db.getAll(...refs);
  const batch=db.batch();let writes=0;
  snapshots.forEach((snap,i)=>{if(!snap.exists){batch.set(refs[i],{...candidateSeed[i],published:true,updatedAt:new Date().toISOString()});writes++;}});
  if(writes)await batch.commit();
  const snapshot=await collection.get();
  if(!snapshot.empty)return snapshot.docs.map(doc=>({...doc.data(),id:doc.id} as Candidate))
   .filter(c=>(c as Candidate&{published?:boolean}).published!==false)
   .sort((a,b)=>a.officialName.localeCompare(b.officialName));
 }catch(error){console.error("Candidate database unavailable; using verified seed data.",error);}
 return candidateSeed.slice().sort((a,b)=>a.officialName.localeCompare(b.officialName));
}

async function seedArticles(){
 const collection=db.collection("articles");
 const refs=starterArticles.map(article=>collection.doc(article.id));
 const snapshots=await db.getAll(...refs);
 const batch=db.batch();let writes=0;
 snapshots.forEach((snap,i)=>{
  if(!snap.exists){batch.set(refs[i],{...starterArticles[i],published:true,status:"published",publishedAt:starterArticles[i].publishedAt,createdAt:new Date().toISOString()});writes++;}
 });
 if(writes)await batch.commit();
}

export async function getPublishedRecords(name:"articles"|"factchecks"):Promise<Array<Record<string,any>>>{
 try{
  if(name==="articles")await seedArticles();
  const snapshot=await db.collection(name).where("published","==",true).get();
  const records=snapshot.docs.map(doc=>({...doc.data(),id:doc.id} as Record<string,any>));
  return records.sort((a,b)=>String(b.publishedAt||"").localeCompare(String(a.publishedAt||"")));
 }catch(error){
  console.error("Could not load "+name+" from Firestore.",error);
  return name==="articles"?starterArticles.map(article=>({...article,published:true})): [];
 }
}

export async function getCandidate(id:string){return (await getCandidates()).find(c=>c.id===id);}
