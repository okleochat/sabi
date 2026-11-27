import type {Metadata} from "next";
import Link from "next/link";
import {notFound} from "next/navigation";
import {getCandidate} from "@/lib/data";
import {candidatePortraits,candidateBackgrounds} from "@/data/candidate-media";
import {candidateDossierEvidence} from "@/data/candidate-dossier-evidence";
import ShareCard from "@/app/components/ShareCard";
export const dynamic="force-dynamic";
export async function generateMetadata({params}:{params:Promise<{id:string}>}):Promise<Metadata>{const {id}=await params;const c=await getCandidate(id);return {title:c?.displayName||"Candidate profile"};}
const citizenQuestions=[
 "What are the three measurable priorities you will pursue in your first 100 days, first year and full term?",
 "What will each priority cost, where will the money come from, and what existing spending will change?",
 "Which policies will you retain, reverse or amend, and what evidence supports those choices?",
 "How will citizens track delivery across states, local governments and federal institutions?",
 "What safeguards will you support for election integrity, public procurement and independent oversight?",
];
export default async function CandidateProfile({params}:{params:Promise<{id:string}>}){
 const {id}=await params;const c=await getCandidate(id);if(!c)notFound();
 const portrait=candidatePortraits[c.id],background=candidateBackgrounds[c.id];
 const tracker=candidateDossierEvidence[c.id];
 const initials=c.displayName.split(" ").slice(0,2).map(x=>x[0]).join("");
 const sourceDate=c.source?.publishedAt||"Date not stated";
 return <div className="page-shell">
  <div className="profile-breadcrumb"><Link href="/candidates">← ALL 2027 PRESIDENTIAL TICKETS</Link><span>/</span><span>DOSSIER / {c.partyCode}</span></div>
  <section className="profile-top">
   <div className="profile-art">{portrait?<><img src={portrait.url} alt={portrait.alt}/><small>PHOTO: {portrait.credit} · {portrait.license} · <a href={portrait.sourceUrl} target="_blank" rel="noreferrer">IMAGE SOURCE ↗</a> · <a href={portrait.licenseUrl} target="_blank" rel="noreferrer">LICENCE ↗</a></small></>:<div className="profile-placeholder"><span>{initials}</span><small>PORTRAIT SOURCE BEING VERIFIED</small></div>}</div>
   <div className="profile-title">
    <div className="eyebrow"><span/>INEC-LISTED PRESIDENTIAL TICKET / JANUARY 2027</div>
    <span className="party-tag">{c.partyCode}</span><h1>{c.displayName}</h1>
    <p>{background?.summary||"This profile starts with the particulars in INEC's published final list. Sabi is expanding the biography, political-history, policy, manifesto and public-disclosure files from original, attributable sources. Missing information is labelled rather than guessed."}</p>
    <div className="profile-details">
     <div className="detail"><span>OFFICIAL NAME ON INEC LIST</span><strong>{c.officialName}</strong></div>
     <div className="detail"><span>PARTY</span><strong>{c.partyCode}</strong></div>
     <div className="detail"><span>AGE ON 31 OCTOBER 2026 LIST</span><strong>{c.ageAtPublication??"Not stated"}</strong></div>
     <div className="detail"><span>GENDER CODE ON INEC LIST</span><strong>{c.genderCode==="F"?"Female":c.genderCode==="M"?"Male":"Not stated"}</strong></div>
     <div className="detail"><span>QUALIFICATIONS AS FILED</span><strong>{c.qualifications||"Not stated in the list"}</strong></div>
     <div className="detail"><span>INEC RECORD STATUS</span><strong>{c.recordStatus||"Source-captured"}</strong></div>
    </div>
    {tracker?.disputes?.length?<div className="candidate-dispute-alert">
     <div className="eyebrow">PUBLIC NOMINATION DISPUTE / UNRESOLVED IN SOURCES CHECKED</div>
     <strong>The official nomination record is contested in public and/or court records.</strong>
     <p>{tracker.disputeStatusNote || "The sources below record competing positions; this profile does not decide the legal merits."} Last reviewed {tracker.checkedAt}.</p>
    </div>:null}
    <ShareCard kind="2027 PRESIDENTIAL CANDIDATE DOSSIER" kicker={c.partyCode} title={c.displayName} summary={background?.summary||"Official candidate and running-mate particulars transcribed from INEC’s published final list. Biography and policy records are being independently sourced."} details={[
     {label:"Party",value:c.partyCode},
     {label:"Running mate",value:c.runningMateOfficialName||"Not stated"},
     {label:"Age on INEC list",value:String(c.ageAtPublication??"Not stated")},
     {label:"Qualifications",value:c.qualifications||"Not stated"},
     {label:"Source date",value:sourceDate}
    ]} source="INEC updated final presidential list" assessmentDate="Source record dated 31 October 2026" path={"/candidates/"+c.id}/>
   </div>
  </section>
  <section className="candidate-dossier-nav">
   <a href="#ticket">THE TICKET</a><a href="#background">BACKGROUND</a><a href="#campaign">CAMPAIGN & MANIFESTO TRACKER</a><a href="#platform">POLICIES</a><a href="#record">PUBLIC RECORD</a><a href="#questions">QUESTIONS FOR THE TICKET</a>
  </section>
  <section id="ticket" className="profile-research">
   <div className="eyebrow"><span/>THE PRESIDENTIAL TICKET / {c.partyCode}</div>
   <h2>TWO NAMES.<br/>ONE TICKET.</h2>
   <div className="ticket-grid">
    <article className="ticket-person">
     <div className="eyebrow">PRESIDENTIAL CANDIDATE</div><h3>{c.displayName}</h3><span className="party-tag">{c.partyCode}</span>
     <p><b>Age on INEC list:</b> {c.ageAtPublication??"Not stated"}</p><p><b>Qualifications as filed:</b> {c.qualifications||"Not stated"}</p>
    </article>
    <article className="ticket-person ticket-running-mate">
     <div className="eyebrow">VICE-PRESIDENTIAL CANDIDATE / RUNNING MATE</div><h3>{c.runningMateOfficialName||"Not stated in INEC list"}</h3>
     <p><b>Qualifications as filed:</b> {c.runningMateQualifications||"Not stated"}</p>
     <p className="notice">The running mate's particulars are reproduced as a separate entry on the official ticket list.</p>
    </article>
   </div>
   <div className="source-note">Source: {c.source?.publisher||"Independent National Electoral Commission"} · {sourceDate}. The qualifications above are exactly the filed particulars, not an independent verification of certificates. <a href={c.source?.url||"https://inecnigeria.org/"} target="_blank" rel="noreferrer">OPEN OFFICIAL LIST ↗</a></div>
  </section>
  <section id="background" className="profile-research">
   <div className="eyebrow"><span/>BIOGRAPHY / PUBLIC CAREER</div><h2>WHO IS THE<br/>PERSON BEHIND<br/>THE TICKET?</h2>
   {background?.summary?<div className="candidate-background-panel"><p>{background.summary}</p><span>ATTRIBUTED BACKGROUND / NOT A PERFORMANCE VERDICT</span></div>:<div className="empty-state">A fully sourced biography and public-office timeline have not yet been added to this profile. Sabi will include dates, roles and original records as they are verified.</div>}
   {background?.sources?.length?<div className="profile-source-list"><strong>Background source trail</strong>{background.sources.map(s=><a key={s.url} href={s.url} target="_blank" rel="noreferrer">{s.publisher}: {s.title} ↗</a>)}</div>:null}
   <div className="candidate-status-grid">
    <article><span>01 / PUBLIC OFFICES</span><strong>Timeline being assembled</strong><p>Each role will be dated and linked to official records or independently corroborated sources.</p></article>
    <article><span>02 / ELECTION HISTORY</span><strong>Past contests being verified</strong><p>Previous candidacies and results will be separated from current official ballot status.</p></article>
    <article><span>03 / DECLARATIONS</span><strong>Disclosure records to be sourced</strong><p>Publicly available asset declarations, interests or legal disclosures will only be included where lawfully accessible and attributable.</p></article>
   </div>
  </section>
  <section id="campaign" className="profile-research">
   <div className="eyebrow"><span/>CAMPAIGN RECORD / THIRD-PARTY SOURCE REVIEW</div>
   <h2>WHAT HAS BEEN<br/>DOCUMENTED?</h2>
   {tracker?<><p className="notice">The figures below are from OpenPolls Africa's public 2027 campaign tracker, snapshot checked {tracker.checkedAt}. They count records found by that tracker, not all campaign activity, popularity, voter support or performance. A short record list is not proof that a campaign is inactive; a long one is not proof of support.</p>
    <div className="candidate-tracker-grid">
     <article><span>RECORDS REVIEWED</span><strong>{tracker.reviewedRecords===undefined?"Tracking scheduled":tracker.reviewedRecords}</strong><p>Items reviewed and indexed by the external tracker.</p></article>
     <article><span>DOCUMENTED CAMPAIGN EVENTS</span><strong>{tracker.documentedCampaignEvents===undefined?"Not stated":tracker.documentedCampaignEvents}</strong><p>Public events identified in the tracker snapshot.</p></article>
     <article><span>CAMPAIGN FINANCE RECORDS</span><strong>{tracker.financeRecords===undefined?"Not stated":tracker.financeRecords}</strong><p>Public disclosures located by the tracker. A zero means none was found there, not that no spending or disclosure exists.</p></article>
    </div>
    <div className="candidate-tracker-links"><a href={tracker.sourceUrl} target="_blank" rel="noreferrer">OPEN OPENPOLLS CAMPAIGN RECORD ↗</a><a href={tracker.manifestoSourceUrl} target="_blank" rel="noreferrer">OPEN MANIFESTO TRACKER ↗</a></div>
    {tracker.disputes?.length?<div className="candidate-dispute-panel">
     <div className="eyebrow">COMPETING PUBLIC RECORDS / DO NOT COLLAPSE INTO ONE CLAIM</div>
     <h3>What each source says</h3>
     <div className="candidate-dispute-list">{tracker.disputes.map(item=><article key={item.url}>
      <div className="eyebrow">{item.publisher} · {item.publishedAt}</div>
      <strong>{item.title}</strong>
      <p>{item.position}</p>
      <a href={item.url} target="_blank" rel="noreferrer">OPEN SOURCE ↗</a>
     </article>)}</div>
     <p className="notice">{tracker.disputeStatusNote || "No final court judgment was located in the source check for this update. Recheck before treating the ballot position as settled."}</p>
    </div>:null}

    {tracker.recentDevelopments?.length ? (
     <div className="candidate-dispute-panel">
      <div className="eyebrow">RECENT PUBLIC STATEMENTS · SOURCE-ATTRIBUTED</div>
      <h3>Recent political developments</h3>
      <p className="notice">These entries record who said what and when. Impact is classified separately from truth or legal status; a statement is not proof of its underlying claim.</p>
      <div className="candidate-dispute-list">
       {tracker.recentDevelopments.map(item=><article key={item.id}>
        <div className="eyebrow">{item.date} · {item.status}</div>
        <strong>{item.title}</strong>
        <p><b>Speaker:</b> {item.speaker}</p>
        <blockquote>{item.wording}</blockquote>
        <p>{item.context}</p>
        <p><b>Impact on subject:</b> {item.impact}</p>
        <a href={item.url} target="_blank" rel="noreferrer">OPEN SOURCE ↗</a>
        {item.supportingSources?.length?<ul>{item.supportingSources.map(source=><li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.publisher}: {source.title}</a></li>)}</ul>:null}
       </article>)}
      </div>
     </div>
    ) : null}
    <div className="candidate-manifesto-status">
     <div className="eyebrow">MANIFESTO DOCUMENT STATUS / SOURCE SNAPSHOT</div>
     <h3>{tracker.manifestoStatus==="document-located"?"A manifesto document is indexed":tracker.manifestoStatus==="launch-reported-document-not-located"?"Launch reported; full document not located":tracker.manifestoStatus==="no-document-found-in-tracker"?"No standalone document found in tracker":tracker.manifestoStatus==="tracker-entry-conflicted"?"Tracker entry requires clarification":"No clear status in the checked source snapshot"}</h3>
     <p>{tracker.manifestoNote}</p>
     {tracker.notableCommitments?.length?<ul>{tracker.notableCommitments.map(x=><li key={x}>{x}</li>)}</ul>:null}
    </div>
   </>:<div className="empty-state">No third-party campaign-tracker entry has been added to this profile yet.</div>}
  </section>
  <section id="platform" className="profile-research">
   <div className="eyebrow"><span/>POLICY FILE / MANIFESTO</div><h2>WHAT DOES THE<br/>TICKET PROPOSE?</h2>
   <div className="candidate-status-grid">
    <article><span>01 / OFFICIAL MANIFESTO</span><strong>Source document required</strong><p>The full manifesto or programme will be linked here when the original document is located and its election cycle confirmed.</p></article>
    <article><span>02 / POLICY POSITIONS</span><strong>Evidence-led issue file</strong><p>Statements on the economy, security, education, health, power, public finance and governance will link to the original speech, interview or document and its date.</p></article>
    <article><span>03 / DEBATES & INTERVIEWS</span><strong>Public statements archive</strong><p>Responses and pledges will be recorded with the event date and full context; short clips will not be treated as complete policy positions.</p></article>
   </div>
  </section>
  <section id="record" className="profile-research">
   <div className="eyebrow"><span/>PUBLIC RECORD / INDEPENDENT RESEARCH</div><h2>THE RECEIPTS<br/>BEHIND THE CLAIMS.</h2>
   <div className="content-grid">
    <article className="content-card"><div className="eyebrow">PUBLIC SERVICE</div><h3>Career and decisions</h3><p>Documented offices, major decisions, relevant official records and independently corroborated context will be listed with dates and source links.</p></article>
    <article className="content-card"><div className="eyebrow">LEGAL & ETHICS RECORD</div><h3>Due process, not insinuation</h3><p>Any allegation or legal matter will identify the source, procedural status, response and final court outcome where available. An allegation is never treated as proof of guilt.</p></article>
    <article className="content-card"><div className="eyebrow">CAMPAIGN FINANCE</div><h3>Funding and disclosures</h3><p>Campaign-finance filings and public declarations will be recorded when official or independently verifiable source material is available.</p></article>
   </div>
   <div className="no-verdict-panel" style={{marginTop:20}}><div className="eyebrow" style={{color:"#c5ff43"}}>EDITORIAL STANDARD</div><h3>NO MADE-UP BIOGRAPHIES. NO UNSOURCED VERDICTS.</h3><p>This profile distinguishes official particulars, sourced biography, policy claims, allegations, legal findings and analysis. It does not assign a candidate a score, win probability or endorsement.</p></div>
  </section>
  <section id="questions" className="profile-research">
   <div className="eyebrow"><span/>CITIZEN QUESTION FILE / THE SAME QUESTIONS FOR EVERY TICKET</div><h2>PUT THE<br/>DETAILS ON THE TABLE.</h2>
   <div className="citizen-questions">{citizenQuestions.map((q,i)=><article key={q}><b>{String(i+1).padStart(2,"0")}</b><p>{q}</p></article>)}</div>
   <p className="source-note">Questions are editorial prompts for public accountability. They are not claims about this candidate and do not imply that a response has or has not been provided.</p>
   <div className="hero-buttons"><Link className="btn black" href="/sabi-check">SUBMIT A CLAIM ABOUT THIS TICKET ↗</Link><Link className="underlink" href="/fact-checks">OPEN THE FACT-CHECK LIBRARY</Link></div>
  </section>
 </div>;
}
