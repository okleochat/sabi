/**
 * Published Sabi 0–10 category-score methodology.
 * Scores describe measured records and reference benchmarks, not causal attribution.
 */
export const publicRecordMethodology = {
  version: "2.1.0",
  scale: {
    minimum: 0,
    maximum: 10,
    precision: 1,
    rule: "Every score is calculated from a named indicator and a published benchmark. Category scores are the arithmetic mean of the available indicator scores in that category. Missing indicators are excluded and coverage is shown.",
  },
  categories: {
    economy: {
      governors: "2025 state IGR rank among the 36 states. Score = 10 × (36 − rank) ÷ 35. Highest nominal total receives 10.0; lowest receives 0.0. FCT Minister is benchmarked separately against all 36 states plus the FCT.",
      president: "Provisional 2026 budget-assumption tracking: real GDP growth score = min(10, actual Q2 year-on-year growth ÷ 4.68% × 10); headline-inflation score = min(10, 16.5% budget assumption ÷ October year-on-year inflation × 10). The mean of those two scores is displayed. These are partial-year readings compared directionally with full-year assumptions, not final annual results.",
    },
    education: {
      governors: "FY2025 education budget execution score = max(0, 10 − |100 − execution percentage| ÷ 10), capped at 10.0. Exact execution of 100% earns 10.0; under- or over-execution moves away from 10. This is a budget-credibility indicator, not a learning-outcome measure.",
    },
    health: {
      governors: "Equal-weight mean of (a) FY2025 health budget execution score, using the same distance-from-100 formula, and (b) NDHS 2024 fully-vaccinated basic-antigen coverage percentage ÷ 10. If the health budget dataset excludes a state, the available NDHS score is shown alone and evidence coverage is reduced.",
      president: "NDHS 2024 national percentage of children aged 12–23 months fully vaccinated for all basic antigens, divided by 10.",
      fct: "NDHS 2024 FCT vaccination coverage percentage divided by 10; no state-budget execution score is inferred from the state-only dataset.",
    },
  },
  principles: [
    "Category scores are evidence scores for the named measure; they are not a single overall politician rating.",
    "Do not infer that the officeholder caused a change merely because it occurred during their tenure.",
    "Keep raw values, units, populations, periods, sources and limitations visible beside scores.",
    "Do not convert missing or unpublished data into zero. Display a reason and the evidence coverage.",
    "Do not treat nominal total IGR as per-capita prosperity, inflation-adjusted growth or the whole economy.",
    "Do not treat budget execution as a service outcome; overspending is not rewarded above 10.",
    "Do not treat an NDHS survey level as a change during tenure or as direct proof of an individual officeholder's contribution.",
    "Separate official statistics, administrative records, budget execution, government claims and editorial analysis.",
    "Commitment scores require an attributable promise, a defined deadline and an approved evidence decision for every scored item.",
    "Give officials a clear correction and right-of-reply route; log changes and preserve the earlier public record.",
  ],
  statusDefinitions: {
    fulfilled: "Evidence supports delivery of the specific promised output or outcome.",
    partlyReported: "Some elements are documented, but full delivery is not established.",
    underway: "An implementation step is documented; this is not the same as delivery.",
    notYetDue: "The published deadline has not passed.",
    evidenceNotFound: "A reasonable review did not locate evidence; this is not proof that no action occurred.",
    disputed: "Credible sources materially disagree, so the disagreement is shown rather than collapsed into one status.",
  },
  publicationRules: [
    "Publish each available category score to one decimal place out of 10.",
    "Show the scoring formula, score benchmark, metric count and evidence coverage beside the category score.",
    "Use the text 'Not scored yet' with a specific reason when no suitable indicator exists; never show an empty value or silently assign zero.",
    "Do not create an overall average across unlike categories.",
    "Keep the President's national record and the FCT Minister's FCT record separate from governor state comparisons.",
    "Disclose when a category score is provisional because its reporting period does not match the full period or benchmark.",
  ],
} as const;
