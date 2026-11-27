import type {Metadata} from "next";
import Link from "next/link";
import ShareCard from "@/app/components/ShareCard";
import {calculatePollingAverage,polls,pollingCatalogueSource,pollingResearchCutoff,pollingEstimatorRules} from "@/data/polling-data";

export const metadata:Metadata={title:"2027 Polling Desk — surveys, methods & public mood"};
export const dynamic="force-static";

const categoryLabel:Record<string,string>={
 "party-preference":"PARTY PREFERENCE",
 "candidate-vote-intention":"CANDIDATE VOTE INTENTION",
 "turnout-confidence":"TURNOUT INTENTION",
 "election-confidence":"ELECTION CONFIDENCE",
 "government-approval":"GOVERNMENT APPROVAL",
};

export default function PollingDeskPage(){
 const average=calculatePollingAverage();
 const partyPolls=polls.filter(p=>p.category==="party-preference");
 const publicMood=polls.filter(p=>p.category!=="party-preference");
 return <div className="page-shell">
  <section className="page-intro">
   <div className="eyebrow"><span/>SABI POLLING DESK / NIGERIA 2027</div>
   <h1>WHAT PEOPLE<br/>ARE SAYING.<br/><em>WHAT THE POLLS</em><br/>CAN PROVE.</h1>
   <p>Independent poll monitoring with the dates, samples, questions and methods left in the open. A survey is evidence about the people it interviewed; it is not an election result.</p>
   <div className="hero-buttons" style={{marginTop:22}}>
    <Link className="btn black" href="#published-polls">EXPLORE THE POLLS ↘</Link>
    <a className="underlink" href="https://inecnigeria.org/press/updated-list-of-candidates-for-2027-presidential-election" target="_blank" rel="noreferrer">OFFICIAL INEC CANDIDATE LIST ↗</a>
   </div>
  </section>
  <section className="page-section">
   <ShareCard kind="SABI POLLING DESK" kicker="NIGERIA / 2027" title="Polls, with the methods attached." summary="Track what has actually been measured, who was interviewed, how they were selected and what the survey can legitimately tell us." details={[{label:"Published survey records",value:String(polls.length)},{label:"Candidate vote averages",value:average?"Available":"Withheld"},{label:"Research checked",value:"27 Nov 2026"}]} path="/polls"/>
   <div className="poll-status-panel">
    <div>
     <div className="eyebrow">NATIONAL CANDIDATE VOTE-INTENTION ESTIMATE</div>
     <div className="poll-status-value">{average?"POLLING AVERAGE AVAILABLE":"NOT YET CALCULATED"}</div>
     <p>{average?average.note:"As of 27 November 2026, the published records reviewed do not meet Sabi's entry rules for a final-ballot, national probability-sample average. The available presidential party-preference figures use non-random or undisclosed sampling; other national surveys measure turnout intention and election confidence, not candidate vote shares."}</p>
    </div>
    <div className="poll-status-meta">
     <div className="eyebrow">WHEN THE AVERAGE CAN APPEAR</div>
     <strong>3 independent qualifying pollsters</strong>
     <span>Final INEC candidate field · national probability sample · full methods · recent fieldwork</span>
    </div>
   </div>
   {average?<section className="poll-average-section">
    <div className="eyebrow">DESCRIPTIVE SUPPORT AVERAGE / NOT A FORECAST</div>
    <h2>REPORTED SURVEY SUPPORT.</h2>
    <p className="notice">{average.method}. This measurement does not estimate who will win.</p>
    <div className="poll-average-grid">{Object.entries(average.candidateShares).map(([name,value])=><div className="poll-average-row" key={name}><strong>{name}</strong><span>{value.toFixed(1)}%</span></div>)}</div>
    <div className="source-note">Based on {average.pollCount} independent pollsters. Updated {average.asOf}. {average.note}</div>
   </section>:null}
  </section>
  <section id="published-polls" className="profile-research">
   <div className="eyebrow"><span/>PUBLISHED POLL RECORDS / {partyPolls.length} PARTY-PREFERENCE WAVES</div>
   <h2>PARTY PREFERENCE<br/>IS NOT A BALLOT.</h2>
   <p className="notice">The two SBM waves below ask about party preference, not a vote between the final named presidential candidates. Their samples and published methods differ; Sabi displays them separately and does not average them or convert party shares into candidate support.</p>
   <div className="poll-record-grid">
    {partyPolls.map(poll=><article className="poll-record-card" key={poll.id}>
     <div className="eyebrow">{categoryLabel[poll.category]} / {poll.pollster}</div>
     <h3>{poll.title}</h3>
     <div className="poll-metadata-grid">
      <div><span>FIELDWORK</span><strong>{poll.fieldwork}</strong></div>
      <div><span>PUBLISHED</span><strong>{poll.publishedAt}</strong></div>
      <div><span>SAMPLE</span><strong>{poll.sampleSize?.toLocaleString("en-NG")||"Not published"}</strong></div>
      <div><span>GEOGRAPHY</span><strong>{poll.geography}</strong></div>
      <div><span>MODE</span><strong>{poll.mode}</strong></div>
      <div><span>MARGIN OF ERROR</span><strong>{poll.marginOfError}</strong></div>
     </div>
     <div className="poll-results-list">
      {poll.results.map(result=><div className="poll-result" key={result.label}>
       <div className="poll-result-head"><strong>{result.label}</strong><b>{result.value.toFixed(1)}%</b></div>
       <div className="poll-track"><span style={{width:Math.min(100,Math.max(0,result.value))+"%"}}/></div>
       {result.note?<small>{result.note}</small>:null}
      </div>)}
     </div>
     <p className="poll-method"><b>Who was asked:</b> {poll.population}</p>
     <p className="poll-method"><b>Sampling:</b> {poll.samplingMethod}</p>
     <div className="poll-limitations"><strong>LIMITATIONS</strong><ul>{poll.limitations.map(x=><li key={x}>{x}</li>)}</ul></div>
     <div className="poll-source-links"><a href={poll.sourceUrl} target="_blank" rel="noreferrer">OPEN POLL RECORD ↗</a>{poll.methodologyUrl?<a href={poll.methodologyUrl} target="_blank" rel="noreferrer">METHODOLOGY / SOURCE ↗</a>:null}</div>
     <div className="poll-ineligible">NOT INCLUDED IN THE NATIONAL CANDIDATE-SUPPORT AVERAGE</div>
    </article>)}
   </div>
  </section>
  <section className="profile-research">
   <div className="eyebrow"><span/>VOTER READINESS & ELECTION CONFIDENCE</div>
   <h2>HOW VOTERS VIEW<br/>THE PROCESS.</h2>
   <p className="notice">These surveys ask different questions from candidate vote intention. Results stay attached to their original subject and are not converted into support for any candidate or party.</p>
   <div className="poll-record-grid">
    {publicMood.map(poll=><article className="poll-record-card" key={poll.id}>
     <div className="eyebrow">{categoryLabel[poll.category]} / {poll.pollster}</div><h3>{poll.title}</h3>
     <div className="poll-metadata-grid">
      <div><span>FIELDWORK</span><strong>{poll.fieldwork}</strong></div><div><span>PUBLISHED</span><strong>{poll.publishedAt}</strong></div>
      <div><span>SAMPLE</span><strong>{poll.sampleSize?.toLocaleString("en-NG")||"Not published"}</strong></div><div><span>GEOGRAPHY</span><strong>{poll.geography}</strong></div>
      <div><span>MODE</span><strong>{poll.mode}</strong></div><div><span>MARGIN OF ERROR</span><strong>{poll.marginOfError}</strong></div>
     </div>
     <div className="poll-results-list">{poll.results.map(result=><div className="poll-result" key={result.label}>
      <div className="poll-result-head"><strong>{result.label}</strong><b>{result.value.toFixed(1)}%</b></div><div className="poll-track"><span style={{width:Math.min(100,Math.max(0,result.value))+"%"}}/></div>{result.note?<small>{result.note}</small>:null}
     </div>)}</div>
     <p className="poll-method"><b>Who was asked:</b> {poll.population}</p><p className="poll-method"><b>Sampling:</b> {poll.samplingMethod}</p>
     <div className="poll-limitations"><strong>LIMITATIONS</strong><ul>{poll.limitations.map(x=><li key={x}>{x}</li>)}</ul></div>
     <div className="poll-source-links"><a href={poll.sourceUrl} target="_blank" rel="noreferrer">OPEN PRIMARY RELEASE ↗</a>{poll.methodologyUrl?<a href={poll.methodologyUrl} target="_blank" rel="noreferrer">METHODOLOGY / CROSS-CHECK ↗</a>:null}</div>
     <div className="poll-ineligible">NOT A CANDIDATE VOTE-INTENTION POLL</div>
    </article>)}
   </div>
  </section>
  <section className="profile-research">
   <div className="eyebrow"><span/>THE INDEPENDENT ESTIMATOR / VERSION 1.0</div>
   <h2>NO GUESSWORK.<br/>NO MADE-UP ODDS.</h2>
   <p className="notice">Sabi's estimator is a transparent aggregation of eligible polling measurements. It is not an election forecast and will not publish a candidate's probability of winning.</p>
   <div className="poll-rules-list">{pollingEstimatorRules.map((rule,i)=><div key={rule}><b>{String(i+1).padStart(2,"0")}</b><p>{rule}</p></div>)}</div>
   <div className="source-note">Polling catalogue checked {pollingResearchCutoff}. Discovery cross-check: {pollingCatalogueSource.publisher}, last updated {pollingCatalogueSource.lastUpdated}. <a href={pollingCatalogueSource.url} target="_blank" rel="noreferrer">OPEN POLL CATALOGUE ↗</a>. Sabi preserves contradictory methodology details instead of silently resolving them.</div>
  </section>
  <section className="page-section"><div className="eyebrow"><span/>SEND A POLL OR CORRECTION</div><h2>GOT A POLL?<br/>SHOW US THE METHOD.</h2><p>Send the original release, questionnaire, fieldwork dates and sample design to the Sabi newsroom. We will list it only when its scope and limitations can be checked.</p><Link className="btn black" href="/sabi-check">SUBMIT A CLAIM OR SOURCE ↗</Link></section>
 </div>;
}
