/**
 * Public-record methodology.
 *
 * Sabi publishes source-linked observations and commitment evidence statuses.
 * It does not generate composite political ratings, league tables or verdicts.
 */
export const publicRecordMethodology = {
  version: "2.0.0",
  principles: [
    "Publish the underlying observation, unit, population and reporting period rather than converting it into a political rating.",
    "Keep economic, fiscal, social and service indicators distinct; do not blend unlike measures into a composite number.",
    "Show baseline and time-series context when the same series is available on a comparable basis.",
    "Separate official statistics, administrative records, budget execution, independent research, government claims and editorial analysis.",
    "Do not infer that an officeholder caused a change merely because it occurred during their tenure.",
    "Do not convert missing or unpublished data into zero, a negative status or an assumed result.",
    "Record every source URL, publisher, publication date, access date and known limitation.",
    "Commitment records must link to an attributable public promise and identify the evidence supporting each descriptive status.",
    "Give officials a clear correction and right-of-reply route; log changes and preserve the earlier public record.",
  ],
  indicatorGroups: [
    { id: "economy", label: "Economy & livelihoods", examples: ["Internally generated revenue", "Labour-market and poverty indicators"] },
    { id: "security", label: "Security & stability", examples: ["Consistent incident and victimisation series", "Displacement and access measures"] },
    { id: "health", label: "Health", examples: ["Budget implementation", "Population health and access survey indicators"] },
    { id: "education", label: "Education", examples: ["Budget implementation", "Enrolment, attendance and learning outcomes"] },
    { id: "infrastructure", label: "Infrastructure & basic services", examples: ["Water, electricity, roads and digital access"] },
    { id: "fiscal", label: "Fiscal & governance records", examples: ["Revenue, expenditure, audited accounts and procurement disclosures"] },
  ],
  statusDefinitions: {
    fulfilled: "A specific, attributable commitment with evidence that the promised output or outcome has been delivered.",
    partlyReported: "Some elements are documented, but the full commitment or target is not established by available evidence.",
    underway: "A verifiable implementation step is documented; this is not the same as delivery.",
    notYetDue: "The published deadline has not passed.",
    evidenceNotFound: "A reasonable source review did not locate evidence; this is not proof that no action occurred.",
    disputed: "Credible sources materially disagree, so the disagreement is shown rather than collapsed into one status.",
  },
  publicationRules: [
    "Do not publish aggregate officeholder scores, rankings or winner/loser labels.",
    "Keep nominal totals, per-capita measures, budget allocations, actual expenditure and real-world outcomes clearly separated.",
    "Display source values as published; explain rounding, denominator and out-of-range values instead of silently correcting them.",
    "State the jurisdiction and level of government covered by every measure.",
    "Where a report excludes a jurisdiction, explain the publisher's stated reason next to the missing indicator.",
    "Use separate national series for the President and FCT-specific records for the FCT Minister; do not force either into a state comparison.",
  ],
} as const;
