import type {Metadata} from "next";
import Link from "next/link";
import ShareCard from "@/app/components/ShareCard";
export const metadata:Metadata={title:"2027 election calendar"};
const dates=[{date:"16",month:"JAN",year:"2027",kind:"NATIONAL",title:"Presidential & National Assembly",desc:"The President, Senate and House of Representatives."},{date:"06",month:"FEB",year:"2027",kind:"STATE",title:"Governorship & State Assembly",desc:"Governorship and State House of Assembly elections in participating states and constituencies."}];
export default function ElectionsPage(){return <div className="page-shell">
<section className="page-intro"><div className="eyebrow"><span/>THE 2027 ELECTION GUIDE</div><h1>THE VOTE IS<br/>ONE DAY.<br/>THE CHOICES<br/>LAST LONGER.</h1><p>Start with the official timetable. Know which offices are being contested, what the process looks like and where to check updates.</p></section>
<section className="page-section"><ShareCard kind="2027 ELECTION GUIDE" kicker="OFFICIAL TIMETABLE" title="Nigeria’s 2027 election calendar" summary="Key polling dates and the offices being contested. Always check INEC’s live calendar for amendments." details={[{label:"National elections",value:"16 January 2027"},{label:"State elections",value:"6 February 2027"},{label:"Source",value:"INEC official calendar"}]} source="INEC official election calendar" path="/elections"/><div className="section-head"><div><div className="eyebrow">THE TWO POLLING DATES</div><h2>PUT THESE<br/>ON YOUR RADAR.</h2></div><a className="underlink" href="https://inecnigeria.org/elections/calendar/" target="_blank" rel="noreferrer">OFFICIAL INEC CALENDAR ↗</a></div>
<div className="election-date-grid">{dates.map(d=><article className="election-date-card" key={d.date}><div className="election-date-top"><span>{d.kind} / {d.year}</span><span>INEC SCHEDULE</span></div><div className="election-date-number">{d.date}<small>{d.month}</small></div><h3>{d.title}</h3><p>{d.desc}</p></article>)}</div>
<p className="source-note">As checked on 27 November 2026, INEC's current online calendar lists 16 January and 6 February 2027. Dates can be amended; use the Commission's live calendar as the authority. <a href="https://inecnigeria.org/elections/calendar/" target="_blank" rel="noreferrer">CHECK THE LIVE CALENDAR ↗</a></p></section>
<section className="page-section">
<div className="eyebrow"><span/>ELECTION OPERATIONS / 27 NOVEMBER 2026</div>
<h2>THE NEXT TEST<br/>IS THIS WEEK.</h2>
<div className="content-grid">
<article className="content-card">
<div className="eyebrow">SATURDAY / 28 NOVEMBER 2026</div>
<h3>Nationwide mock accreditation</h3>
<p>INEC has scheduled a mock exercise across selected polling units in all states and the FCT to test BVAS accreditation and electronic result transmission. The Commission has published the designated units by state. KDI says the exercise covers 17,676 selected units from 8:30 a.m. to 2:30 p.m.</p>
<p>This is a technical rehearsal, not election day. Check the official list before assuming your usual polling unit is included.</p>
<a className="underlink" href="https://inecnigeria.org/press/list-of-polling-units-for-the-nationwide-mock-accreditation-scheduled-to-hold-on" target="_blank" rel="noreferrer">OPEN THE OFFICIAL UNIT LIST ↗</a>
<a className="underlink" href="https://inecnigeria.org/press/inec-sets-28th-november-2026-for-nationwide-mock-accreditation-exercise" target="_blank" rel="noreferrer">READ INEC'S EXPLANATION ↗</a>
<a className="underlink" href="https://ng.linkedin.com/company/kimpactglobal" target="_blank" rel="noreferrer">KDI'S EXERCISE DETAILS ↗</a>
</article>
<article className="content-card">
<div className="eyebrow">VOTER REGISTER / NOVEMBER 2026</div>
<h3>INEC reports a register above 100m</h3>
<p>INEC's chair said on 26 November that the cleaned register contains more than 100 million verified voters. In its earlier detailed briefing, the Commission said it removed 1,608,660 confirmed invalid registrations and 873 records of verified deceased voters.</p>
<p>The final register is scheduled for publication on 15 December 2026. INEC also said 54 people across 10 states had been identified for possible disciplinary action over registration irregularities; this is an investigation status, not a conviction.</p>
<a className="underlink" href="https://www.channelstv.com/2026/11/26/registered-voters-now-100m-as-inec-removes-1-6m-invalid-records/" target="_blank" rel="noreferrer">READ THE 26 NOVEMBER UPDATE ↗</a>
<a className="underlink" href="https://x.com/inecnigeria/status/2120048930280902957" target="_blank" rel="noreferrer">INEC'S REGISTER-CLEANUP STATEMENT ↗</a>
</article>
</div>
<p className="source-note">The final certified register is still pending. INEC's 26 November figure is a rounded public statement; the detailed 9 November briefing reports invalid registrations and verified deceased records separately. Use the Commission's final publication for the authoritative total.</p>
</section>
<section className="page-section">
<div className="eyebrow"><span/>ELECTION SECURITY / 27 NOVEMBER 2026</div>
<h2>SAFETY IS PART<br/>OF THE BALLOT.</h2>
<div className="content-grid">
<article className="content-card">
<div className="eyebrow">KDI / UPDATED 26 NOVEMBER</div>
<h3>128 electoral-violence incidents, 24 fatalities</h3>
<p>KDI's NEVER project reports 128 electoral-violence incidents and 24 fatalities from 1 July to 25 November across 35 states and the FCT. Its 26 November update added one incident in Edo and two deaths connected with the Delta incident. This is KDI's monitoring count, not a police tally.</p>
<a className="underlink" href="https://ng.linkedin.com/company/kimpactglobal" target="_blank" rel="noreferrer">KDI'S LATEST UPDATE ↗</a>
</article>
<article className="content-card">
<div className="eyebrow">CDD / OCTOBER 2026</div>
<h3>173 security incidents; 16 election-related</h3>
<p>CDD's October tracker records 173 overall security incidents and 640 reported deaths. It classifies 16 incidents and two deaths as election-related; the other 157 incidents and 638 deaths were broader insecurity. The tracker also logs 75 misinformation, disinformation and hate-speech narratives.</p>
<a className="underlink" href="https://www.cddwestafrica.org/uploads/reports/file/Nigeria-Election-Security_Tracker-October_2026.pdf" target="_blank" rel="noreferrer">READ THE OCTOBER TRACKER ↗</a>
</article>
<article className="content-card">
<div className="eyebrow">DELTA / 23–27 NOVEMBER</div>
<h3>Uduere killings: investigation ongoing</h3>
<p>Police preliminary reports put the 23 November death toll at six; Omo-Agege's campaign organisation initially reported four, while the local council chairman gave a different account. Police invited Omo-Agege, the Ughelli North council chairman and five others for questioning. An invitation is not a charge or finding of guilt.</p>
<p>As of 26 November, police said no arrests had been made in connection with the killings; 21 people arrested were held for curfew violations. A 6 p.m.–6 a.m. curfew remains the latest announced order, with no lifting notice located in this check.</p>
<a className="underlink" href="https://punchng.com/ndc-campaign-violence-police-summon-omo-agege-delta-gov-mourns-six/" target="_blank" rel="noreferrer">POLICE INVITATIONS & GOVERNOR'S RESPONSE ↗</a>
<a className="underlink" href="https://punchng.com/delta-killings-no-arrests-yet-say-police/" target="_blank" rel="noreferrer">POLICE CLARIFY ARRESTS ↗</a>
</article>
</div>
<p className="source-note">At the 26 November security conference, INEC warned of reported political violence in Lagos, Edo, Ekiti, Enugu, Ebonyi, Delta, Cross River, Oyo and Benue. The National Peace Committee separately recorded 109 peace-accord breaches across 26 states and the FCT from 19 August to 27 October (33 violence/thuggery; 29 misinformation/disinformation). These are different monitoring systems and periods; do not add their totals. <a href="https://punchng.com/2027-inec-nsa-read-riot-act-to-violence-sponsors/" target="_blank" rel="noreferrer">INEC–NSA SECURITY CONFERENCE ↗</a> · <a href="https://punchng.com/2027-abdulsalami-panel-flags-109-breaches-warns-of-election-violence/" target="_blank" rel="noreferrer">NATIONAL PEACE COMMITTEE REPORT ↗</a></p>
</section>
<section className="page-section election-explain"><div><div className="eyebrow"><span/>WHAT ARE WE VOTING FOR?</div><h2>DIFFERENT OFFICES.<br/>DIFFERENT JOBS.</h2></div><div className="content-grid"><article className="content-card"><div className="eyebrow">THE EXECUTIVE</div><h3>President</h3><p>Leads the federal executive and is responsible for implementing federal laws and policies within the constitutional system.</p></article><article className="content-card"><div className="eyebrow">THE LEGISLATURE</div><h3>National Assembly</h3><p>The Senate and House of Representatives make federal laws, scrutinise government and approve public spending through constitutional processes.</p></article><article className="content-card"><div className="eyebrow">STATE GOVERNMENT</div><h3>Governor & State Assembly</h3><p>State-level executive and legislative offices shape public services, state budgets and laws within their constitutional responsibilities.</p></article></div></section>
<section className="election-bottom"><div><div className="eyebrow">NEXT STEP</div><h2>KNOW THE<br/>PEOPLE ASKING<br/>FOR YOUR VOTE.</h2></div><div><p>Open the candidate explorer, compare ticket information and follow the source links. No endorsements. No guesswork.</p><div className="hero-buttons"><Link className="btn" href="/candidates">EXPLORE CANDIDATES ↗</Link><Link className="btn outline" href="/voter-guide">GET VOTER-READY ↗</Link></div></div></section>
</div>;}