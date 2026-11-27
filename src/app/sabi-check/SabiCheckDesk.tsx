"use client";
import Link from "next/link";
import {useEffect,useMemo,useState} from "react";
import ClaimForm from "./ClaimForm";
import type {ClaimSpotlight} from "@/data/claim-discovery";

type Tab="trending"|"latest"|"top"|"published";
type PublishedRecord={
 id:string;slug?:string;title?:string;claim?:string;summary?:string;verdict?:string;publishedAt?:string;
 subject?:string;impact?:string;origin?:string;
};

const topics=[
 {key:"all",label:"All topics"},
 {key:"elections",label:"Elections & INEC"},
 {key:"security",label:"Safety"},
 {key:"power",label:"Power"},
 {key:"parties",label:"Parties"},
 {key:"candidates",label:"Candidates"},
 {key:"courts",label:"Courts"},
 {key:"services",label:"Health & education"}
];

function dateLabel(value:string){
 if(!value)return "DATE NOT LISTED";
 const date=new Date(value+"T00:00:00");
 if(Number.isNaN(date.getTime()))return value;
 return date.toLocaleDateString("en-NG",{day:"numeric",month:"short",year:"numeric"}).toUpperCase();
}

function sourceOrigin(value:string){
 return value==="reader-submission"?"READER SUBMISSION":value==="sabi-research"?"SABI NEWSROOM RESEARCH":"ORIGIN NOT RECORDED";
}

export default function SabiCheckDesk({spotlights,publishedChecks}:{spotlights:ClaimSpotlight[];publishedChecks:PublishedRecord[]}){
 const [activeTab,setActiveTab]=useState<Tab>("trending");
 const [topic,setTopic]=useState("all");
 const [query,setQuery]=useState("");
 const [formOpen,setFormOpen]=useState(false);
 const [selected,setSelected]=useState<ClaimSpotlight|null>(null);

 useEffect(()=>{
  if(!formOpen)return;
  const previous=document.body.style.overflow;
  const onKey=(event:KeyboardEvent)=>{if(event.key==="Escape")setFormOpen(false);};
  document.body.style.overflow="hidden";
  window.addEventListener("keydown",onKey);
  return ()=>{document.body.style.overflow=previous;window.removeEventListener("keydown",onKey);};
 },[formOpen]);

 const ordered=useMemo(()=>{
  const latest=spotlights.slice().sort((a,b)=>b.reportedAt.localeCompare(a.reportedAt));
  if(activeTab==="latest")return latest;
  if(activeTab==="top")return spotlights.filter(item=>item.priority>=4).slice().sort((a,b)=>b.priority-a.priority||b.reportedAt.localeCompare(a.reportedAt));
  return spotlights.filter(item=>item.featured).slice().sort((a,b)=>b.reportedAt.localeCompare(a.reportedAt)||b.priority-a.priority);
 },[activeTab,spotlights]);

 const visibleSpotlights=useMemo(()=>ordered.filter(item=>{
  const haystack=[item.title,item.claim,item.summary,item.topic,item.subject,item.sourcePublisher,item.researchUpdate?.label,item.researchUpdate?.summary,item.researchUpdate?.caveat].join(" ").toLowerCase();
  return (topic==="all"||item.topicKey===topic)&&(!query||haystack.includes(query.toLowerCase()));
 }),[ordered,topic,query]);

 const visiblePublished=useMemo(()=>publishedChecks.filter(item=>{
  const haystack=[item.title,item.claim,item.summary,item.subject,item.verdict].join(" ").toLowerCase();
  return (topic==="all"||(
    topic==="elections"&&/inec|election|voter|atiku|obi|tinubu|candidate|party/i.test(haystack)
   )||(topic==="power"&&/electricity|power|energy/i.test(haystack)
   )||(topic==="courts"&&/court|certificate|eligibility/i.test(haystack)
   )||(topic==="services"&&/health|education|school/i.test(haystack)
   )||(topic==="security"&&/violence|security|peace/i.test(haystack)
   )||(topic==="parties"&&/party|coalition|alliance/i.test(haystack)
   )||(topic==="candidates"&&/candidate|tinubu|obi|atiku/i.test(haystack))
  )&&(!query||haystack.includes(query.toLowerCase()));
 }),[publishedChecks,topic,query]);

 const openForm=(item?:ClaimSpotlight)=>{
  setSelected(item||null);
  setFormOpen(true);
 };
 const tabs=[
  {id:"trending" as const,label:"TRENDING",count:spotlights.filter(item=>item.featured).length},
  {id:"latest" as const,label:"LATEST CLAIMS",count:spotlights.length},
  {id:"top" as const,label:"TOP CLAIMS",count:spotlights.filter(item=>item.priority>=4).length},
  {id:"published" as const,label:"PUBLISHED CHECKS",count:publishedChecks.length}
 ];

 return <div className="sabi-check-desk">
  <section className="sabi-check-intro">
   <div className="sabi-check-intro-copy">
    <div className="eyebrow"><span/>THE VERIFICATION DESK / 002</div>
    <h1>SABI<br/><em>CHECK.</em></h1>
    <p>Claims move fast. Evidence should move faster. Explore current claims, read source-linked newsroom findings and published fact-checks, or send something you think deserves scrutiny.</p>
   </div>
   <div className="sabi-check-intro-art" aria-hidden="true">
    <span className="sabi-check-art-kicker">NO CAP.</span>
    <strong>JUST<br/><em>RECEIPTS.</em></strong>
    <span className="sabi-check-art-number">S/002</span>
    <i/>
   </div>
  </section>

  <section className="sabi-check-compose-section" aria-label="Submit a claim">
   <button className="sabi-check-compose" type="button" onClick={()=>openForm()}>
    <span className="sabi-check-compose-mark">S/</span>
    <span className="sabi-check-compose-copy"><strong>Got a claim we should check?</strong><small>Paste a post, quote, video link or campaign promise…</small></span>
    <span className="sabi-check-compose-action">SHARE A CLAIM <b>↗</b></span>
   </button>
   <div className="sabi-check-compose-note"><span>PRIVATE WHILE UNDER REVIEW</span><span>HUMAN EDITOR APPROVAL BEFORE PUBLICATION</span></div>
  </section>

  <section className="sabi-check-feed" aria-label="Claim discovery feed">
   <div className="sabi-check-feed-top">
    <div><div className="eyebrow"><span/>THE CLAIMS DESK / EDITORIAL RADAR</div><h2>WHAT'S<br/>IN THE <em>CONVERSATION?</em></h2></div>
    <p>Source-linked claims, published editorial findings, and campaign pledges. A verified pledge means the promise was made; it does not mean the promised delivery has happened.</p>
   </div>

   <div className="sabi-check-tabs" role="group" aria-label="Claim feed sections">
    {tabs.map(tab=><button key={tab.id} type="button" aria-pressed={activeTab===tab.id} className={activeTab===tab.id?"is-active":""} onClick={()=>{setActiveTab(tab.id);setTopic("all");}}>
     <span>{tab.label}</span><b>{tab.count}</b>
    </button>)}
   </div>

   <div className="sabi-check-discovery-tools">
    <label className="sabi-check-search"><span>⌕</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search a claim, person or topic…" aria-label="Search claims"/></label>
    <div className="sabi-check-topics" aria-label="Filter by topic">
     {topics.map(item=><button key={item.key} type="button" className={topic===item.key?"is-active":""} onClick={()=>setTopic(item.key)}>{item.label}</button>)}
    </div>
   </div>

   {activeTab==="published"?<>
    <div className="sabi-check-results-heading"><div><span className="eyebrow">VERDICTS ALREADY PUBLISHED</span><h3>CHECKED WITH RECEIPTS.</h3></div><Link href="/fact-checks">OPEN THE FULL ARCHIVE ↗</Link></div>
    {visiblePublished.length?<div className="sabi-check-published-grid">{visiblePublished.map((item,index)=><article className="sabi-check-published-card" key={item.id||index}>
     <div className="sabi-check-card-top"><span className="sabi-check-card-tag">PUBLISHED FACT-CHECK</span><span className="sabi-check-verdict">{item.verdict||"EDITORIAL REVIEW"}</span></div>
     <div className="sabi-check-published-date">{dateLabel(item.publishedAt||"")}</div>
     <h3>{item.title||item.claim||"Published fact-check"}</h3>
     <p>{item.summary||"Open the report to read the findings and evidence."}</p>
     <div className="sabi-check-card-subject">{item.subject||"SUBJECT NOT CLASSIFIED"} · {sourceOrigin(item.origin||"")}</div>
     <Link href={"/fact-check/"+(item.slug||item.id)}>READ THE EVIDENCE <b>↗</b></Link>
    </article>)}</div>:<div className="sabi-check-empty"><strong>NO MATCHING PUBLISHED CHECKS.</strong><p>Try a broader search or remove one of the topic filters.</p></div>}
   </>:<>
    <div className="sabi-check-results-heading">
     <div><span className="eyebrow">{activeTab==="trending"?"THE EDITORIAL RADAR":activeTab==="latest"?"RECENTLY REPORTED CLAIMS":"SABI'S PRIORITY LIST"}</span><h3>{activeTab==="trending"?"TRENDING CONVERSATIONS.":activeTab==="latest"?"LATEST CLAIMS.":"TOP CLAIMS TO CHECK."}</h3></div>
     <span className="sabi-check-results-count">{visibleSpotlights.length} TOPICS</span>
    </div>
    {activeTab==="trending"?<p className="sabi-check-curation-note">Curated from fresh interviews, public statements and reporting. This is an editorial radar—not a live X engagement leaderboard or a claim about post counts.</p>:null}
    {activeTab==="top"?<p className="sabi-check-curation-note">Priority reflects Sabi's editorial judgement of public impact and verifiability, not votes, popularity or a measured social ranking.</p>:null}
    {visibleSpotlights.length?<div className="sabi-check-spotlight-grid">{visibleSpotlights.map((item,index)=><article className={"sabi-check-spotlight-card "+(index===0?"is-lead":"")} key={item.id}>
     <div className="sabi-check-card-top"><span className="sabi-check-card-tag">{item.topic}</span><span className="sabi-check-status">{item.researchUpdate?"PRELIMINARY · EDITOR REVIEW":"NO SABI VERDICT YET"}</span></div>
     <div className="sabi-check-card-index">{String(index+1).padStart(2,"0")}</div>
     <h3>{item.title}</h3>
     <blockquote>{item.claim}</blockquote>
     <p>{item.summary}</p>
     {item.researchUpdate?<div className="sabi-check-claim-context sabi-check-research-update"><strong>{item.researchUpdate.publishedSlug?"EDITORIAL FINDING":"RESEARCH UPDATE"}</strong><span><b>{item.researchUpdate.label}</b><br/>{item.researchUpdate.summary}<br/><small>{item.researchUpdate.caveat}</small>{item.researchUpdate.assessmentType?<small>ASSESSMENT TYPE / {item.researchUpdate.assessmentType}</small>:null}<small>{item.researchUpdate.publishedSlug?"PUBLISHED SABI CHECK · OWNER/EDITOR APPROVED":"PRELIMINARY NEWSROOM RESEARCH · NOT A PUBLISHED SABI VERDICT"}</small></span></div>:null}
     <div className="sabi-check-claim-context"><strong>WHY IT MATTERS</strong><span>{item.priorityReason}</span></div>
     <div className="sabi-check-source-line"><span>{item.sourcePublisher} · {item.sourceDate}</span><a href={item.sourceUrl} target="_blank" rel="noreferrer">SOURCE ↗</a></div>
     {item.supportingSources?.length?<div className="sabi-check-more-sources">{item.supportingSources.slice(0,2).map(source=><a href={source.url} target="_blank" rel="noreferrer" key={source.url}>{source.publisher} ↗</a>)}</div>:null}
     {item.researchUpdate?.publishedSlug?<Link className="sabi-check-card-cta" href={"/fact-check/"+item.researchUpdate.publishedSlug}>READ THE PUBLISHED CHECK <b>↗</b></Link>:<button type="button" className="sabi-check-card-cta" onClick={()=>openForm(item)}>SUBMIT THIS CLAIM FOR CHECKING <b>↗</b></button>}
    </article>)}</div>:<div className="sabi-check-empty"><strong>NO CLAIMS MATCH THAT FILTER.</strong><p>Try a broader search, choose another topic, or share a claim with the newsroom.</p><button type="button" onClick={()=>openForm()}>SHARE A CLAIM ↗</button></div>}
   </>}
  </section>

  <section className="sabi-check-how">
   <div><div className="eyebrow">NO AUTO-VERDICTS. NO VIBES.</div><h2>HOW WE<br/><em>CHECK AM.</em></h2></div>
   <div className="sabi-check-how-steps">
    <article><b>01</b><strong>SUBMIT OR DISCOVER</strong><p>Readers send claims; the newsroom also tracks public statements and current debates.</p></article>
    <article><b>02</b><strong>CHECK THE EVIDENCE</strong><p>We compare exact wording with original sources, official records, context and counter-evidence.</p></article>
    <article><b>03</b><strong>PUBLISH THE RECEIPTS</strong><p>Published checks show a verdict, reasoning and source trail. Reader submissions stay private until editorial approval.</p></article>
   </div>
  </section>
  <div className="sabi-check-bottom-links"><Link href="/fact-checks">BROWSE THE COMPLETE FACT-CHECK ARCHIVE ↗</Link><Link href="/studio">NEWSROOM ACCESS ↗</Link></div>

  {formOpen?<div className="sabi-check-modal-scrim" onClick={()=>setFormOpen(false)}>
   <section className="sabi-check-modal" role="dialog" aria-modal="true" aria-labelledby="sabi-check-modal-title" onClick={e=>e.stopPropagation()}>
    <div className="sabi-check-modal-head"><div><div className="eyebrow"><span/>SABI CHECK / SUBMISSION</div><h2 id="sabi-check-modal-title">{selected?"SEND THIS CLAIM TO THE DESK.":"SHARE A CLAIM."}</h2><p>Submissions remain private while an editor reviews the evidence.</p></div><button type="button" className="sabi-check-modal-close" onClick={()=>setFormOpen(false)} aria-label="Close submission form">×</button></div>
    <ClaimForm key={selected?.id||"new-claim"} initialClaim={selected?.claim||""} initialSubject={selected?.subject||""} initialSourceUrl={selected?.sourceUrl||""} initialContext={selected?.context||""} initialClaimType={selected?.claimType||"public-statement"}/>
   </section>
  </div>:null}
 </div>;
}
