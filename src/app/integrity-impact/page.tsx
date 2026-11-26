import type {Metadata} from "next";
import Link from "next/link";
import {politicianSeeds} from "@/data/politicians";
import {politicianPortraits} from "@/data/politician-media";
import {getPublicRecordIndicators,getPublicRecordScores} from "@/data/public-records";
import {publicRecordMethodology} from "@/lib/score-methodology";
import ShareCard from "@/app/components/ShareCard";

export const metadata:Metadata={title:"Integrity & Impact | Sabi Public Records"};

export default function IntegrityImpactPage(){
 const governors=politicianSeeds.filter(p=>p.office==="Governor");
 const president=politicianSeeds.find(p=>p.office==="President");
 const fct=politicianSeeds.find(p=>p.office==="FCT Minister");
 return <div className="page-shell">
  <section className="page-intro">
   <div className="eyebrow"><span/>SABI INTELLIGENCE / PUBLIC RECORD INDEX</div>
   <h1>THE PEOPLE.<br/>THE PROMISES.<br/>THE PROOF.</h1>
   <p>Explore what public records actually say about the people in office: revenue, budgets, public outcomes, decisions and commitments. Every figure links to its source, reporting period and limitations.</p>
  </section>
  <section className="page-section">
   <div className="section-head">
    <div><div className="eyebrow">THE PUBLIC RECORD / 2026</div><h2>{governors.length} GOVERNORS. 1 PRESIDENT. 1 FCT MINISTER.</h2></div>
    <div className="eyebrow">SOURCE-LINKED DIRECTORY</div>
   </div>
   <ShareCard kind="SABI PUBLIC RECORD INDEX" kicker="THE PEOPLE. THE PROMISES. THE PROOF." title="Nigeria’s public officeholders" summary="An evidence-first directory of state and national public records, with source links, periods and disclosed data gaps." details={[{label:"Governors",value:String(governors.length)},{label:"President",value:"1"},{label:"FCT Minister",value:"1"},{label:"Indicator datasets",value:"4"}]} path="/integrity-impact"/>
   <div className="no-verdict-panel">
    <div className="eyebrow" style={{color:"#c5ff43"}}>THE DATA DESK / FIRST RELEASE</div>
    <h3>NO MYSTERY NUMBERS. OPEN SOURCES. VISIBLE GAPS.</h3>
    <p>This release publishes the underlying observations rather than converting unlike measures into a single political rating. Available records include NBS 2025 internally generated revenue, BudgIT's FY2025 education and health budget implementation tables, and NDHS 2023–24 childhood vaccination survey estimates. National inflation and GDP indicators are shown separately for the President. Each profile identifies missing datasets and the publisher's stated reason where known.</p>
    <p><a href="https://microdata.nigerianstat.gov.ng/index.php/catalog/170/related-materials" target="_blank" rel="noreferrer">NBS 2025 IGR report ↗</a> · <a href="https://budgit.org/wp-content/uploads/2026/11/States26SMDF1.pdf" target="_blank" rel="noreferrer">BudgIT State of States 2026 ↗</a> · <a href="https://budgit.org/wp-content/uploads/2026/04/HealthFinancingReport__.pdf" target="_blank" rel="noreferrer">BudgIT Health Financing 2026 ↗</a> · <a href="https://fmohconnect.gov.ng/wp-content/uploads/2025/05/The-State-of-Health-of-the-Nation-Report-2024.pdf" target="_blank" rel="noreferrer">NDHS / State of Health report ↗</a></p>
   </div>
   <div className="content-grid" style={{marginTop:22}}>
    <article className="content-card"><div className="eyebrow">01 / REVENUE</div><h3>2025 internally generated revenue</h3><p>NBS figures for all 36 states and the FCT, shown in nominal naira billions and rounded to the nearest ₦0.1bn. This is not a per-capita measure.</p><a href="https://microdata.nigerianstat.gov.ng/index.php/catalog/170/related-materials" target="_blank" rel="noreferrer">OPEN NBS SOURCE ↗</a></article>
    <article className="content-card"><div className="eyebrow">02 / EDUCATION</div><h3>FY2025 budget implementation</h3><p>BudgIT's published education expenditure execution table covers 35 states. Rivers is omitted because the report lacked the required state financial reports at publication.</p><a href="https://budgit.org/wp-content/uploads/2026/11/States26SMDF1.pdf" target="_blank" rel="noreferrer">OPEN BUDGIT SOURCE ↗</a></article>
    <article className="content-card"><div className="eyebrow">03 / HEALTH</div><h3>Budget execution & vaccination</h3><p>Health budget execution is available for 34 states. NDHS 2023–24 reports the share of children aged 12–23 months fully vaccinated for basic antigens in all states and the FCT.</p><a href="https://fmohconnect.gov.ng/wp-content/uploads/2025/05/The-State-of-Health-of-the-Nation-Report-2024.pdf" target="_blank" rel="noreferrer">OPEN HEALTH OUTCOME SOURCE ↗</a></article>
   </div>
   <div className="candidate-grid" style={{marginTop:24}}>
    {politicianSeeds.map((p,i)=>{
     const portrait=politicianPortraits[p.id];
     const record=getPublicRecordIndicators(p);
     const scorecard=getPublicRecordScores(p);
     const periods=[...new Set(record.indicators.map(x=>x.period))];
     return <Link className="candidate-card" href={"/integrity-impact/"+p.id} key={p.id}>
      <div className={"candidate-image "+(!portrait?"placeholder":"")}>
       {portrait?<img src={portrait.url} alt={portrait.alt}/>:<span className="candidate-initials">{p.name.split(" ").map(x=>x[0]).slice(0,2).join("")}</span>}
       <small>{portrait?"PHOTO: "+portrait.credit+" · "+portrait.license:"PORTRAIT SOURCE BEING VERIFIED"}</small>
       <span className="candidate-number">{String(i+1).padStart(2,"0")}</span>
      </div>
      <div className="candidate-body">
       <div className="eyebrow">{p.office}{p.state?" / "+p.state:""}</div>
       <h3>{p.name}</h3>
       <div className="stat-strip">
        <div className="stat"><strong>{record.indicators.length}</strong><span>Published indicators</span></div>
        <div className="stat"><strong>{periods.length}</strong><span>Reporting periods</span></div>
        <div className="stat"><strong>{record.missing.length}</strong><span>Disclosed data gaps</span></div>
       </div>
       <div className="directory-score-list">
        {scorecard.categories.map(score=><span key={score.id}><b>{score.id==="economy"?"FISCAL":score.id==="education"?"EDUCATION":"HEALTH"}</b> {score.value.toFixed(1)}/10</span>)}
       </div>
       <p className="notice">{record.indicators.map(item=>item.label+": "+item.displayValue).join(" · ")}{record.missing.length?" · "+record.missing.length+" disclosed research/data gap(s)":""}</p>
       {scorecard.notScored.length?<p className="notice">Not scored yet: {scorecard.notScored.map(x=>x.label).join(", ")}.</p>:null}
       <span>OPEN SOURCED PUBLIC RECORD ↗</span>
      </div>
     </Link>;
    })}
   </div>
  </section>
  <section className="page-section">
   <div className="eyebrow"><span/>HOW TO READ THE RECORD</div>
   <h2>SHOW THE DATA.<br/>SHOW THE RECEIPTS.</h2>
   <div className="content-grid">
    <article className="content-card"><div className="eyebrow">01 / OBSERVATIONS</div><h3>What was measured?</h3><p>Each indicator retains its unit, population, publisher and reference period. Revenue totals, budget execution and population outcomes are not treated as interchangeable.</p></article>
    <article className="content-card"><div className="eyebrow">02 / COMMITMENTS</div><h3>What was promised?</h3><p>Each commitment must be traceable to an attributable manifesto, policy document or public pledge. Evidence status is descriptive: delivered, partly reported, underway, not yet due, evidence not found or disputed.</p></article>
    <article className="content-card"><div className="eyebrow">03 / ACCOUNTABILITY</div><h3>What is not known?</h3><p>Missing data is disclosed, not converted to zero. A change recorded during a term is not automatically attributed to one officeholder. Conflicting records and corrections remain inspectable.</p></article>
   </div>
   <div className="source-note">PUBLIC RECORD METHODOLOGY VERSION {publicRecordMethodology.version}. The roster is a discovery list and remains provisional until each officeholder is checked against official state and federal records. <Link href="/studio">EDITORIAL REVIEW ↗</Link></div>
  </section>
 </div>;
}
