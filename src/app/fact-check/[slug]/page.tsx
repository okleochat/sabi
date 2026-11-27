import type {Metadata} from "next";
import Link from "next/link";
import {notFound} from "next/navigation";
import {getPublishedRecords} from "@/lib/data";
import ShareCard from "@/app/components/ShareCard";
export const dynamic="force-dynamic";
const impactLabels:Record<string,string>={positive:"Positive for subject",negative:"Negative for subject",mixed:"Mixed impact",neutral:"Neutral / factual",unclear:"Not assessed"};
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const rows=await getPublishedRecords("factchecks");const row=rows.find((x:any)=>x.slug===slug||x.id===slug);return {title:row?.title||"Sabi fact-check"};}
export default async function FactCheckPage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const rows=await getPublishedRecords("factchecks");const r=rows.find((x:any)=>x.slug===slug||x.id===slug);if(!r)notFound();
 const evidence=Array.isArray(r.evidence)?r.evidence:[],origin=r.origin==="reader-submission"?"Reader submission":r.origin==="sabi-research"?"Sabi newsroom research":"Origin not recorded";
 return <article>
  <section className="story-hero"><div className="story-hero-inner"><div className="story-byline">SABI CHECK / PUBLISHED FACT-CHECK</div><h1>{r.title||r.claim}</h1><p>{r.summary||""}</p><div className="verdict-stamp">{r.verdict||"FINDING NOT RECORDED"}</div></div></section>
  <div className="story-reading">
   <ShareCard kind="SABI CHECK / FACT-CHECK" kicker="CLAIM REVIEW" title={r.title||r.claim} summary={r.summary||r.findings||""} details={[{label:"Editorial finding",value:r.verdict||"Not recorded"},{label:"Assessment type",value:r.assessmentType||"Factual claim"},{label:"Subject",value:r.subject||"Not classified"},{label:"Impact",value:impactLabels[r.impact||"unclear"]||"Not assessed"},{label:"Origin",value:origin},{label:"Published",value:r.publishedAt||"Date not stated"}]} source="Evidence links on the fact-check page" path={"/fact-check/"+r.slug}/>
   <div className="factcheck-detail-tags">{r.subject?<span>SUBJECT / {r.subject}</span>:null}{r.assessmentType?<span>ASSESSMENT / {r.assessmentType}</span>:null}<span>IMPACT / {impactLabels[r.impact||"unclear"]||"Not assessed"}</span><span>ORIGIN / {origin}</span></div>
   <p className="factcheck-taxonomy-note">Impact describes how the claim frames its subject, not whether the claim is true. The assessment type defines what is being checked. A confirmed campaign pledge or legal filing does not prove delivery or establish the truth of the underlying allegation.</p>
   {r.claimSource?<p className="factcheck-claim-source">CLAIM SOURCE / {r.claimSource}</p>:null}
   <div className="story-breadcrumb"><Link href="/fact-checks">← FACT-CHECK LIBRARY</Link><span>/</span><span>{r.publishedAt||""}</span></div>
   <div className="story-body">{r.findings?<p>{r.findings}</p>:<p>No findings text is attached to this record.</p>}</div>
   <div className="story-sources"><h2>CHECK THE RECEIPTS.</h2>{evidence.length?<ol>{evidence.map((s:any,i:number)=><li key={i}><a href={s.url||s} target="_blank" rel="noreferrer">{s.title||s.url||s} ↗</a>{s.publisher?" — "+s.publisher:""}</li>)}</ol>:<p className="notice">No evidence links are attached to this record.</p>}<Link className="btn black" href="/sabi-check">SUBMIT ANOTHER CLAIM ↗</Link></div>
  </div>
 </article>;
}
