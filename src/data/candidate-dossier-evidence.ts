export type ManifestoResearchStatus =
 | "document-located"
 | "launch-reported-document-not-located"
 | "no-document-found-in-tracker"
 | "tracker-entry-conflicted"
 | "not-stated-in-source-snapshot";

export type CandidateDossierDispute = { title:string; publisher:string; url:string; position:string; publishedAt:string };

export type CandidateDossierUpdate = {
  id:string;
  date:string;
  speaker:string;
  wording:string;
  context:string;
  impact:"positive"|"negative"|"mixed"|"neutral"|"unclear";
  status:string;
  publisher:string;
  title:string;
  url:string;
  supportingSources?:Array<{publisher:string;title:string;url:string}>;
};

export type CandidateDossierEvidence = {
  reviewedRecords?:number;
  documentedCampaignEvents?:number;
  financeRecords?:number;
  activityStatus:"records-listed"|"tracking-scheduled";
  manifestoStatus:ManifestoResearchStatus;
  manifestoNote:string;
  notableCommitments?:string[];
  disputes?:CandidateDossierDispute[];
  disputeStatusNote?:string;
  recentDevelopments?:CandidateDossierUpdate[];
  checkedAt:string;
  sourceUrl:string;
  manifestoSourceUrl:string;
};

/**
 * Third-party public-record discovery snapshot from OpenPolls Africa's Nigeria
 * 2027 campaign tracker and manifesto catalogue, reviewed 27 Nov 2026.
 *
 * These counts measure records located by that tracker, not total campaign
 * activity, candidate popularity, support or performance. A low/no count is
 * not evidence that a campaign is inactive. Finance records are not campaign
 * spending totals. A missing manifesto in a catalogue is not proof none exists.
 */
const tracker = "https://openpolls.africa/2027";
const manifestos = "https://openpolls.africa/manifestos";
const checkedAt = "2026-11-27";

export const candidateDossierEvidence:Record<string,CandidateDossierEvidence> = {
  adp:{
    reviewedRecords:3,documentedCampaignEvents:1,financeRecords:0,activityStatus:"records-listed",
    manifestoStatus:"launch-reported-document-not-located",
    manifestoNote:"OpenPolls records a September 2026 campaign statement saying manifesto work was continuing; a full original document was not located in the catalogue snapshot.",
    checkedAt,sourceUrl:tracker,manifestoSourceUrl:manifestos,
  },
  adc:{
    reviewedRecords:16,documentedCampaignEvents:6,financeRecords:2,activityStatus:"records-listed",
    manifestoStatus:"launch-reported-document-not-located",
    manifestoNote:"OpenPolls records the Atiku Economic Recovery Plan 2027 as announced in a campaign statement, but says it did not locate a complete online document in the checked snapshot.",
    disputes:[
      {title:"Federal High Court judgment on ADC leadership and nomination process",publisher:"PUNCH / Reuters",url:"https://punchng.com/breaking-court-sacks-mark-led-adc-nwc-nullifies-atikus-candidacy/",position:"The 5 November judgment set aside the David Mark-led leadership process and actions taken under it. PUNCH reported that the court invalidated decisions under that leadership, including the primary process; Reuters described the ruling as voiding Atiku's nomination. ADC's lawyer later argued that the judgment did not expressly name Atiku. The certified judgment has not been independently reviewed in this dossier.",publishedAt:"2026-11-05"},
      {title:"ADC files 17-ground appeal and seeks interim protection",publisher:"TheCable",url:"https://www.thecable.ng/adc-files-appeal-against-lifus-judgment-seeks-to-stop-inec-from-altering-party-records/",position:"TheCable reported that ADC filed a 17-ground appeal and asked the Court of Appeal to restrain INEC from altering party records. Filing an appeal does not by itself stay execution.",publishedAt:"2026-11-18"},
      {title:"INEC source cites a subsisting appeal and stay of execution",publisher:"Arise News",url:"https://www.arise.tv/adc-crisis-inec-explains-why-atiku-remains-presidential-candidate-on-website-questions-bala-gombes-chairmanship-claim/",position:"On 19 November, an unnamed senior INEC source told Arise News that a Notice of Appeal and Stay of Execution were subsisting and explained why Atiku remained listed. The report did not reproduce the stay order, identify its scope or provide a formal INEC decision; the source said the Commission would state its position in due course.",publishedAt:"2026-11-19"},
      {title:"INEC's 31 October final presidential list",publisher:"Independent National Electoral Commission",url:"https://inecnigeria.org/documents/uploads/2026/10/b5af9099-864c-4d5e-924d-e1a2c771c529-final-list-presidential.pdf",position:"The list names Atiku Abubakar and Rotimi Amaechi for ADC. It predates the 5 November judgment; the continued presence of the PDF on INEC's website is not a post-judgment determination of the nomination's legal status.",publishedAt:"2026-10-31"}
    ],
    disputeStatusNote:"The 5 November Federal High Court judgment set aside the David Mark-led ADC leadership process and actions taken under it. Reuters described the ruling as voiding Atiku's nomination; ADC's lawyer argued that Atiku was not expressly named in the operative orders. ADC filed an appeal and sought interim restraint. On 19 November, Arise News quoted an unnamed senior INEC source saying a Notice of Appeal and Stay of Execution were subsisting, but the report did not publish the order or identify its scope. INEC's 31 October candidate list still names Atiku and Rotimi Amaechi, but it predates the judgment and cannot settle the later dispute. The earlier note saying no stay had been located is corrected: a media report of a stay exists, but the order itself has not been independently verified. Obtain the certified judgment, notice of appeal, stay order, Court of Appeal docket and formal INEC decision. No final appellate merits judgment was located by 28 November.",
    checkedAt:"2026-11-28",sourceUrl:tracker,manifestoSourceUrl:manifestos,
  },
  sdp:{
    reviewedRecords:12,documentedCampaignEvents:6,financeRecords:0,activityStatus:"records-listed",
    manifestoStatus:"document-located",
    manifestoNote:"A 138-page 2027–2031 manifesto titled Farewell to Poverty and Insecurity is published on Adewole Adebayo's candidate campaign website and describes twelve presidential missions. This is campaign-authored material. The OpenPolls catalogue summary has a conflicting description, so Sabi links the original candidate document and preserves the discrepancy.",
    disputes:[
      {title:"INEC updated final presidential candidate list",publisher:"Independent National Electoral Commission",url:"https://inecnigeria.org/documents/uploads/2026/10/b5af9099-864c-4d5e-924d-e1a2c771c529-final-list-presidential.pdf",position:"INEC's 31 October 2026 final list names Adewole Adebayo under the SDP.",publishedAt:"2026-10-31"},
      {title:"SDP statement disputing Adebayo's nomination",publisher:"Social Democratic Party — Media Directorate",url:"https://www.sdpnigeria.org/news/sdp-adewole-adebayo-was-long-expelled-from-the-party-and-was-never-its-presidential-candidate",position:"The SDP's statement says Adebayo had been expelled and was not validly nominated; this is the party's stated position, not a court finding.",publishedAt:"2026-11"},
      {title:"Federal High Court reserves judgment in SDP suit against INEC",publisher:"TheCable",url:"https://www.thecable.ng/court-reserves-judgment-in-suit-challenging-inecs-publication-of-adewole-adebayo-as-sdp-presidential-candidate/",position:"The report says the SDP and its National Organising Secretary challenged INEC's publication of Adebayo's name and sought recognition of Abimbola Akeem Atanda; the court reserved judgment on 27 October 2026.",publishedAt:"2026-10-27"},
    ],
    disputeStatusNote:"The court reserved judgment on 27 October 2026. The SDP's statement is a party position, while INEC's published list is an official administrative record; no final court judgment was located in this review.",
    checkedAt,sourceUrl:tracker,manifestoSourceUrl:"https://www.adewoleadebayo.com/manifesto",
  },
  dla:{
    reviewedRecords:4,documentedCampaignEvents:3,financeRecords:0,activityStatus:"records-listed",
    manifestoStatus:"not-stated-in-source-snapshot",
    manifestoNote:"The checked OpenPolls manifesto summary does not provide a clear document status for this ticket. This is an unverified research gap, not a claim that no manifesto exists.",
    checkedAt,sourceUrl:tracker,manifestoSourceUrl:manifestos,
  },
  bp:{
    activityStatus:"tracking-scheduled",
    manifestoStatus:"not-stated-in-source-snapshot",
    manifestoNote:"The checked OpenPolls tracker marked monitoring as scheduled and did not show a reviewed activity record or a definitive manifesto status in its summary.",
    checkedAt,sourceUrl:tracker,manifestoSourceUrl:manifestos,
  },
  ypp:{
    reviewedRecords:3,documentedCampaignEvents:3,financeRecords:0,activityStatus:"records-listed",
    manifestoStatus:"not-stated-in-source-snapshot",
    manifestoNote:"The checked OpenPolls manifesto summary does not provide a clear document status for this ticket. This is not proof that no manifesto exists.",
    checkedAt,sourceUrl:tracker,manifestoSourceUrl:manifestos,
  },
  prp:{
    reviewedRecords:8,documentedCampaignEvents:5,financeRecords:0,activityStatus:"records-listed",
    manifestoStatus:"not-stated-in-source-snapshot",
    manifestoNote:"The checked OpenPolls manifesto summary does not provide a clear document status for this ticket. This is not proof that no manifesto exists.",
    checkedAt,sourceUrl:tracker,manifestoSourceUrl:manifestos,
  },
  apm:{
    reviewedRecords:15,documentedCampaignEvents:6,financeRecords:0,activityStatus:"records-listed",
    manifestoStatus:"not-stated-in-source-snapshot",
    manifestoNote:"The checked OpenPolls manifesto summary does not provide a clear document status for this ticket. This is not proof that no manifesto exists.",
    recentDevelopments:[
      {id:"makinde-collaboration-2026-11-13",date:"2026-11-13",speaker:"Seyi Makinde, Oyo governor and APM presidential candidate, in an Arise Television interview",wording:"I've had engagement with former Vice-President Atiku Abubakar. I've had engagement with H.E. Peter Obi.",context:"Makinde said discussions could produce rivalry or collaboration depending on political circumstances. This confirms engagement and openness, not a completed pact, merger or common ticket.",impact:"neutral",status:"Attributed statement; negotiations not concluded",publisher:"TheCable",title:"Makinde: I'm open to collaboration with Atiku, Obi",url:"https://www.thecable.ng/makinde-im-open-to-collaboration-with-atiku-obi-tinubu-broke-agreement-with-me/",supportingSources:[{publisher:"PUNCH",title:"2027: APC unfazed as Atiku, Obi, Makinde meet Monday",url:"https://punchng.com/2027-apc-unfazed-as-atiku-obi-makinde-meet-monday/"}]},
      {id:"makinde-campaign-denial-2026-11-27",date:"2026-11-27",speaker:"Richard Nnanna Ihediwa, Director of Strategic Communications, Makinde Diaspora and Political Contact Organisation",wording:"Engr. Makinde is fully in the 2027 Presidential race with his RESET Nigeria Agenda on the platform of the APM.",context:"The campaign organisation rejected social-media reports that Makinde would step down for Atiku and seek the SGF position. This is a campaign denial; it does not rule out continued opposition discussions, and no signed withdrawal or formal agreement was located.",impact:"neutral",status:"Campaign response; underlying social-media allegation unverified",publisher:"TheCable",title:"Makinde denies stepping down for Atiku, says campaign organisation",url:"https://www.thecable.ng/makinde-denies-stepping-down-for-atiku-says-campaign-organisation/"}
    ],
    checkedAt,sourceUrl:tracker,manifestoSourceUrl:manifestos,
  },
  zlp:{
    reviewedRecords:3,documentedCampaignEvents:2,financeRecords:0,activityStatus:"records-listed",
    manifestoStatus:"no-document-found-in-tracker",
    manifestoNote:"OpenPolls records campaign agenda points from speeches but says it did not find a standalone manifesto document in the checked snapshot.",
    checkedAt,sourceUrl:tracker,manifestoSourceUrl:manifestos,
  },
  ndc:{
    reviewedRecords:13,documentedCampaignEvents:6,financeRecords:2,activityStatus:"records-listed",
    manifestoStatus:"launch-reported-document-not-located",
    manifestoNote:"OpenPolls reports a manifesto launch and a party download page, but says the document link returned no document when checked.",
    recentDevelopments:[
      {id:"ok-movement-withdrawal-2026-11-27",date:"2026-11-27",speaker:"John Ozyl Ughulu, National Director-General of the OK Movement",wording:"Following this development, the National Leadership of the OK Movement has resolved to officially discontinue all campaign, mobilisation and operational support for the NDC Party, effective immediately.",context:"Ughulu said the group had been informed that Obi and NDC had ended their relationship with it. He claimed ward, local-government and state structures were withdrawn; membership, leadership authority and scale have not been independently verified.",impact:"unclear",status:"Group statement; organisational authority disputed",publisher:"PUNCH / The Sun",title:"OK Movement faction withdraws support for Obi, NDC",url:"https://punchng.com/ok-movement-faction-withdraws-support-for-obi-ndc/",supportingSources:[{publisher:"The Sun",title:"2027: OK Movement announces withdrawal of support for Obi, Kwankwaso, NDC",url:"https://thesun.ng/2027-ok-movement-announces-withdrawal-of-support-for-obi-kwankwaso-ndc/"}]},
      {id:"ndc-rebuttal-ok-movement-2026-11-27",date:"2026-11-27",speaker:"Osa Director, NDC National Publicity Secretary",wording:"There are several rogue elements masquerading as members of the OK Movement. The real OK Movement leadership and members are still supporting Peter Obi and the NDC.",context:"The NDC rejected Ughulu's authority to speak for the movement. Peter Obi's spokesman Idris Zekeri separately said the campaign did not recognise Ughulu's group and identified the Obidient and Kwankwasiyya movements as recognised support organisations.",impact:"neutral",status:"Party rebuttal; competing organisational claims unresolved",publisher:"PUNCH",title:"OK Movement faction withdraws support for Obi, NDC",url:"https://punchng.com/ok-movement-faction-withdraws-support-for-obi-ndc/"}
    ],
    checkedAt,sourceUrl:tracker,manifestoSourceUrl:manifestos,
  },
  nrm:{
    reviewedRecords:3,documentedCampaignEvents:2,financeRecords:0,activityStatus:"records-listed",
    manifestoStatus:"launch-reported-document-not-located",
    manifestoNote:"OpenPolls reports that a campaign agenda was unveiled at the campaign council inauguration but a standalone manifesto document was not located in the checked snapshot.",
    checkedAt,sourceUrl:tracker,manifestoSourceUrl:manifestos,
  },
  lp:{
    reviewedRecords:7,documentedCampaignEvents:5,financeRecords:0,activityStatus:"records-listed",
    manifestoStatus:"no-document-found-in-tracker",
    manifestoNote:"OpenPolls records a 'Nigerians First' vision described in speeches but says a standalone manifesto document was not located in the checked snapshot.",
    checkedAt,sourceUrl:tracker,manifestoSourceUrl:manifestos,
  },
  ndp:{
    reviewedRecords:1,documentedCampaignEvents:1,financeRecords:0,activityStatus:"records-listed",
    manifestoStatus:"document-located",
    manifestoNote:"The OpenPolls manifesto index identifies an NDP 2027 manifesto and extracts time-bound commitments on industrial clusters/SME support, export support and port trade facilitation, tax administration/procurement reform, and agricultural/SME credit.",
    notableCommitments:[
      "Launch industrial clusters and SME support programmes in the first year (manifesto page 9)",
      "Launch export-support programmes and improve trade facilitation at key ports in the first year (manifesto page 12)",
      "Begin tax-administration reforms, expenditure reviews and procurement strengthening in the first year (manifesto page 15)",
      "Expand special credit facilities for agriculture and SMEs in the first year (manifesto page 17)",
    ],
    checkedAt,sourceUrl:tracker,manifestoSourceUrl:manifestos,
  },
  pdp:{
    reviewedRecords:4,documentedCampaignEvents:2,financeRecords:0,activityStatus:"records-listed",
    manifestoStatus:"not-stated-in-source-snapshot",
    manifestoNote:"The checked OpenPolls manifesto summary does not provide a clear document status for this ticket. This is not proof that no manifesto exists.",
    checkedAt,sourceUrl:tracker,manifestoSourceUrl:manifestos,
  },
  aa:{
    reviewedRecords:6,documentedCampaignEvents:2,financeRecords:0,activityStatus:"records-listed",
    manifestoStatus:"not-stated-in-source-snapshot",
    manifestoNote:"The checked OpenPolls manifesto summary does not provide a clear document status for this ticket. This is not proof that no manifesto exists.",
    checkedAt,sourceUrl:tracker,manifestoSourceUrl:manifestos,
  },
  aac:{
    reviewedRecords:6,documentedCampaignEvents:5,financeRecords:0,activityStatus:"records-listed",
    manifestoStatus:"not-stated-in-source-snapshot",
    manifestoNote:"The checked OpenPolls manifesto summary does not provide a clear document status for this ticket. This is not proof that no manifesto exists.",
    checkedAt,sourceUrl:tracker,manifestoSourceUrl:manifestos,
  },
  apc:{
    reviewedRecords:20,documentedCampaignEvents:6,financeRecords:1,activityStatus:"records-listed",
    manifestoStatus:"not-stated-in-source-snapshot",
    manifestoNote:"The checked OpenPolls manifesto summary does not provide a clear document status for this ticket. This is not proof that no manifesto exists.",
    checkedAt,sourceUrl:tracker,manifestoSourceUrl:manifestos,
  },
  app:{
    reviewedRecords:2,documentedCampaignEvents:0,financeRecords:0,activityStatus:"records-listed",
    manifestoStatus:"not-stated-in-source-snapshot",
    manifestoNote:"The checked OpenPolls manifesto summary does not provide a clear document status for this ticket. This is not proof that no manifesto exists.",
    checkedAt,sourceUrl:tracker,manifestoSourceUrl:manifestos,
  },
};
