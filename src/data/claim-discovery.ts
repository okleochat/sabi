import { claimResearchUpdates, type ClaimResearchUpdate } from "./claim-research-updates";

export type ClaimSpotlight = {
  id: string;
  title: string;
  claim: string;
  summary: string;
  topic: string;
  topicKey: string;
  subject: string;
  sourcePublisher: string;
  sourceTitle: string;
  sourceUrl: string;
  sourceDate: string;
  reportedAt: string;
  priority: number;
  featured: boolean;
  priorityReason: string;
  claimType: "public-statement" | "campaign-promise" | "election-information" | "statistics" | "policy";
  context: string;
  researchUpdate?: ClaimResearchUpdate;
  supportingSources?: Array<{ publisher: string; title: string; url: string }>;
};

// Editorially selected claims and live public debates with traceable coverage.
// "Trending" is an editorial radar, not a measured X engagement ranking.
const claimSpotlightRecords: ClaimSpotlight[] = [
  {
    id: "inec-voter-register-cleanup",
    title: "INEC removed 1.6 million invalid voter records. Does that settle the register concerns?",
    claim: "INEC said it removed 1,608,660 confirmed invalid registrations and 873 separate records belonging to verified deceased persons after reviewing the preliminary voters' register.",
    summary: "The commission also said 54 officials across 10 states had been identified for disciplinary action. The key questions are what the clean-up covered, how the reported irregularities were adjudicated, and what remains in the final register.",
    topic: "Elections & INEC",
    topicKey: "elections",
    subject: "INEC",
    sourcePublisher: "TheCable",
    sourceTitle: "INEC removes 1.6m invalid voter registrations, identifies 54 officials for disciplinary action",
    sourceUrl: "https://www.thecable.ng/inec-removes-1-6m-invalid-voter-registrations-identifies-54-officials-for-disciplinary-action/",
    sourceDate: "9 Nov 2026",
    reportedAt: "2026-11-09",
    priority: 5,
    featured: true,
    priorityReason: "The credibility of the voter register affects every party and every voter.",
    claimType: "election-information",
    context: "INEC attributed the removals to biometric screening and complaints raised during the public display of the preliminary register. The figures do not, by themselves, prove that every concern about the register has been resolved.",
    supportingSources: [
      { publisher: "Premium Times", title: "INEC removes 1.6 million names from voters' register, fingers 54 officials", url: "https://www.premiumtimesng.com/news/top-news/924021-inec-removes-1-6-million-names-from-voters-register-fingers-54-officials.html" },
      { publisher: "Punch", title: "2027: INEC deletes 1.6m voter records, probes 54 officials", url: "https://punchng.com/2027-inec-deletes-1-6m-voter-records-probes-54-officials/" }
    ]
  },
  {
    id: "serap-inec-voter-register-lawsuit",
    title: "SERAP has sued over suspected AI-generated photos in the voters' register. What is actually alleged?",
    claim: "SERAP said it filed a suit asking the Federal High Court to compel the Nigeria Data Protection Commission to investigate suspected AI-generated photographs and other alleged irregularities in INEC's preliminary voters' register.",
    summary: "The filing is evidence that a legal challenge was brought; it is not proof that the alleged manipulation occurred or that INEC deliberately altered the register. The court proceedings and any independent examination are the next evidence to follow.",
    topic: "Elections & INEC",
    topicKey: "elections",
    subject: "INEC / SERAP / NDPC",
    sourcePublisher: "Punch",
    sourceTitle: "SERAP sues NDPC, INEC over AI manipulation of voters' register",
    sourceUrl: "https://punchng.com/serap-sues-ndpc-inec-over-ai-manipulation-of-voters-register/",
    sourceDate: "22 Nov 2026",
    reportedAt: "2026-11-22",
    priority: 5,
    featured: true,
    priorityReason: "The allegations concern voter data, privacy and confidence in the electoral register.",
    claimType: "election-information",
    context: "The suit asks for an independent investigation into suspected irregularities. The allegations remain allegations unless established by evidence or a court finding.",
    supportingSources: [
      { publisher: "The Guardian", title: "SERAP sues INEC and NDPC over alleged manipulation of voters’ register", url: "https://guardian.ng/news/serap-sues-ndpc-inec-over-alleged-manipulation-of-voters-register/" },
      { publisher: "Channels Television", title: "SERAP asks Tinubu to order probe into suspected AI-generated voter photos", url: "https://www.channelstv.com/2026/11/01/serap-asks-tinubu-to-order-probe-into-suspected-ai-generated-voter-photos/" }
    ]
  },
  {
    id: "peace-accord-109-breaches",
    title: "The National Peace Committee recorded 109 Peace Accord breaches. What did it count?",
    claim: "A National Peace Committee monitoring report recorded 109 breaches of the National Peace Accord across 26 states and the Federal Capital Territory between 19 August and 27 October 2026.",
    summary: "The reported breaches included political violence and thuggery, as well as misinformation and disinformation. The underlying incident list and classification matter: a breach count is not the same thing as a count of confirmed crimes or election results being manipulated.",
    topic: "Election safety",
    topicKey: "security",
    subject: "National Peace Committee",
    sourcePublisher: "The Punch",
    sourceTitle: "2027: Abdulsalami panel flags 109 breaches, warns of election violence",
    sourceUrl: "https://punchng.com/2027-abdulsalami-panel-flags-109-breaches-warns-of-election-violence/",
    sourceDate: "11 Nov 2026",
    reportedAt: "2026-11-11",
    priority: 5,
    featured: true,
    priorityReason: "Political violence and intimidation can directly restrict civic participation.",
    claimType: "statistics",
    context: "The report attributed 33 incidents to political violence and thuggery and 29 to misinformation and disinformation. Kaduna, Edo and Enugu were identified as flashpoints. Sabi should obtain and inspect the underlying monitoring report before drawing wider conclusions."
  },
  {
    id: "fashola-11m-electricity-access",
    title: "Fashola says 11 million Nigerians gained electricity access during his four years as power minister.",
    claim: "Babatunde Fashola said more than 11 million Nigerians were connected to electricity supply for the first time during his 2015–2019 tenure overseeing the power sector.",
    summary: "This is an attributed figure from a recent interview. To assess it properly, we need to establish what 'connected' means, which programme and dataset were counted, and whether the figure represents people, households or new connections.",
    topic: "Power & infrastructure",
    topicKey: "power",
    subject: "Babatunde Fashola",
    sourcePublisher: "ARISE News",
    sourceTitle: "Fashola: I’m proud of connecting over 11 million Nigerians to electricity in four years",
    sourceUrl: "https://www.arise.tv/fashola-im-proud-of-connecting-over-11-million-nigerians-to-electricity-in-four-years/",
    sourceDate: "27 Nov 2026",
    reportedAt: "2026-11-27",
    priority: 4,
    featured: true,
    priorityReason: "The number is being used in a live debate about electricity-sector performance and access.",
    claimType: "statistics",
    context: "Fashola described the figure in an ARISE News interview. It is currently presented here as his attributed claim, not as an independently verified count of new household connections or reliable electricity supply."
  },
  {
    id: "tinubu-adequate-or-24-hour-electricity",
    title: "Did Tinubu promise 24-hour electricity—or electricity and an end to estimated billing?",
    claim: "A recording of Tinubu's 2023 campaign remarks includes a promise that Nigerians would have electricity and would no longer pay estimated bills; Fashola argued in November 2026 that the wording did not promise 24-hour electricity.",
    summary: "The original recording, the complete surrounding remarks and the different interpretations should be compared. Whether the administration has delivered on electricity access, reliability and metering is a separate performance question.",
    topic: "Power & infrastructure",
    topicKey: "power",
    subject: "Bola Ahmed Tinubu / Babatunde Fashola",
    sourcePublisher: "Channels Television",
    sourceTitle: "I guarantee you improvement in electricity, Tinubu tells Nigerians at Oyo presidential campaign rally",
    sourceUrl: "https://www.channelstv.com/2026/11/21/i-guarantee-you-improvement-in-electricity-tinubu-tells-nigerians-at-oyo-presidential-campaign-rally/",
    sourceDate: "21 Nov 2026",
    reportedAt: "2026-11-21",
    priority: 4,
    featured: true,
    priorityReason: "It separates the exact wording of a campaign promise from the question of whether power supply improved.",
    claimType: "public-statement",
    context: "Punch reported Fashola's response that the campaign clip included a qualification about providing adequate reasons for non-delivery, and that he did not hear a specific 24-hour commitment.",
    supportingSources: [
      { publisher: "Punch", title: "Tinubu never promised 24-hour electricity, says Fashola", url: "https://punchng.com/tinubu-never-promised-24-hour-electricity-says-fashola/" },
      { publisher: "Channels Television", title: "Makinde slams Fashola for defending Tinubu’s 'failed' electricity promise", url: "https://www.channelstv.com/2026/11/21/makinde-slams-fashola-for-defending-tinubus-failed-electricity-promise/" }
    ]
  },
  {
    id: "obi-kwankwaso-10000mw-pledge",
    title: "Obi and Kwankwaso pledge 10,000 MW across generation, transmission and distribution.",
    claim: "Peter Obi said a government led by him and Rabiu Kwankwaso would generate, transmit and distribute at least 10,000 megawatts of electricity during their tenure if elected.",
    summary: "The pledge is specific enough to track, but the three stages are not interchangeable. A meaningful assessment needs a baseline, delivery timetable, transmission and distribution capacity, financing and a definition of whether the target is installed, available or actually delivered power.",
    topic: "Power & infrastructure",
    topicKey: "power",
    subject: "Peter Obi / Rabiu Kwankwaso",
    sourcePublisher: "BusinessDay",
    sourceTitle: "Obi, Kwankwaso pledge 10,000MW as Nigeria’s power deficit persists",
    sourceUrl: "https://businessday.ng/news/article/obi-kwankwaso-pledge-10000mw-as-nigerias-power-deficit-persists/",
    sourceDate: "21 Nov 2026",
    reportedAt: "2026-11-21",
    priority: 4,
    featured: true,
    priorityReason: "The number is measurable, and the pledge covers the full electricity value chain.",
    claimType: "campaign-promise",
    context: "The reported statement was made at a town hall in Onitsha. The approximately 4,000 MW baseline quoted alongside the pledge also needs a date and a clear measure before it is used for comparison.",
    supportingSources: [
      { publisher: "Punch", title: "Obi, Kwankwaso pledge 10,000MW power supply", url: "https://punchng.com/obi-kwankwaso-pledge-10000mw-power-supply/" }
    ]
  },
  {
    id: "obi-health-school-infrastructure-pledge",
    title: "Obi pledges 10,000 primary healthcare centres and 40,000 classroom blocks.",
    claim: "Peter Obi said that if elected president, his administration would build 10,000 primary healthcare centres and 40,000 primary school blocks nationwide.",
    summary: "These are campaign commitments, not completed projects. They can be tracked against a costed plan, ward-by-ward locations, staffing, equipment, construction standards, funding and delivery milestones.",
    topic: "Health & education",
    topicKey: "services",
    subject: "Peter Obi",
    sourcePublisher: "TheCable",
    sourceTitle: "Obi says he’ll build 10,000 PHCs, 40,000 classroom blocks nationwide if elected president",
    sourceUrl: "https://www.thecable.ng/obi-promises-construction-of-10000-phcs-40000-classroom-blocks-nationwide-if-elected-president/",
    sourceDate: "20 Nov 2026",
    reportedAt: "2026-11-20",
    priority: 3,
    featured: false,
    priorityReason: "The numerical pledges can be assessed against budgets, project locations and measurable delivery.",
    claimType: "campaign-promise",
    context: "The report says Obi outlined the pledges at a town hall in Anambra. His stated aim was a functional primary healthcare centre in every ward and additional classrooms; the full implementation plan and costing should be obtained."
  },
  {
    id: "opposition-unity-pact-talks",
    title: "Are opposition leaders forming a common ticket—or agreeing only to cooperate?",
    claim: "Six opposition parties have been consulting presidential candidates including Atiku Abubakar, Peter Obi and Seyi Makinde, with a summit scheduled for 30 November 2026 to discuss a unity pact.",
    summary: "Public reporting confirms consultations and a planned summit, but does not establish that the parties have agreed a joint presidential candidate or merged into one party. That distinction is central to several claims circulating online.",
    topic: "Parties & alliances",
    topicKey: "parties",
    subject: "ADC / NDC / APM / opposition coalition",
    sourcePublisher: "Nigeria Info FM",
    sourceTitle: "Atiku, Obi, Makinde expected to sign opposition unity pact on Monday",
    sourceUrl: "https://www.nigeriainfo.fm/news/2027-elections/atiku-obi-makinde-expected-to-sign-opposition-unity-pact-on-monday/",
    sourceDate: "27 Nov 2026",
    reportedAt: "2026-11-27",
    priority: 5,
    featured: true,
    priorityReason: "The proposed pact could change the opposition's electoral strategy, but its actual terms must be seen before describing it as a merger or joint ticket.",
    claimType: "public-statement",
    context: "The reported summit is scheduled for Monday, 30 November 2026. Earlier reporting said consultations had occurred but no common ticket or programme had been announced.",
    supportingSources: [
      { publisher: "Premium Times", title: "PT State of the Race: Atiku–Makinde talks face ballot deadlines, ADC crisis", url: "https://www.premiumtimesng.com/features-and-interviews/925593-pt-state-of-the-race-atiku-makinde-talks-face-ballot-deadlines-adc-crisis.html" },
      { publisher: "Punch", title: "Makinde confirms ongoing talks on 2027 opposition alliance", url: "https://punchng.com/makinde-confirms-ongoing-talks-on-2027-opposition-alliance/" }
    ]
  },
  {
    id: "atiku-withdrawal-after-supporters-endorse-obi",
    title: "Did Atiku withdraw from the 2027 race after a former support coalition endorsed Obi?",
    claim: "A former Atiku support coalition endorsed Peter Obi's NDC ticket, leading to claims that Atiku had withdrawn from the 2027 presidential race.",
    summary: "Atiku publicly denied withdrawing and said a support group could not make that decision on his behalf. The endorsement by a group and a candidate's formal withdrawal are different events; Atiku's separate ADC nomination litigation is also a distinct issue.",
    topic: "Candidates & parties",
    topicKey: "candidates",
    subject: "Atiku Abubakar / Peter Obi",
    sourcePublisher: "Premium Times",
    sourceTitle: "2027: Atiku denies quitting race after support group backs Obi for president",
    sourceUrl: "https://www.premiumtimesng.com/news/top-news/927255-2027-atiku-denies-quitting-race-after-support-group-backs-obi-for-president.html",
    sourceDate: "22 Nov 2026",
    reportedAt: "2026-11-22",
    priority: 4,
    featured: true,
    priorityReason: "The claim confuses a support group's endorsement with the legal status of a presidential candidate.",
    claimType: "election-information",
    context: "Premium Times reports Atiku's denial, the group's endorsement and a separate legal dispute concerning the ADC leadership and nomination. Sabi should keep those issues separate."
  },
  {
    id: "atiku-nysc-certificate-amendment-case",
    title: "The court rejected Atiku's request to amend the NYSC certificate suit. What did it actually decide?",
    claim: "A Federal High Court dismissed an application by Atiku Abubakar and the ADC to amend their suit challenging Tinubu's eligibility over an alleged NYSC certificate forgery.",
    summary: "The reported ruling concerned the proposed amendment to the case. It should not be described as a court finding that the certificate was forged, or as a final determination of every issue in the substantive suit.",
    topic: "Courts & eligibility",
    topicKey: "courts",
    subject: "Atiku Abubakar / ADC / Bola Ahmed Tinubu",
    sourcePublisher: "TheCable",
    sourceTitle: "Court dismisses bid by Atiku, ADC to amend suit against Tinubu over 'forged NYSC certificate'",
    sourceUrl: "https://www.thecable.ng/court-dismisses-atiku-adc-bid-to-amend-suit-against-tinubu-over-forged-nysc-certificate/",
    sourceDate: "20 Nov 2026",
    reportedAt: "2026-11-20",
    priority: 4,
    featured: false,
    priorityReason: "The scope of a court ruling is often distorted when a procedural decision is presented as a finding on the underlying allegation.",
    claimType: "election-information",
    context: "TheCable reported that the judge rejected proposed amendments as introducing new facts after the defendants had responded. This card is about the scope of that ruling, not the truth of the underlying allegation."
  }
];

export const claimSpotlights: ClaimSpotlight[] = claimSpotlightRecords.map(item => ({
  ...item,
  researchUpdate: claimResearchUpdates[item.id]
}));
