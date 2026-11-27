# Sabi tenure evidence register

**Research snapshot:** 27 November 2026  
**Branch:** `feature/evidence-first-public-records`  
**Purpose:** Record the public sources, extracted observations, coverage gaps and methodological cautions that should inform Sabi's longitudinal officeholder research.

This register is a research index, not a political verdict. It does not assign new grades from the observations listed here. It separates the existence of a source from the availability of a comparable observation, and separates an outcome that occurred during an administration from evidence that the officeholder caused it.

## Research coverage added in this pass

The profile research desk currently indexes **46 source series and portals**, with **31 national-level observation cards**. Several state-level source files have also been extracted:

| Evidence file | Coverage | What is recorded | Important qualification |
|---|---:|---|---|
| `src/data/security-state-2024-25.ts` | 37 jurisdictions | ACLED/EUAA incidents and estimated fatalities, 2024–25 | Not the complete post-May-2023 tenure; estimated fatalities do not distinguish civilian/non-civilian deaths |
| `src/data/mpi-baselines.ts` | 37 jurisdictions | 2021/22 National MPI, incidence, intensity, 95% confidence intervals and affected population | Pre-tenure baseline; not a monetary poverty measure; Borno state representativeness is limited |
| `src/data/ndhs-food-insecurity.ts` | 37 jurisdictions | 2024 NDHS moderate/severe and severe food insecurity with sample-person counts | Survey measure over previous 12 months; not a direct attribution to an officeholder |
| `src/data/ndhs-child-mortality.ts` | 37 jurisdictions | 2024 NDHS state under-five mortality estimate | Retrospective ten-year estimate, most of which predates May 2023 |
| `src/data/mics-baselines.ts` | 37 jurisdictions × 9 measures | 333 observations across early learning, school attendance, WASH, child labour and child marriage | 2021 baseline, before current 2023 administrations; Borno sampled seven of 27 LGAs |
| `src/data/nalabe-baselines.ts` | 37 jurisdictions × 3 grade levels | 111 mathematics observations: P3, P5, JS2 mean scale score and minimum proficiency | October 2022 baseline; not post-2023 outcomes; weighted table counts are not raw sample sizes |
| `src/data/dhis2-immunisation.ts` | 36 states and FCT | 2023 and 2024 annualised fully-immunised-by-age-one coverage | DHIS2 administrative rate, not the NDHS household survey; rates above 100% are retained as published |
| `src/data/education-census-baseline.ts` | 34 jurisdiction rows, 33 with numeric returns | 2024/25 learner, teacher, classroom, toilet and inclusion counts/ratios (latest portal snapshot 22 September 2026) | September 2026 portal snapshot reports 53.7% national school reporting; Rivers row has no usable return; several state ratios/counts are anomalous and require reconciliation |
| `src/data/public-records.ts` | 36 states + FCT where reported | IGR, FY2025 budget execution and NDHS 2023/24 vaccination; national macro indicators | Several are one-year observations, not tenure-wide measures |

The `getTenureEvidence()` helper connects state-specific records to the corresponding profile. The President's profile receives the national time-series and source observations; governor profiles receive state records plus selected national context.

**Source count is not a performance-coverage percentage.** A portal in the catalogue is a place to investigate. It does not mean all of its files have been downloaded, parsed, verified, compared across years or converted into a complete tenure series.


### Updated Federal Ministry of Education school-census portal snapshot

The live Nigeria Education Statistics 2024 / Annual School Census portal was rechecked on 27 November 2026. Its latest dated portal snapshot is generated **22 September 2026**, replacing the earlier 18 July 2026 extract.

- Nationally, the portal lists **230,844 schools**, of which **124,066 submitted returns (53.7%)**. It reports 39,825,932 learners, 1,185,610 teachers, 725,778 classrooms and 604,479 toilets.
- The state table now contains rows for all 36 states and the FCT. Rivers remains a zero/blank return and is treated as unavailable, never as zero learners.
- Several reported values require verification before comparison or scoring: Cross River reports only 9,231 learners; Enugu reports 3 learners per toilet; Taraba reports 831.1 learners per toilet; Kwara reports 79,744 learners with special needs. These are preserved as publisher values but flagged as anomalies.
- The portal has a low response rate, so non-reporting schools are not evidence of zero learners, teachers or facilities. These raw administrative returns are not a representative full-school census and are not learning outcomes.
- Do not mix the July and September portal vintages in a trend. Retain the snapshot date and use the September table as the current display, pending state EMIS reconciliation.

Source: Federal Ministry of Education, [Nigeria Education Statistics portal](https://emis.education.gov.ng/portal/), snapshot generated 22 September 2026; checked 27 November 2026.

## 1. Cost of living and household welfare

### Sources indexed
- UNDP/OPHI Global MPI 2026 country profile, using Nigeria's 2024 survey (separate method from National MPI).
- NBS Nigeria Multidimensional Poverty Index 2022 state table (D6), including confidence intervals.
- 2024 NDHS state food insecurity table using the FAO Food Insecurity Experience Scale.
- NBS CPI and Inflation monthly archive.
- CBN 2023 Financial Markets Department report, containing the monthly pre-rebase 2023 headline inflation trajectory.
- CBN June 2026 Quarterly Statistical Bulletin, including the revised CPI linkage note and CPI tables.
- NBS Selected Food Price Watch monthly archive, covering food prices across states and LGAs.
- NBS Cost of a Healthy Diet monthly archive.
- NBS Transport Fare Watch monthly archive.
- NBS General Household Survey Panel Wave 5 (2023/24), with household consumption, purchases and income-generating activity variables.
- Nigeria Governors' Forum and BudgIT fiscal materials also provide context for transfers and state household conditions.

### Extracted observations
- Global MPI 2026 reports Nigeria's latest publicly available survey data (2024) as MPI 0.269, 48.7% incidence, 18.1% vulnerable to multidimensional poverty and 55.1% intensity. This uses the global three-dimension method and is not comparable to the separate National MPI 2022 series.
- The 2024 NDHS reports state-level food insecurity for all 36 states and FCT; nationally 67.7% of the de jure population experienced moderate or severe food insecurity and 33.0% severe food insecurity. Rivers is 76.6% / 33.5%, while Yobe is 94.1% / 65.9%.
- NBS state MPI (2021/22) records Rivers incidence at 62.4% (95% CI 57.7–67.0) and Sokoto at 90.5% (88.2–92.8). The national incidence was 62.9% (61.9–63.8) and intensity 40.9%; the report estimated 132.92 million people multidimensionally poor. This is an inherited baseline, not an administration outcome.
- Legacy headline inflation rose from 21.82% in January 2023 to 28.92% in December 2023. This is the old CPI series and includes the transition between administrations.
- Selected NBS food prices, June 2023 to June 2024: onion +215.20%; boneless beef +102.74%; sliced bread +117.35%; palm oil +56.90%.
- March 2024 Cost of a Healthy Diet: ₦982 per adult per day nationally; selected state estimates ranged from ₦739 in Katsina to ₦1,330 in Ekiti.
- South-South transport fare examples are captured for July 2023 and July 2024, but they are zonal—not state-specific—averages.
- The GHS Panel Wave 5 interviewed 4,715 households in 518 enumeration areas. Visits took place July–September 2023 and January–March 2024.
- NBS 2021/22 MPI D6 state data: 62.9% national incidence (95% CI 61.9–63.8), 40.9% intensity and 132.92 million people classified multidimensionally poor; full 37-jurisdiction table with confidence intervals is stored in `src/data/mpi-baselines.ts`.

### Method cautions and next extraction
Inflation is not the same as the price level or affordability. Sabi should retain the CPI index, month-on-month rate and year-on-year rate, then pair those with matched food-item prices, healthy-diet costs, fares, poverty and real household income/consumption. The NBS CPI was rebased in 2025; the CBN June 2026 Statistical Bulletin documents the NBS's revised linkage using the 12-month average of 2024 = 100 rather than the initially used December 2024 = 100. Use the official revised linked series and store its vintage—do not create a hand-built splice.

The food-price and transport archives have not yet been exhaustively extracted month-by-month and state-by-state. The 2023/24 GHS panel covers two visits, not a full tenure. The next extraction should add all available monthly state food and transport data, the official linked CPI index history, GHS weighted consumption and income estimates, and the relevant NBS poverty and labour-market waves.

## 2. Economy, jobs and productive activity

### Sources indexed
- NBS quarterly GDP releases and national accounts.
- NBS Annual Nigeria Labour Force Survey 2023.
- NBS quarterly Labour Force Survey catalogue.
- NBS GHS Panel Wave 5.
- NDIC 2025 Annual Report, reproducing NBS/CBN macroeconomic time series.
- CBN Quarterly Statistical Bulletin.

### Extracted observations
- NBS Labour Force Survey 2023 state unemployment and labour-force participation baseline: 37 jurisdictions.
- Quarterly NBS comparison sequence for unemployment from Q4 2022 through Q2 2024, preserving the missing Q4 2023 value rather than interpolating.
- Rebased annual real GDP growth series reproduced by NDIC for 2021–2025: 0.95%, 4.32%, 3.04%, 3.38% and 3.87%.
- The 2023 annual labour estimate overlaps outgoing and incoming administrations for most officeholders; it is not a clean post-inauguration observation.

### Next extraction
Build the full quarterly GDP series by industry and expenditure, GDP per capita using a consistent population denominator, and the complete labour series with participation, employment-to-population ratio, underemployment, informality, youth employment and earnings. Do not use unemployment rate alone: participation and job quality matter.

## 3. Public finance and fiscal management

### Sources indexed
- Budget Office quarterly Federal Budget Implementation Reports.
- Nigeria Governors' Forum Public Finance Database.
- BudgIT State of States annual reports.
- NBS IGR source and the FY2025 budget execution publications already used by the public-record dataset.

### Extracted observations
- BudgIT 35-state aggregate revenue rose from ₦8.66tn in 2023 to ₦17.17tn in 2024; FAAC rose from ₦5.4tn to ₦11.38tn and accounted for a reported 66% of the aggregate revenue increase.
- Existing public records contain state 2025 IGR and FY2025 education/health budget implementation where the source provides comparable figures.
- The Federal Budget Office quarterly report archive is indexed for a year-by-year federal revenue, expenditure, release and capital implementation extraction.

### Next extraction
For every state and the federal government, capture approved budget, revised budget, actual revenue and actual expenditure, audited-account status, FAAC dependence, internally generated revenue, recurrent/capital split, debt stock, debt service, arrears and sectoral spending. Keep nominal and inflation-adjusted figures separate, and distinguish budgets from actual cash releases and delivered services.

## 4. Security and public safety

### Sources indexed
- ACLED Nigeria event data.
- EUAA country analysis and its state-level ACLED-derived table for 1 January 2024–31 December 2025.
- IOM Displacement Tracking Matrix (DTM) assessments.

### Extracted observations
- State-level security events and estimated fatalities for all 36 states and FCT were transcribed from the EUAA table. The state totals sum to the reported national total of 8,654 incidents and 21,504 estimated fatalities for the two-year window.
- The report describes 7,590 estimated fatalities in incidents coded as violence against civilians.
- IOM DTM Round 50 records 2,292,477 internally displaced people and 2,189,318 returnees in six north-east states, as of its February–April 2025 assessment.

### Method cautions and next extraction
ACLED fatalities are estimates and do not distinguish civilian from non-civilian deaths. Event reporting and historical coding can change. IOM DTM coverage is limited to assessed areas, not a national census. Extend the event series backwards to the 2023 inauguration date and forwards to the latest complete month, then disaggregate event types, deaths, kidnappings, displacement, returns and exposure by state and population. Cross-check with NCDC/police/official sources and reputable media, without adding incompatible counts together.

## 5. Education and learning

### Sources indexed
- 2021 MICS/NICS statistical snapshots.
- UBEC National Assessment of Learning Achievement in Basic Education (NALABE) 2022.
- Federal Ministry of Education Annual School Census 2024/25.
- Nigeria Education Data Infrastructure (NEDI) public dashboard.
- NEMIS public datasets and annual education digests.
- UNICEF Situation Analysis 2024 and UBEC publication archive.

### Extracted observations
- 2021 MICS state baselines for 37 jurisdictions include early-childhood attendance, age-five organised learning, primary and junior-secondary attendance.
- NALABE 2022 state mathematics tables include P3, P5 and JS2 mean scale scores and minimum proficiency, across 37 jurisdictions.
- National NALABE minimum proficiency rates reported in the source: P3 mathematics 50%, P3 English 32%, P5 mathematics 34%, P5 English 44%, JS2 mathematics 14%, JS2 English 31%.
- The 2024/25 Annual School Census portal includes state learner/teacher, learner/classroom and learner/toilet ratios, gender and special-needs counts. It reports 57.9% school reporting nationally; some displayed state entries are visibly incomplete or anomalous.
- NEDI presents additional 2024/25 state breakdowns for enrolment, public/private school coverage, classroom pressure, school infrastructure, computers and teacher capacity. Its totals differ from the Annual School Census portal and are not merged.

### Method cautions and next extraction
MICS and NALABE are 2021/2022 baselines, not results under governors inaugurated in 2023. NALABE weighted table counts must not be described as raw tested sample sizes. NEDI and the Annual School Census differ in their school universe/reporting population and need reconciliation. Extract learning tables for English, science and social studies as well as mathematics; capture the source's statistical uncertainty, age/grade and proficiency definitions. Add post-2023 comparable assessments when available.

## 6. Health

### Sources indexed
- 2024 NDHS.
- State of Health of the Nation Report 2024 (FMOH), containing state health profiles and comparisons.
- DHIS2 administrative data in the same report.
- 2021 MICS/NICS.
- UNICEF/UN IGME child mortality series.
- IOM/UNICEF/WHO sources where relevant to disease, health workforce and services.

### Extracted observations
- NDHS 2024 state map provides retrospective 10-year under-five mortality estimates for all 36 states and FCT. Examples: Jigawa 161 and Kwara 14 deaths per 1,000 live births. The estimates are not 2024-only; most of the underlying window predates May 2023.
- National under-five mortality in the NDHS 2024 report is 110 per 1,000 live births for the five years preceding the survey (95% CI 103–117). The report's earlier NDHS survey comparisons are 132 before the 2018 survey and 128 before the 2013 survey; these are survey-period comparisons, not calendar-year estimates.
- NDHS 2023/24 full basic-antigen vaccination estimates are already present in the public-record data for states and FCT.
- DHIS2 2023 and 2024 annualised “fully immunised by age one” coverage is now captured for 36 states and FCT.
- 2021 NICS national estimates include 36% fully vaccinated, 57% Penta3 coverage and 21% Penta1-to-Penta3 dropout.
- The FMOH report's state health profiles add health budget share, health insurance coverage, health facility/workforce tables, NDHS 2018/2023 outcomes (including under-five mortality, antenatal care, skilled birth and stunting), and 2023/2024 DHIS2 values.

### Method cautions and next extraction
Do not treat DHIS2 administrative coverage as the same metric as NDHS survey estimates. Administrative ratios above 100% are retained as published and signal denominator/catchment issues. The 2021 NICS is a baseline; the 2023/24 NDHS overlaps only part of the new tenure. State reports contain both survey-based outcomes and administrative records—label each separately and distinguish outcome trends from state-government initiatives or claims.

The full state-by-state FMOH outcome tables are not yet exhaustively extracted into structured data in this pass; the source is linked for further extraction.

## 7. Infrastructure and basic services

### Sources indexed
- NERC annual and quarterly electricity-industry reports.
- Federal Ministry of Water Resources/NBS/World Bank/UNICEF WASHNORM 2021.
- WHO/UNICEF Joint Monitoring Programme.
- NBS/NERC/other sector portals.
- NOCOPO federal procurement disclosures.
- Kaduna open contract/project database.
- Independent road-project compilation (used as a lead list, not a verified project register).

### Extracted observations
- NERC 2024 annual report: average hourly grid generation was 4,206 MWh/h in 2021, 3,929 in 2022, 4,191 in 2023 and 4,144 in 2024; energy delivered series is captured separately.
- NERC Q4 2025 metering coverage: national 57.27%; Port Harcourt DisCo 64.13%, Eko 85.87%, Ikeja 86.40%, Yola 30.80%, Jos 31.43%, Kaduna 34.42% and Kano 35.35%.
- WASHNORM 2021 national pre-tenure baselines and MICS 2021 state WASH observations are recorded.
- A civil-society road compilation lists 246 federal road/bridge/maintenance project entries as research leads.

### Method cautions and next extraction
Grid generation is not household hours of electricity. DisCo service areas do not map one-to-one to state boundaries. A procurement award, budget line or project announcement is not evidence of completion, quality or service delivery. Project registers must record location, contract value, contractor, procurement method, start date, planned completion, verified physical status, independent inspection and operational/service outcome.

## 8. Integrity, accountability and procurement

### Sources indexed
- ICPC annual reports and Ethics & Integrity Compliance Scorecards.
- EFCC official reports and public statements.
- NOCOPO federal open contracting disclosures.
- State procurement/public finance portals where available.
- Court records and further reporting remain to be integrated case by case.

### Extracted observations
- ICPC reported 2024–2025 petitions, completed investigations, cases, convictions, asset recoveries and EICS institution scores for federal MDAs.
- EFCC reported 3,175 convictions and ₦156.276bn in recoveries during 29 May 2023–29 May 2024.
- EFCC separately reported more than 19,000 petitions, 29,240 investigations, 10,525 court filings, 7,503 convictions, over ₦566bn, US$411m and 1,502 properties recovered during October 2023–September 2025.

### Method cautions and next extraction
These are agency-reported enforcement outputs, not independent measurements of corruption prevalence or the personal integrity of an elected official. Petitions, investigations, charges, convictions and final forfeitures are distinct stages. ICPC institutional compliance ratings are not politician ratings. Individual case records must be tracked with the exact officeholder, allegation, date, legal status, court outcome, appeal status and independent source. An allegation must never be described as a finding of guilt.

## 9. Manifestos, priorities and promise delivery

### Sources indexed
- Original APC Renewed Hope 2023 presidential manifesto.
- OpenPolls Africa 2023 manifesto archive and an 88-commitment Tinubu pledge compilation.
- International Press Centre's selected campaign-promise compilation.
- Office of the Secretary to the Government of the Federation's eight presidential priority areas.
- Nigeria Health Watch manifesto archive for selected presidential and governorship candidates.
- APC 2027 manifesto, kept in a separate 2027–2031 collection.

### Method cautions and next extraction
A campaign manifesto, a later executive priority framework and a campaign's own retrospective claim are three different records. Sabi should preserve the exact original promise, source passage, deadline, beneficiary, geography, responsible tier of government, measurable output/outcome and subsequent evidence. Each promise should be checked against budgets, procurement, implementation records, completed works and independent verification. The available manifesto archive is not a complete register for all 36 serving governors. The 2027 manifesto must never be used to fill missing 2023–2027 commitments.

## Tenure dates and inherited baseline rule

Every profile's assessment period must begin on that officeholder's actual assumption-of-office date, not 1 January of the election year. A calendar-year 2023 statistic may include a predecessor's months. For each indicator, Sabi should store:
- exact observation period and publication date;
- the officeholder's date in office;
- pre-tenure baseline (preferably a multi-year mean or trend where available);
- latest complete comparable observation;
- source/data vintage and any revisions;
- geography, population, unit and denominator;
- whether the measure is a survey, administrative record, modelled estimate, official claim or independent analysis;
- attribution limits and missing periods.

A baseline-only observation is useful context, but it is not evidence that a later administration improved or worsened the measure. A single 2024/25 snapshot does not become a tenure series merely because the current officeholder was in office during that year.

## Known extraction gaps

1. Full month-by-month, state-by-state extraction of NBS CPI, Selected Food Price Watch, Cost of a Healthy Diet and Transport Fare Watch.
2. Complete quarterly GDP and labour-market data with compatible definitions and revised data vintages.
3. Full 2023-to-latest ACLED state series, cross-checked against other event and displacement sources.
4. FMOH state-level health outcome tables and source-level metadata in structured form.
5. NALABE English, science/technology and social-studies state tables.
6. Reconciliation of FME Annual School Census, NEDI and NEMIS state records and their denominators.
7. State-by-state audited budgets, debt, fiscal returns and sector spending through multiple years.
8. State-level procurement/project registers beyond the states with public open-data systems.
9. Pledge-by-pledge registers for all 36 sitting governors, each derived from the original manifesto and verified project/administrative evidence.
10. Individual integrity/court-case records with full due-process status and a documented right-of-reply process.

## Publication rule

Do not represent a source catalogue as completed research, baseline indicators as tenure outcomes, administrative activity as citizen outcomes, or events during an administration as proof of that administration's causation. Display the original source, date, scope, caveat and missing data. Preserve corrections and revisions in the public record.
