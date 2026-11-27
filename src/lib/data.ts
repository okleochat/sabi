import seed from "../data/inec-presidential-candidates.json";
import {starterArticles} from "../data/articles";
import {starterFactchecks} from "../data/fact-checks";
import {approvedClaimFactchecks} from "../data/approved-claim-factchecks";
import {reviewedClaimResearch} from "../data/claim-research-updates";
import {claimFingerprint} from "./claim-utils";
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

async function seedFactchecks(){
 const collection=db.collection("factchecks");
 const records=[...starterFactchecks,...approvedClaimFactchecks];
 const refs=records.map(record=>collection.doc(String(record.id)));
 const factSnapshots=await db.getAll(...refs);
 const batch=db.batch();let writes=0;
 factSnapshots.forEach((snap,index)=>{
  if(!snap.exists){
   const record=records[index];
   batch.set(refs[index],{...record,published:true,status:"published",createdAt:record.createdAt||new Date().toISOString(),updatedAt:record.updatedAt||new Date().toISOString()});
   writes++;
  }
 });
 const approved=approvedClaimFactchecks;
 if(approved.length){
  const claimRefs=approved.map(record=>db.collection("claims").doc(String(record.sourceClaimId||record.id)));
  const fingerprints=approved.map(record=>String(record.claimFingerprint||claimFingerprint(record.claim||"")));
  const indexRefs=fingerprints.map(fingerprint=>db.collection("claimFingerprints").doc(fingerprint));
  const [claimSnapshots,indexSnapshots]=await Promise.all([
   db.getAll(...claimRefs),
   db.getAll(...indexRefs)
  ]);
  approved.forEach((record,index)=>{
   const claimRef=claimRefs[index];
   const source=reviewedClaimResearch[index];
   const fingerprint=fingerprints[index];
   const publicationState={
    claimFingerprint:fingerprint,
    status:"closed",
    reviewStatus:"published",
    reviewStandard:"human-editor-approved",
    verdictStatus:"approved",
    verdict:record.verdict,
    assessmentType:record.assessmentType,
    factcheckSlug:record.slug,
    publishedAt:record.publishedAt,
    reviewedByRole:"owner-editor",
    updatedAt:record.updatedAt
   };
   if(!claimSnapshots[index].exists){
    batch.set(claimRef,{...source,...publicationState,origin:"sabi-research",originLabel:"Sabi newsroom research"});
    writes++;
   }else{
    batch.set(claimRef,publicationState,{merge:true});
    writes++;
   }
   const indexSnap=indexSnapshots[index];
   if(!indexSnap.exists||String(indexSnap.data()?.claimId||"")===String(record.sourceClaimId||record.id)){
    batch.set(indexRefs[index],{
     fingerprint,
     claimId:String(record.sourceClaimId||record.id),
     queueStatus:"published",
     factcheckSlug:record.slug,
     origin:"sabi-research",
     subjectKey:record.subjectKey||"",
     updatedAt:record.updatedAt
    },{merge:true});
    writes++;
   }
  });
 }
 if(writes)await batch.commit();
}

export async function getPublishedRecords(name:"articles"|"factchecks"):Promise<Array<Record<string,any>>>{
 try{
  if(name==="articles")await seedArticles();
  if(name==="factchecks")await seedFactchecks();
  const snapshot=await db.collection(name).where("published","==",true).get();
  const records=snapshot.docs.map(doc=>({...doc.data(),id:doc.id} as Record<string,any>));
  return records.sort((a,b)=>String(b.publishedAt||"").localeCompare(String(a.publishedAt||"")));
 }catch(error){
  console.error("Could not load "+name+" from Firestore.",error);
  return name==="articles"?starterArticles.map(article=>({...article,published:true})):[...starterFactchecks,...approvedClaimFactchecks].map(record=>({...record,published:true}));
 }
}

export async function getCandidate(id:string){return (await getCandidates()).find(c=>c.id===id);}
