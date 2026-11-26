import type { Metadata } from "next";
import { getCandidates } from "@/lib/data";
export const metadata:Metadata={title:"Political parties"};
export const dynamic="force-dynamic";
export default async function PartiesPage(){
 const candidates=await getCandidates();const parties=Array.from(new Set(candidates.map(c=>c.partyCode))).sort();
 return <div className="wrap"><section className="page-intro"><div className="kicker">The political landscape</div><h1>Parties behind<br/>the presidential tickets.</h1><p>Party codes below are shown as recorded in INEC’s published presidential candidate list. Full party histories, leadership and policy positions will be added only from verifiable sources.</p></section>
 <section className="section"><div className="section-head"><div><div className="eyebrow">INEC-listed parties</div><h2>{parties.length} party codes</h2></div></div><div className="content-grid">{parties.map(code=>{const rows=candidates.filter(c=>c.partyCode===code);return <article className="content-card" key={code}><span className="party-tag">{code}</span><h3>{code}</h3><p>{rows.length} presidential ticket{rows.length===1?"":"s"} in the captured list.</p><p style={{marginTop:12}}>{rows.map(c=>c.displayName).join(", ")}</p></article>;})}</div></section></div>;
}