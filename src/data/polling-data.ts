export type PollCategory = "party-preference" | "candidate-vote-intention" | "turnout-confidence" | "election-confidence" | "government-approval";
export type PollResult = {label:string; value:number; unit:"percent"; note?:string};
export type CandidateSentimentResult = {candidate:string; measure:"net-favourability"; value:number; unit:"points"; note?:string};
export type PollRecord = {
  id:string;
  title:string;
  pollster:string;
  category:PollCategory;
  fieldwork:string;
  publishedAt:string;
  sampleSize:number|null;
  population:string;
  geography:string;
  mode:string;
  samplingMethod:string;
  marginOfError:string;
  sponsor:string;
  question?:string;
  results:PollResult[];
  candidateSentiment?:CandidateSentimentResult[];
  sourceUrl:string;
  methodologyUrl?:string;
  limitations:string[];
  finalBallotMatched:boolean;
  probabilitySample:boolean;
  methodologyPublished:boolean;
  nationalScope:boolean;
  eligibleForCandidateAverage:boolean;
};

export const pollingResearchCutoff = "2026-11-28";
export const pollingCatalogueSource = {
  publisher:"OpenPolls Africa",
  title:"Nigeria 2027 opinion-poll catalogue",
  lastUpdated:"2026-11-15",
  url:"https://openpolls.africa/polls",
  note:"Sabi uses this as a discovery and cross-check index, not as a polling authority. Every underlying survey is linked separately and displayed with its stated limitations.",
};

export const polls:PollRecord[] = [
  {
    id:"sbm-voter-sentiment-wave-1",
    title:"SBM Voter Sentiment Tracker — Wave 1",
    pollster:"SBM Intelligence",
    category:"party-preference",
    fieldwork:"Third week of May 2026",
    publishedAt:"2026-06-11",
    sampleSize:829,
    population:"Eligible voters approached in public places",
    geography:"8 states and the FCT; all six geopolitical zones represented",
    mode:"Face-to-face",
    samplingMethod:"Interviews in markets, schools, viewing centres and hotels; no probability sampling method is described in the published summary.",
    marginOfError:"Not published",
    sponsor:"Not stated in the catalogue entry",
    results:[
      {label:"NDC",value:57.4,unit:"percent"},
      {label:"APC",value:11.3,unit:"percent"},
      {label:"ADC",value:10.3,unit:"percent"},
      {label:"Undecided",value:11.3,unit:"percent"},
      {label:"Other / unreported categories",value:9.7,unit:"percent",note:"The pollster's free summary does not disaggregate this remainder."},
    ],
    candidateSentiment:[
      {candidate:"Bola Ahmed Tinubu",measure:"net-favourability",value:-58.5,unit:"points",note:"SBM reports a net favourability score, not a vote share."},
      {candidate:"Peter Obi",measure:"net-favourability",value:58.3,unit:"points",note:"SBM reports a net favourability score, not a vote share."},
    ],
    sourceUrl:"https://vst.sbmintel.com/2026/06/11/the-sbm-voter-sentiment-tracker-how-nigeria-may-vote/",
    limitations:[
      "The published NDC/APC/ADC/undecided figures are party preference, while the separate candidate measurements are net favourability. Neither is a final-ballot national vote-intention average.",
      "The sample is not designed to represent all eligible voters because respondents were approached in public places.",
      "No margin of error is published.",
      "The fieldwork predates the final INEC presidential candidate list.",
    ],
    finalBallotMatched:false,
    probabilitySample:false,
    methodologyPublished:true,
    nationalScope:false,
    eligibleForCandidateAverage:false,
  },
  {
    id:"sbm-voter-sentiment-wave-2",
    title:"SBM Voter Sentiment Tracker — Wave 2",
    pollster:"SBM Intelligence",
    category:"party-preference",
    fieldwork:"September 2026",
    publishedAt:"2026-09-21",
    sampleSize:1103,
    population:"Survey respondents in 12 states and the FCT",
    geography:"12 states and the FCT; all six geopolitical zones represented",
    mode:"Not stated",
    samplingMethod:"Sampling method not stated in the published summary.",
    marginOfError:"Not published",
    sponsor:"Not stated in the catalogue entry",
    results:[
      {label:"NDC",value:42.2,unit:"percent"},
      {label:"APC",value:25.5,unit:"percent"},
      {label:"Other / unreported categories",value:32.3,unit:"percent",note:"The free summary publishes only the two leading party shares; the remainder is not broken down."},
    ],
    candidateSentiment:[
      {candidate:"Bola Ahmed Tinubu",measure:"net-favourability",value:-3.3,unit:"points"},
      {candidate:"Peter Obi",measure:"net-favourability",value:52.8,unit:"points"},
      {candidate:"Rabiu Kwankwaso",measure:"net-favourability",value:1.6,unit:"points"},
      {candidate:"Rotimi Amaechi",measure:"net-favourability",value:-27.7,unit:"points"},
    ],
    sourceUrl:"https://www.sbmintel.com/2026/09/the-sbm-voter-sentiment-tracker-a-narrower-race/",
    limitations:[
      "This measures party preference and separately reports candidate net favourability. Neither measure is a final-ballot national vote-intention average.",
      "The sampling method, mode and margin of error are not stated in the published summary.",
      "The free summary reports only the two leading parties; the remaining 32.3% is not disaggregated.",
      "It predates the final INEC presidential candidate list.",
    ],
    finalBallotMatched:false,
    probabilitySample:false,
    methodologyPublished:false,
    nationalScope:false,
    eligibleForCandidateAverage:false,
  },
  {
    id:"yiaga-nvis-round-3",
    title:"National Voting Intentions Survey — Round 3 (NVIS 3.0)",
    pollster:"Yiaga Africa; fieldwork by Insights & Strategy Consulting with Africa Polling Institute",
    category:"turnout-confidence",
    fieldwork:"September 2026",
    publishedAt:"2026-10-07",
    sampleSize:2470,
    population:"Nigerians aged 18 and above",
    geography:"All 36 states and the FCT",
    mode:"2,066 telephone interviews and 404 face-to-face rural interviews",
    samplingMethod:"Telephone sample stratified by zone and state in proportion to NPC 2024 adult projections; random dialling and validated contact lists. Rural face-to-face interviews used one convenience-selected site per zone; weighted by sex within geopolitical zone.",
    marginOfError:"±2.1 percentage points at 95% confidence is described by the report as a nominal guide for the combined sample; the rural component was not randomly selected.",
    sponsor:"Commissioned by Yiaga Africa with support from the European Union (EU-SDGN II)",
    results:[
      {
            "label": "Likely or very likely to vote",
            "value": 84,
            "unit": "percent",
            "note": "Main survey story and contemporaneous reporting; not candidate vote intention."
      },
      {
            "label": "Very likely to vote (within the 84%)",
            "value": 47,
            "unit": "percent"
      },
      {
            "label": "Likely to vote and very certain of candidate choice",
            "value": 41,
            "unit": "percent",
            "note": "Choice certainty is not a candidate vote share."
      },
      {
            "label": "Fear of violence could prevent voting",
            "value": 61,
            "unit": "percent"
      },
      {
            "label": "Confident in INEC to conduct credible elections",
            "value": 34,
            "unit": "percent",
            "note": "Detailed story and contemporaneous reports; landing-page overview shows a conflicting 29%."
      },
      {
            "label": "Disapprove of the President's performance",
            "value": 54,
            "unit": "percent",
            "note": "Government approval measure, not candidate favourability."
      },
      {
            "label": "Rate the economy poor or very poor",
            "value": 71,
            "unit": "percent",
            "note": "Economic sentiment, not vote intention."
      },
      {
            "label": "Want a change in national leadership",
            "value": 49,
            "unit": "percent"
      },
      {
            "label": "Identify the economy and jobs as a leading issue",
            "value": 38,
            "unit": "percent"
      },
      {
            "label": "Identify security as a leading issue",
            "value": 36,
            "unit": "percent"
      }
],
    sourceUrl:"https://yiaga.org/resources/willing-but-wary-report-of-the-national-voting-intentions",
    methodologyUrl:"https://nvis.yiaga.org/",
    limitations:[
      "Yiaga's landing page is internally inconsistent: its main interactive story and contemporaneous reporting show 84% likely/very likely to vote, 61% fearing violence could deter them, and 34% confident in INEC, while the landing-page Big Picture callouts show 71%, 52%, and 29% respectively. Sabi records the detailed-story figures and flags the conflict.",
      "The OpenPolls catalogue also lists 29% undecided on candidate choice and 44% not settled on a choice, but the original question wording and denominator were not located in the visible primary summary; those secondary-only figures are excluded from verified results pending the full report.",
      "The combined margin of error is a nominal guide because the 404 rural face-to-face interviews were not randomly selected.",
      "This survey contains no candidate vote-share estimate and must not be used as one."
],
    finalBallotMatched:false,
    probabilitySample:false,
    methodologyPublished:true,
    nationalScope:true,
    eligibleForCandidateAverage:false,
  },
  {
    id:"afrobarometer-nigeria-2024-election-expectations",
    title:"Afrobarometer Nigeria survey (June–July 2024) — 2027 election expectations, released November 2026",
    pollster:"Afrobarometer; Nigeria network led by NOIPolls",
    category:"election-confidence",
    fieldwork:"June–July 2024 (Nigeria Round 10 fieldwork; release published 11 November 2026)",
    publishedAt:"2026-11-11",
    sampleSize:1600,
    population:"Adult Nigerians",
    geography:"Nigeria, nationally representative",
    mode:"Face-to-face household interviews",
    samplingMethod:"Nationally representative, random, stratified probability sample of 1,600 adult Nigerians.",
    marginOfError:"±2.5 percentage points at 95% confidence",
    sponsor:"Afrobarometer Nigeria network",
    results:[
      {
            "label": "Likely to vote in 2027",
            "value": 64,
            "unit": "percent",
            "note": "Turnout intention, not candidate vote intention."
      },
      {
            "label": "Very likely to vote",
            "value": 48,
            "unit": "percent"
      },
      {
            "label": "Expect the 2027 election to be largely free and fair",
            "value": 37,
            "unit": "percent"
      },
      {
            "label": "Expect the 2027 election not to be free and fair or to have major problems",
            "value": 48,
            "unit": "percent"
      },
      {
            "label": "Say vote-buying is likely in the 2027 election",
            "value": 89,
            "unit": "percent"
      },
      {
            "label": "Expect valid votes may not be counted accurately",
            "value": 79,
            "unit": "percent"
      },
      {
            "label": "Expect political violence during the election",
            "value": 79,
            "unit": "percent"
      },
      {
            "label": "Expect electoral laws may be disregarded",
            "value": 78,
            "unit": "percent"
      },
      {
            "label": "Expect incorrect results may be announced",
            "value": 78,
            "unit": "percent"
      },
      {
            "label": "Say candidate policy positions influence their vote",
            "value": 92,
            "unit": "percent",
            "note": "Voting motivation, not candidate preference."
      }
],
    sourceUrl:"https://www.afrobarometer.org/wp-content/uploads/2026/11/News-release-Nigerians-doubt-quality-of-upcoming-election-Afrobarometer-bh-11nov26.pdf",
    methodologyUrl:"https://www.afrobarometer.org/wp-content/uploads/2025/08/R10-Summary-of-results-Nigeria-Afrobarometer-bh-7aug25.pdf",
    limitations:[
      "The news release was published 11 November 2026, but its own methodology section says the 1,600-person Nigeria fieldwork took place in June–July 2024; the official Nigeria Round 10 summary confirms this is the 2024 survey baseline. The 2026 publication date must not be presented as 2026 fieldwork or current opinion.",
      "This is an election-expectations and turnout survey, not a candidate vote-intention poll, party-preference poll or favourability rating."
],
    finalBallotMatched:false,
    probabilitySample:true,
    methodologyPublished:true,
    nationalScope:true,
    eligibleForCandidateAverage:false,
  },
{
  "id": "noi-polls-october-2026-government-approval",
  "title": "NOIPolls October 2026 federal-government performance approval",
  "pollster": "NOIPolls",
  "category": "government-approval",
  "fieldwork": "October 2026 (exact field dates not disclosed)",
  "publishedAt": "2026-11-13",
  "sampleSize": null,
  "population": "Nigerians; the October release does not specify age or voter eligibility.",
  "geography": "Described as a national governance tracker; exact state coverage not disclosed in the release.",
  "mode": "Not stated for this wave.",
  "samplingMethod": "Wave-specific sample design, respondent selection, weighting and response rate are not disclosed in the October release. General NOIPolls methodology cannot be assumed to describe this particular monthly wave.",
  "marginOfError": "Not published for the October 2026 wave.",
  "sponsor": "Not stated.",
  "sourceUrl": "https://www.noi-polls.com/post/governance-approval-rating-plateaus-at-41-for-2nd-straight-month",
  "results": [
    {
      "label": "Approve of federal-government performance",
      "value": 41,
      "unit": "percent",
      "note": "18% strongly approve and 23% somewhat approve."
    },
    {
      "label": "Disapprove of federal-government performance",
      "value": 54,
      "unit": "percent",
      "note": "33% strongly disapprove and 21% somewhat disapprove."
    },
    {
      "label": "Neutral or undecided",
      "value": 5,
      "unit": "percent"
    }
  ],
  "limitations": [
    "This is a government-performance approval measure, not President Tinubu's personal favourability, candidate vote intention or party preference.",
    "The official release does not disclose the October wave's sample size, exact field dates, response rate, weighting, mode or margin of error. Do not classify it as a verified probability sample or average it with candidate polls until wave-level methodology is supplied."
  ],
  "finalBallotMatched": false,
  "probabilitySample": false,
  "methodologyPublished": false,
  "nationalScope": true,
  "eligibleForCandidateAverage": false
},

{
 id:"oxford-metro-national-trust-poll-2026-09",
 title:"Oxford-Metro Analytics National Trust Poll",
 pollster:"Oxford-Metro Analytics",
 category:"candidate-vote-intention",
 publishedAt:"2026-09-08",
 fieldwork:"Closed 7 September 2026; start date not stated in the release located",
 sampleSize:69110,
 population:"Voluntary online participants; not a probability sample of Nigeria's eligible voters",
 geography:"State and FCT results reported; 56 diaspora responses were excluded from regional tallies; Lagos and the FCT accounted for 54.44% of responses",
 mode:"Open online participation",
 samplingMethod:"Self-selected online participation; results unweighted; no probability sampling frame or weighting reported",
 marginOfError:"Not applicable; non-probability self-selected responses",
 sponsor:"Not stated in the release; the results were distributed in a Newsfile press release",
 question:"The release reports candidate response totals but does not reproduce the exact vote-intention question wording.",
 results:[
  {label:"Bola Ahmed Tinubu",value:35.41,unit:"percent"},
  {label:"Peter Obi",value:33.86,unit:"percent"},
  {label:"Atiku Abubakar",value:26.67,unit:"percent"},
  {label:"Other candidates / remaining options",value:4.06,unit:"percent"}
 ],
 limitations:[
  "This was an opt-in, self-selected online exercise, not a probability sample of the electorate.",
  "The figures are unweighted and cannot be generalised to Nigerian voters; no conventional margin of error applies.",
  "Lagos and the FCT contributed 54.44% of all responses, creating strong geographic concentration.",
  "The final dataset included 56 diaspora responses; the release says these were excluded from domestic regional tallies.",
  "The exact question wording, recruitment frame and full questionnaire were not published in the release located.",
  "The fieldwork ended before INEC's final candidate list; the candidate field is not matched to the final ballot.",
  "Not eligible for a national candidate-vote average, winner prediction or probability estimate."
 ],
 probabilitySample:false,
 methodologyPublished:false,
 nationalScope:true,
 finalBallotMatched:false,
 eligibleForCandidateAverage:false,
 sourceUrl:"https://www.newsfilecorp.com/release/313361",
 methodologyUrl:"https://openpolls.africa/polls"
},
{
 id:"tinubu-must-go-movement-online-ticket-poll-2026-09",
 title:"Tinubu Must Go movement online ticket poll",
 pollster:"Tinubu Must Go movement",
 category:"candidate-vote-intention",
 publishedAt:"2026-09-26",
 fieldwork:"24–25 September 2026; 24-hour online exercise",
 sampleSize:109799,
 population:"People who voluntarily participated online; no eligible-voter sampling frame was published",
 geography:"Online; geographic distribution was not published in the reports located",
 mode:"Opt-in online poll",
 samplingMethod:"Self-selected online exercise organised by a movement publicly opposing the incumbent administration; no probability sampling or weighting reported",
 marginOfError:"Not applicable; non-probability self-selected responses",
 sponsor:"Tinubu Must Go movement; no independent sponsor identified",
 question:"Press reports describe a choice among leading opposition presidential tickets; the exact wording was not published, and whether Tinubu was offered as an option is not stated.",
 results:[
  {label:"Atiku Abubakar / Rotimi Amaechi ticket",value:73.6,unit:"percent"},
  {label:"Peter Obi / Rabiu Kwankwaso ticket",value:22.3,unit:"percent"},
  {label:"Other candidates / options",value:4.1,unit:"percent"}
 ],
 limitations:[
  "This was a movement-run, self-selected online exercise, not a probability sample of Nigerian voters.",
  "The organiser publicly opposed the incumbent; its position in the political contest must be disclosed.",
  "The published reports describe a choice among leading opposition tickets. Whether Bola Tinubu was an option is not stated.",
  "No full questionnaire, recruitment frame, geographic distribution, weighting or independent methodology report was located.",
  "No conventional margin of error applies.",
  "The ticket field was not matched to INEC's final candidate list.",
  "Not eligible for a national candidate-vote average, winner prediction or probability estimate."
 ],
 probabilitySample:false,
 methodologyPublished:false,
 nationalScope:false,
 finalBallotMatched:false,
 eligibleForCandidateAverage:false,
 sourceUrl:"https://www.vanguardngr.com/2026/09/tinubu-must-go-poll-puts-atiku-ahead-of-obi-others-for-2027/",
 methodologyUrl:"https://openpolls.africa/polls"
}
];

export type CandidateVotePoll = PollRecord & {
  category:"candidate-vote-intention";
  eligibleForCandidateAverage:true;
  pollsterId:string;
  effectiveSampleSize:number;
  fieldworkEndDate:string;
  candidateShares:Record<string,number>;
};

export type PollingAverage = {
  asOf:string;
  pollCount:number;
  pollsters:string[];
  candidateShares:Record<string,number>;
  method:string;
  note:string;
};

/**
 * Descriptive aggregation of comparable, published candidate-support polls.
 * It does not estimate who will win, calculate electoral probabilities, or
 * turn approval/party preference/online votes into candidate vote intention.
 */
export function calculatePollingAverage(
  sourcePolls:PollRecord[] = polls,
  asOf = new Date("2026-11-27T00:00:00Z"),
):PollingAverage|null {
  const eligible=sourcePolls.filter((poll):poll is CandidateVotePoll =>
    poll.category==="candidate-vote-intention" &&
    poll.eligibleForCandidateAverage &&
    poll.finalBallotMatched &&
    poll.probabilitySample &&
    poll.methodologyPublished &&
    poll.nationalScope
  );
  const latestByPollster=new Map<string,CandidateVotePoll>();
  for(const poll of eligible){
    const previous=latestByPollster.get(poll.pollsterId);
    if(!previous||poll.fieldwork>previous.fieldwork)latestByPollster.set(poll.pollsterId,poll);
  }
  const comparable=[...latestByPollster.values()];
  const pollsters=[...new Set(comparable.map(p=>p.pollsterId))];
  if(comparable.length<3||pollsters.length<3)return null;

  const totals:Record<string,number>={};
  const weights:Record<string,number>={};
  for(const poll of comparable){
    const fieldworkEnd=new Date(poll.fieldworkEndDate+"T00:00:00Z");
    const ageDays=Math.max(0,(asOf.getTime()-fieldworkEnd.getTime())/86400000);
    const weight=Math.sqrt(poll.effectiveSampleSize)*Math.pow(0.5,ageDays/30);
    for(const [candidate,share] of Object.entries(poll.candidateShares)){
      totals[candidate]=(totals[candidate]||0)+share*weight;
      weights[candidate]=(weights[candidate]||0)+weight;
    }
  }
  const candidateShares:Record<string,number>={};
  for(const candidate of Object.keys(totals)){
    if(weights[candidate])candidateShares[candidate]=Math.round(totals[candidate]/weights[candidate]*10)/10;
  }
  return {
    asOf:asOf.toISOString().slice(0,10),
    pollCount:comparable.length,
    pollsters,
    candidateShares,
    method:"Latest qualifying national probability-sample poll per independent pollster; weight = square root of effective sample size × 30-day half-life recency factor.",
    note:"This is a descriptive weighted average of reported survey support only. It is not a forecast, win probability, electoral-college model or prediction of the result.",
  };
}

export const pollingEstimatorRules = [
  "Only candidate-vote-intention surveys naming the published INEC final candidate field can enter the national average.",
  "The survey must target Nigerian eligible voters nationally using a documented probability sample. Convenience, opt-in, campaign-run and self-selected online polls are excluded from the average but may be displayed separately with their limitations.",
  "The poll must publish fieldwork dates, sample size, questionnaire or exact vote-intention question, sampling design, mode, weighting and a source that can be checked.",
  "Use the latest qualifying wave per independent pollster to avoid repeatedly counting one organisation's overlapping samples.",
  "Descriptive weight = square root of effective sample size multiplied by a 30-day half-life recency factor. Any design effect or published effective sample size must be used where available.",
  "Publish an average only when at least three independent pollsters have qualifying polls in the comparison window. Otherwise display the polls separately and state why the average is withheld.",
  "Do not pool candidate vote intention with party preference, government approval, turnout intention, social-media polls, mock ballots or election-confidence surveys.",
  "Do not translate the average into a candidate's chance of winning, a forecasted winner, a state-by-state projection or a numerical electoral probability.",
  "Every displayed poll keeps its published date, fieldwork period, sample, population, geography, pollster, sponsor, method, margin of error and limitations.",
];
