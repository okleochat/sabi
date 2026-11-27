# Sabi Public Records methodology v3.0.0

## Purpose

Sabi assesses the record of an administration over the period the officeholder actually held office. Its Overall Score remains a permanent product feature, but a numerical grade is published only when enough category assessments pass a defined evidence standard. A current-quarter or single-year snapshot is not a tenure assessment.

The framework distinguishes:
1. **Jurisdictional outcomes:** what happened in the country or state during the period.
2. **Officeholder conduct and delivery:** what the individual or administration demonstrably decided, funded, implemented, promised or was legally found to have done.
3. **Attribution:** what the evidence can reasonably connect to those actions, accounting for inherited conditions, shared responsibilities and external shocks.

A result occurring during an administration is not, by itself, proof that the officeholder caused it.

## Assessment period and baseline

- **Start date:** use the actual assumption-of-office date for each President, governor or appointed official. Do not use 1 January of an election year by default.
- **End date:** use the latest complete reporting period available at publication and display the exact cut-off date and source vintage.
- **Inherited baseline:** prefer a comparable two- or three-year pre-tenure average or trend. Where the source supports only one survey or observation, display it as limited baseline context and do not imply a multi-year baseline.
- **Post-tenure trajectory:** normally require at least two comparable post-assumption observations spanning 12 months or more. For monthly/quarterly sources, use the full available series rather than cherry-picked endpoints. For surveys, use comparable rounds and publish confidence intervals, sampling limits and reference periods.
- **Transition periods:** split years or fiscal periods that overlap the assumption date where possible. Otherwise flag them as transition/overlapping observations instead of assigning the entire period to one administration.
- **Statistical revisions:** retain source vintage, revised definitions and rebasing notes. Do not splice incompatible series without an official linking method.

## Eight assessment categories

| Category | Evidence to assess | Critical safeguards |
|---|---|---|
| Cost of living & household welfare | Linked CPI index, cumulative price-level change, matched state food prices, healthy-diet cost, transport fares, real wages and household income/consumption | Disinflation is not a fall in prices. Compare prices with purchasing power; respect NBS CPI rebasing. |
| Economy, employment & productivity | Annual/quarterly real GDP, real GDP per capita, sector growth, labour-force participation, employment-to-population, underemployment, informality, youth employment and real earnings | Do not grade from one quarter or unemployment alone. Account for population growth and job quality. |
| Public finance & fiscal management | Actual revenue, IGR, FAAC dependence, real/per-capita revenue, actual recurrent/capital expenditure, audited accounts, debt, debt service, arrears and service outcomes | Separate nominal from real values, budgets from releases and actual expenditure, and spending from services delivered. |
| Security & public safety | Dated incidents, fatalities, population-adjusted rates, kidnappings, displacement, returns, geography and incident type | Use full-term series and pre-tenure baseline; account for data revisions/reporting bias and incompatible event definitions. |
| Education & learning | Learning assessments/proficiency, attendance, completion/dropout, literacy/numeracy, teacher availability and school access/infrastructure | Budget execution or incomplete school-census returns alone do not establish learning performance. Report participation and sample coverage. |
| Healthcare & health outcomes | Maternal, neonatal, infant and under-five mortality, vaccination, primary care access, skilled birth attendance, insurance and essential-service access | Keep household surveys distinct from DHIS2 administrative coverage and budget execution. |
| Infrastructure & basic services | Electricity availability/reliability, roads, water, sanitation, transport, housing and verified project delivery/operational status | Announcements, contracts and ground-breakings are not proof of completion, quality or service. |
| Integrity, governance & promise delivery | Original manifestos/attributable pledges, procurement disclosures, audit findings, court records, legally established outcomes and implementation evidence | Distinguish allegations, investigations, charges, convictions and final appeals. Agency enforcement totals are not personal integrity scores. |

## How category scores are calculated

Every category must have a documented, category-specific scoring specification before a grade is published:

1. List the indicators and explain why they represent that category.
2. Pre-register the direction of improvement, indicator weights, data sources and benchmarks before calculating the officeholder's result.
3. Calculate change from the inherited baseline using the full comparable series.
4. Assess the latest absolute condition against a published standard, target or appropriate peer benchmark.
5. Test distributional and service-quality differences where data allow (for example, per-capita, rural/urban, regional, gender or income differences).
6. Map indicators to the 0–10 scale using disclosed, directionally correct transformations. Explain uncertainty, data gaps and denominator quality.
7. Aggregate indicators using published weights based on substantive importance and measurement quality—not the number of rows available.

A category must not be scored from a one-off snapshot, a source catalogue entry, a government press release alone, an inherited baseline alone or a budget allocation without evidence of implementation and outcomes. Do not invent benchmarks, interpolate missing values or adjust formulas to obtain a preferred political result.

## The Sabi Overall Score

- **Scale:** 0–10, one decimal place.
- **Formula:** equal-weight arithmetic mean of the category scores that independently pass the tenure-wide evidence standard.
- **Publication threshold:** at least **6 of the 8 categories** must qualify before a numerical Overall Score is shown. Until then, the Overall Score panel remains visible and displays **IN PROGRESS**.
- **Missing categories:** never assigned zero. The profile lists the eight categories and explains why each one is or is not ready.
- **Coverage language:** distinguish raw evidence collected from categories score-ready. A source count is not a coverage percentage.
- **Comparisons:** a six- or seven-category score can be published with explicit missing-category disclosure, but a league table or direct rank comparison requires all eight categories, comparable office levels, term windows, definitions and score versions.

The Overall Score is an analytical summary, not a measure of public popularity, and does not establish that every observed outcome was caused by the officeholder.

## Integrity and promise delivery protocol

For each promise, preserve the original wording, source document, publication date, deadline, geography, beneficiary, responsible tier of government and measurable output/outcome. Verify implementation against budgets, procurement, audited accounts, physical inspection, operational status and independent evidence.

Permitted statuses:
- **Fulfilled:** evidence supports delivery of the specified output or outcome.
- **Partly fulfilled:** some elements are verified, but the full promise is not.
- **Underway:** an implementation step is documented; delivery is not yet established.
- **Not yet due:** the stated deadline has not passed.
- **Evidence not found:** a reasonable review did not locate evidence; this is not proof that no action occurred.
- **Disputed:** credible sources materially disagree and the disagreement is shown.

For integrity matters, record the exact individual, alleged conduct, dates, source, procedural stage, court and final outcome/appeal status. An allegation is not a finding of guilt. Provide a reasonable right-of-reply and correction route while preserving editorial independence.

## Evidence and source hierarchy

1. Original statistical releases, laws, court judgments, audited accounts, budgets and regulator records.
2. Government/agency administrative data with definitions and reporting completeness disclosed.
3. Independent monitoring and research with accessible methodology.
4. Credible reporting for context and cross-checks.
5. Manifestos and official statements as evidence of what was promised or claimed, not proof of delivery.

## Current publication status — 27 November 2026

The 46-source catalogue and extracted public records materially expand what Sabi can investigate, but they do **not** yet constitute complete longitudinal performance datasets across the eight categories. Several sources remain partially extracted; some are pre-tenure baselines, surveys with limited time windows, administrative returns with low reporting completeness, or event tables that do not cover an entire administration.

Therefore, the code currently withholds numerical category and Overall Scores. The profile keeps the Overall Score panel and the eight-category readiness explanations visible. This replaces the earlier snapshot-based 0–10 scores, which are withdrawn because they could make a few current observations appear to represent a politician's entire tenure.

See [TENURE-EVIDENCE-REGISTER.md](./TENURE-EVIDENCE-REGISTER.md) for extracted evidence, current coverage and outstanding work.
