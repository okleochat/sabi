"use client";
import {useMemo,useState} from "react";
import Link from "next/link";
type RecordItem={id:string;slug?:string;title?:string;claim?:string;summary?:string;findings?:string;verdict?:string;publishedAt?:string;subject?:string;subjectKey?:string;impact?:string;origin?:string;originLabel?:string;evidence?:Array<{url?:string;publisher?:string}>;claimType?:string};
const impactLabel:Record<string,string>={positive:"Positive for subject",negative:"Negative for subject",mixed:"Mixed impact",neutral:"Neutral / factual",unclear:"Not assessed"};
export default function FactCheckLibrary({records}:{records:RecordItem[]}){
 const [query,setQuery]=useState(""),[subject,setSubject]=useState("all"),[impact,setImpact]=useState("all"),[origin,setOrigin]=useState("all"),[verdict,setVerdict]=useState("all");
 const subjects=useMemo(()=>Array.from(new Map(records.filter(r=>r.subjectKey||r.subject).map(r=>[String(r.subjectKey||r.subject),String(r.subject||r.subjectKey)])).entries()),[records]);
 const verdicts=useMemo(()=>Array.from(new Set(records.map(r=>String(r.verdict||"Unrated")).filter(Boolean))).sort(),[records]);
 const visible=useMemo(()=>records.filter(r=>{
  const source=(r.evidence||[]).map(e=>e.publisher||e.url||"").join(" ");
  const haystack=[r.title,r.claim,r.summary,r.subject,r.findings,source].join(" ").toLowerCase();
  const recordOrigin=r.origin==="reader-submission"?"reader-submission":"sabi-research";
  return (!query||haystack.includes(query.toLowerCase()))&&(subject==="all"||String(r.subjectKey||r.subject)===subject)&&(impact==="all"||(r.impact||"unclear")===impact)&&(origin==="all"||recordOrigin===origin)&&(verdict==="all"||(r.verdict||"Unrated")===verdict);
 }),[records,query,subject,impact,origin,verdict]);
 return <>
  <div className="factcheck-filter-panel">
   <label>Search the archive<input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search a claim, person, phrase or source"/></label>
   <label>Person / subject<select value={subject} onChange={e=>setSubject(e.target.value)}><option value="all">All subjects</option>{subjects.map(([key,label])=><option key={key} value={key}>{label}</option>)}</select></label>
   <label>Impact on subject<select value={impact} onChange={e=>setImpact(e.target.value)}><option value="all">All impact types</option>{Object.entries(impactLabel).map(([key,label])=><option key={key} value={key}>{label}</option>)}</select></label>
   <label>How it entered Sabi<select value={origin} onChange={e=>setOrigin(e.target.value)}><option value="all">All sources</option><option value="sabi-research">Found by Sabi newsroom</option><option value="reader-submission">Submitted by reader</option></select></label>
   <label>Verdict<select value={verdict} onChange={e=>setVerdict(e.target.value)}><option value="all">All verdicts</option>{verdicts.map(v=><option value={v} key={v}>{v}</option>)}</select></label>
   <span className="factcheck-results-count">{visible.length} of {records.length} published checks</span>
  </div>
  <p className="factcheck-taxonomy-note">Impact describes whether the claim frames the subject favourably or unfavourably. The verdict is a separate assessment of whether the claim is supported by evidence. Neither label substitutes for the full fact-check.</p>
  {visible.length?<div className="content-grid factcheck-grid">{visible.map((r,i)=>{
   const url="/fact-check/"+(r.slug||r.id);
   const recordOrigin=r.origin==="reader-submission"?"Reader submission":"Sabi newsroom research";
   return <article className="content-card factcheck-card" key={r.id||i}>
    <div className="eyebrow">{r.verdict||"Editorial review"} / {r.publishedAt||"Date not stated"}</div>
    <h3>{r.title||r.claim}</h3>
    <p>{r.summary||""}</p>
    <div className="factcheck-tags">{r.subject?<span>{r.subject}</span>:null}<span className={"impact-tag impact-"+(r.impact||"unclear")}>{impactLabel[r.impact||"unclear"]||"Not assessed"}</span><span>{recordOrigin}</span></div>
    <Link href={url}>READ THE EVIDENCE ↗</Link>
   </article>;
  })}</div>:<div className="empty-state">No published checks match those filters. Try broadening your search or submit a claim for review.</div>}
 </>;
}
