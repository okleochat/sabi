/**
 * Sabi Public Records — source-linked indicators, not ratings.
 * Values are transcribed from published datasets and retain their original units,
 * population definitions and reporting periods. No composite score or ranking is derived.
 */
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
  indicatorScore?: { value: number; basis: string; benchmark?: string; benchmarkSourceUrl?: string; note: string };
};

export type CategoryScore = {
  id: "economy" | "education" | "health" | "growth" | "price-stability";
  label: string;
  value: number;
  evidenceCount: number;
  expectedEvidence: number;
  evidenceLabel: string;
  method: string;
  interpretation: string;
  provisional: boolean;
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
    const indicators = nationalIndicators.map(item => {
      if (item.id === "real-gdp-growth-2026-q2") return {
        ...item,
        indicatorScore: {
          value: roundScore(Math.min(10, (item.value / 4.68) * 10)),
          basis: "2026 official budget benchmark",
          benchmark: "4.68% real GDP growth projection for 2026",
          benchmarkSourceUrl: "https://nass.gov.ng/documents/download/11234",
          note: "Q2 year-on-year growth compared directionally with the full-year 2026 budget projection. This is a provisional partial-year benchmark check, not the final full-year result.",
        },
      };
      if (item.id === "headline-inflation-2026-10") return {
        ...item,
        indicatorScore: {
          value: roundScore(Math.min(10, (16.5 / item.value) * 10)),
          basis: "2026 official budget benchmark",
          benchmark: "16.5% inflation assumption for 2026",
          benchmarkSourceUrl: "https://nass.gov.ng/documents/download/11234",
          note: "Lower inflation than the budget assumption earns a higher benchmark score. October year-on-year inflation is compared directionally with the 2026 budget assumption; it is not the final annual average.",
        },
      };
      if (item.id === "vaccination-national-ndhs-2023-24") return {
        ...item,
        indicatorScore: {
          value: roundScore(item.value / 10),
          basis: "Coverage percentage converted to a 0–10 scale",
          benchmark: "100% of children aged 12–23 months fully vaccinated",
          note: "A coverage-level score, not a trend score or a causal estimate of federal performance. Health delivery is shared across federal, state and local systems.",
        },
      };
      return item;
    });
    return { indicators, missing: [
      { id: "presidential-commitment-ledger", label: "Presidential manifesto commitments", period: "2023–2027 term", reason: "The 2023 Renewed Hope manifesto is identifiable, but Sabi's item-by-item commitment register and evidence decisions are not yet published." },
      { id: "security-outcomes", label: "Security outcomes", period: "2023–2026", reason: "A comparable, source-validated national series with consistent baseline and reporting periods has not yet been added to this public record." },
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
  const scoredIndicators = indicators.map(item => {
    if (item.id === "igr-2025") {
      const values = Object.entries(stateData).filter(([name]) => name !== "Federal Capital Territory");
      const jurisdictions = person.office === "FCT Minister"
        ? Object.entries(stateData)
        : values;
      const sorted = jurisdictions.slice().sort((a, b) => (b[1].igr || 0) - (a[1].igr || 0));
      const rank = sorted.findIndex(([name]) => name === jurisdiction) + 1;
      const total = sorted.length;
      const peerValue = total > 1 ? (10 * (total - rank) / (total - 1)) : 0;
      return {
        ...item,
        indicatorScore: {
          value: roundScore(peerValue),
          basis: "2025 nominal IGR peer position",
          benchmark: `Rank ${rank} of ${total} ${person.office === "FCT Minister" ? "state and FCT jurisdictions" : "states"}`,
          note: "This is a relative score for total nominal revenue collected, not per-capita revenue, inflation-adjusted growth, household prosperity or a standalone judgement of the officeholder.",
        },
      };
    }
    if (item.id === "education-execution-2025") return {
      ...item,
      indicatorScore: {
        value: executionScore(item.value),
        basis: "2025 approved-budget execution",
        benchmark: "100% of the approved education budget spent",
        note: "Calculated as 10 − the absolute percentage-point distance from 100%, divided by 10. Budget execution is a fiscal-process measure, not evidence of learning or school quality.",
      },
    };
    if (item.id === "health-execution-2025") return {
      ...item,
      indicatorScore: {
        value: executionScore(item.value),
        basis: "2025 approved-budget execution",
        benchmark: "100% of the approved health budget spent",
        note: "A score of 10 is exact execution of the approved amount. Under- or over-execution moves the score away from 10; expenditure above 100% is not rewarded as extra performance.",
      },
    };
    if (item.id === "vaccination-ndhs-2023-24") return {
      ...item,
      indicatorScore: {
        value: roundScore(item.value / 10),
        basis: "NDHS 2024 coverage percentage converted to a 0–10 scale",
        benchmark: "100% of children aged 12–23 months fully vaccinated",
        note: "This measures the state-level survey result, not change during the governor's tenure. It is not a causal estimate of the governor's contribution.",
      },
    };
    return item;
  });
  return { indicators: scoredIndicators, missing };
}

function roundScore(value: number) {
  return Math.round(Math.max(0, Math.min(10, value)) * 10) / 10;
}

function executionScore(value: number) {
  return roundScore(10 - Math.abs(100 - value) / 10);
}

export function getPublicRecordScores(person: { name: string; office: string; state?: string }) {
  const record = getPublicRecordIndicators(person);
  const byId = new Map(record.indicators.map(item => [item.id, item]));
  const average = (ids: string[]) => {
    const scores = ids.map(id => byId.get(id)?.indicatorScore?.value).filter((value): value is number => value !== undefined);
    return scores.length ? roundScore(scores.reduce((sum, value) => sum + value, 0) / scores.length) : null;
  };
  const categories: CategoryScore[] = [];
  if (person.office === "President") {
    const growth = average(["real-gdp-growth-2026-q2"]);
    const priceStability = average(["headline-inflation-2026-10"]);
    const health = average(["vaccination-national-ndhs-2023-24"]);
    if (growth !== null) categories.push({
      id: "growth", label: "Economic growth", value: growth,
      evidenceCount: 1, expectedEvidence: 1, evidenceLabel: "1 GDP benchmark",
      method: "Q2 2026 real GDP growth attainment: actual 4.43% divided by the 4.68% 2026 Federal Government budget projection, multiplied by 10.",
      interpretation: "A provisional partial-year check against the full-year budget projection, not the final annual growth result or proof of presidential causation.",
      provisional: true,
    });
    if (priceStability !== null) categories.push({
      id: "price-stability", label: "Price stability", value: priceStability,
      evidenceCount: 1, expectedEvidence: 1, evidenceLabel: "1 inflation benchmark",
      method: "16.5% 2026 Federal Government budget inflation assumption divided by October 2026 year-on-year headline inflation of 14.06%, multiplied by 10 and capped at 10.",
      interpretation: "A provisional directional comparison. October year-on-year inflation is not the final full-year average, and a lower inflation rate means prices rise more slowly—not that prices have fallen.",
      provisional: true,
    });
    if (health !== null) categories.push({
      id: "health", label: "Health outcomes", value: health,
      evidenceCount: 1, expectedEvidence: 1, evidenceLabel: "1 survey indicator",
      method: "Share of children aged 12–23 months fully vaccinated for all basic antigens, divided by 10.",
      interpretation: "A national coverage-level indicator from NDHS 2024. Health delivery is shared across all tiers of government; this is not a causal presidential rating.",
      provisional: true,
    });
  } else {
    const economy = average(["igr-2025"]);
    const education = average(["education-execution-2025"]);
    const healthIds = ["health-execution-2025", "vaccination-ndhs-2023-24"];
    const health = average(healthIds);
    if (economy !== null) categories.push({
      id: "economy", label: "Revenue & fiscal capacity", value: economy,
      evidenceCount: 1, expectedEvidence: 1, evidenceLabel: "1 revenue benchmark",
      method: person.office === "FCT Minister"
        ? "2025 IGR rank among the 36 states and the FCT, converted linearly to a 0–10 peer score."
        : "2025 IGR rank among the 36 states, converted linearly to a 0–10 peer score.",
      interpretation: "A relative score for nominal total revenue. It is not population-adjusted, inflation-adjusted or a complete measure of the state economy.",
      provisional: true,
    });
    if (education !== null) categories.push({
      id: "education", label: "Education budget execution", value: education,
      evidenceCount: 1, expectedEvidence: 1, evidenceLabel: "1 budget benchmark",
      method: "10 − (absolute distance from 100% budget execution ÷ 10), bounded from 0 to 10.",
      interpretation: "Measures whether the approved education budget was executed, not whether learning outcomes improved.",
      provisional: true,
    });
    if (health !== null) {
      const availableHealth = healthIds.filter(id => byId.get(id)?.indicatorScore).length;
      categories.push({
        id: "health", label: "Health & immunisation", value: health,
        evidenceCount: availableHealth, expectedEvidence: 2, evidenceLabel: `${availableHealth} of 2 indicators`,
        method: "Equal-weight average of the health budget-execution score and NDHS basic-vaccination coverage score. Where the budget dataset excludes a state, the available vaccination indicator is shown alone.",
        interpretation: "Combines a fiscal-process measure and a household-survey outcome. The reporting periods differ and the result is not a causal estimate of the governor's contribution.",
        provisional: true,
      });
    }
  }
  const scoredIds = new Set(categories.map(category => category.id));
  const notScored: UnscoredCategory[] = [];
  if (!scoredIds.has("education")) notScored.push({
    id: "education", label: "Education",
    reason: person.office === "President"
      ? "A comparable federal education-outcome dataset has not yet been added to this national profile."
      : "The cited education budget dataset does not provide a comparable figure for this jurisdiction.",
  });
  if (!scoredIds.has("health")) notScored.push({
    id: "health", label: "Health",
    reason: "No source-linked health indicator is currently available for this jurisdiction.",
  });
  notScored.push(
    { id: "integrity", label: "Integrity & promise delivery", reason: "The item-by-item manifesto or public-commitment register and its approved evidence decisions are not yet complete." },
    { id: "security", label: "Security", reason: "A comparable, validated security-outcome series has not yet been added to this profile." },
    { id: "infrastructure", label: "Infrastructure & basic services", reason: "Comparable service-delivery measures and dated baselines are still being compiled." },
  );
  const totalAssessmentCategories = categories.length + notScored.length;
  const overallScore = categories.length
    ? roundScore(categories.reduce((sum, category) => sum + category.value, 0) / categories.length)
    : null;
  const overallCoverage = totalAssessmentCategories
    ? Math.round((categories.length / totalAssessmentCategories) * 100)
    : 0;
  return {
    categories,
    notScored,
    overallScore,
    scoredCategoryCount: categories.length,
    totalAssessmentCategories,
    overallCoverage,
    overallFormula: "Arithmetic mean of all published category scores. Categories marked Not scored yet are excluded, never assigned zero; the number of scored categories and total assessment categories is shown alongside the result.",
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
