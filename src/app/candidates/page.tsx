import type { Metadata } from "next";
import Link from "next/link";
import { getCandidates } from "@/lib/data";
export const metadata:Metadata={title:"Presidential candidates"};
export const dynamic="force-dynamic";
export default async function CandidatesPage(){
 const candidates=await getCandidates();
 return <div className="wrap">
 <section className="page-intro"><div className="kicker">The 2027 presidential race</div><h1>Know who is<br/>asking for your vote.</h1><p>A directory of presidential tickets captured from the Independent National Electoral Commission’s published final list. Profiles will be expanded as additional information is verified.</p></section>
 <section className="section"><div className="section-head"><div><div className="eyebrow">Official source roster</div><h2>{candidates.length} presidential tickets</h2></div><span className="eyebrow">Source: INEC</span></div>
 <div className="candidate-grid">{candidates.map(c=><Link className="candidate-card" href={"/candidates/"+c.id} key={c.id}>
 <div className="portrait"><span className="portrait-initials">{c.displayName.split(" ").slice(0,2).map(x=>x[0]).join("")}</span><span className="portrait-note">Portrait awaiting source verification</span></div>
 <div className="card-body"><span className="party-tag">{c.partyCode}</span><h3>{c.displayName}</h3><div className="card-sub">Presidential candidate</div>
 <div className="card-meta"><div><span>Running mate</span><br/><strong>{c.runningMateOfficialName||"Not stated in source"}</strong></div><div><span>Age on INEC list</span><br/><strong>{c.ageAtPublication??"Not stated"}</strong></div></div><div className="text-link">Open profile ↗</div></div>
 </Link>)}</div>
 <p className="source-note">Names, ticket pairings, party codes and listed particulars are transcribed from INEC’s final presidential candidate list. They are not endorsements or independent assessments. The published document also contains a separate court-order entry without candidate names; Sabi does not invent names for that entry. <a href="https://inecnigeria.org/documents/uploads/2026/10/b5af9099-864c-4d5e-924d-e1a2c771c529-final-list-presidential.pdf" target="_blank" rel="noreferrer">Open INEC source ↗</a></p>
 </section></div>;
}