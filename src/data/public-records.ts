/**
 * Sabi Public Records — source-linked indicators and public performance indices.
 * Values are transcribed from published datasets and retain their original units,
 * population definitions and reporting periods. Snapshot peer indices are explicitly
 * separated from full-tenure causal assessments and disclose their comparison basis.
 */
import { stateFoodInsecurity2024, ndhsFoodInsecuritySource } from "@/data/ndhs-food-insecurity";
import { stateSecurity2024To2025, stateSecuritySource } from "@/data/security-state-2024-25";
import { stateDhIs2Immunisation2023To2024 } from "@/data/dhis2-immunisation";
import { statePopulation2023 } from "@/data/state-population-2023";
import { stateLabourBaseline2023 } from "@/data/tenure-evidence";

export type PublicIndicator = {
  id: string;
  category: "economy" | "education" | "health" | "national-economy";
  label: string;
  value: number;
  unit: string;
  displayValue: string;
  period: string;
  population?: string;
  sourceLabel: string;
  publisher: string;
  sourceUrl: string;
  secondarySourceUrl?: string;
  publishedAt: string;
  note: string;
  comparison?: { displayValue: string; period: string; note: string };
};

export type CategoryScore = {
  id: string;
  label: string;
  value: number;
  evidenceCount: number;
  expectedEvidence: number;
  evidenceLabel: string;
  method: string;
  interpretation: string;
  provisional: boolean;
  period?: string;
  comparisonGroup?: string;
  scope?: "state-snapshot" | "national-snapshot";
  benchmarkSourceUrl?: string;
  benchmarkSourceLabel?: string;
};

export type UnscoredCategory = { id: string; label: string; reason: string };

export type MissingIndicator = {
  id: string;
  label: string;
  period: string;
  reason: string;
};

type StateData = {
  igr?: number;
  educationExecution?: number;
  healthExecution?: number;
  vaccination?: number;
  missing?: MissingIndicator[];
};

const sources = {
  igr: {
    label: "2025 Internally Generated Revenue report",
    publisher: "National Bureau of Statistics (NBS)",
    url: "https://microdata.nigerianstat.gov.ng/index.php/catalog/170/related-materials",
    secondary: "https://www.thepublicinterest.ng/data/state-internally-generated-revenue-2025",
    period: "2025",
    publishedAt: "24 September 2026",
  },
  education: {
    label: "2026 State of States Report — 2025 education budget implementation",
    publisher: "BudgIT",
    url: "https://budgit.org/wp-content/uploads/2026/11/States26SMDF1.pdf",
    period: "FY2025",
    publishedAt: "November 2026",
  },
  health: {
    label: "2026 State Health Financing Report — 2025 health budget implementation",
    publisher: "BudgIT",
    url: "https://budgit.org/wp-content/uploads/2026/04/HealthFinancingReport__.pdf",
    period: "FY2025",
    publishedAt: "April 2026",
  },
  vaccination: {
    label: "The State of Health of the Nation Report 2024 — NDHS",
    publisher: "Federal Ministry of Health and Social Welfare",
    url: "https://www.health.gov.ng/wp-content/uploads/2025/10/NDHS-2024-Final-Report_Disseminated17102025.pdf",
    period: "2023–2024 survey",
    publishedAt: "May 2025",
  },
};

const stateData: Record<string, StateData> = {
  Abia: { igr: 70.4, educationExecution: 45.40, healthExecution: 34.77, vaccination: 38 },
  Adamawa: { igr: 33.8, educationExecution: 46.84, healthExecution: 41.10, vaccination: 38 },
  "Akwa Ibom": {
    igr: 100.8, educationExecution: 67.90, vaccination: 51,
    missing: [{ id: "health-execution-2025", label: "Health budget execution", period: "FY2025", reason: "The report says Akwa Ibom's published micro-summaries did not provide the classified expenditure detail needed for this measure." }],
  },
  Anambra: { igr: 57.0, educationExecution: 46.81, healthExecution: 49.43, vaccination: 49 },
  Bauchi: { igr: 52.8, educationExecution: 77.16, healthExecution: 80.56, vaccination: 51 },
  Bayelsa: { igr: 50.3, educationExecution: 89.46, healthExecution: 89.15, vaccination: 63 },
  Benue: { igr: 29.6, educationExecution: 55.50, healthExecution: 90.76, vaccination: 25 },
  Borno: { igr: 36.4, educationExecution: 78.73, healthExecution: 43.11, vaccination: 29 },
  "Cross River": { igr: 58.6, educationExecution: 34.27, healthExecution: 11.90, vaccination: 69 },
  Delta: { igr: 202.5, educationExecution: 83.65, healthExecution: 96.79, vaccination: 68 },
  Ebonyi: { igr: 17.2, educationExecution: 74.97, healthExecution: 39.24, vaccination: 58 },
  Edo: { igr: 132.2, educationExecution: 70.68, healthExecution: 85.30, vaccination: 58 },
  Ekiti: { igr: 57.1, educationExecution: 97.05, healthExecution: 74.37, vaccination: 57 },
  Enugu: { igr: 406.8, educationExecution: 49.04, healthExecution: 30.69, vaccination: 52 },
  Gombe: { igr: 44.0, educationExecution: 66.34, healthExecution: 61.32, vaccination: 49 },
  Imo: { igr: 43.6, educationExecution: 39.30, healthExecution: 57.93, vaccination: 59 },
  Jigawa: { igr: 66.7, educationExecution: 83.40, healthExecution: 58.54, vaccination: 57 },
  Kaduna: { igr: 86.7, educationExecution: 54.67, healthExecution: 42.56, vaccination: 36 },
  Kano: { igr: 102.3, educationExecution: 54.01, healthExecution: 57.46, vaccination: 36 },
  Katsina: { igr: 64.3, educationExecution: 62.35, healthExecution: 140.92, vaccination: 45 },
  Kebbi: { igr: 31.2, educationExecution: 66.79, healthExecution: 26.08, vaccination: 10 },
  Kogi: { igr: 43.9, educationExecution: 65.25, healthExecution: 64.03, vaccination: 17 },
  Kwara: { igr: 95.4, educationExecution: 49.33, healthExecution: 48.29, vaccination: 28 },
  Lagos: { igr: 1769.2, educationExecution: 87.78, healthExecution: 83.52, vaccination: 66 },
  Nasarawa: { igr: 32.6, educationExecution: 60.40, healthExecution: 64.61, vaccination: 42 },
  Niger: { igr: 66.4, educationExecution: 53.40, healthExecution: 52.56, vaccination: 28 },
  Ogun: { igr: 252.4, educationExecution: 56.72, healthExecution: 37.86, vaccination: 51 },
  Ondo: { igr: 60.3, educationExecution: 85.36, healthExecution: 82.61, vaccination: 51 },
  Osun: { igr: 56.8, educationExecution: 72.65, healthExecution: 70.99, vaccination: 55 },
  Oyo: { igr: 103.2, educationExecution: 61.26, healthExecution: 40.67, vaccination: 31 },
  Plateau: { igr: 45.1, educationExecution: 65.42, healthExecution: 45.49, vaccination: 25 },
  Rivers: {
    igr: 428.4, vaccination: 56,
    missing: [
      { id: "education-execution-2025", label: "Education budget execution", period: "FY2025", reason: "Rivers was omitted from the 2026 State of States comparison because the report did not have the state's 2025 audited accounts or budget implementation reports at publication." },
      { id: "health-execution-2025", label: "Health budget execution", period: "FY2025", reason: "The Health Financing Report says Rivers had not published the 2025 fourth-quarter budget implementation report needed for this calculation." },
    ],
  },
  Sokoto: { igr: 20.5, educationExecution: 63.35, healthExecution: 41.81, vaccination: 8 },
  Taraba: { igr: 28.2, educationExecution: 36.05, healthExecution: 34.28, vaccination: 26 },
  Yobe: { igr: 16.0, educationExecution: 99.89, healthExecution: 99.89, vaccination: 37 },
  Zamfara: { igr: 30.1, educationExecution: 49.92, healthExecution: 39.06, vaccination: 10 },
  "Federal Capital Territory": { igr: 356.3, vaccination: 46 },
};

const nationalIndicators: PublicIndicator[] = [
  {
    id: "headline-inflation-2026-10", category: "national-economy",
    label: "Headline inflation (year-on-year)", value: 14.06, unit: "%",
    displayValue: "14.06%", period: "October 2026", sourceLabel: "Monetary Policy Communiqué No. 165",
    publisher: "Central Bank of Nigeria", sourceUrl: "https://www.cbn.gov.ng/Out/2026/CCD/MPC%20Communique%20No%20165%20of%20November%202026.pdf",
    publishedAt: "24 November 2026",
    comparison: { displayValue: "18.97%", period: "October 2025", note: "Year-on-year headline inflation in the same month a year earlier, as reported by the Federal Ministry of Finance macro dashboard." },
    note: "National consumer-price measure. The comparison shows a lower year-on-year inflation rate, not a fall in the overall price level. It cannot by itself isolate the effect of any one officeholder.",
  },
  {
    id: "real-gdp-growth-2026-q2", category: "national-economy",
    label: "Real GDP growth (year-on-year)", value: 4.43, unit: "%",
    displayValue: "4.43%", period: "Q2 2026", sourceLabel: "Second Quarter 2026 Economic Report",
    publisher: "Central Bank of Nigeria", sourceUrl: "https://www.cbn.gov.ng/Out/2026/RSD/Second%20Quarter%202026%20Economic%20Report.pdf",
    publishedAt: "2026",
    comparison: { displayValue: "4.23%", period: "Q2 2025", note: "Real GDP year-on-year growth in the corresponding quarter a year earlier." },
    note: "National real GDP growth for the quarter. This is a macroeconomic observation, not a causal estimate of presidential contribution.",
  },
  {
    id: "food-inflation-2026-10", category: "national-economy",
    label: "Food inflation (year-on-year)", value: 19.13, unit: "%",
    displayValue: "19.13%", period: "October 2026", sourceLabel: "Monetary Policy Communiqué No. 165",
    publisher: "Central Bank of Nigeria", sourceUrl: "https://www.cbn.gov.ng/Out/2026/CCD/MPC%20Communique%20No%20165%20of%20November%202026.pdf",
    publishedAt: "24 November 2026",
    note: "National annual food-price inflation. It is distinct from headline inflation and does not show that food prices themselves declined.",
  },
  {
    id: "external-reserves-2026-10", category: "national-economy",
    label: "Gross external reserves", value: 55.2, unit: "US$ billion",
    displayValue: "US$55.2bn", period: "30 October 2026", sourceLabel: "Nigeria Macro Dashboard",
    publisher: "Federal Ministry of Finance", sourceUrl: "https://finance.gov.ng/?page_id=26",
    publishedAt: "November 2026",
    note: "National gross external reserves stock, as reported by the Finance Ministry dashboard. This is not a household-welfare measure or a state-level indicator.",
  },
  {
    id: "public-debt-2026-q2", category: "national-economy",
    label: "Total public debt", value: 166.7, unit: "₦ trillion",
    displayValue: "₦166.7tn", period: "Q2 2026", sourceLabel: "Nigeria Macro Dashboard",
    publisher: "Federal Ministry of Finance", sourceUrl: "https://finance.gov.ng/?page_id=26",
    publishedAt: "November 2026",
    note: "National total public-debt stock as reported on the Finance Ministry dashboard. Read with the debt-to-GDP ratio, debt service, maturity profile and revenue capacity; the nominal stock alone does not establish debt sustainability.",
  },
  {
    id: "vaccination-national-ndhs-2023-24", category: "health",
    label: "Children aged 12–23 months fully vaccinated for basic antigens", value: 39, unit: "%",
    displayValue: "39%", period: "2023–2024 survey", population: "Children aged 12–23 months, nationally",
    sourceLabel: "The State of Health of the Nation Report 2024 — NDHS",
    publisher: "Federal Ministry of Health and Social Welfare",
    sourceUrl: sources.vaccination.url, publishedAt: sources.vaccination.publishedAt,
    note: "NDHS survey estimate. It is not interchangeable with routine DHIS2 administrative coverage and predates the latest year shown in this profile.",
  },
];

function makeIndicator(
  id: string, category: PublicIndicator["category"], label: string, value: number,
  unit: string, displayValue: string, source: typeof sources.igr | typeof sources.education | typeof sources.health | typeof sources.vaccination,
  note: string, population?: string,
): PublicIndicator {
  return {
    id, category, label, value, unit, displayValue, period: source.period,
    sourceLabel: source.label, publisher: source.publisher, sourceUrl: source.url,
    ...("secondary" in source ? { secondarySourceUrl: source.secondary } : {}),
    publishedAt: source.publishedAt, note, ...(population ? { population } : {}),
  };
}

export function getPublicRecordIndicators(person: { office: string; state?: string }) {
  if (person.office === "President") {
    return { indicators: nationalIndicators, missing: [
      { id: "presidential-commitment-ledger", label: "Presidential manifesto commitments", period: "2023–2027 term", reason: "The 2023 Renewed Hope manifesto is identifiable, but Sabi's item-by-item commitment register and evidence decisions are not yet published." },
      { id: "security-outcomes", label: "Security outcomes", period: "2023–2026", reason: "The available state and national security evidence does not yet provide a comparable full-term series with a pre-tenure baseline and consistent monthly coverage." },
    ] as MissingIndicator[] };
  }

  const jurisdiction = person.state || "";
  const record = stateData[jurisdiction];
  if (!record) return { indicators: [] as PublicIndicator[], missing: [] as MissingIndicator[] };

  const indicators: PublicIndicator[] = [];
  if (record.igr !== undefined) {
    indicators.push(makeIndicator("igr-2025", "economy", "Internally generated revenue", record.igr,
      "₦ billion", `₦${record.igr.toLocaleString("en-NG", { minimumFractionDigits: 1, maximumFractionDigits: 1 })}bn`,
      sources.igr, "NBS state IGR figure, rounded to the nearest ₦0.1 billion. This is a nominal revenue total, not a per-capita figure or a measure of household income."));
  }
  if (record.educationExecution !== undefined) {
    indicators.push(makeIndicator("education-execution-2025", "education", "Education budget execution", record.educationExecution,
      "%", `${record.educationExecution.toFixed(2)}%`, sources.education,
      "Reported expenditure as a share of the approved education budget in the state's FY2025 budget implementation reporting. Budget execution is not a direct measure of learning outcomes."));
  }
  if (record.healthExecution !== undefined) {
    indicators.push(makeIndicator("health-execution-2025", "health", "Health budget execution", record.healthExecution,
      "%", `${record.healthExecution.toFixed(2)}%`, sources.health,
      "Reported expenditure as a share of the approved health budget in the FY2025 state health-financing table. Values above 100% are displayed as reported and should be read with the underlying budget and reporting notes."));
  }
  if (record.vaccination !== undefined) {
    indicators.push(makeIndicator("vaccination-ndhs-2023-24", "health", "Children aged 12–23 months fully vaccinated for basic antigens", record.vaccination,
      "%", `${record.vaccination}%`, sources.vaccination,
      "NDHS survey estimate for children aged 12–23 months. It is an outcome indicator, not a measure of current clinic coverage or a causal estimate of the governor's contribution.",
      jurisdiction === "Federal Capital Territory" ? "Children aged 12–23 months in the FCT" : `Children aged 12–23 months in ${jurisdiction}`));
  }

  const missing = [...(record.missing || [])];
  if (person.office === "Governor") {
    missing.push({ id: "governor-commitment-register", label: "Governor's public commitment register", period: "Current term", reason: "Sabi has not yet published an item-by-item register linking this governor's original manifesto or attributable pledges to independently checked delivery evidence. The register must be built from source documents rather than inferred from general news coverage." });
  } else if (person.office === "FCT Minister") {
    missing.push({ id: "fct-policy-commitments", label: "FCT Minister's policy and project register", period: "Current appointment", reason: "The FCT Minister is appointed rather than elected. Sabi is compiling a separate register of attributable policy commitments, project milestones and FCT-specific evidence." });
  }
  if (jurisdiction === "Federal Capital Territory") {
    missing.push(
      { id: "education-execution-2025", label: "Education budget execution", period: "FY2025", reason: "The cited BudgIT table reports state-government budgets and does not provide a directly comparable FCT entry." },
      { id: "health-execution-2025", label: "Health budget execution", period: "FY2025", reason: "The cited BudgIT state-government table does not provide a directly comparable FCT entry." },
    );
  }
  return { indicators, missing };
}

const tenureAssessmentCategories: UnscoredCategory[] = [
  {
    id: "cost-of-living",
    label: "Cost of living & household welfare",
    reason: "The NDHS 2024 food-insecurity survey now supports a state peer index. For the President, headline and food inflation are scored against the CBN medium-term single-digit inflation objective. Monthly state food prices, healthy-diet costs, transport fares and purchasing-power trends are not yet reconciled into a complete household-cost series.",
  },
  {
    id: "economy-jobs",
    label: "Economy, employment & productivity",
    reason: "A provisional 2023 state labour-market peer index is available using unemployment and labour-force participation. For the President, current real GDP growth is benchmarked against the 5% average-growth objective in the completed 2021–2025 National Development Plan. These are different national/state methods and not directly comparable. State labour-market follow-up and job-quality measures are still missing.",
  },
  {
    id: "public-finance",
    label: "Public finance & fiscal management",
    reason: "A provisional fiscal snapshot now combines available FY2025 budget execution and 2025 IGR per 2023 projected resident. Audited multi-year accounts, debt service, arrears, spending quality and complete FCT/state comparability remain outstanding.",
  },
  {
    id: "security",
    label: "Security & public safety",
    reason: "A provisional 2024–2025 state fatality-rate peer index is now calculated using NBS 2023 population projections. A comparable pre-tenure baseline, longer event series, civilian-only fatalities and reconciled incident definitions remain outstanding.",
  },
  {
    id: "education",
    label: "Education & learning",
    reason: "NALABE learning results are a 2022 pre-tenure baseline. The 2024/25 school-census portal has only 53.7% school reporting and contains unreconciled state anomalies; it is not safe to turn those figures into a current education performance score. A comparable post-tenure learning assessment is needed.",
  },
  {
    id: "health",
    label: "Healthcare & health outcomes",
    reason: "A provisional health-coverage peer index now combines separately ranked NDHS 2023–24 survey coverage and DHIS2 2024 administrative coverage. Child mortality, maternal outcomes, PHC access and a comparable full-tenure trajectory remain outstanding.",
  },
  {
    id: "infrastructure",
    label: "Infrastructure & basic services",
    reason: "The MICS WASH figures are a 2021 pre-tenure baseline. Electricity-distribution data do not map cleanly to state governor jurisdictions, and the indexed project records do not yet provide a verified state-wide service reliability and completion series.",
  },
  {
    id: "integrity-commitments",
    label: "Integrity, governance & promise delivery",
    reason: "EFCC and other enforcement records are agency-level activity, not individual integrity findings. The politician-specific legal-outcome register and original-term manifesto/pledge ledger with independently verified delivery decisions are not yet complete.",
  },
];

function peerIndex(value: number, peerValues: number[], higherIsBetter: boolean) {
  const valid = peerValues.filter(Number.isFinite);
  if (!valid.length) return 5.5;
  const better = valid.filter(item => higherIsBetter ? item < value : item > value).length;
  const equal = valid.filter(item => item === value).length;
  const percentile = (better + equal / 2) / valid.length;
  return Number((1 + 9 * percentile).toFixed(1));
}

function average(values: number[]) {
  return values.length ? Number((values.reduce((sum, value) => sum + value, 0) / values.length).toFixed(1)) : null;
}

const stateJurisdictions = Object.keys(stateData);
const foodModeratePeers = stateJurisdictions.map(state => stateFoodInsecurity2024[state]?.moderateOrSevere).filter((value): value is number => value !== undefined);
const foodSeverePeers = stateJurisdictions.map(state => stateFoodInsecurity2024[state]?.severe).filter((value): value is number => value !== undefined);
const securityFatalityRate = (state: string) => {
  const row = stateSecurity2024To2025[state];
  const population = statePopulation2023[state];
  return row && population ? row.estimatedFatalities / population * 100000 : undefined;
};
const securityPeers = stateJurisdictions.map(securityFatalityRate).filter((value): value is number => value !== undefined);
const ndhsVaccinationPeers = stateJurisdictions.map(state => stateData[state]?.vaccination).filter((value): value is number => value !== undefined);
const dhis2VaccinationPeers = stateJurisdictions.map(state => stateDhIs2Immunisation2023To2024[state]?.year2024).filter((value): value is number => value !== undefined);
const unemploymentPeers = stateJurisdictions.map(state => stateLabourBaseline2023[state]?.unemploymentRate).filter((value): value is number => value !== undefined);
const participationPeers = stateJurisdictions.map(state => stateLabourBaseline2023[state]?.labourForceParticipationRate).filter((value): value is number => value !== undefined);
const igrPerCapitaPeers = stateJurisdictions.map(state => {
  const revenue = stateData[state]?.igr;
  const population = statePopulation2023[state];
  return revenue !== undefined && population ? revenue * 1000000000 / population : undefined;
}).filter((value): value is number => value !== undefined);
const educationExecutionPeers = stateJurisdictions.map(state => stateData[state]?.educationExecution).filter((value): value is number => value !== undefined);
const healthExecutionPeers = stateJurisdictions.map(state => stateData[state]?.healthExecution).filter((value): value is number => value !== undefined);

function getNationalSnapshotScores(): CategoryScore[] {
  const headline = nationalIndicators.find(item => item.id === "headline-inflation-2026-10");
  const food = nationalIndicators.find(item => item.id === "food-inflation-2026-10");
  const gdp = nationalIndicators.find(item => item.id === "real-gdp-growth-2026-q2");
  const scores: CategoryScore[] = [];

  // CBN's stated medium-term objective is single-digit inflation. Use 9% as
  // the upper single-digit reference point, not as a claim of a formal target.
  if (headline && food) {
    const inflationScores = [headline.value, food.value].map(rate =>
      Math.max(1, Math.min(10, 10 * 9 / rate))
    );
    scores.push({
      id: "cost-of-living", label: "Cost of living & household welfare",
      value: average(inflationScores) ?? 5.5,
      evidenceCount: 2, expectedEvidence: 2,
      evidenceLabel: "NBS/CBN headline + food inflation · national benchmark",
      period: "October 2026", comparisonGroup: "CBN medium-term single-digit inflation objective",
      scope: "national-snapshot", provisional: true,
      benchmarkSourceUrl: "https://www.cbn.gov.ng/Out/2026/CCD/Personal%20Statements%20of%20Members%20for%20the%20306th%20Meeting%20of%20the%20MPC%20JULY%202026.pdf",
      benchmarkSourceLabel: "CBN medium-term inflation objective",
      method: "Each current inflation rate is scored as 10 × 9% divided by the observed rate, capped at 10 and floored at 1; headline and food inflation are then averaged equally. Nine percent is the upper edge of the CBN's stated medium-term single-digit inflation goal.",
      interpretation: "This measures distance from a price-stability reference, not whether the price level has fallen or whether household incomes can afford essentials. National scores use an absolute policy benchmark and must not be compared numerically with state peer-percentile indices.",
    });
  }

  // The 5% figure is the average real-GDP growth objective in the Federal
  // Government's 2021–2025 National Development Plan. It is a historical
  // planning benchmark, not a new 2026 target; Q2 year-on-year growth is not
  // identical to a five-year annual average.
  if (gdp) {
    scores.push({
      id: "economy-jobs", label: "Economy, employment & productivity",
      value: Math.max(1, Math.min(10, Number((10 * gdp.value / 5).toFixed(1)))),
      evidenceCount: 1, expectedEvidence: 1,
      evidenceLabel: "CBN real GDP growth · historical national-plan benchmark",
      period: gdp.period, comparisonGroup: "5% average real-GDP growth objective in NDP 2021–2025",
      scope: "national-snapshot", provisional: true,
      benchmarkSourceUrl: "https://nigeriareposit.nln.gov.ng/items/1e1972a6-84c2-4465-949d-7ce24834e0b2/full",
      benchmarkSourceLabel: "National Development Plan 2021–2025",
      method: "Current real GDP year-on-year growth divided by the 5% average-growth objective published in the Federal Government's National Development Plan 2021–2025, multiplied by 10 and capped at 10.",
      interpretation: "The NDP period has ended and this is a historical policy benchmark, not a current 2026 target. A single quarterly GDP growth rate does not measure job creation, productivity per person, income distribution or the full economic trajectory. National scores are not comparable with state peer-percentile indices.",
    });
  }
  return scores;
}

function getStateSnapshotScores(state: string): CategoryScore[] {
  const data = stateData[state];
  if (!data) return [];
  const scores: CategoryScore[] = [];
  const food = stateFoodInsecurity2024[state];
  if (food) {
    scores.push({
      id: "cost-of-living", label: "Cost of living & household welfare",
      value: average([
        peerIndex(food.moderateOrSevere, foodModeratePeers, false),
        peerIndex(food.severe, foodSeverePeers, false),
      ]) ?? 5.5,
      evidenceCount: 2, expectedEvidence: 2,
      evidenceLabel: "NDHS 2024 food-insecurity survey · state peer index",
      period: ndhsFoodInsecuritySource.period, comparisonGroup: "36 states and FCT",
      scope: "state-snapshot", provisional: true,
      method: "Equal-weight average of two separately ranked state indicators: moderate/severe and severe food insecurity among the de jure population. Lower prevalence ranks higher. Each indicator is converted to a percentile-style 1–10 score before averaging.",
      interpretation: "A 2024 household-welfare snapshot, not a measured change from the governor's inherited baseline. Survey estimates reflect the 12 months before interview and are not monthly food-price inflation.",
    });
  }

  const labour = stateLabourBaseline2023[state];
  if (labour) {
    scores.push({
      id: "economy-jobs", label: "Economy, employment & productivity",
      value: average([
        peerIndex(labour.unemploymentRate, unemploymentPeers, false),
        peerIndex(labour.labourForceParticipationRate, participationPeers, true),
      ]) ?? 5.5,
      evidenceCount: 2, expectedEvidence: 2,
      evidenceLabel: "NBS Annual Labour Force Survey 2023 · state peer index",
      period: "Calendar year 2023", comparisonGroup: "36 states and FCT",
      scope: "state-snapshot", provisional: true,
      method: "Equal-weight average of separately ranked state indicators: unemployment (lower is better) and labour-force participation (higher is better).",
      interpretation: "The 2023 annual survey overlaps the transition into office for many governors and predates later administrations. Participation is not a job-quality measure; this is a labour-market snapshot, not a tenure trend or causal assessment.",
    });
  }

  const financeComponents: number[] = [];
  const financeLabels: string[] = [];
  const revenue = data.igr;
  const population = statePopulation2023[state];
  if (revenue !== undefined && population) {
    financeComponents.push(peerIndex(revenue * 1000000000 / population, igrPerCapitaPeers, true));
    financeLabels.push("2025 IGR per 2023 projected resident");
  }
  if (data.educationExecution !== undefined) {
    financeComponents.push(peerIndex(data.educationExecution, educationExecutionPeers, true));
    financeLabels.push("FY2025 education budget execution");
  }
  if (data.healthExecution !== undefined) {
    financeComponents.push(peerIndex(data.healthExecution, healthExecutionPeers, true));
    financeLabels.push("FY2025 health budget execution");
  }
  if (financeComponents.length) {
    scores.push({
      id: "public-finance", label: "Public finance & fiscal management",
      value: average(financeComponents) ?? 5.5,
      evidenceCount: financeComponents.length, expectedEvidence: 3,
      evidenceLabel: financeLabels.join(" · "),
      period: "FY2025 revenue and budget reporting; 2023 population denominator",
      comparisonGroup: "States with the corresponding published measure",
      scope: "state-snapshot", provisional: true,
      method: "Equal-weight average of available component percentile scores: 2025 internally generated revenue per 2023 projected resident, FY2025 education budget execution and FY2025 health budget execution. Each component is ranked separately; unavailable components are omitted, not treated as zero.",
      interpretation: "IGR per resident is nominal and does not measure tax fairness or fiscal effort. Budget execution is not spending quality or service delivery; execution above 100% is retained as reported. This is a narrow fiscal-capacity/implementation snapshot, not a complete audit of public finances.",
    });
  }

  const fatalityRate = securityFatalityRate(state);
  if (fatalityRate !== undefined) {
    scores.push({
      id: "security", label: "Security & public safety",
      value: peerIndex(fatalityRate, securityPeers, false),
      evidenceCount: 1, expectedEvidence: 1,
      evidenceLabel: "EUAA / ACLED estimated fatalities per 100,000 residents",
      period: stateSecuritySource.period, comparisonGroup: "36 states and FCT",
      scope: "state-snapshot", provisional: true,
      method: "Estimated fatalities in ACLED-recorded events from 1 January 2024 to 31 December 2025 divided by the NBS 2023 projected population, expressed per 100,000 residents; lower rates rank higher.",
      interpretation: "A population-adjusted two-year monitoring estimate, not a complete death register or full-tenure trend. ACLED estimates do not distinguish civilian from non-civilian fatalities, and event reporting can vary by location.",
    });
  }

  const healthComponents: number[] = [];
  if (data.vaccination !== undefined) {
    healthComponents.push(peerIndex(data.vaccination, ndhsVaccinationPeers, true));
  }
  const dhis2 = stateDhIs2Immunisation2023To2024[state];
  if (dhis2) {
    healthComponents.push(peerIndex(dhis2.year2024, dhis2VaccinationPeers, true));
  }
  if (healthComponents.length) {
    scores.push({
      id: "health", label: "Healthcare & health outcomes",
      value: average(healthComponents) ?? 5.5,
      evidenceCount: healthComponents.length, expectedEvidence: 2,
      evidenceLabel: "NDHS 2023–24 survey + DHIS2 2024 administrative coverage",
      period: "2023–2024", comparisonGroup: "36 states and FCT",
      scope: "state-snapshot", provisional: true,
      method: "Equal-weight average of two separately calculated state percentile scores: NDHS share of children aged 12–23 months fully vaccinated for basic antigens, and DHIS2 fully-immunised-by-age-one administrative coverage in 2024. The measures are ranked separately because their definitions differ.",
      interpretation: "The household survey and routine administrative coverage are not interchangeable. DHIS2 coverage can exceed 100% because of denominator and catchment issues. These are coverage snapshots, not a causal estimate of the governor's contribution.",
    });
  }
  return scores;
}

export function getPublicRecordScores(person: { name: string; office: string; state?: string }) {
  const categories = person.office === "President" ? getNationalSnapshotScores() : getStateSnapshotScores(person.state || "");
  const scoredIds = new Set(categories.map(item => item.id));
  const notScored = tenureAssessmentCategories.filter(item => !scoredIds.has(item.id)).map(item => ({ ...item }));
  const overallScore = average(categories.map(item => item.value));
  return {
    categories,
    notScored,
    overallScore,
    scoredCategoryCount: categories.length,
    totalAssessmentCategories: tenureAssessmentCategories.length,
    overallCoverage: Number((categories.length / tenureAssessmentCategories.length * 100).toFixed(1)),
    publicationStatus: categories.length ? "provisional" as const : "in-progress" as const,
    overallFormula: "The Sabi Overall Score is the simple arithmetic average of every published category score for this profile, rounded to one decimal place. Unscored categories are excluded, never treated as zero.",
    publicationRequirement: "No minimum category count applies. The number of included categories, reference periods and comparison group are disclosed. Partial coverage is provisional and should not be used as a like-for-like league-table ranking.",
  };
}

export function describePublicRecord(person: { name: string; office: string; state?: string }) {
  const record = getPublicRecordIndicators(person);
  if (person.office === "President") {
    return "The national record reports headline inflation of 14.06% and food inflation of 19.13% year-on-year in October 2026, alongside real GDP growth of 4.43% in Q2 2026. Headline inflation was 18.97% in October 2025, while real GDP growth was 4.23% in Q2 2025. Gross external reserves were US$55.2bn on 30 October 2026 and total public debt was ₦166.7tn in Q2 2026. The NDHS 2023–24 survey reported that 39% of children aged 12–23 months nationally had received all basic antigens. These figures measure different parts of public life and do not, by themselves, establish how much change was caused by the President. Each is linked to its source and period.";
  }
  const area = person.state || "the relevant jurisdiction";
  const facts = record.indicators.map(item => `${item.label.toLowerCase()}: ${item.displayValue} (${item.period})`);
  const unavailable = record.missing.length
    ? ` The profile also discloses ${record.missing.length} research or data gap(s), each explained below.`
    : "";
  return `The published public record for ${area} currently includes ${facts.join("; ")}. These figures cover revenue, budget reporting and/or a survey outcome depending on the indicator. They describe the jurisdiction during the stated reporting periods and should not be read as a causal estimate of ${person.name}'s individual contribution.${unavailable}`;
}
