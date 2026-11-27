import type {Metadata} from "next";
import Link from "next/link";
import {getPublishedRecords} from "@/lib/data";
import ShareCard from "@/app/components/ShareCard";
import FactCheckLibrary from "./FactCheckLibrary";
export const metadata:Metadata={title:"Sabi Check — Fact-check library"};
export const dynamic="force-dynamic";
export default async function FactChecksPage(){
 const records=await getPublishedRecords("factchecks");
 return <div className="page-shell">
  <section className="page-intro"><div className="eyebrow"><span/>THE VERIFICATION DESK / 002</div><h1>SABI<br/>CHECK.</h1><p>Before you forward it, post it, or believe it — let's check am. No cap. Just receipts. Browse verified claims by person, impact, verdict and whether the claim came from a reader or Sabi's own newsroom research.</p><div className="hero-buttons"><Link className="btn black" href="/sabi-check">SUBMIT A CLAIM ↗</Link></div></section>
  <section className="page-section"><ShareCard kind="SABI CHECK / VERIFICATION DESK" kicker="FACT-CHECK LIBRARY" title="Before you forward it, check am." summary="Published checks show the evidence and how each claim entered Sabi. Reader submissions require human editor approval; newsroom research is separately identified." details={[{label:"Published checks",value:String(records.length)},{label:"Review",value:"Editorial record"},{label:"Evidence",value:"Source-linked"}]} path="/fact-checks"/><div className="section-head"><div><div className="eyebrow">THE PUBLIC FACT-CHECK FILE</div><h2>PUBLISHED<br/>WITH RECEIPTS.</h2></div></div>
   {records.length?<FactCheckLibrary records={records as any}/>:<div className="no-verdict-panel"><div className="eyebrow">THE FILE IS OPEN</div><h3>NO PUBLISHED FACT-CHECKS YET.</h3><p>We are accepting reader submissions and researching claims independently. A fact-check appears here only after its evidence, reasoning and verdict have been reviewed by an editor.</p><Link className="btn black" href="/sabi-check">SEND US A CLAIM ↗</Link></div>}
  </section>
  <section className="verification-steps"><div className="eyebrow">HOW THE CHECK WORKS</div><div className="verification-grid"><div><b>01</b><h3>SUBMIT OR DISCOVER</h3><p>Claims can be sent by readers or identified independently by Sabi's newsroom.</p></div><div><b>02</b><h3>EDITOR CHECKS SOURCES</h3><p>We assess exact wording, original documents, context, corroboration and counter-evidence.</p></div><div><b>03</b><h3>PUBLISH WITH RECEIPTS</h3><p>An editor approves the findings, verdict and citations before public release.</p></div></div></section>
 </div>;
}
