# Sabi Public Records methodology v2.1.0

## Purpose

Sabi publishes category scores out of 10 wherever the public record contains a usable, source-linked metric and a disclosed benchmark. Scores are attached to the measured category, not presented as a single overall politician rating. They describe observed jurisdictional results or benchmark position; they do not, by themselves, prove that an officeholder caused those results.

## The 0–10 scale

All scores are shown to one decimal place. Each category score is the arithmetic mean of the indicator scores available in that category. The page shows the number of available indicators, the scoring basis, reporting periods and limitations. Missing indicators are not converted to zero.

### Governors — fiscal revenue position

- Indicator: total nominal internally generated revenue (IGR), calendar year 2025.
- Comparison: 36 states.
- Formula: **10 × (36 − rank) ÷ 35**. The highest IGR receives 10.0 and the lowest receives 0.0.
- FCT: the FCT Minister's jurisdiction is benchmarked separately against all 36 states plus the FCT.
- Important limitation: this is a peer-position score for total nominal revenue, not per-capita revenue, inflation-adjusted growth, household prosperity or a complete measure of economic performance. State size, tax base and economic structure influence the total.

### Governors — education budget execution

- Indicator: FY2025 education expenditure as a percentage of the approved education budget, from BudgIT's 2026 State of States Report.
- Formula: **max(0, 10 − |100 − execution percentage| ÷ 10)**, capped at 10.0.
- Exact execution of 100% earns 10.0. Under- or over-execution moves the score away from 10. Overspending is not rewarded with extra points.
- Important limitation: budget execution measures spending against an approved allocation. It does not prove that learning improved, schools were adequately staffed or funds were spent efficiently.

### Health — governors and FCT

- Indicators: (a) FY2025 health budget execution from BudgIT's 2026 Health Financing Report, and (b) the 2024 NDHS percentage of children aged 12–23 months fully vaccinated for all basic antigens.
- Budget execution uses the same distance-from-100 formula as education.
- Vaccination score: **coverage percentage ÷ 10**.
- Category score: equal-weight average of the available indicator scores. Where a state is excluded from the health budget dataset, the NDHS score is shown alone and the profile reports the reduced evidence coverage.
- Important limitation: this combines a fiscal-process indicator with a household-survey outcome from a different reporting period. The NDHS figure describes the surveyed population; it is not a change score or a causal estimate of the governor's contribution.

### President — economy and fiscal conditions

- Indicators: Q2 2026 real GDP growth compared with the 2026 Federal Government budget projection of 4.68%, and October 2026 year-on-year headline inflation compared directionally with the 2026 budget assumption of 16.5%.
- GDP score: **min(10, actual GDP growth ÷ 4.68 × 10)**.
- Inflation score: **min(10, 16.5 ÷ actual headline inflation × 10)**.
- Category score: arithmetic mean of the two indicator scores.
- Important limitation: the GDP figure is a Q2 year-on-year observation and inflation is an October year-on-year observation, while the benchmarks are full-year 2026 budget assumptions. The score is therefore provisional, directional benchmark tracking—not a final annual assessment. Food inflation, reserves and public debt are shown as contextual figures but are not included in this category score without a directly comparable score benchmark.

### President — health outcomes

- Indicator: 2024 NDHS national percentage of children aged 12–23 months fully vaccinated for all basic antigens.
- Score: **coverage percentage ÷ 10**.
- Important limitation: this is a national survey-level measure. Health delivery is shared among federal, state and local institutions; the figure does not establish an individual presidential contribution.

## Categories not yet scored

Integrity and manifesto delivery, security, infrastructure, and any education or service category without a comparable indicator are labelled **Not scored yet**, with a reason. A commitment score will only be published after a specific attributable promise, its deadline and the supporting evidence decision have been recorded and approved. No category receives an invented zero or an inferred score.

## Reading and comparing scores

A score is only comparable where the same formula, definition, population and period are used. Fiscal peer position is not an absolute grade. An indicator may be affected by population size, inherited infrastructure, federal policy, economic shocks and other factors beyond an officeholder's control. Sabi does not infer causation from correlation.

Every score links to its source and displays the underlying value, period, population/definition, publisher and known limitations. Government announcements are labelled as government claims unless corroborated. Conflicting records and corrections are displayed and logged.

## Source register

- **NBS 2025 Internally Generated Revenue:** https://microdata.nigerianstat.gov.ng/index.php/catalog/170/related-materials
- **Joint Tax Board 2024/2025 Year Book, page 14 — 2024 IGR comparison:** https://cms-api.jrb.gov.ng/api/publication-assets/file/2024-2025-jtb-year-book.pdf
- **BudgIT 2026 State of States Report, page 155 — FY2025 education budget execution:** https://budgit.org/wp-content/uploads/2026/11/States26SMDF1.pdf
- **BudgIT 2026 Health Financing Report — FY2025 health budget execution:** https://budgit.org/wp-content/uploads/2026/04/HealthFinancingReport__.pdf
- **Nigeria Demographic and Health Survey 2024, published September 2025:** https://www.health.gov.ng/wp-content/uploads/2025/10/NDHS-2024-Final-Report_Disseminated17102025.pdf
- **2026 Federal Government budget assumptions, National Assembly document:** https://nass.gov.ng/documents/download/11234
- **Nigeria Macro Dashboard, Federal Ministry of Finance:** https://finance.gov.ng/?page_id=26

See `RESEARCH-EVIDENCE-REGISTER.md` for detailed source coverage and limitations. See `PORTRAIT-SOURCING-REGISTER.md` for image provenance.
