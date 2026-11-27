import {reviewedClaimResearch,claimPublicationMeta} from "./claim-research-updates";
import {claimFingerprint} from "../lib/claim-utils";

const approvedAt="2026-11-27T13:00:00.000+01:00";

/**
 * These ten research checks were explicitly reviewed and approved by the Sabi
 * owner/editor for publication on 27 November 2026. Keep the editorial finding
 * labels distinct from evidence about campaign-promise delivery or unresolved
 * allegations. A confirmed pledge is not a finding that it has been delivered.
 */
export const approvedClaimFactchecks: Array<Record<string,any>> = reviewedClaimResearch.map(record=>{
  const meta=claimPublicationMeta[record.id];
  if(!meta)throw new Error("Missing publication metadata for "+record.id);
  return {
    id:record.id,
    slug:meta.publishedSlug,
    title:meta.title,
    claim:record.claim,
    claimSource:record.sourceUrl||record.context||"",
    claimType:record.claimType,
    assessmentType:meta.assessmentType,
    subject:record.subject,
    subjectKey:record.subjectKey,
    subjectType:record.subjectType,
    impact:record.impact,
    origin:"sabi-research",
    originLabel:"Sabi newsroom research",
    verdict:meta.verdict,
    summary:record.reviewSummary,
    findings:record.findings,
    evidence:record.evidence,
    published:true,
    status:"published",
    publishedAt:"2026-11-27",
    createdAt:record.createdAt||approvedAt,
    updatedAt:approvedAt,
    reviewStandard:"human-editor-approved",
    reviewedByRole:"owner-editor",
    editorialApproval:{
      reviewedByRole:"owner-editor",
      approvedAt,
      approvalBasis:"The Sabi owner/editor confirmed that all ten research records had been reviewed and instructed the newsroom to publish the approved findings."
    },
    sourceClaimId:record.id,
    claimFingerprint:claimFingerprint(record.claim||"")
  };
});
