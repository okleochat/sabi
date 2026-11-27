export type ClaimResearchUpdate = {
  label: string;
  summary: string;
  caveat: string;
  publishedSlug?: string;
  assessmentType?: string;
};

export const claimResearchUpdates: Record<string, ClaimResearchUpdate> = {
  "inec-voter-register-cleanup": {
    label: "REPORTED CLEAN-UP CONFIRMED; AGGREGATE DOES NOT RECONCILE",
    summary: "INEC's 1,608,660 invalid-registration figure is traceable to its reported breakdown. Adding the separately reported 873 deceased-person records gives 1,609,533, not the announced combined total of 1,609,553. A separate Punch report also described 876 earlier deceased-record removals plus 873 additional records, a different account that has not been reconciled.",
    caveat: "Ask INEC for a reconciled final table. The 54 officials were identified for disciplinary action, not reported as convicted."
  },
  "serap-inec-voter-register-lawsuit": {
    label: "COURT FILING CONFIRMED; MANIPULATION ALLEGATION NOT ESTABLISHED",
    summary: "SERAP confirmed suit FHC/ABJ/CS/2863/2026 against INEC and the data-protection regulator. SERAP's statement says INEC had reportedly flagged 268 records for review through ABIS. Separately, INEC reported adjudicating 268,000 public-objection cases. These are different figures and neither establishes how many photographs were AI-generated.",
    caveat: "A lawsuit and a request for an independent investigation do not prove deliberate electoral manipulation. No court finding establishing a manipulation plot was identified by 27 November 2026."
  },
  "peace-accord-109-breaches": {
    label: "COMMITTEE TALLY REPORTED; INCIDENTS NOT INDEPENDENTLY AUDITED",
    summary: "The National Peace Committee's monitoring report recorded 109 alleged Accord breaches across 26 states and the FCT. Published breakdowns list 33 violence/thuggery incidents, 29 misinformation/disinformation cases, 19 attacks on political activity or assets and 15 threats or intimidation cases.",
    caveat: "The count is the committee's reported monitoring tally, not 109 criminal convictions. Sabi has not reviewed the underlying incident-by-incident register."
  },
  "fashola-11m-electricity-access": {
    label: "INTERVIEW CONFIRMED; 11M FIGURE NOT INDEPENDENTLY SUBSTANTIATED",
    summary: "ARISE News confirms Fashola said more than 11 million people gained electricity access for the first time during his 2015–2019 tenure. The interview does not provide a reproducible programme-level calculation or define whether the number represents people, households or connections.",
    caveat: "National electricity-access rates cannot, on their own, verify the specific 11-million attribution. Request the underlying connection data and methodology."
  },
  "tinubu-adequate-or-24-hour-electricity": {
    label: "BROAD ELECTRICITY PROMISE CONFIRMED; '24-HOUR' IS NOT THE EXACT WORDING",
    summary: "The campaign recording played in the November 2026 interview includes Tinubu saying Nigerians must have electricity and should no longer pay estimated bills. The quoted passage does not expressly say '24-hour electricity'.",
    caveat: "This checks the wording, not delivery. Whether supply became more reliable or estimated billing declined requires a separate performance assessment."
  },
  "obi-kwankwaso-10000mw-pledge": {
    label: "CAMPAIGN PLEDGE CONFIRMED; DELIVERY NOT YET ASSESSABLE",
    summary: "Obi publicly pledged that an Obi–Kwankwaso government would generate, transmit and distribute at least 10,000 MW. NERC's Q2 2026 report recorded average grid-connected output of 4,022.40 MWh per hour, alongside a 62% national metering rate and 36% average DisCo ATC&C losses.",
    caveat: "The NERC figures are a dated Q2 baseline, not a live reading. The pledge needs a costed plan, milestones and clear definitions of generation, available capacity and power actually delivered."
  },
  "obi-health-school-infrastructure-pledge": {
    label: "CAMPAIGN PLEDGE CONFIRMED; DELIVERY NOT YET ASSESSABLE",
    summary: "Reports of Obi's 20 November Onitsha town hall confirm promises to establish 10,000 primary healthcare centres and build 40,000 primary school blocks if elected.",
    caveat: "The public statement is not a costed implementation plan. Funding, locations, staffing, equipment, construction standards and delivery dates remain to be demonstrated."
  },
  "opposition-unity-pact-talks": {
    label: "SUMMIT SCHEDULED; COMMON TICKET NOT YET AGREED",
    summary: "Organisers said six political groups were preparing for an Abuja summit on 30 November 2026 and had drafted documents for opposition cooperation. The published account does not establish a completed merger or an agreed common presidential candidate.",
    caveat: "This is the position reported on 27 November, before the scheduled summit. Update the record after the meeting and verify any signed text directly."
  },
  "atiku-withdrawal-after-supporters-endorse-obi": {
    label: "NO VOLUNTARY WITHDRAWAL CONFIRMED; NOMINATION IS A SEPARATE COURT ISSUE",
    summary: "Atiku publicly denied withdrawing after a former support coalition endorsed Obi. Section 31 of the Electoral Act 2026 requires a candidate's own signed notice and sworn affidavit for voluntary withdrawal. Separately, a Federal High Court had set aside the ADC leadership process and Atiku's nomination; the party appealed and sought a stay.",
    caveat: "The support group's endorsement is not Atiku's withdrawal. Do not describe his ADC nomination as legally settled while the separate appeal remains pending."
  },
  "atiku-nysc-certificate-amendment-case": {
    label: "PROCEDURAL APPLICATION DISMISSED; CERTIFICATE ALLEGATION NOT DECIDED",
    summary: "On 20 November, the Federal High Court rejected Atiku and ADC's application to amend their pre-election suit over Tinubu's NYSC certificate. The judge said the proposed changes introduced new facts outside the strict pre-election timetable and directed the parties to the substantive case.",
    caveat: "The amendment ruling did not establish that the certificate was forged or genuine. The substantive allegation remained unresolved; reporting said the hearing was fixed for 2 December 2026."
  }
};


export type ClaimPublicationMeta = {
  publishedSlug: string;
  title: string;
  verdict: string;
  assessmentType: string;
};

export const claimPublicationMeta: Record<string, ClaimPublicationMeta> = {
  "sabi-research-inec-register-cleanup-november-2026": {
    publishedSlug: "inec-voter-register-cleanup-november-2026",
    title: "INEC's voter-register clean-up: the 1.6 million figure and the 20-record discrepancy",
    verdict: "Mostly true — correction required",
    assessmentType: "Numerical claim / official register clean-up"
  },
  "sabi-research-serap-voter-register-lawsuit-november-2026": {
    publishedSlug: "serap-inec-ai-voter-register-lawsuit",
    title: "SERAP's lawsuit over suspected AI-generated voter photographs: what is confirmed?",
    verdict: "Filing confirmed; allegations unproven",
    assessmentType: "Legal filing / unresolved allegations"
  },
  "sabi-research-peace-accord-109-breaches-november-2026": {
    publishedSlug: "national-peace-committee-109-accord-breaches",
    title: "The National Peace Committee's 109 reported Peace Accord breaches",
    verdict: "Committee-reported tally confirmed",
    assessmentType: "Committee monitoring tally"
  },
  "sabi-research-fashola-11m-electricity-access-november-2026": {
    publishedSlug: "fashola-11-million-electricity-connections",
    title: "Fashola's claim that 11 million Nigerians gained electricity access",
    verdict: "Insufficient evidence for the exact figure",
    assessmentType: "Attributed statistical claim"
  },
  "sabi-research-tinubu-24-hour-electricity-wording-november-2026": {
    publishedSlug: "tinubu-24-hour-electricity-promise-wording",
    title: "Did Tinubu promise 24-hour electricity?",
    verdict: "Misleading as an exact quotation",
    assessmentType: "Campaign promise / wording"
  },
  "sabi-research-obi-kwankwaso-10000mw-pledge-november-2026": {
    publishedSlug: "obi-kwankwaso-10000mw-campaign-pledge",
    title: "Obi–Kwankwaso's 10,000 MW electricity pledge",
    verdict: "Campaign pledge confirmed; delivery not assessable",
    assessmentType: "Campaign promise"
  },
  "sabi-research-obi-10000-phc-40000-classrooms-november-2026": {
    publishedSlug: "obi-10000-phcs-40000-classroom-blocks-pledge",
    title: "Obi's pledge of 10,000 primary health centres and 40,000 classroom blocks",
    verdict: "Campaign pledge confirmed; delivery not assessable",
    assessmentType: "Campaign promise"
  },
  "sabi-research-opposition-unity-summit-november-2026": {
    publishedSlug: "opposition-unity-summit-30-november-2026",
    title: "Opposition unity talks: summit scheduled, common ticket unresolved",
    verdict: "Summit scheduled; pact pending",
    assessmentType: "Political negotiation / planned event"
  },
  "sabi-research-atiku-withdrawal-support-group-november-2026": {
    publishedSlug: "atiku-withdrawal-rumour-support-group-endorsement",
    title: "Did Atiku withdraw after former supporters endorsed Peter Obi?",
    verdict: "False as a claim of voluntary withdrawal",
    assessmentType: "Candidate withdrawal / party nomination status"
  },
  "sabi-research-atiku-nysc-amendment-ruling-november-2026": {
    publishedSlug: "atiku-nysc-certificate-amendment-ruling",
    title: "What the court decided in Atiku's NYSC certificate suit amendment application",
    verdict: "Procedural ruling confirmed; forgery allegation undecided",
    assessmentType: "Court ruling / procedural development"
  }
};

const researchDate = "2026-11-27T12:30:00.000Z";

export const reviewedClaimResearch: Array<Record<string, any>> = [
  {
    id: "sabi-research-inec-register-cleanup-november-2026",
    claim: "INEC said it removed 1,608,660 confirmed invalid voter registrations and 873 separate records belonging to verified deceased persons, bringing the total number of removed records to 1,609,553.",
    claimType: "statistics", assessmentType: "Numerical claim / official register clean-up", subject: "INEC", subjectKey: "inec", subjectType: "public-agency", impact: "neutral",
    status: "closed", reviewStatus: "published", reviewPriority: "high",
    researchNotes: "Sabi newsroom research update, 27 November 2026. TheCable's 9 November report reproduces the INEC chairman's account: 1,277,052 invalid registrations were excluded before publication; 217,722 of 268,000 complaint cases were invalidated; 50,278 were retained; and later screening found 113,886 more invalid registrations. The latter three invalidated groups total 331,608; 1,277,052 + 331,608 = 1,608,660. INEC separately reported 873 records for verified deceased persons but stated a combined figure of 1,609,553. The arithmetic is 1,608,660 + 873 = 1,609,533, a 20-record difference. Punch's 10 November report also gives a conflicting deceased-record account, referring to 876 records from an earlier review plus 873 additional records. Do not resolve the discrepancy by choosing one report without obtaining INEC's reconciled table. The 54 officials were identified for disciplinary action, including possible prosecution; the sources do not say that all were prosecuted or convicted.",
    reviewSummary: "The 1,608,660 invalid-registration figure is supported by the reported breakdown. The stated combined total is 20 too high on the stated components, and published reports also differ on the deceased-record count. Request INEC's reconciled final table before assigning a final verdict.",
    findings: "The narrow claim that INEC reported removing 1,608,660 invalid registrations is supported by the commission's published account as reproduced by TheCable and other outlets. The reported calculation is internally consistent: 1,277,052 registrations excluded before publication plus 331,608 further invalid registrations after complaints and additional screening equals 1,608,660.\n\nThe separate deceased-person figure is not reconciled across the reports. TheCable reproduces 873 verified deceased-person records as a separate category and a stated combined total of 1,609,553. Adding the two categories gives 1,609,533, not 1,609,553. Punch's report also refers to 876 records from an earlier removal and 873 additional records, which suggests that the deceased-record history needs clarification rather than a simple arithmetic correction alone.\n\nThe reported 54 officials were identified for disciplinary action, including possible prosecution. This is not evidence that 54 people were charged, tried or convicted. The newsroom should seek INEC's full reconciled table, the period and scope of the deceased-person records, and the administrative or prosecution outcome for the identified officials. No final public verdict is assigned in this research record.",
    verdict: "Mostly true — correction required",
    evidence: [
      { title: "INEC removes 1.6m invalid voter registrations, identifies 54 officials for disciplinary action", publisher: "TheCable, 9 November 2026", url: "https://www.thecable.ng/inec-removes-1-6m-invalid-voter-registrations-identifies-54-officials-for-disciplinary-action/", sourceType: "reported-official-briefing" },
      { title: "INEC deletes 1.6m invalid voter registrations", publisher: "Punch, 9 November 2026", url: "https://punchng.com/just-in-inec-deletes-1-6m-invalid-voter-registrations/", sourceType: "reported-official-briefing" },
      { title: "2027: INEC deletes 1.6m voter records, probes 54 officials", publisher: "Punch, 10 November 2026", url: "https://punchng.com/2027-inec-deletes-1-6m-voter-records-probes-54-officials/", sourceType: "reported-official-briefing" },
      { title: "INEC removes 1.6 million names from voters' register, fingers 54 officials", publisher: "Premium Times, November 2026", url: "https://www.premiumtimesng.com/news/top-news/924021-inec-removes-1-6-million-names-from-voters-register-fingers-54-officials.html", sourceType: "independent-reporting" }
    ],
    context: "INEC's reported November 2026 clean-up of the 2025/2026 Continuous Voter Registration preliminary register.",
    sourceUrl: "https://www.thecable.ng/inec-removes-1-6m-invalid-voter-registrations-identifies-54-officials-for-disciplinary-action/",
    supportingUrls: ["https://punchng.com/2027-inec-deletes-1-6m-voter-records-probes-54-officials/", "https://www.premiumtimesng.com/news/top-news/924021-inec-removes-1-6-million-names-from-voters-register-fingers-54-officials.html"],
    contact: "", isTimeSensitive: false, createdAt: researchDate, submittedAt: researchDate, updatedAt: researchDate,
    origin: "sabi-research", originLabel: "Sabi newsroom research", alertStatus: "not_applicable", verdictStatus: "approved"
  },
  {
    id: "sabi-research-serap-voter-register-lawsuit-november-2026",
    claim: "SERAP filed suit FHC/ABJ/CS/2863/2026 asking the court to compel an independent investigation into suspected AI-generated photographs and other alleged irregularities in INEC's preliminary voters' register.",
    claimType: "election-information", assessmentType: "Legal filing / unresolved allegations", subject: "INEC / SERAP / NDPC", subjectKey: "inec-serap-ndpc", subjectType: "public-agency", impact: "negative",
    status: "closed", reviewStatus: "published", reviewPriority: "high",
    researchNotes: "Sabi newsroom research update, 27 November 2026. SERAP's own 22 November statement confirms the suit number, defendants and relief sought. Punch and The Guardian independently report the filing. The filing confirms that SERAP made the allegations and asked the court to compel the National Data Protection Commission to examine records and determine whether the Nigeria Data Protection Act was breached. It does not establish that the allegations are true. INEC's reported account says 268,000 cases arising from public objections were adjudicated, with 217,722 invalidated and 50,278 retained; do not describe this as 268,000 AI photographs. No court finding establishing deliberate electoral manipulation was identified by the research cutoff.",
    reviewSummary: "The filing and relief sought are confirmed. The alleged AI-photo manipulation and intentional electoral conspiracy remain allegations; the 268,000 INEC figure refers to adjudicated complaint cases, not a verified number of AI-generated images.",
    findings: "SERAP's own statement dated 22 November 2026 confirms that it filed suit FHC/ABJ/CS/2863/2026 at the Federal High Court in Abuja against the National Data Protection Commission and INEC. It seeks an order compelling the data-protection regulator to obtain and examine relevant records, documents and electronic data held by INEC and make an independent determination on whether an investigation or enforcement action is warranted. The filing is corroborated by reporting from Punch and The Guardian.\n\nThe existence of the suit is established by SERAP's statement and the matching suit number reported by multiple outlets. The truth of the underlying allegations is a different question. A filing is a party's allegation and request for judicial relief; it is not a court finding that AI-generated images were used to manipulate election outcomes, or that INEC officials acted as part of a conspiracy.\n\nA related number needs careful handling. INEC's November account, as reported by TheCable and Punch, refers to 268,000 cases adjudicated after objections to the preliminary register; 217,722 were invalidated and 50,278 were retained. That figure should not be presented as a count of AI-generated photographs. The public evidence reviewed here does not identify how many photographs were actually AI-generated, who created them, or whether any official deliberately used them to manipulate the register. No court determination on SERAP's allegations was identified by 27 November. Keep the filing status confirmed and the alleged manipulation unresolved.",
    verdict: "Filing confirmed; allegations unproven",
    evidence: [
      { title: "SERAP sues NDPC, INEC over alleged AI manipulation of voters' register", publisher: "SERAP official statement, 22 November 2026", url: "https://serap-nigeria.org/2026/11/22/serap-sues-ndpc-inec-over-alleged-ai-manipulation-of-voters-register/", sourceType: "primary-party-statement" },
      { title: "SERAP sues NDPC, INEC over alleged AI manipulation of voters’ register", publisher: "SERAP, 22 November 2026", url: "https://serap-nigeria.org/2026/11/22/serap-sues-ndpc-inec-over-alleged-ai-manipulation-of-voters-register/", sourceType: "primary-party-statement" },
      { title: "SERAP sues NDPC, INEC over AI manipulation of voters' register", publisher: "Punch, 22 November 2026", url: "https://punchng.com/serap-sues-ndpc-inec-over-ai-manipulation-of-voters-register/", sourceType: "independent-reporting" },
      { title: "SERAP sues INEC and NDPC over alleged manipulation of voters' register", publisher: "The Guardian, November 2026", url: "https://guardian.ng/news/serap-sues-ndpc-inec-over-alleged-manipulation-of-voters-register/", sourceType: "independent-reporting" },
      { title: "INEC removes 1.6m invalid voter registrations, identifies 54 officials for disciplinary action", publisher: "TheCable, 9 November 2026", url: "https://www.thecable.ng/inec-removes-1-6m-invalid-voter-registrations-identifies-54-officials-for-disciplinary-action/", sourceType: "reported-official-briefing" }
    ],
    context: "SERAP's filing followed public concern about suspicious images and other irregularities in the 2025/2026 preliminary voters' register.",
    sourceUrl: "https://serap-nigeria.org/2026/11/22/serap-sues-ndpc-inec-over-alleged-ai-manipulation-of-voters-register/",
    supportingUrls: ["https://punchng.com/serap-sues-ndpc-inec-over-ai-manipulation-of-voters-register/", "https://guardian.ng/news/serap-sues-ndpc-inec-over-alleged-manipulation-of-voters-register/"],
    contact: "", isTimeSensitive: true, createdAt: researchDate, submittedAt: researchDate, updatedAt: researchDate,
    origin: "sabi-research", originLabel: "Sabi newsroom research", alertStatus: "not_applicable", verdictStatus: "approved"
  },
  {
    id: "sabi-research-peace-accord-109-breaches-november-2026",
    claim: "The National Peace Committee's monitoring report recorded 109 National Peace Accord breaches across 26 states and the Federal Capital Territory between 19 August and 27 October 2026.",
    claimType: "statistics", assessmentType: "Committee monitoring tally", subject: "National Peace Committee", subjectKey: "national-peace-committee", subjectType: "other", impact: "neutral",
    status: "closed", reviewStatus: "published", reviewPriority: "high",
    researchNotes: "Sabi newsroom research update, 27 November 2026. Punch reports the National Peace Committee tally and monitoring period. BusinessDay publishes the detailed breakdown: 33 political violence/thuggery; 29 misinformation/disinformation; 19 attacks on political activities/campaign assets; 15 threats/intimidation; 7 restrictions on expression/assembly; 4 inflammatory statements; 1 intra-party conflict; 1 voter inducement. These sum to 109. BusinessDay also says 57 incidents (52%) did not involve physical attacks. The underlying monitoring report / incident log has not been obtained for an item-by-item audit. Describe this as the Committee's reported tally, not a list of proven crimes, convictions or verified election-rigging events.",
    reviewSummary: "The 109 figure and the published category breakdown are corroborated as the Committee's reported monitoring tally. The source incident register was not independently audited, and a breach count is not a count of criminal convictions.",
    findings: "The National Peace Committee reported that 26 states and the Federal Capital Territory recorded 109 breaches of the National Peace Accord during a monitoring period from 19 August to 27 October 2026. Punch reported the figure and the Committee's warning about threats to peaceful campaigns. BusinessDay published the category breakdown: 33 cases of political violence and thuggery; 29 cases of misinformation and disinformation; 19 attacks on political activities and campaign assets; 15 threats and intimidation; 7 restrictions on freedom of expression and assembly; 4 inflammatory statements; 1 intra-party conflict; and 1 case of voter inducement. The categories sum to 109.\n\nBusinessDay further reported that 57 cases, or 52% of the total, did not involve physical attacks. This is useful context because the tally includes information and civic-space violations as well as physical incidents. It should not be paraphrased as 109 violent attacks.\n\nThe reported category breakdown is: 33 political violence and thuggery; 29 misinformation and disinformation; 19 attacks on political activities and campaign assets; 15 threats and intimidation; 7 restrictions on expression and assembly; 4 inflammatory statements; 1 intra-party conflict; and 1 voter-inducement incident. The categories sum to 109. BusinessDay also reported that 57 incidents, or 52%, did not involve physical attacks. The available publications confirm what the Committee said it counted, but Sabi has not obtained the underlying incident register, case definitions or source documents to independently verify every entry. The reported tally is not a count of prosecutions or convictions and does not, by itself, prove that any party directed the incidents. The editorial description should remain 'Committee-reported monitoring tally' pending access to the full report and incident-level evidence.",
    verdict: "Committee-reported tally confirmed",
    evidence: [
      { title: "2027: Abdulsalami panel flags 109 breaches, warns of election violence", publisher: "Punch, 11 November 2026", url: "https://punchng.com/2027-abdulsalami-panel-flags-109-breaches-warns-of-election-violence/", sourceType: "committee-report-as-reported" },
      { title: "2027 polls: 109 peace accord breaches recorded in ten weeks", publisher: "BusinessDay, November 2026", url: "https://businessday.ng/politics/article/2027-polls-109-peace-accord-breaches-recorded-in-ten-weeks/", sourceType: "independent-reporting" }
    ],
    context: "National Peace Committee pre-election monitoring, 19 August–27 October 2026.",
    sourceUrl: "https://punchng.com/2027-abdulsalami-panel-flags-109-breaches-warns-of-election-violence/",
    supportingUrls: ["https://businessday.ng/politics/article/2027-polls-109-peace-accord-breaches-recorded-in-ten-weeks/"],
    contact: "", isTimeSensitive: false, createdAt: researchDate, submittedAt: researchDate, updatedAt: researchDate,
    origin: "sabi-research", originLabel: "Sabi newsroom research", alertStatus: "not_applicable", verdictStatus: "approved"
  },
  {
    id: "sabi-research-fashola-11m-electricity-access-november-2026",
    claim: "Babatunde Fashola said more than 11 million Nigerians gained access to electricity for the first time during his 2015–2019 tenure as Minister of Power.",
    claimType: "statistics", assessmentType: "Attributed statistical claim", subject: "Babatunde Fashola", subjectKey: "babatunde-fashola", subjectType: "public-official", impact: "positive",
    status: "closed", reviewStatus: "published", reviewPriority: "standard",
    researchNotes: "Sabi newsroom research update, 27 November 2026. ARISE News' 27 November interview confirms Fashola's words and provides important context: he described the figure as people gaining access for the first time, distinguished access from stable/uninterrupted supply, and said he no longer had detailed ministry information. The interview does not provide a table, programme list, start/end baseline, household-to-person conversion or unique-connection methodology. The World Bank's national electricity-access indicator can show a broad country trend but cannot attribute 11 million new users to one ministerial tenure. Seek Ministry of Power/Nigerian Electricity Regulatory Commission/Distribution Company programme records and clarify people versus households. Do not convert the national access-rate movement into proof of the 11m count.",
    reviewSummary: "The interview and attribution are confirmed. The exact 11-million figure remains insufficiently substantiated because the source provides no reproducible calculation or programme-level connection data.",
    findings: "ARISE News published an interview with former Minister of Power Babatunde Fashola on 27 November 2026. In that interview Fashola said that 11 million-plus people gained access to electricity supply for the first time during his 2015–2019 tenure. The interview confirms that he made the claim. It also records him distinguishing increased access from stable power and uninterrupted supply. He said he no longer had the detailed information needed to speak authoritatively about the ministry's current operations.\n\nThe interview does not provide the underlying programme list, connection register, geographic coverage, date range for each connection, whether the unit is people or households, the conversion factor used, or a method for excluding duplicate or previously served customers. A national electricity-access percentage series is a useful context measure but cannot, by itself, validate a specific ministerial attribution of 11 million distinct people.\n\nThe responsible assessment is that the quote is verified as an attributed statement, while the numerical figure remains insufficiently substantiated by the material reviewed. Request the Ministry's electrification programme records, distribution company connection data, project completion reports and the underlying calculation. Do not equate first-time access with reliable supply or continuous electricity.",
    verdict: "Insufficient evidence for the exact figure",
    evidence: [
      { title: "Fashola: I’m Proud Of Connecting Over 11 Million Nigerians To Electricity In Four Years", publisher: "ARISE News, 27 November 2026", url: "https://www.arise.tv/fashola-im-proud-of-connecting-over-11-million-nigerians-to-electricity-in-four-years/", sourceType: "original-interview" },
      { title: "Access to electricity (% of population) — Nigeria", publisher: "World Bank Data", url: "https://data.worldbank.org/indicator/EG.ELC.ACCS.ZS?locations=NG", sourceType: "contextual-statistical-series" }
    ],
    context: "Fashola's ARISE News interview about his 2015–2019 tenure as Minister of Power.",
    sourceUrl: "https://www.arise.tv/fashola-im-proud-of-connecting-over-11-million-nigerians-to-electricity-in-four-years/",
    supportingUrls: ["https://data.worldbank.org/indicator/EG.ELC.ACCS.ZS?locations=NG"],
    contact: "", isTimeSensitive: false, createdAt: researchDate, submittedAt: researchDate, updatedAt: researchDate,
    origin: "sabi-research", originLabel: "Sabi newsroom research", alertStatus: "not_applicable", verdictStatus: "approved"
  },
  {
    id: "sabi-research-tinubu-24-hour-electricity-wording-november-2026",
    claim: "Tinubu promised 24-hour electricity in his 2023 campaign remarks.",
    claimType: "public-statement", assessmentType: "Campaign promise / wording", subject: "Bola Ahmed Tinubu", subjectKey: "bola-tinubu", subjectType: "presidential-candidate", impact: "negative",
    status: "closed", reviewStatus: "published", reviewPriority: "standard",
    researchNotes: "Sabi newsroom research update, 27 November 2026. Punch's 17 November report says a presenter played a recording of Tinubu's 2023 campaign promise during a Channels interview with Fashola. The quoted wording is: 'You must have electricity. And you will not pay for estimated bills anymore.' Fashola disputed the interpretation that this was a specific 24-hour commitment. The cited passage does not contain the words '24-hour' or '24/7'. The broader promise concerning electricity and estimated billing is real. The complete original rally video and full surrounding context should be archived before publication. The performance question (reliability, supply hours, metering and estimated bills) is separate and needs independent data.",
    reviewSummary: "The specific '24-hour electricity' wording is not in the campaign passage reproduced in reporting; Tinubu did make a broader electricity-access and estimated-billing commitment. Treating the exact phrase as a quotation is misleading, but do not use that to excuse performance.",
    findings: "Punch reported on 17 November 2026 that Fashola responded to questions about Tinubu's 2023 campaign commitment after a Channels Television presenter played a recording. The quoted passage has Tinubu saying, 'You must have electricity. And you will not pay for estimated bills anymore. A promise made, will be a promise kept. If I couldn't keep the promise and you and I come back for second term, don't vote for me.' Fashola said the recording continued with the qualification, 'Unless I give you adequate reasons.' Neither the quoted passage nor the qualification contains an explicit '24-hour' or '24/7' promise.\n\nThat does not mean Tinubu made no electricity promise. The recording, as quoted, contains a broad commitment to electricity and to ending estimated billing. A separate assessment of whether the administration fulfilled that commitment would require time-series data on supply hours, reliability, access, metering and estimated bills.\n\nFor the narrow quotation claim, the '24-hour' formulation is not supported by the wording reproduced in the available source and is misleading when presented as an exact quote. Before final publication, the newsroom should locate and archive the complete original campaign recording and verify the surrounding qualification about what would count as delivery or adequate reasons for non-delivery.",
    verdict: "Misleading as an exact quotation",
    evidence: [
      { title: "Tinubu never promised 24-hour electricity, says Fashola", publisher: "Punch, 17 November 2026", url: "https://punchng.com/tinubu-never-promised-24-hour-electricity-says-fashola/", sourceType: "reported-clip-and-interview" },
      { title: "Fashola Clarifies Tinubu's 2022 Electricity Promise", publisher: "Channels Television, 17 November 2026", url: "https://www.youtube.com/watch?v=FmQ5cFSxeDU", sourceType: "interview-video" }
    ],
    context: "A claim about the exact wording of Tinubu's 2023 presidential campaign remarks, not a general assessment of electricity-sector performance.",
    sourceUrl: "https://punchng.com/tinubu-never-promised-24-hour-electricity-says-fashola/",
    supportingUrls: ["https://www.youtube.com/watch?v=FmQ5cFSxeDU"],
    contact: "", isTimeSensitive: false, createdAt: researchDate, submittedAt: researchDate, updatedAt: researchDate,
    origin: "sabi-research", originLabel: "Sabi newsroom research", alertStatus: "not_applicable", verdictStatus: "approved"
  },
  {
    id: "sabi-research-obi-kwankwaso-10000mw-pledge-november-2026",
    claim: "Peter Obi said an Obi–Kwankwaso government would generate, transmit and distribute at least 10,000 MW of electricity during its tenure if elected.",
    claimType: "campaign-promise", assessmentType: "Campaign promise", subject: "Peter Obi / Rabiu Kwankwaso", subjectKey: "obi-kwankwaso-ticket", subjectType: "presidential-candidate", impact: "positive",
    status: "closed", reviewStatus: "published", reviewPriority: "high",
    researchNotes: "Sabi newsroom research update, 27 November 2026. Punch and BusinessDay report the 20 November Onitsha town-hall pledge. NERC's Q2 2026 report highlights an average hourly grid-connected output of 4,022.40 MWh/h, national customer metering rate of 62%, and average DisCo ATC&C losses of 36%. These are Q2 measures, not live current output. The candidate's quote uses 4,000 MW as a rounded current baseline, which is broadly consistent with the Q2 average but is not the same as a reading on 20 November. The pledge is a campaign commitment and cannot be assessed as delivered before a government takes office. Seek a technical policy document, capital costs, fuel supply assumptions, transmission/distribution expansion, tariff plan, target definition and timeline.",
    reviewSummary: "The 10,000 MW statement is confirmed as a campaign pledge. NERC's Q2 average output was about 4,022.40 MWh per hour; the target's feasibility and delivery are not established by the pledge itself.",
    findings: "Punch reported on 20 November 2026 that Peter Obi pledged at an Onitsha town hall that an administration led by him and Rabiu Kwankwaso would generate, transmit and distribute at least 10,000 MW during their tenure. BusinessDay reported the same statement on 21 November. The existence and wording of the campaign pledge are corroborated.\n\nThe quoted baseline of about 4,000 MW is broadly consistent with NERC's Q2 2026 report, which records average hourly output of 4,022.40 MWh/h from grid-connected plants. The same NERC highlights report a national metering rate of 62% and average actual DisCo ATC&C losses of 36%. These indicators show that the challenge is not generation alone: metering and distribution losses also affect delivered electricity. The Q2 metrics are a period average and must not be described as a live grid reading on the day of the town hall.\n\nThe 10,000 MW number is a promise, not a result. A fair assessment requires the technical definition of the target, whether it means generation, available capacity or power delivered to customers; the implementation timetable; financing and tariffs; gas and other fuel supply; transmission upgrade plans; distribution capacity; and measurable service standards. No final delivery verdict is appropriate at this stage.",
    verdict: "Campaign pledge confirmed; delivery not assessable",
    evidence: [
      { title: "Obi, Kwankwaso pledge 10,000MW power supply", publisher: "Punch, 20 November 2026", url: "https://punchng.com/obi-kwankwaso-pledge-10000mw-power-supply/", sourceType: "campaign-statement-report" },
      { title: "Obi, Kwankwaso pledge 10,000MW as Nigeria's power deficit persists", publisher: "BusinessDay, 21 November 2026", url: "https://businessday.ng/news/article/obi-kwankwaso-pledge-10000mw-as-nigerias-power-deficit-persists/", sourceType: "campaign-statement-report" },
      { title: "NERC Q2 2026 Report Highlights", publisher: "Nigerian Electricity Regulatory Commission, 21 October 2026", url: "https://nerc.gov.ng/resources/nerc-q2-2026-report-highlights/", sourceType: "primary-regulatory-data" },
      { title: "NERC Second Quarter 2026 Report", publisher: "Nigerian Electricity Regulatory Commission, 29 September 2026", url: "https://nerc.gov.ng/media/nerc-second-quarter-2026-report/", sourceType: "primary-regulatory-report" }
    ],
    context: "Campaign pledge made at an NDC town hall in Onitsha on 20 November 2026.",
    sourceUrl: "https://punchng.com/obi-kwankwaso-pledge-10000mw-power-supply/",
    supportingUrls: ["https://businessday.ng/news/article/obi-kwankwaso-pledge-10000mw-as-nigerias-power-deficit-persists/", "https://nerc.gov.ng/resources/nerc-q2-2026-report-highlights/"],
    contact: "", isTimeSensitive: false, createdAt: researchDate, submittedAt: researchDate, updatedAt: researchDate,
    origin: "sabi-research", originLabel: "Sabi newsroom research", alertStatus: "not_applicable", verdictStatus: "approved"
  },
  {
    id: "sabi-research-obi-10000-phc-40000-classrooms-november-2026",
    claim: "Peter Obi said that if elected president his administration would establish 10,000 primary healthcare centres and build 40,000 primary school blocks nationwide.",
    claimType: "campaign-promise", assessmentType: "Campaign promise", subject: "Peter Obi", subjectKey: "peter-obi", subjectType: "presidential-candidate", impact: "positive",
    status: "closed", reviewStatus: "published", reviewPriority: "standard",
    researchNotes: "Sabi newsroom research update, 27 November 2026. TheCable and Punch both report the 20 November 2026 NDC town-hall announcement in Onitsha. The reports corroborate the stated numbers and the candidate's intention to provide functional PHC access in every ward and additional classroom infrastructure. The published material reviewed does not include a costed implementation document, annual phasing, location schedule, staffing model, equipment standards or capital/recurrent funding breakdown. Verify whether 'primary school blocks' means 40,000 individual blocks/classroom buildings or classrooms before translating this into a total number of rooms or facilities. Keep it in the campaign-promise category.",
    reviewSummary: "The 10,000 PHC and 40,000 classroom-block commitments are confirmed as pledges. Their cost, scope, staffing and delivery plan remain unassessed.",
    findings: "TheCable and Punch independently reported that Peter Obi announced the commitments at an NDC town hall in Onitsha on 20 November 2026. The figures reported were 10,000 primary healthcare centres and 40,000 primary school blocks nationwide if elected. Obi described the healthcare goal as making a functional primary healthcare facility available in every ward. The public announcement is therefore corroborated.\n\nThe reporting does not establish that the facilities already exist or that the commitments have been funded. It does not provide a complete costing, ward-by-ward site schedule, annual construction targets, staffing and equipment plan, recurrent funding requirements, procurement model or maintenance plan. The expression 'school blocks' should be clarified before it is converted into a count of classrooms or individual teaching spaces.\n\nThis belongs in Sabi's campaign-promise tracker. The promise can be marked as made, but no delivery or feasibility verdict should be inferred without a published plan and later implementation evidence.",
    verdict: "Campaign pledge confirmed; delivery not assessable",
    evidence: [
      { title: "Obi says he'll build 10,000 PHCs, 40,000 classroom blocks nationwide if elected president", publisher: "TheCable, 20 November 2026", url: "https://www.thecable.ng/obi-promises-construction-of-10000-phcs-40000-classroom-blocks-nationwide-if-elected-president/", sourceType: "campaign-statement-report" },
      { title: "2027: Obi promises 10,000 primary healthcare centres, 40,000 classrooms", publisher: "Punch, 20 November 2026", url: "https://punchng.com/2027-obi-promises-10000-primary-healthcare-centres-40000-classrooms/", sourceType: "campaign-statement-report" }
    ],
    context: "NDC town hall and homecoming event in Onitsha, Anambra State, 20 November 2026.",
    sourceUrl: "https://www.thecable.ng/obi-promises-construction-of-10000-phcs-40000-classroom-blocks-nationwide-if-elected-president/",
    supportingUrls: ["https://punchng.com/2027-obi-promises-10000-primary-healthcare-centres-40000-classrooms/"],
    contact: "", isTimeSensitive: false, createdAt: researchDate, submittedAt: researchDate, updatedAt: researchDate,
    origin: "sabi-research", originLabel: "Sabi newsroom research", alertStatus: "not_applicable", verdictStatus: "approved"
  },
  {
    id: "sabi-research-opposition-unity-summit-november-2026",
    claim: "Six political groups were preparing for an Abuja opposition summit on 30 November 2026 to discuss and consider a unity pact involving Atiku Abubakar, Peter Obi, Seyi Makinde and other opposition figures.",
    claimType: "election-information", assessmentType: "Political negotiation / planned event", subject: "Opposition coalition", subjectKey: "opposition-coalition-2027", subjectType: "political-party", impact: "neutral",
    status: "closed", reviewStatus: "published", reviewPriority: "high",
    researchNotes: "Sabi newsroom research update, 27 November 2026. Nigeria Info FM reported on 27 November that Coalition for Democracy convener Salihu Mohammed Lukman announced an Abuja summit for Monday 30 November. The six groups named were ADC, APM, NDC, a PDP faction, PRP and SDP. Three proposed documents were identified: National Covenant for Democratic Renewal, Framework for Opposition Unity and National Reform Programme. The article says the documents were for consideration and adoption at the summit, not that they had already been signed. Makinde had said the arrangement was not a formal merger modelled on the APC's 2015 formation. This is future-dated relative to the 27 November research cutoff; recheck after 30 November and inspect any adopted text directly.",
    reviewSummary: "The planned summit, participating groups and proposed documents are reported. As at 27 November, a merger and common presidential candidate had not been confirmed.",
    findings: "Nigeria Info FM reported on 27 November 2026 that Salihu Mohammed Lukman, a convener of the Coalition for Democracy, announced an opposition summit in Abuja for Monday 30 November. The report named six political groups: ADC, APM, NDC, a faction of the PDP, PRP and SDP. It identified three documents for consideration: the National Covenant for Democratic Renewal, the Framework for Opposition Unity and the National Reform Programme.\n\nThe same report said the planned pact followed consultations among Atiku Abubakar, Peter Obi and Seyi Makinde. Makinde had clarified that the proposed arrangement was not a formal party merger like the one that produced the APC in 2015. The material available by 27 November confirms preparations and planned deliberations, but does not establish that a common presidential ticket had been selected or that the proposed documents had been adopted and signed.\n\nThe accurate time-bound description is: opposition cooperation talks and a summit were scheduled; the outcome remained pending. Because the summit was due to take place after this research cutoff, the newsroom must recheck the event and any signed text after 30 November before updating the status.",
    verdict: "Summit scheduled; pact pending",
    evidence: [
      { title: "Atiku, Obi, Makinde expected to sign opposition unity pact on Monday", publisher: "Nigeria Info FM, 27 November 2026", url: "https://www.nigeriainfo.fm/news/2027-elections/atiku-obi-makinde-expected-to-sign-opposition-unity-pact-on-monday/", sourceType: "organiser-statement-as-reported" },
      { title: "PT State of the Race: Atiku–Makinde talks face ballot deadlines, ADC crisis", publisher: "Premium Times, November 2026", url: "https://www.premiumtimesng.com/features-and-interviews/925593-pt-state-of-the-race-atiku-makinde-talks-face-ballot-deadlines-adc-crisis.html", sourceType: "independent-reporting" }
    ],
    context: "Opposition summit announced for Abuja on 30 November 2026; research cutoff 27 November 2026.",
    sourceUrl: "https://www.nigeriainfo.fm/news/2027-elections/atiku-obi-makinde-expected-to-sign-opposition-unity-pact-on-monday/",
    supportingUrls: ["https://www.premiumtimesng.com/features-and-interviews/925593-pt-state-of-the-race-atiku-makinde-talks-face-ballot-deadlines-adc-crisis.html"],
    contact: "", isTimeSensitive: true, createdAt: researchDate, submittedAt: researchDate, updatedAt: researchDate,
    origin: "sabi-research", originLabel: "Sabi newsroom research", alertStatus: "not_applicable", verdictStatus: "approved"
  },
  {
    id: "sabi-research-atiku-withdrawal-support-group-november-2026",
    claim: "Atiku Abubakar voluntarily withdrew from the 2027 presidential race after a coalition of his former support groups endorsed Peter Obi's NDC ticket.",
    claimType: "election-information", assessmentType: "Candidate withdrawal / party nomination status", subject: "Atiku Abubakar", subjectKey: "atiku-abubakar", subjectType: "presidential-candidate", impact: "negative",
    status: "closed", reviewStatus: "published", reviewPriority: "high",
    researchNotes: "Sabi newsroom research update, 27 November 2026. Premium Times reports on 22 November that Atiku denied quitting after a former support coalition endorsed Obi. The Electoral Act 2026, Section 31, requires a candidate's personally signed written notice together with a sworn affidavit delivered personally to the nominating party; the party must convey it to INEC no later than 90 days before polling. For a 16 January 2027 poll, the 90-day date is 18 October 2026. The support group's statement is not the candidate's statutory withdrawal notice. However, do not state that Atiku's ADC nomination was secure: Reuters reported that a Federal High Court on 5 November set aside the David Mark-led leadership process and Atiku's nomination; Premium Times reported ADC appealed and sought a stay on 6 November. The legal status of that nomination is separate from voluntary withdrawal.",
    reviewSummary: "The voluntary-withdrawal claim is contradicted by Atiku's public denial and the statutory withdrawal process; a supporters' endorsement is not his withdrawal. His ADC nomination was separately affected by a court ruling and appeal.",
    findings: "Premium Times reported on 22 November 2026 that Atiku denied withdrawing from the 2027 presidential race after a coalition of groups that previously supported him endorsed Peter Obi's NDC ticket. Atiku's campaign spokesperson said no organisation claiming to represent his supporters had authority to withdraw him. That statement is evidence of Atiku's public denial, while the endorsement is an act by the support group.\n\nSection 31 of the Electoral Act 2026 provides that a candidate may withdraw by a notice in writing signed by the candidate together with a sworn affidavit, delivered personally by the candidate to the nominating political party; the party must convey the notice and affidavit to INEC no later than 90 days before the election. For an election scheduled for 16 January 2027, 90 days earlier is 18 October 2026. A support group endorsement does not satisfy this statutory procedure. No evidence of Atiku's own formal withdrawal notice was identified in the sources reviewed.\n\nThere is a separate legal issue. Reuters reported that on 5 November 2026 the Federal High Court set aside the ADC leadership process and Atiku's nomination. Premium Times reported that the ADC appealed and sought a stay of execution on 6 November. The voluntary-withdrawal rumour should therefore be rejected as a description of what Atiku did, but the separate litigation means the legal status of his ADC nomination should not be presented as settled. The newsroom should review the Court of Appeal docket and any stay ruling before updating this status.",
    verdict: "False as a claim of voluntary withdrawal",
    evidence: [
      { title: "2027: Atiku denies quitting race after support group backs Obi for president", publisher: "Premium Times, 22 November 2026", url: "https://www.premiumtimesng.com/news/top-news/927255-2027-atiku-denies-quitting-race-after-support-group-backs-obi-for-president.html", sourceType: "candidate-response-and-reporting" },
      { title: "Nigerian court voids candidacy of opposition ADC's Atiku for 2027 election", publisher: "Reuters, 5 November 2026", url: "https://www.reuters.com/world/africa/nigerian-court-voids-candidacy-opposition-adcs-atiku-2027-election-2026-11-05/", sourceType: "court-ruling-report" },
      { title: "ADC appeals annulment of Atiku's presidential ticket, urges INEC to wait", publisher: "Premium Times, 7 November 2026", url: "https://www.premiumtimesng.com/news/top-news/923361-adc-appeals-annulment-of-atikus-presidential-ticket-urges-inec-to-wait.html", sourceType: "appeal-status-report" },
      { title: "Electoral Act, 2026 — section 31: Withdrawal of candidate", publisher: "Official Gazette copy hosted by Policy and Legal Advocacy Centre", url: "https://placng.org/i/wp-content/uploads/2026/11/Official-Gazette-Electoral-Act-2026.pdf", sourceType: "primary-law" }
    ],
    context: "Atiku's denial followed an endorsement of Peter Obi by a coalition of groups that had previously supported Atiku; separate ADC nomination litigation began in November 2026.",
    sourceUrl: "https://www.premiumtimesng.com/news/top-news/927255-2027-atiku-denies-quitting-race-after-support-group-backs-obi-for-president.html",
    supportingUrls: ["https://www.reuters.com/world/africa/nigerian-court-voids-candidacy-opposition-adcs-atiku-2027-election-2026-11-05/", "https://www.premiumtimesng.com/news/top-news/923361-adc-appeals-annulment-of-atikus-presidential-ticket-urges-inec-to-wait.html", "https://placng.org/i/wp-content/uploads/2026/11/Official-Gazette-Electoral-Act-2026.pdf"],
    contact: "", isTimeSensitive: true, createdAt: researchDate, submittedAt: researchDate, updatedAt: researchDate,
    origin: "sabi-research", originLabel: "Sabi newsroom research", alertStatus: "not_applicable", verdictStatus: "approved"
  },
  {
    id: "sabi-research-atiku-nysc-amendment-ruling-november-2026",
    claim: "The Federal High Court dismissed Atiku Abubakar and ADC's application to amend their suit challenging Tinubu's eligibility over an alleged NYSC certificate forgery.",
    claimType: "election-information", assessmentType: "Court ruling / procedural development", subject: "Atiku Abubakar / ADC / Bola Ahmed Tinubu", subjectKey: "atiku-adc-bola-tinubu", subjectType: "other", impact: "neutral",
    status: "closed", reviewStatus: "published", reviewPriority: "high",
    researchNotes: "Sabi newsroom research update, 27 November 2026. TheCable and Premium Times report that Justice Inyang Ekwo dismissed the amendment application on 20 November. The proposed changes were rejected because they would introduce new facts after the constitutional 14-day pre-election filing period and materially alter the case. THISDAY reports the substantive hearing was fixed for 2 December 2026. The ruling is procedural: it does not determine whether the NYSC certificate was forged or genuine. The plaintiffs alleged the certificate name differed; Tinubu and APC denied forgery and argued the case was incompetent/statute-barred. The newsroom should obtain the ruling and substantive case filings before publication.",
    reviewSummary: "The amendment application was dismissed on procedural/timing grounds. That ruling did not decide whether the certificate was forged; the substantive case remained pending, with a hearing reported for 2 December.",
    findings: "TheCable and Premium Times reported that on 20 November 2026 Justice Inyang Ekwo of the Federal High Court in Abuja dismissed an application by Atiku Abubakar and the ADC to amend their suit challenging President Tinubu's eligibility for the 2027 election. The judge held that the proposed amendments would introduce new facts and materially alter the substance of the case after the 14-day constitutional period for pre-election matters had expired. He directed the parties to proceed to the substantive case.\n\nThe underlying suit alleges that a National Youth Service Corps discharge certificate submitted in support of Tinubu's nomination was forged and bore a different name. Tinubu and the APC denied the allegation. The 20 November ruling addressed whether the plaintiffs could amend their court processes at that stage; it did not make a factual finding that the certificate was forged or genuine.\n\nTHISDAY reported that the substantive matter was fixed for 2 December 2026. That date was still in the future at the 27 November research cutoff. Sabi should track the substantive hearing and obtain the court's written ruling and filings before publishing a final account of the eligibility dispute.",
    verdict: "Procedural ruling confirmed; forgery allegation undecided",
    evidence: [
      { title: "Court dismisses bid by Atiku, ADC to amend suit against Tinubu over 'forged NYSC certificate'", publisher: "TheCable, 20 November 2026", url: "https://www.thecable.ng/court-dismisses-atiku-adc-bid-to-amend-suit-against-tinubu-over-forged-nysc-certificate/", sourceType: "court-ruling-report" },
      { title: "Court dismisses Atiku's application to amend suit challenging Tinubu's 2027 eligibility", publisher: "Premium Times, 20 November 2026", url: "https://www.premiumtimesng.com/news/headlines/926710-court-dismisses-atikus-application-to-amend-suit-challenging-tinubus-2027-eligibility.html", sourceType: "court-ruling-report" },
      { title: "Atiku Loses Bid to Amend Suit Seeking to Bar Tinubu from 2027 Poll", publisher: "THISDAY, 20 November 2026", url: "https://www.thisdaylive.com/2026/11/20/atiku-loses-bid-to-amend-suit-seeking-to-bar-tinubu-from-2027-poll/", sourceType: "hearing-schedule-report" }
    ],
    context: "Federal High Court pre-election suit FHC/ABJ/CS/1888/2026 and the 20 November 2026 ruling on the plaintiffs' amendment application.",
    sourceUrl: "https://www.thecable.ng/court-dismisses-atiku-adc-bid-to-amend-suit-against-tinubu-over-forged-nysc-certificate/",
    supportingUrls: ["https://www.premiumtimesng.com/news/headlines/926710-court-dismisses-atikus-application-to-amend-suit-challenging-tinubus-2027-eligibility.html", "https://www.thisdaylive.com/2026/11/20/atiku-loses-bid-to-amend-suit-seeking-to-bar-tinubu-from-2027-poll/"],
    contact: "", isTimeSensitive: true, createdAt: researchDate, submittedAt: researchDate, updatedAt: researchDate,
    origin: "sabi-research", originLabel: "Sabi newsroom research", alertStatus: "not_applicable", verdictStatus: "approved"
  }
];
