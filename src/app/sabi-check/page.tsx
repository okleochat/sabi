import type {Metadata} from "next";
import Link from "next/link";
import ClaimForm from "./ClaimForm";
import ShareCard from "@/app/components/ShareCard";
import {getPublishedRecords} from "@/lib/data";
export const metadata:Metadata={title:"Sabi Check — No cap. Just receipts."};
export const dynamic="force-dynamic";
const impactLabels:Record<string,string>={positive:"Positive for subject",negative:"Negative for subject",mixed:"Mixed impact",neutral:"Neutral / factual",unclear:"Not assessed"};
function originLabel(origin:string){return origin==="reader-submission"?"Reader submission":origin==="sabi-research"?"Sabi newsroom research":"Origin not recorded";}
export default async function SabiCheckPage(){
 const records=await getPublishedRecords("factchecks");
 const latest=records.slice(0,3);
 return <div className="page-shell">
<section className="page-intro"><div className="eyebrow"><span/>THE VERIFICATION DESK / 002</div><h1>BEFORE YOU<br/>FORWARD IT.<br/>LET'S CHECK<br/>AM.</h1><p>A claim can travel faster than the truth. Send the exact statement, who or what it concerns, its original source and any supporting material. Submissions are structured into the newsroom queue; the newsroom checks the evidence before publication. The public archive separates reader submissions from claims Sabi independently researches.</p></section>
<section className="page-section"><ShareCard kind="SABI CHECK / CLAIM SUBMISSION" kicker="VERIFICATION DESK" title="No cap. Just receipts." summary="Submit a claim and its original source. Reader-submitted claims are published only after human editor approval. Sabi-origin research is clearly labelled and includes its evidence and limitations." details={[{label:"Review",value:"Human editor"},{label:"Submissions",value:"Private while in queue"},{label:"Published",value:"Only after approval"}]} path="/sabi-check"/></section><section className="page-section check-submit-layout"><div className="check-submit-intro"><div className="eyebrow">GOT SOMETHING TO CHECK?</div><h2>NO CAP.<br/><em>JUST RECEIPTS.</em></h2><div className="human-review-stamp">HUMAN<br/>REVIEW<br/>ONLY ✳</div><p>Your submission stays private in the editorial queue. Time-sensitive claims are flagged for triage. Where a newsroom alert webhook is configured, a new-submission alert is dispatched immediately; a human editor still approves reader-submitted checks.</p><a className="underlink" href="#latest-sabi-checks">SEE THE LATEST PUBLISHED CHECKS ↓</a><Link className="underlink" href="/fact-checks">OPEN THE FULL FACT-CHECK ARCHIVE ↗</Link><Link className="underlink" href="/polls">VIEW THE POLLING DESK ↗</Link></div><ClaimForm/></section>
<section className="page-section" id="latest-sabi-checks">
 <div className="section-head"><div><div className="eyebrow">THE PUBLIC FACT-CHECK FILE / {records.length} PUBLISHED</div><h2>THE LATEST<br/><em>CHECKS.</em></h2><p>Published reports from reader submissions and Sabi newsroom research, with verdicts, evidence and context kept together.</p></div><Link className="underlink" href="/fact-checks">VIEW ALL FACT-CHECKS ↗</Link></div>
 {latest.length?<div className="content-grid factcheck-grid">{latest.map((record,index)=>{
  const slug=String(record.slug||record.id||"");
  const impact=String(record.impact||"unclear");
  return <article className="content-card factcheck-card" key={slug||index}>
   <div className="eyebrow">{String(record.verdict||"Editorial review")} / {String(record.publishedAt||"Date not stated")}</div>
   <h3>{String(record.title||record.claim||"Published fact-check")}</h3>
   <p>{String(record.summary||record.findings||record.claim||"Open the report to review the evidence and editorial findings.")}</p>
   <div className="factcheck-tags">{record.subject?<span>{String(record.subject)}</span>:null}<span>{impactLabels[impact]||"Not assessed"}</span><span>{originLabel(String(record.origin||""))}</span></div>
   <Link href={"/fact-check/"+slug}>READ THE EVIDENCE ↗</Link>
  </article>;
 })}</div>:<div className="no-verdict-panel"><div className="eyebrow">THE FILE IS OPEN</div><h3>NO PUBLISHED FACT-CHECKS YET.</h3><p>We are accepting reader submissions and researching claims independently. A report appears here after publication. You can browse the archive for the complete record.</p><Link className="btn black" href="/fact-checks">OPEN THE FACT-CHECK ARCHIVE ↗</Link></div>}
 <p className="factcheck-taxonomy-note">Impact describes how a claim frames its subject, not whether the claim is true. The verdict is the separate evidence-based finding. Open each report to read its sources and limitations.</p>
</section>
<section className="verification-steps"><div className="eyebrow">THREE STEPS. NO SHORTCUTS.</div><div className="verification-grid"><div><b>01</b><h3>SUBMIT A CLAIM</h3><p>Send the exact wording, a link and context if you have it.</p></div><div><b>02</b><h3>EDITOR CHECKS SOURCES</h3><p>We look for primary documents, original statements and reliable corroboration.</p></div><div><b>03</b><h3>PUBLISH WITH RECEIPTS</h3><p>An editor approves the findings, verdict and evidence links before publication.</p></div></div></section>
</div>;
}
