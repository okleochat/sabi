/**
 * Sabi tenure-wide public performance methodology.
 *
 * A source being catalogued is not a scored observation. A metric observed during
 * a term is not, by that fact alone, attributable to the officeholder.
 */
export const publicRecordMethodology = {
  version: "3.1.0",
  scale: {
    minimum: 0,
    maximum: 10,
    precision: 1,
    rule: "Every published category score must be supported by a documented category-specific calculation and a clearly disclosed comparison basis. Where a current comparable snapshot exists but a full tenure series does not, publish it as a provisional peer index and state the reference period. Scores describe public outcomes and documented officeholder actions separately; they are not popularity ratings.",
  },
  assessmentCategories: [
    { id: "cost-of-living", label: "Cost of living & household welfare" },
    { id: "economy-jobs", label: "Economy, employment & productivity" },
    { id: "public-finance", label: "Public finance & fiscal management" },
    { id: "security", label: "Security & public safety" },
    { id: "education", label: "Education & learning" },
    { id: "health", label: "Healthcare & health outcomes" },
    { id: "infrastructure", label: "Infrastructure & basic services" },
    { id: "integrity-commitments", label: "Integrity, governance & promise delivery" },
  ],
  overallScore: {
    label: "Sabi Overall Score",
    formula: "Simple arithmetic mean of every category score currently published for the profile, rounded to one decimal place. Unscored categories are excluded, never treated as zero.",
    minimumScoredCategories: 1,
    totalCategories: 8,
    publicationRule: "Publish the arithmetic mean as soon as at least one category score exists. Clearly label partial-coverage averages provisional and disclose the exact number of scored categories.",
    missingEvidence: "An unscored category is never converted to zero. The profile must show which categories are ready, which remain incomplete and why. The number of score-ready categories is not the same as the proportion of raw evidence collected.",
    rankingRule: "A public league table or direct rank comparison requires all 8 category scores, matching office level, compatible term windows and comparable data definitions. A score based on 6 or 7 categories may be displayed with explicit missing-category disclosure, but must not be ranked against a different coverage set.",
    caution: "The Overall Score is a summary, not a claim that every outcome was caused by the officeholder. Keep observed jurisdictional performance distinct from evidence of the officeholder's own decisions and contribution.",
  },
  tenureWindow: {
    start: "Use the actual date the officeholder assumed the relevant elected or appointed office. Do not assume 1 January of the election year.",
    end: "Use the latest complete reporting period available at the date of publication. Record the exact cut-off and source-data vintage.",
    baseline: "For every category, establish inherited conditions using the strongest comparable pre-tenure evidence. Prefer a 2–3-year pre-tenure average or trend. Where only a survey or one comparable pre-tenure measure exists, disclose that limitation and do not imply a multi-year baseline.",
    minimumLongitudinalEvidence: "A category normally requires at least one defensible pre-tenure baseline and at least two comparable post-assumption observations spanning 12 months or more. For quarterly/monthly measures, use the full available series rather than cherry-picked endpoints. For surveys, use comparable rounds and report confidence intervals or design limitations.",
    overlap: "Split calendar/fiscal-year observations that straddle the assumption date where the source allows. Otherwise label them as transition or overlapping periods rather than attributing the whole year to one administration.",
  },
  categoryScoring: {
    commonRule: "Pre-register the category's indicators, direction of improvement, weights and benchmarks before calculating an officeholder's grade. Use the same indicator definitions and scoring transformations for every comparable officeholder. Weights reflect the indicator's substantive importance and measurement quality, not how many rows happen to be available.",
    components: [
      "Inherited baseline: the condition at the start of the administration, supported by comparable pre-tenure evidence.",
      "Trajectory: the change over the tenure, using all available comparable periods rather than one selected quarter or year.",
      "Current condition: the latest complete outcome compared with a published target, standard or appropriate peer reference.",
      "Distribution and quality: where data allow, test per-capita, regional, rural/urban, gender, income or service-quality differences rather than relying on national or nominal aggregates.",
      "Attribution: describe which decisions, budgets, legislation, delivery actions or institutional responsibilities can be linked to the officeholder. Do not infer personal credit or blame from timing alone.",
    ],
    aggregation: "Each category score is a documented weighted combination of its predeclared indicators after each indicator has been mapped to 0–10 using a published, directionally correct standard. Do not invent a benchmark, interpolate missing data or adjust a formula to obtain a preferred political result. Publish the indicator list, weights, benchmark, calculation and uncertainty with the score.",
  },
  categories: {
    costOfLiving: {
      indicators: "Use a linked CPI index and rates (respecting NBS rebasing), matched state/month food prices, healthy-diet cost, transport fares and real household income/consumption or wages.",
      rule: "Measure cumulative price-level change and affordability, not just the latest year-on-year inflation rate. Separate disinflation from an actual fall in prices and compare prices with household purchasing power.",
    },
    economyJobs: {
      indicators: "Use annual and quarterly real GDP, real GDP per capita, sector composition, labour-force participation, employment-to-population ratio, underemployment, informality, youth employment and real earnings.",
      rule: "Use the entire comparable time series. Do not award a high grade merely because one quarter approaches a budget projection or because unemployment falls while participation also collapses.",
    },
    publicFinance: {
      indicators: "Use actual revenue, IGR, FAAC dependence, actual recurrent and capital expenditure, audited accounts, debt stock, debt service, arrears and sector implementation.",
      rule: "Report nominal and inflation-adjusted values, per-capita measures and the share of own-source revenue. Separate approved budgets, releases, actual expenditure and service outcomes.",
    },
    security: {
      indicators: "Use dated event and fatality records, population-adjusted rates, kidnappings, displacement, returns, incident type and geographic spread, cross-checked across compatible sources.",
      rule: "Use a full office-term series and pre-tenure baseline, account for revisions and reporting bias, and do not add event counts with different definitions. Separate civilian fatalities from total estimated deaths where the source allows.",
    },
    education: {
      indicators: "Use comparable assessment results and proficiency, attendance, completion/dropout, literacy/numeracy, teacher availability and school access/infrastructure.",
      rule: "Budget execution and incomplete school-census returns are contextual indicators, not sufficient learning-performance scores. Preserve sample sizes, confidence intervals and data-return completeness.",
    },
    health: {
      indicators: "Use maternal, neonatal, infant and under-five mortality; vaccination; access to primary care; skilled birth attendance; insurance and essential-service availability.",
      rule: "Keep household-survey outcomes distinct from DHIS2 administrative rates and budget execution. Align reference periods and report survey uncertainty and denominator quality.",
    },
    infrastructure: {
      indicators: "Use service availability and reliability for electricity, roads, water, sanitation, transport and housing, plus verified project milestones and operational status.",
      rule: "A budget line, contract award, ground-breaking or press release is not proof of completion or service delivery. Record geolocation, contractor, value, deadline, physical verification and operational outcome.",
    },
    integrityCommitments: {
      indicators: "Use original election manifesto and attributable pledges; court filings and final judgments; audit findings; procurement disclosures; asset declarations where public; and independently verified implementation evidence.",
      rule: "Track each commitment's wording, date, deadline, responsible tier of government, measurable output and delivery status. Distinguish allegations, investigations, charges, convictions and final appeals. Agency enforcement totals are not a personal integrity rating.",
    },
  },
  evidenceTypes: {
    officialStatistics: "Survey and statistical releases with methods, periods, units, denominators and uncertainty.",
    administrativeRecords: "Government, regulator, budget and programme records; disclose reporting completeness and denominator quality.",
    independentMonitoring: "Independent research and monitoring with published collection methods and limitations.",
    claims: "Campaign and government claims establish what was promised or asserted, not whether it was delivered.",
  },
  publicationRules: [
    "Use the actual assumption-of-office date and latest complete comparable reporting period.",
    "Show inherited baselines and the full available tenure trajectory; do not score a single snapshot as a tenure result.",
    "Respect revised statistical methods and series-vintage notes. Do not splice incompatible definitions without a published linking method.",
    "Publish a provisional category peer index when a comparable, source-verified cross-jurisdiction snapshot supports a transparent calculation. Do not present a snapshot as a full-tenure trend or causal assessment.",
    "Publish the arithmetic mean of available category scores; disclose coverage and never treat missing categories as zero.",
    "Never convert missing evidence into zero or describe a source index as completed extraction.",
    "Do not treat an outcome recorded during a term as proof of personal causation.",
    "Keep source documents, raw values, units, geography, period, data vintage, calculations, uncertainty and corrections accessible.",
    "Do not compare politicians in a league table unless all eight category scores and term windows are comparable.",
    "Give officials a correction and right-of-reply route without granting editorial control over Sabi's findings.",
  ],
} as const;
