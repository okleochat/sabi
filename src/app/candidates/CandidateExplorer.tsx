"use client";
import {useMemo,useState} from "react";
import Link from "next/link";
import {candidatePortraits} from "@/data/candidate-media";
type Candidate={id:string;displayName:string;officialName:string;partyCode:string;runningMateOfficialName?:string;ageAtPublication?:number};
export default function CandidateExplorer({candidates}:{candidates:Candidate[]}){
 const [query,setQuery]=useState("");const [party,setParty]=useState("all");
 const parties=useMemo(()=>Array.from(new Set(candidates.map(c=>c.partyCode))).sort(),[candidates]);
 const filtered=useMemo(()=>candidates.filter(c=>{
  const q=query.trim().toLowerCase();
  return (!q||[c.displayName,c.officialName,c.partyCode,c.runningMateOfficialName||""].some(x=>x.toLowerCase().includes(q)))&&(party==="all"||c.partyCode===party);
 }),[candidates,query,party]);
 return <>
 <div className="candidate-tools"><label className="search-field"><span>⌕</span><input aria-label="Search candidates" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search a name, party or running mate…"/></label>
 <label className="party-filter"><span>PARTY</span><select value={party} onChange={e=>setParty(e.target.value)}><option value="all">All parties</option>{parties.map(p=><option value={p} key={p}>{p}</option>)}</select></label>
 <div className="results-count">{filtered.length} / {candidates.length} TICKETS</div></div>
 <div className="candidate-grid">{filtered.map(c=>{
  const p=candidatePortraits[c.id];
  return <Link className="candidate-card" href={"/candidates/"+c.id} key={c.id}>
   <div className={"candidate-image "+(!p?"placeholder":"")}>{p?<img src={p.url} alt={p.alt}/>:<span className="candidate-initials">{c.displayName.split(" ").slice(0,2).map(x=>x[0]).join("")}</span>}
   {!p?<small>PORTRAIT SOURCE BEING VERIFIED</small>:null}
   <span className="candidate-number">{c.partyCode}</span></div>
   <div className="candidate-body"><span className="party-tag">{c.partyCode}</span><h3>{c.displayName}</h3>
   <p>Running mate: {c.runningMateOfficialName||"Not stated in INEC list"}</p>
   <div className="candidate-bottom"><span>OFFICIAL ROSTER</span><span>OPEN PROFILE ↗</span></div></div>
  </Link>;
 })}
 </div>
 {!filtered.length?<div className="empty-state">No matching ticket. Try another name or clear the party filter.</div>:null}
 </>;
}