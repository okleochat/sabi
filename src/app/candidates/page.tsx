import type {Metadata} from "next";
import {getCandidates} from "@/lib/data";
import CandidateExplorer from "./CandidateExplorer";
import ShareCard from "@/app/components/ShareCard";
export const metadata:Metadata={title:"Candidate explorer"};
export const dynamic="force-dynamic";
export default async function CandidatesPage(){
 const candidates=await getCandidates();
 return <div className="page-shell">
 <section className="page-intro"><div className="eyebrow"><span/>THE 2027 PRESIDENTIAL RACE</div><h1>MEET THE<br/>PEOPLE ON<br/>THE BALLOT.</h1><p>Start with the names. Check the ticket. Open a profile. These 18 presidential tickets were captured from INEC's published final list. We are building out the biographies and public records with sources attached.</p></section>
 <section className="page-section"><ShareCard kind="2027 PRESIDENTIAL RACE" kicker="CANDIDATE EXPLORER" title="Meet the people on the ballot." summary="Explore presidential tickets and compare official particulars captured from INEC’s published final list." details={[{label:"Presidential tickets",value:String(candidates.length)},{label:"Source",value:"INEC final list"},{label:"Editorial stance",value:"No endorsements"}]} source="INEC final presidential list" path="/candidates"/><div className="section-head"><div><div className="eyebrow">THE INEC ROSTER / 001</div><h2>{candidates.length} PRESIDENTIAL TICKETS.</h2></div><div className="eyebrow">SOURCE: INEC / OCT 2026</div></div>
 <CandidateExplorer candidates={candidates}/>
 <p className="source-note">Names, ticket pairings, party codes and listed particulars are transcribed from INEC's final presidential candidate list. These entries are not endorsements or independent assessments. The published PDF also contains a separate court-order entry with blank candidate-name fields; Sabi does not invent names for that entry. <a href="https://inecnigeria.org/documents/uploads/2026/10/b5af9099-864c-4d5e-924d-e1a2c771c529-final-list-presidential.pdf" target="_blank" rel="noreferrer">OPEN THE ORIGINAL INEC LIST ↗</a></p>
 </section></div>;
}