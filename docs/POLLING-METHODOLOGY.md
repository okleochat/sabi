# Sabi polling desk and estimator methodology

Version: 1.0.0
Research cut-off: 27 November 2026
Election: Nigeria's 2027 presidential election

## Purpose

Sabi's polling desk records public opinion surveys with enough methodological detail for readers to judge what each survey can and cannot tell them. It reports dated measurements, not electoral outcomes. It does not issue candidate endorsements, candidate ratings, a predicted winner or an individual's probability of winning.

The poll tracker keeps these question types separate: presidential candidate vote intention; political-party preference; government approval; turnout intention; and election confidence/integrity expectations. These questions are related but measure different things. They are not interchangeable and must not be averaged together.

## Current published evidence

The OpenPolls Africa catalogue checked for this release says that, as of 15 November 2026, it had not found a published survey of the 2027 presidential race that both names INEC's final candidate list and describes a random sample of voters. It identifies two SBM Voter Sentiment Tracker waves as party-preference surveys using non-random or undisclosed sampling, not candidate vote shares.

### SBM Voter Sentiment Tracker — Wave 1
- Fieldwork: third week of May 2026; published 11 June 2026.
- Sample: 829; eligible voters approached in public places across eight states and the FCT.
- Mode: face-to-face in markets, schools, viewing centres and hotels.
- Published party preference: NDC 57.4%, APC 11.3%, ADC 10.3%, undecided 11.3%; the remaining 9.7% is not disaggregated in the free summary.
- Limitation: non-probability public-place interviews; no published margin of error; party preference is not named-candidate vote intention; fieldwork predates the final INEC presidential list.

### SBM Voter Sentiment Tracker — Wave 2
- Fieldwork: September 2026; published 21 September 2026.
- Sample: 1,103 respondents in 12 states and the FCT.
- Published party preference: NDC 42.2%, APC 25.5%; the remaining 32.3% is not broken down.
- Limitation: the published summary does not state sampling method, mode or margin of error. The question remains party preference rather than candidate vote intention. It is not pooled with Wave 1.

### Yiaga Africa — National Voting Intentions Survey, Round 3 (NVIS 3.0)
- Fieldwork: September 2026; published 7 October 2026.
- Sample: 2,470 Nigerian adults across all 36 states and the FCT.
- Mode: 2,066 telephone interviews and 404 rural face-to-face interviews.
- Published results include 84% likely/very likely to vote, 47% very likely (within the 84%), 34% confident in INEC, 29% undecided on a presidential candidate, and 44% saying they intend to vote but have not settled on a choice (a separate question).
- Limitation: the 404 rural face-to-face interviews were not randomly selected. The published ±2.1-point margin of error is described as a nominal guide for the combined sample. No national party or candidate vote shares are published.

### Afrobarometer Round 11 — expectations of the 2027 election
- News release published 11 November 2026; sample 1,600 adult Nigerians; ±2.5 points at 95% confidence.
- The release reports 37% expecting the election to be largely free and fair, 48% expecting it not to be free/fair or to have major problems, 64% saying they are likely to vote and 92% of potential voters saying candidate policies will guide their vote.
- Limitation: it does not measure candidate vote intention. The OpenPolls catalogue notes that the release prints June–July 2024 as its fieldwork period despite describing Round 11 / 2026 and launching Round 11 in May 2026. Sabi preserves this unresolved date discrepancy and does not treat the data as a current November 2026 vote-intention poll.

## Entry rules for the national candidate-support average

A survey is eligible only when all of the following are true:
1. It asks respondents which presidential candidate they would vote for and identifies the actual final INEC candidate field.
2. It covers Nigeria nationally and targets eligible voters using a documented probability sample.
3. It publishes fieldwork dates, sample size, population, exact question, sampling frame/design, mode, weighting, sponsor and an accessible release or methodology.
4. It identifies any effective sample size, design effect or published margin of error that allows uncertainty to be assessed.
5. Fieldwork is recent enough to describe the current campaign period; publication date alone does not make old fieldwork current.

Opt-in online polls, open web votes, campaign-run surveys, public-place convenience samples, self-selected panels without documented probability selection and synthetic/modelled ballots are shown separately and excluded from the national average.

## Descriptive average formula

The average is a descriptive summary of qualified poll measurements only. It is not an election forecast.
- Retain the latest qualifying wave from each independent pollster to reduce repeated counting of overlapping releases.
- Use effective sample size where the pollster publishes it; where only a defensible design effect is provided, calculate effective n from it.
- Weight for the current window: square root of effective sample size multiplied by a 30-day half-life recency factor.
- Calculate each candidate's weighted average from candidate shares reported in qualifying polls.
- Do not rescale candidate shares to exclude undecided respondents unless the pollster published that exact method; show undecided and other categories separately.
- Do not calculate a pooled figure until at least three independent pollsters meet all eligibility rules.
- Do not report false precision or a combined margin of error without a defensible treatment of survey design, sample overlap and between-poll differences.

If no poll meets the rules, the interface says that no national candidate-support average is being published and explains why. It may still display non-comparable survey findings individually.

## Daily refresh

The Sabi Daily Research Desk runs on its existing 8 a.m. Africa/Lagos schedule. Its instructions now include a polling sweep every run: new source discovery, methodology audit, poll-entry preparation, and a no-material-update report when no new qualifying evidence exists. Substantive source/data changes should be proposed in a GitHub pull request, not silently merged or deployed.

## Source catalogue and primary references

- OpenPolls Africa, Nigeria 2027 opinion-poll catalogue (last updated 15 November 2026): https://openpolls.africa/polls
- Afrobarometer, 11 November 2026 news release: https://www.afrobarometer.org/articles/nigerians-doubt-electoral-fairness-ahead-of-2027-polls-expect-widespread-abuses-latest-afrobarometer-survey-shows/
- INEC, updated final presidential candidate list (31 October 2026): https://www.inecnigeria.org/press/updated-list-of-candidates-for-2027-presidential-election
- INEC candidate PDF: https://inecnigeria.org/documents/uploads/2026/10/b5af9099-864c-4d5e-924d-e1a2c771c529-final-list-presidential.pdf

Editorial rule: if a source changes its numbers, sample description or methodology, preserve the earlier version and record the correction date. Do not quietly overwrite a result.