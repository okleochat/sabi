export type ManifestoResearchStatus =
 | "document-located"
 | "launch-reported-document-not-located"
 | "no-document-found-in-tracker"
 | "tracker-entry-conflicted"
 | "not-stated-in-source-snapshot";

export type CandidateDossierEvidence = {
  reviewedRecords?:number;
  documentedCampaignEvents?:number;
  financeRecords?:number;
  activityStatus:"records-listed"|"tracking-scheduled";
  manifestoStatus:ManifestoResearchStatus;
  manifestoNote:string;
  notableCommitments?:string[];
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
    manifestoNote:"OpenPolls records an September 2026 campaign statement saying manifesto work was continuing; a full original document was not located in the catalogue snapshot.",
    checkedAt,sourceUrl:tracker,manifestoSourceUrl:manifestos,
  },
  adc:{
    reviewedRecords:16,documentedCampaignEvents:6,financeRecords:2,activityStatus:"records-listed",
    manifestoStatus:"launch-reported-document-not-located",
    manifestoNote:"OpenPolls records the Atiku Economic Recovery Plan 2027 as announced in a campaign statement, but says it did not locate a complete online document in the checked snapshot.",
    checkedAt,sourceUrl:tracker,manifestoSourceUrl:manifestos,
  },
  sdp:{
    reviewedRecords:12,documentedCampaignEvents:6,financeRecords:0,activityStatus:"records-listed",
    manifestoStatus:"tracker-entry-conflicted",
    manifestoNote:"The OpenPolls manifesto index labels the SDP entry as published, but its accompanying note says the party would publish a policy blueprint in due course. Sabi therefore marks the original document as not yet independently retrieved.",
    checkedAt,sourceUrl:tracker,manifestoSourceUrl:manifestos,
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
