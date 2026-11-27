export type ManifestoResearchStatus =
 | "document-located"
 | "launch-reported-document-not-located"
 | "no-document-found-in-tracker"
 | "tracker-entry-conflicted"
 | "not-stated-in-source-snapshot";

export type CandidateDossierDispute = { title:string; publisher:string; url:string; position:string; publishedAt:string };

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
      {title:"INEC updated final presidential candidate list",publisher:"Independent National Electoral Commission",url:"https://inecnigeria.org/documents/uploads/2026/10/b5af9099-864c-4d5e-924d-e1a2c771c529-final-list-presidential.pdf",position:"INEC's 31 October 2026 list names Atiku Abubakar as the ADC presidential candidate. This list predates the 5 November court judgment.",publishedAt:"2026-10-31"},
      {title:"Federal High Court judgment in the ADC leadership dispute",publisher:"Reuters",url:"https://www.reuters.com/world/africa/nigerian-court-voids-candidacy-opposition-adcs-atiku-2027-election-2026-11-05/",position:"Reuters reported that the 5 November judgment set aside the Mark-led ADC leadership and the process that produced Atiku's nomination. Sabi has not reviewed the certified judgment in this update.",publishedAt:"2026-11-05"},
      {title:"ADC says it filed a 17-ground appeal and asks INEC to preserve candidate records",publisher:"Channels Television",url:"https://www.channelstv.com/2026/11/18/2027-adc-files-17-ground-appeal-against-inec-over-nullification-of-atikus-candidacy/",position:"ADC says it filed a 17-ground appeal and asked the Court of Appeal to restrain INEC from changing party and candidate records while the appeal is pending. This is the party's stated position, not a court order.",publishedAt:"2026-11-18"},
      {title:"ADC appeal and stay application reported as pending",publisher:"Premium Times",url:"https://www.premiumtimesng.com/news/top-news/923361-adc-appeals-annulment-of-atikus-presidential-ticket-urges-inec-to-wait.html",position:"Premium Times reported that the stay application had not been determined and said it had not independently obtained the notice of appeal or stay application. Filing an appeal or applying for a stay does not itself suspend the judgment.",publishedAt:"2026-11-18"},
    ],
    disputeStatusNote:"Status as at 27 November 2026: the 5 November Federal High Court judgment is under challenge. ADC says it filed a 17-ground appeal and requested interim relief to prevent INEC from changing its records; Premium Times reported that the stay application had not been determined. No appellate ruling or order granting a stay was located in this source check. INEC's 31 October candidate list predates the judgment. The list is not proof that the dispute has been resolved, and the appeal filing is not itself a stay.",
    checkedAt,sourceUrl:tracker,manifestoSourceUrl:manifestos,
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
    disputeStatusNote:"Status as at 27 November 2026: the last located court report says judgment was reserved for 27 October 2026. No final judgment was located in this source check.",
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
