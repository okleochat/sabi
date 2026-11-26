/**
 * Longitudinal evidence desk.
 *
 * This catalogue deliberately separates source discovery, extracted observations,
 * official claims and independent reporting. A source being present here does not
 * mean every item in it has been independently validated or attributed to an
 * officeholder. Observation values retain the publisher's period, scope and caveats.
 */

export type EvidenceCategory =
  | "cost-of-living"
  | "economy-jobs"
  | "public-finance"
  | "security"
  | "education"
  | "health"
  | "infrastructure"
  | "integrity"
  | "commitments";

export type EvidenceSource = {
  id: string;
  category: EvidenceCategory;
  title: string;
  publisher: string;
  url: string;
  period: string;
  geography: string;
  resolution: "national" | "state-and-national" | "selected-states" | "federal" | "multi-level";
  evidenceType: "official-statistics" | "official-administrative" | "independent-analysis" | "international-monitoring" | "civil-society-compilation" | "manifesto-or-commitment";
  use: string;
  limitation: string;
  officeScope: "national" | "subnational" | "both";
};

export type EvidenceObservation = {
  id: string;
  category: EvidenceCategory;
  label: string;
  value: string;
  period: string;
  geography: string;
  publisher: string;
  url: string;
  evidenceType: "official-statistics" | "official-administrative" | "independent-analysis" | "international-monitoring";
  note: string;
};

export type StateLabourBaseline = {
  unemploymentRate: number;
  labourForceParticipationRate: number;
};

// NBS Annual Nigeria Labour Force Survey 2023, Figure 5 and Figure 14.
// Rates are copied as published. The survey's definitions must be read with the
// report; do not splice them into later quarterly series without a comparability check.
export const stateLabourBaseline2023: Record<string, StateLabourBaseline> = {
  Abia: { unemploymentRate: 18.7, labourForceParticipationRate: 77.0 },
  Adamawa: { unemploymentRate: 3.2, labourForceParticipationRate: 63.7 },
  "Akwa Ibom": { unemploymentRate: 5.1, labourForceParticipationRate: 78.2 },
  Anambra: { unemploymentRate: 4.8, labourForceParticipationRate: 76.2 },
  Bauchi: { unemploymentRate: 4.2, labourForceParticipationRate: 92.3 },
  Bayelsa: { unemploymentRate: 6.3, labourForceParticipationRate: 69.8 },
  Benue: { unemploymentRate: 1.6, labourForceParticipationRate: 84.0 },
  Borno: { unemploymentRate: 7.3, labourForceParticipationRate: 80.3 },
  "Cross River": { unemploymentRate: 2.8, labourForceParticipationRate: 81.2 },
  Delta: { unemploymentRate: 8.2, labourForceParticipationRate: 67.5 },
  Ebonyi: { unemploymentRate: 3.7, labourForceParticipationRate: 63.5 },
  Edo: { unemploymentRate: 4.4, labourForceParticipationRate: 71.4 },
  Ekiti: { unemploymentRate: 5.5, labourForceParticipationRate: 63.4 },
  Enugu: { unemploymentRate: 5.9, labourForceParticipationRate: 69.0 },
  Gombe: { unemploymentRate: 11.2, labourForceParticipationRate: 66.9 },
  Imo: { unemploymentRate: 10.9, labourForceParticipationRate: 69.8 },
  Jigawa: { unemploymentRate: 4.0, labourForceParticipationRate: 72.9 },
  Kaduna: { unemploymentRate: 2.7, labourForceParticipationRate: 82.6 },
  Kano: { unemploymentRate: 7.6, labourForceParticipationRate: 82.0 },
  Katsina: { unemploymentRate: 2.8, labourForceParticipationRate: 80.6 },
  Kebbi: { unemploymentRate: 1.6, labourForceParticipationRate: 88.8 },
  Kogi: { unemploymentRate: 3.0, labourForceParticipationRate: 66.1 },
  Kwara: { unemploymentRate: 4.8, labourForceParticipationRate: 76.4 },
  Lagos: { unemploymentRate: 5.5, labourForceParticipationRate: 74.3 },
  Nasarawa: { unemploymentRate: 0.5, labourForceParticipationRate: 83.8 },
  Niger: { unemploymentRate: 3.2, labourForceParticipationRate: 87.2 },
  Ogun: { unemploymentRate: 8.8, labourForceParticipationRate: 76.2 },
  Ondo: { unemploymentRate: 5.7, labourForceParticipationRate: 73.7 },
  Osun: { unemploymentRate: 2.9, labourForceParticipationRate: 76.5 },
  Oyo: { unemploymentRate: 2.0, labourForceParticipationRate: 80.3 },
  Plateau: { unemploymentRate: 7.4, labourForceParticipationRate: 85.8 },
  Rivers: { unemploymentRate: 13.4, labourForceParticipationRate: 64.3 },
  Sokoto: { unemploymentRate: 1.2, labourForceParticipationRate: 83.1 },
  Taraba: { unemploymentRate: 1.9, labourForceParticipationRate: 71.9 },
  Yobe: { unemploymentRate: 3.3, labourForceParticipationRate: 83.5 },
  Zamfara: { unemploymentRate: 3.1, labourForceParticipationRate: 66.1 },
  "Federal Capital Territory": { unemploymentRate: 14.1, labourForceParticipationRate: 64.9 },
};

export const quarterlyLabourSeries2022To2024 = [
  { period: "Q4 2022", unemployment: 5.3, participation: 77.8, employmentToPopulation: 73.6, underemployment: 13.7, lu2: 18.2 },
  { period: "Q1 2023", unemployment: 4.1, participation: 79.9, employmentToPopulation: 76.6, underemployment: 12.2, lu2: 15.8 },
  { period: "Q2 2023", unemployment: 4.2, participation: 80.4, employmentToPopulation: 77.1, underemployment: 11.8, lu2: 15.5 },
  { period: "Q3 2023", unemployment: 5.0, participation: 79.5, employmentToPopulation: 75.6, underemployment: 12.3, lu2: 17.0 },
  // Q4 2023 is not shown in the published comparison table and is intentionally absent.
  { period: "Q1 2024", unemployment: 5.3, participation: 77.3, employmentToPopulation: 73.2, underemployment: 10.6, lu2: 15.3 },
  { period: "Q2 2024", unemployment: 4.3, participation: 79.5, employmentToPopulation: 76.1, underemployment: 9.2, lu2: 13.0 },
] as const;

// Source inventory expanded from direct publisher catalogs and report registers.
// "Source discovered" is not the same as "every record has been extracted".
export const tenureEvidenceSources: EvidenceSource[] = [
  {
    id: "nbs-cpi-monthly", category: "cost-of-living",
    title: "Consumer Price Index and Inflation — monthly archive",
    publisher: "National Bureau of Statistics",
    url: "https://microdata.nigerianstat.gov.ng/index.php/catalog/154/related-materials",
    period: "Monthly reports, including 2023–2026",
    geography: "National and state/urban price tables where published",
    resolution: "state-and-national", evidenceType: "official-statistics",
    use: "Reconstruct headline, food and core inflation trajectories; retain index levels as well as year-on-year and month-on-month rates; inspect the 2024 CPI rebasing and linking notes.",
    limitation: "The 2024 CPI rebasing changed the reference year and expenditure weights. Do not join old and new index series without NBS linking guidance. Inflation rates measure price increases, not the price level or affordability by themselves.",
    officeScope: "both",
  },
  {
    id: "nbs-gdp-quarterly", category: "economy-jobs",
    title: "Quarterly Gross Domestic Product — production, income and expenditure",
    publisher: "National Bureau of Statistics",
    url: "https://microdata.nigerianstat.gov.ng/index.php/catalog/147",
    period: "Quarterly; archive includes Q2 2026 and prior quarters",
    geography: "National; sector and industry breakdowns",
    resolution: "national", evidenceType: "official-statistics",
    use: "Build a quarter-by-quarter real GDP trajectory, sector contributions, oil/non-oil performance and annual comparisons. Add population-adjusted measures using a consistent population series.",
    limitation: "GDP growth is not household welfare. Record revisions, base-year changes and the distinction between nominal and real values. Federal and state responsibilities overlap.",
    officeScope: "national",
  },
  {
    id: "nbs-labour-annual-2023", category: "economy-jobs",
    title: "Annual Nigeria Labour Force Survey 2023",
    publisher: "National Bureau of Statistics",
    url: "https://nigerianstat.gov.ng/pdfuploads/Annual_Nigerian_Labour_Force_Survey_Report.pdf",
    period: "Calendar year 2023",
    geography: "National, all 36 states and FCT",
    resolution: "state-and-national", evidenceType: "official-statistics",
    use: "State-level unemployment and labour-force participation baseline; report also covers employment-to-population ratio, underemployment, informal work, labour underutilisation and youth NEET.",
    limitation: "The calendar-year estimate overlaps predecessor and current administrations for most officeholders who took office in May 2023. Treat it as an early-term/transition-period reference, not a clean full-tenure outcome.",
    officeScope: "both",
  },
  {
    id: "nbs-labour-quarterly", category: "economy-jobs",
    title: "Nigeria Labour Force Survey — Q2 2024 to Q2 2025 study series",
    publisher: "National Bureau of Statistics",
    url: "https://microdata.nigerianstat.gov.ng/index.php/catalog/152/related-materials",
    period: "Q2 2024–Q2 2025",
    geography: "Quarterly national estimates; catalogue includes survey documentation and microdata",
    resolution: "national", evidenceType: "official-statistics",
    use: "Extend the early-term labour trajectory beyond the 2023 state baseline. Preserve definitions, sex/age breakdowns and missing quarters.",
    limitation: "The displayed catalogue covers a survey series; extract each quarterly estimate and confirm the published tables and definitions before building a continuous line. Do not infer state-level precision where the particular release only supports national estimates.",
    officeScope: "national",
  },
  {
    id: "budget-office-quarterly", category: "public-finance",
    title: "Quarterly Federal Budget Implementation Reports",
    publisher: "Budget Office of the Federation",
    url: "https://budgetoffice.gov.ng/index.php/resources/internal-resources/reports/quarterly-budget-implementation/quarterly-budget-implementation-reports",
    period: "Quarterly archive, 2010–2026",
    geography: "Federal Government of Nigeria",
    resolution: "federal", evidenceType: "official-administrative",
    use: "Track revenue, expenditure, debt service, capital releases and implementation across successive quarters of the presidential term.",
    limitation: "Budget execution is not the same as completed infrastructure or service outcomes. Compare approved budgets, actual releases, cash expenditure, audited accounts and project delivery.",
    officeScope: "national",
  },
  {
    id: "budgit-state-of-states", category: "public-finance",
    title: "State of States — annual state fiscal analysis",
    publisher: "BudgIT",
    url: "https://stateofstates.budgit.org/reports",
    period: "Annual editions; long-run state series",
    geography: "36 Nigerian states (some annual editions omit states with unavailable audited accounts)",
    resolution: "state-and-national", evidenceType: "independent-analysis",
    use: "Track IGR, FAAC dependence, recurrent obligations, capital expenditure, debt sustainability and state fiscal space across multiple years.",
    limitation: "Read each edition's reporting year, exclusions and methodology. Revenue totals are affected by inflation and federal transfers; rankings from different editions should not be treated as directly comparable without checking definitions.",
    officeScope: "subnational",
  },
  {
    id: "ndhs-2024", category: "health",
    title: "2024 Nigeria Demographic and Health Survey — final report and key indicators",
    publisher: "National Population Commission, Federal Ministry of Health and Social Welfare, The DHS Program",
    url: "https://nationalpopulation.gov.ng/publications",
    period: "Fieldwork December 2023–May 2024; published 2025",
    geography: "National, urban/rural, all 36 states and FCT",
    resolution: "state-and-national", evidenceType: "official-statistics",
    use: "Maternal and child health, fertility, mortality, nutrition, immunisation, reproductive health and other household outcomes.",
    limitation: "A survey estimate over a specific fieldwork period, not a live annual series. It overlaps the start of the current administrations and cannot alone establish change since inauguration.",
    officeScope: "both",
  },
  {
    id: "unicef-child-mortality", category: "health",
    title: "UNICEF country data — child mortality time series",
    publisher: "UNICEF Data / UN Inter-agency Group for Child Mortality Estimation",
    url: "https://data.unicef.org/country/nga/",
    period: "Annual modelled estimates, 1990–2024",
    geography: "National",
    resolution: "national", evidenceType: "international-monitoring",
    use: "Provide a long-run under-five mortality trajectory and consistent reference series alongside periodic DHS/MICS survey estimates.",
    limitation: "Modelled estimates are not direct annual household survey observations. Keep the model vintage and uncertainty intervals where available; do not substitute for state-level survey estimates.",
    officeScope: "national",
  },
  {
    id: "unicef-sitan-2024", category: "education",
    title: "Situation Analysis of Children and Adolescents in Nigeria 2024",
    publisher: "UNICEF and Federal Ministry of Budget and Economic Planning",
    url: "https://www.unicef.org/nigeria/media/14381/file/Nigeria%20SitAn%202024%20Report_pdf.pdf",
    period: "Published 2024; draws on multiple survey years including MICS 2021",
    geography: "National with state/regional context in cited source material",
    resolution: "multi-level", evidenceType: "international-monitoring",
    use: "Education access, foundational literacy and numeracy, child poverty, nutrition, protection and other child outcomes.",
    limitation: "The learning figures cited from MICS 2021 predate the May 2023 administrations. Preserve the original data year rather than labelling them as 2024 outcomes.",
    officeScope: "both",
  },
  {
    id: "ubec-publications", category: "education",
    title: "UBEC annual reports, National Assessment of Learning Achievement and personnel audits",
    publisher: "Universal Basic Education Commission",
    url: "https://ubec.gov.ng/publications/reports",
    period: "Includes 2023 and 2024 annual reports, NALABE 2022 and 2022/23 National Personnel Audit",
    geography: "National and state-level basic education reporting, depending on publication",
    resolution: "state-and-national", evidenceType: "official-administrative",
    use: "School infrastructure, teacher distribution, basic education interventions, personnel, enrolment and learning assessment evidence.",
    limitation: "Each document has its own coverage, reference year and indicator definitions. Federal UBEC funding and state implementation responsibilities must be separated.",
    officeScope: "subnational",
  },
  {
    id: "washnorm-2021", category: "infrastructure",
    title: "Water, Sanitation and Hygiene National Outcome Routine Mapping (WASHNORM) 2021",
    publisher: "Federal Ministry of Water Resources, NBS, World Bank and UNICEF",
    url: "https://www.unicef.org/nigeria/reports/water-sanitation-and-hygiene-national-outcome-routine-mapping-report-2021",
    period: "2021 survey; published 2022",
    geography: "National and state profiles; households, schools, health facilities and public places",
    resolution: "state-and-national", evidenceType: "official-statistics",
    use: "Establish a pre-tenure baseline for drinking water, sanitation, hygiene, school and health-facility services.",
    limitation: "This is a baseline predating the current 2023 administrations. Use a later comparable survey or JMP series to measure subsequent change; do not present 2021 as current coverage.",
    officeScope: "both",
  },
  {
    id: "jmp-nigeria", category: "infrastructure",
    title: "WHO/UNICEF Joint Monitoring Programme — Nigeria household, school and health-facility WASH data",
    publisher: "WHO/UNICEF Joint Monitoring Programme",
    url: "https://washdata.org/countries/nigeria",
    period: "Long-run estimates; periodic updates",
    geography: "National and subnational disaggregation where data permit",
    resolution: "multi-level", evidenceType: "international-monitoring",
    use: "Track safely managed/basic drinking water, sanitation and hygiene services using harmonised global definitions.",
    limitation: "Some series are modelled and may draw on different national surveys. Retain source survey year and estimate type; subnational coverage is not uniform.",
    officeScope: "both",
  },
  {
    id: "nerc-reports", category: "infrastructure",
    title: "NERC annual and quarterly electricity-supply industry reports",
    publisher: "Nigerian Electricity Regulatory Commission",
    url: "https://nerc.gov.ng/resource-category/nerc-reports/",
    period: "Quarterly and annual reports, including 2023–2026",
    geography: "National grid, generation companies, DisCos, meter and service data; state-level regulation where applicable",
    resolution: "multi-level", evidenceType: "official-administrative",
    use: "Track available capacity, generation, energy delivered, transmission constraints, system collapses, metering, billing, tariffs, customer complaints and distribution-company service.",
    limitation: "Grid output is not the same as hours of electricity received by households. DisCo and feeder data are needed for distribution-level service; state-level attribution is especially difficult during the electricity-market decentralisation period.",
    officeScope: "both",
  },
  {
    id: "acled-nigeria", category: "security",
    title: "Nigeria political violence and protest event data",
    publisher: "Armed Conflict Location & Event Data (ACLED)",
    url: "https://acleddata.com/country/nigeria",
    period: "Downloadable event history from 2020 onward; updated weekly",
    geography: "National, state and local event locations",
    resolution: "state-and-national", evidenceType: "independent-analysis",
    use: "Build consistent event and fatality series by event type and state; separately examine violence against civilians, battles and explosions/remote violence.",
    limitation: "ACLED fatality figures are estimates and event reporting can change retrospectively. They are not a complete official death register and must not be merged indiscriminately with police, hospital or media counts.",
    officeScope: "both",
  },
  {
    id: "euaa-security-review", category: "security",
    title: "Nigeria security situation — 2024–2025 ACLED-based country analysis",
    publisher: "European Union Agency for Asylum",
    url: "https://www.euaa.europa.eu/country-guidance-nigeria/security-situation-nigeria-recent-events",
    period: "1 January 2024–31 December 2025",
    geography: "National with state breakdown",
    resolution: "state-and-national", evidenceType: "international-monitoring",
    use: "Independent cross-check of state-level event and fatality patterns, with explicit explanations of ACLED event categories and limitations.",
    limitation: "The report states ACLED fatality estimates do not distinguish civilian from non-civilian deaths. Its 2024–2025 window does not cover the entire presidential or state tenures.",
    officeScope: "both",
  },
  {
    id: "iom-dtm-nigeria", category: "security",
    title: "Nigeria Displacement Tracking Matrix — mobility tracking and site assessments",
    publisher: "International Organization for Migration",
    url: "https://dtm.iom.int/nigeria",
    period: "Repeated rounds; includes 2023–2025 assessments",
    geography: "North-east and selected north-central/north-west states; not nationwide coverage in every round",
    resolution: "selected-states", evidenceType: "international-monitoring",
    use: "Track internally displaced people, returnees, displacement locations and reported displacement drivers by assessment round.",
    limitation: "Coverage is geographic and round-specific. Displacement is influenced by insecurity, disasters, livelihoods and service access; it is not a complete nationwide displacement census.",
    officeScope: "both",
  },
  {
    id: "icpc-reports", category: "integrity",
    title: "ICPC annual reports and Ethics & Integrity Compliance Scorecards",
    publisher: "Independent Corrupt Practices and Other Related Offences Commission",
    url: "https://icpc.gov.ng/sdm_categories/reports/",
    period: "Includes 2023, 2024 and 2025 annual reports and scorecards",
    geography: "Federal MDAs and national anti-corruption activity; scope varies by report",
    resolution: "federal", evidenceType: "official-administrative",
    use: "Document investigations, prevention work, public-sector integrity controls, institutional compliance and published case outcomes.",
    limitation: "MDA compliance scorecards are not personal ratings of elected officials. Allegations, investigations, charges, convictions and recovered assets are distinct legal statuses.",
    officeScope: "national",
  },
  {
    id: "nocopo-open-contracting", category: "integrity",
    title: "Nigeria Open Contracting Portal — procurement disclosures",
    publisher: "Bureau of Public Procurement; Open Contracting Partnership Data Registry",
    url: "https://data.open-contracting.org/en/publication/64",
    period: "May 2021–October 2026; annual bulk files available",
    geography: "Federal procurement disclosures",
    resolution: "federal", evidenceType: "official-administrative",
    use: "Trace procurement plans, tenders, awards, suppliers and contract records; match infrastructure project claims to procurement documentation.",
    limitation: "A procurement record does not prove a contract was completed, delivered on time, good quality or corruption-free. Some processes never progress to contract award; excluded security procurements reduce coverage.",
    officeScope: "national",
  },
  {
    id: "kaduna-open-contracting", category: "infrastructure",
    title: "Kaduna State open infrastructure data — 1,769 published projects",
    publisher: "Kaduna State Public Procurement Authority / Kaduna State Government",
    url: "https://ipdata.kdsg.gov.ng/public/open-data",
    period: "Project records published by the state portal; verify each record's award and completion dates",
    geography: "Kaduna State only",
    resolution: "selected-states", evidenceType: "official-administrative",
    use: "Example of state-level open contract/project records with JSON, CSV and Excel downloads; can support project-by-project checks for Kaduna.",
    limitation: "This portal covers Kaduna only and cannot be treated as a nationwide state-project register. A published project record is not proof of completion or quality.",
    officeScope: "subnational",
  },
  {
    id: "roads-project-compilation", category: "infrastructure",
    title: "Federal road, bridge and maintenance project inventory — 2023–2026",
    publisher: "The Reality Ministry of Truth Law and Justice",
    url: "https://therealityministry.ngo/wp-content/uploads/2026/09/Tinubu-Road-Projects-2023-2026.pdf",
    period: "29 May 2023–17 September 2026",
    geography: "Named projects across the six geopolitical zones and FCT",
    resolution: "multi-level", evidenceType: "civil-society-compilation",
    use: "A lead list of 246 road, bridge and maintenance entries for project-level source checking and status verification.",
    limitation: "The compiler explicitly says this is not an exhaustive certified register, entries can represent contract sections or maintenance segments, and status is tied to the cited report date. Treat as leads, not verified completed outputs.",
    officeScope: "national",
  },
  {
    id: "tinubu-2023-manifesto", category: "commitments",
    title: "Renewed Hope — 2023 presidential manifesto",
    publisher: "All Progressives Congress presidential campaign; archived by Nigeria Health Watch Manifesto Public Archive",
    url: "https://manifesto.nigeriahealthwatch.com/manifestos/tinubu-bola-ahmed-2023",
    period: "2023 campaign commitments for the 2023–2027 term",
    geography: "Federal",
    resolution: "federal", evidenceType: "manifesto-or-commitment",
    use: "Extract individual commitments, measurable outputs, implied deadlines and responsible institutions from the original manifesto; link each to subsequent evidence.",
    limitation: "Manifesto language can be broad and non-timebound. Preserve the original wording and distinguish campaign promises from later government announcements and policy decisions.",
    officeScope: "national",
  },
  {
    id: "nigeria-manifesto-archive", category: "commitments",
    title: "Nigerian candidates' manifesto public archive",
    publisher: "Nigeria Health Watch",
    url: "https://manifesto.nigeriahealthwatch.com/manifestos",
    period: "2023 general election manifestos currently archived",
    geography: "Presidential and selected state governorship candidates",
    resolution: "selected-states", evidenceType: "manifesto-or-commitment",
    use: "Locate original manifesto documents for the President and a subset of governors; create pledge-by-pledge registers rather than relying on retrospective campaign summaries.",
    limitation: "The archive contains 15 manifestos, not all 36 governors or every candidate. The original campaign document must be preserved and completeness must be checked state by state.",
    officeScope: "both",
  },
];

const nationalObservations: EvidenceObservation[] = [
  {
    id: "nlfs-2023-national", category: "economy-jobs",
    label: "Annual labour market profile", value: "5.4% unemployment · 11.1% time-related underemployment · 92.2% informal employment",
    period: "2023 annual estimate", geography: "Nigeria",
    publisher: "National Bureau of Statistics",
    url: "https://nigerianstat.gov.ng/pdfuploads/Annual_Nigerian_Labour_Force_Survey_Report.pdf",
    evidenceType: "official-statistics",
    note: "The report estimates 84.15 million employed people and says 77.56 million people were in informal employment. Annual reference period overlaps predecessor and successor administrations for most states and the Presidency.",
  },
  {
    id: "nlfs-quarterly-2024", category: "economy-jobs",
    label: "Unemployment rate in the NBS quarterly comparison series",
    value: "5.3% (Q4 2022) → 4.1% (Q1 2023) → 4.2% (Q2 2023) → 5.0% (Q3 2023) → 5.3% (Q1 2024) → 4.3% (Q2 2024)",
    period: "Q4 2022–Q2 2024; Q4 2023 not shown", geography: "Nigeria",
    publisher: "National Bureau of Statistics",
    url: "https://nigerianstat.gov.ng/pdfuploads/NLFS_Q2_2024.pdf",
    evidenceType: "official-statistics",
    note: "This is the comparison table printed in the Q2 2024 report. Preserve the missing Q4 2023 observation; do not interpolate. Read unemployment alongside participation, employment-to-population ratio, underemployment and informality.",
  },
  {
    id: "child-mortality-2023-24", category: "health",
    label: "Under-five mortality (UNICEF/UN IGME annual estimates)",
    value: "116.8 (2023) → 115.6 (2024) deaths per 1,000 live births",
    period: "2023–2024", geography: "Nigeria",
    publisher: "UNICEF Data / UN Inter-agency Group for Child Mortality Estimation",
    url: "https://data.unicef.org/country/nga/",
    evidenceType: "international-monitoring",
    note: "Modelled national estimates, not annual survey counts. Use the full series and uncertainty intervals; this two-year change is not an individual officeholder attribution.",
  },
  {
    id: "learning-baseline-mics", category: "education",
    label: "Foundational learning baseline",
    value: "27% of children aged 7–14 had core reading skills; 25% had foundational numeracy skills",
    period: "MICS 2021; reported in UNICEF Situation Analysis 2024", geography: "Nigeria",
    publisher: "UNICEF",
    url: "https://www.unicef.org/nigeria/media/14381/file/Nigeria%20SitAn%202024%20Report_pdf.pdf",
    evidenceType: "international-monitoring",
    note: "The underlying learning assessment predates May 2023. It is a baseline context, not a measurement of outcomes under the current administrations.",
  },
  {
    id: "wash-baseline-2021", category: "infrastructure",
    label: "WASHNORM 2021 national service gaps",
    value: "48 million practised open defecation; 23% lacked basic water; 10% had basic water, sanitation and hygiene services combined",
    period: "2021 survey; published 2022", geography: "Nigeria",
    publisher: "Federal Ministry of Water Resources, NBS, World Bank and UNICEF",
    url: "https://www.unicef.org/nigeria/reports/water-sanitation-and-hygiene-national-outcome-routine-mapping-report-2021",
    evidenceType: "official-statistics",
    note: "Pre-tenure baseline. The report also found 8% practised safe handwashing. A later comparable survey is needed to establish change.",
  },
  {
    id: "nerc-generation-2021-24", category: "infrastructure",
    label: "Average hourly grid generation and energy delivered",
    value: "Generated: 4,206 MWh/h (2021), 3,929 (2022), 4,191 (2023), 4,144 (2024). Delivered: 4,159 MWh/h (2021), 3,888 (2022), 4,096 (2023), 4,179 (2024).",
    period: "Annual averages, 2021–2024", geography: "National grid",
    publisher: "Nigerian Electricity Regulatory Commission",
    url: "https://nerc.gov.ng/wp-content/uploads/2025/07/2024-Annual-Report.pdf",
    evidenceType: "official-administrative",
    note: "NERC 2024 Annual Report, Appendix Table D.2, printed page 189. Generation and grid delivery are not household supply hours; distribution-company/feeder data are needed to assess actual service.",
  },
  {
    id: "acled-security-2024-25", category: "security",
    label: "ACLED-recorded security incidents and fatalities",
    value: "8,654 incidents · 21,504 estimated fatalities",
    period: "1 January 2024–31 December 2025", geography: "Nigeria; state-level breakdown",
    publisher: "ACLED, summarised by the European Union Agency for Asylum",
    url: "https://www.euaa.europa.eu/country-guidance-nigeria/security-situation-nigeria-recent-events",
    evidenceType: "international-monitoring",
    note: "Incidents comprised 3,415 battles, 410 explosions/remote violence and 4,829 violence-against-civilians events. ACLED fatalities are estimates and do not distinguish civilian from non-civilian deaths.",
  },
  {
    id: "iom-dtm-round50", category: "security",
    label: "Internally displaced people in the north-east",
    value: "2,292,477 IDPs · 2,189,318 returnees",
    period: "Round 50; 25 February–5 April 2025", geography: "Six north-east states only",
    publisher: "International Organization for Migration — Displacement Tracking Matrix",
    url: "https://dtm.iom.int/data-product-series/site-assessment-2",
    evidenceType: "international-monitoring",
    note: "Compared with Round 49 (October–November 2024), IDPs rose by 40,129 (about 2%) and returnees by 59,993 (about 3%). The report attributes movements to multiple factors; this is not a nationwide count.",
  },
  {
    id: "budgit-state-revenue-2023-24", category: "public-finance",
    label: "Combined revenue of 35 states",
    value: "₦8.66tn (2023) → ₦17.17tn (2024); FAAC increased from ₦5.4tn to ₦11.38tn",
    period: "2023–2024", geography: "35 states included in the BudgIT comparison",
    publisher: "BudgIT — State of States",
    url: "https://stateofstates.budgit.org/",
    evidenceType: "independent-analysis",
    note: "BudgIT states FAAC accounted for 66% of the combined year-on-year revenue increase. These are nominal aggregates, not inflation-adjusted or per-capita figures; federal transfers are a major driver.",
  },
];

export function getTenureEvidence(person: { office: string; state?: string; termStart?: string }) {
  const scope = person.office === "President" ? "national" : person.office === "Governor" ? "subnational" : "both";
  const sources = tenureEvidenceSources.filter(source =>
    source.officeScope === "both" || source.officeScope === scope ||
    (scope === "subnational" && source.officeScope === "national")
  );

  const observations = nationalObservations.filter(item => {
    if (person.office === "President") return true;
    // National series remain visible as context, not as state-level outcomes.
    return ["acled-security-2024-25", "child-mortality-2023-24", "wash-baseline-2021", "nerc-generation-2021-24", "budgit-state-revenue-2023-24"].includes(item.id);
  });

  const stateRecord = person.state ? stateLabourBaseline2023[person.state] : undefined;
  if (stateRecord) {
    const context = person.termStart && person.termStart > "2023-01-01"
      ? "Calendar-year 2023 includes months before this officeholder took office; use as a transition/early-term baseline, not as a complete tenure result."
      : "Calendar-year 2023 is a reference-period observation; compare with a later survey before drawing a trend.";
    observations.unshift(
      {
        id: "state-unemployment-2023", category: "economy-jobs",
        label: "Unemployment rate",
        value: stateRecord.unemploymentRate + "%",
        period: "2023 annual estimate",
        geography: person.state || "State",
        publisher: "National Bureau of Statistics",
        url: "https://nigerianstat.gov.ng/pdfuploads/Annual_Nigerian_Labour_Force_Survey_Report.pdf",
        evidenceType: "official-statistics",
        note: context + " The survey's unemployment definition is the share of the labour force without work, actively seeking and available for work.",
      },
      {
        id: "state-labour-participation-2023", category: "economy-jobs",
        label: "Labour-force participation",
        value: stateRecord.labourForceParticipationRate + "%",
        period: "2023 annual estimate",
        geography: person.state || "State",
        publisher: "National Bureau of Statistics",
        url: "https://nigerianstat.gov.ng/pdfuploads/Annual_Nigerian_Labour_Force_Survey_Report.pdf",
        evidenceType: "official-statistics",
        note: context + " Participation measures the share of the working-age population in the labour force; it is not a job-quality measure.",
      },
    );
  }
  return { sources, observations, quarterlyLabourSeries: person.office === "President" ? quarterlyLabourSeries2022To2024 : [] };
}
