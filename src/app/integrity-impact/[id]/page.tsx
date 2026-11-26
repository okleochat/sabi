import type {Metadata} from "next";
import Link from "next/link";
import {notFound} from "next/navigation";
import {politicianSeeds} from "@/data/politicians";
import {politicianPortraits} from "@/data/politician-media";
import {getPublicRecordIndicators,describePublicRecord} from "@/data/public-records";
import {publicRecordMethodology} from "@/lib/score-methodology";
import ShareCard from "@/app/components/ShareCard";

export const dynamicParams=false;
export function generateStaticParams(){return politicianSeeds.map(p=>({id:p.id}));}
export async function generateMetadata({params}:{params:Promise<{id:string}>}):Promise<Metadata>{
 const {id}=await params;
 const p=politicianSeeds.find(x=>x.id===id);
 return {title:p?p.name+" — Public Record | Sabi":"Politician profile"};
}

const categoryLabel:Record<string,string>={
 economy:"ECONOMY & LIVELIHOODS",
 education:"EDUCATION",
 health:"HEALTH",
 "national-economy":"NATIONAL ECONOMY",
};

export default async function PoliticianIndexProfile({params}:{params:Promise<{id:string}>}){
 const {id}=await params;
 const p=politicianSeeds.find(x=>x.id===id);
 if(!p)notFound();
 const portrait=politicianPortraits[p.id];
 const record=getPublicRecordIndicators(p);
 const periods=[...new Set(record.indicators.map(x=>x.period))];
 const summary=describePublicRecord(p);
 const roleDescription=p.office==="Governor"?"Governor of "+p.state+", Nigeria":p.office==="President"?"President of the Federal Republic of Nigeria":"Minister of the Federal Capital Territory";
 return <div className="page-shell">
  <div className="profile-breadcrumb"><Link href="/integrity-impact">← PUBLIC RECORD INDEX</Link><span>/</span><span>{p.office.toUpperCase()}</span></div>
  <section className="profile-top">
   <div className="profile-art">
    {portrait?<><img src={portrait.url} alt={portrait.alt}/><small>PHOTO: {portrait.credit} · {portrait.license} · <a href={portrait.sourceUrl} target="_blank" rel="noreferrer" style={{color:"#c5ff43"}}>SOURCE ↗</a> · <a href={portrait.licenseUrl} target="_blank" rel="noreferrer" style={{color:"#c5ff43"}}>LICENCE ↗</a></small></>:<div className="profile-placeholder"><span>{p.name.split(" ").map(x=>x[0]).slice(0,2).join("")}</span><small>PORTRAIT SOURCE BEING VERIFIED</small></div>}
   </div>
   <div className="profile-title">
    <div className="eyebrow"><span/>SABI PUBLIC RECORD / {p.office.toUpperCase()}</div>
    <h1>{p.name}</h1>
    <p>{roleDescription}. This page brings together sourced public indicators, government records and attributable commitments for the relevant jurisdiction and period. It is an evidence file, not a political rating.</p>
    <div className="profile-details">
     <div className="detail"><span>OFFICE</span><strong>{p.office}</strong></div>
     {p.state?<div className="detail"><span>JURISDICTION</span><strong>{p.state}</strong></div>:null}
     {p.zone?<div className="detail"><span>GEOPOLITICAL ZONE</span><strong>{p.zone}</strong></div>:null}
     {p.termStart?<div className="detail"><span>TERM / APPOINTMENT START</span><strong>{p.termStart}</strong></div>:null}
    </div>
    <div className="stat-strip">
     <div className="stat"><strong>{record.indicators.length}</strong><span>Published indicators</span></div>
     <div className="stat"><strong>{periods.length}</strong><span>Reporting periods</span></div>
     <div className="stat"><strong>{record.missing.length}</strong><span>Disclosed data gaps</span></div>
    </div>
    <div className="no-verdict-panel" style={{marginTop:18}}>
     <div className="eyebrow" style={{color:"#c5ff43"}}>THE RECORD / PLAIN-LANGUAGE SUMMARY</div>
     <p>{summary}</p>
    </div>
    <ShareCard kind="POLITICIAN PUBLIC RECORD" kicker={p.office} title={p.name} summary={summary} details={[
     {label:"Office",value:p.office},
     {label:"Jurisdiction",value:p.state||"Nigeria"},
     {label:"Published indicators",value:String(record.indicators.length)},
     {label:"Reporting periods",value:periods.join(", ")||"Not yet available"},
     {label:"Data gaps disclosed",value:String(record.missing.length)}
    ]} assessmentDate="Public source snapshot: 26 November 2026" source={p.sourceLabel} path={"/integrity-impact/"+p.id}/>
   </div>
  </section>

  <section className="profile-research">
   <div className="eyebrow"><span/>THE RESEARCH FILE / {record.indicators.length} PUBLISHED INDICATORS</div>
   <h2>WHAT THE RECORD<br/>ACTUALLY SAYS.</h2>
   <p className="notice">Values are shown in the units and populations used by the source. Revenue totals are nominal, budget execution is not a service outcome, and survey measures describe the surveyed population and period. None of these figures alone establishes how much change was caused by an officeholder.</p>
   {record.indicators.length?<div className="content-grid">
    {record.indicators.map(item=><article className="content-card" key={item.id}>
     <div className="eyebrow">{categoryLabel[item.category]||"PUBLIC INDICATOR"}</div>
     <h3>{item.label}</h3>
     <strong style={{font:"700 clamp(31px,4vw,48px)/.95 var(--display)",letterSpacing:"-.06em",margin:"5px 0"}}>{item.displayValue}</strong>
     <p><b>Reporting period:</b> {item.period}{item.population?" · "+item.population:""}</p>
     <p>{item.note}</p>
     <div className="source-note"><b>{item.publisher}</b> · {item.sourceLabel} · Published {item.publishedAt}<br/><a href={item.sourceUrl} target="_blank" rel="noreferrer">OPEN PRIMARY SOURCE ↗</a>{item.secondarySourceUrl?<><span> · </span><a href={item.secondarySourceUrl} target="_blank" rel="noreferrer">TRANSCRIPTION / CROSS-CHECK ↗</a></>:null}</div>
    </article>)}
   </div>:<div className="empty-state">No comparable source-linked indicators have been added to this profile yet. The data gaps below explain the next records required.</div>}
  </section>

  <section className="profile-research">
   <div className="eyebrow"><span/>WHAT IS NOT IN THE DATASET</div>
   <h2>GAPS ARE PART<br/>OF THE RECORD.</h2>
   <div className="content-grid">
    {record.missing.map(item=><article className="content-card" key={item.id}>
     <div className="eyebrow">NOT YET PUBLISHED IN THIS RECORD</div>
     <h3>{item.label}</h3>
     <p><b>Reference period:</b> {item.period}</p>
     <p>{item.reason}</p>
    </article>)}
   </div>
   <div className="source-note">Roster source: <a href={p.sourceUrl} target="_blank" rel="noreferrer">{p.sourceLabel} ↗</a>. Roster checked {p.rosterCheckedAt}. Status: provisional; officeholder details require official-source confirmation. <Link href="/studio">EDITORIAL RESEARCH WORKSPACE ↗</Link></div>
  </section>

  <section className="page-section">
   <div className="eyebrow"><span/>HOW TO READ THIS PAGE</div>
   <div className="content-grid">
    <article className="content-card"><div className="eyebrow">01 / PERIODS</div><h3>Compare like with like</h3><p>Different figures refer to different periods. A 2023–24 household survey should not be described as a 2026 live reading, and a budget execution percentage should not be described as an outcome.</p></article>
    <article className="content-card"><div className="eyebrow">02 / CAUSATION</div><h3>Tenure is not proof</h3><p>A national or state indicator can change during an administration for many reasons, including inherited conditions, federal policy, economic shocks and decisions by other institutions.</p></article>
    <article className="content-card"><div className="eyebrow">03 / CORRECTIONS</div><h3>Challenge the evidence</h3><p>Every figure links to its publisher. Submit an alternate primary source or correction through the editorial workspace so the public record can be checked and updated.</p><Link href="/studio">OPEN EDITORIAL WORKSPACE ↗</Link></article>
   </div>
   <div className="source-note">PUBLIC RECORD METHODOLOGY VERSION {publicRecordMethodology.version}. This profile reports evidence, not a composite rating or a ranking of officeholders.</div>
  </section>
 </div>;
}
