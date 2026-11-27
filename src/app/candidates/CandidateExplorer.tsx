"use client";
import {useMemo,useState} from "react";
import Link from "next/link";
import {candidatePortraits} from "@/data/candidate-media";
type Candidate={id:string;displayName:string;officialName:string;partyCode:string;runningMateOfficialName?:string;ageAtPublication?:number;genderCode?:string;qualifications?:string;source?:{publishedAt?:string}};
export default function CandidateExplorer({candidates}:{candidates:Candidate[]}){
 const [query,setQuery]=useState("");const [party,setParty]=useState("all");const [gender,setGender]=useState("all");
 const parties=useMemo(()=>Array.from(new Set(candidates.map(c=>c.partyCode))).sort(),[candidates]);
 const filtered=useMemo(()=>candidates.filter(c=>{
  const q=query.trim().toLowerCase();
  const matchesQuery=!q||[c.displayName,c.officialName,c.partyCode,c.runningMateOfficialName||""].some(x=>x.toLowerCase().includes(q));
  const matchesParty=party==="all"||c.partyCode===party;
  const matchesGender=gender==="all"||c.genderCode===gender;
  return matchesQuery&&matchesParty&&matchesGender;
 }),[candidates,query,party,gender]);
 return <>
 <div className="candidate-tools">
  <label className="search-field"><span>⌕</span><input aria-label="Search candidates" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search a name, party or running mate…"/></label>
  <label className="party-filter"><span>PARTY</span><select value={party} onChange={e=>setParty(e.target.value)}><option value="all">All parties</option>{parties.map(p=><option value={p} key={p}>{p}</option>)}</select></label>
  <label className="party-filter"><span>GENDER</span><select value={gender} onChange={e=>setGender(e.target.value)}><option value="all">All</option><option value="F">Female</option><option value="M">Male</option></select></label>
  <div className="results-count">{filtered.length} / {candidates.length} TICKETS</div>
 </div>
 <div className="candidate-grid">{filtered.map(c=>{
  const p=candidatePortraits[c.id];
  return <Link className="candidate-card" href={"/candidates/"+c.id} key={c.id}>
   <div className={"candidate-image "+(!p?"placeholder":"")}>{p?<img src={p.url} alt={p.alt}/>:<span className="candidate-initials">{c.displayName.split(" ").slice(0,2).map(x=>x[0]).join("")}</span>}
   {p?<small>PHOTO: {p.credit} · {p.license}</small>:<small>PORTRAIT SOURCE BEING VERIFIED</small>}
   <span className="candidate-number">{c.partyCode}</span></div>
   <div className="candidate-body"><span className="party-tag">{c.partyCode}</span><h3>{c.displayName}</h3>
    <div className="candidate-card-facts"><span>{c.ageAtPublication?c.ageAtPublication+" YEARS ON INEC LIST":"AGE NOT STATED"}</span><span>{c.genderCode==="F"?"FEMALE":c.genderCode==="M"?"MALE":"GENDER NOT STATED"}</span></div>
    <p><b>RUNNING MATE</b><br/>{c.runningMateOfficialName||"Not stated in INEC list"}</p>
    <p><b>QUALIFICATIONS ON INEC FILE</b><br/>{c.qualifications||"Not stated"}</p>
    <div className="candidate-bottom"><span>INEC FINAL LIST / 31 OCT 2026</span><span>OPEN DOSSIER ↗</span></div>
   </div>
  </Link>;
 })}
 </div>
 {!filtered.length?<div className="empty-state">No matching ticket. Try another name or clear the filters.</div>:null}
 </>;
}
