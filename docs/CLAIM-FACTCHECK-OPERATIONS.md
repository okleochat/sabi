# Sabi Check — claim intake and editorial operations

Version: 1.0.0
Status: code implemented; real-time notification requires an external webhook connection.

## Submission flow

The public Sabi Check form captures exact claim wording; claim category; the person, party, agency or organisation mentioned; relevant state/location; where and when the claim appeared; original source URL and additional evidence URLs; optional submitter contact details; and whether the claim is time-sensitive.

Submissions are written to the private Firestore claims collection with workflow status, timestamp, priority flag, alert status and an initially empty research record. Submitter contact details are not included in outbound webhook alerts.

## Editorial workflow

1. Submitted: stored, private and awaiting triage.
2. Triaged: editor has checked scope, time sensitivity, verifiability and public interest.
3. Researching: evidence collection is underway.
4. Editor review: draft findings, sources and verdict await an editor's decision.
5. Closed / published: a human editor has approved and published the fact-check, or the submission has been closed with a recorded reason.

Editors and fact-checkers can save private research notes, draft findings, verdict and evidence URLs in the newsroom workspace. Only an account with the admin or editor role can publish a fact-check. Publication also requires an explicit human confirmation. Published items are stored in the factchecks collection and appear in the public fact-check library.

## Fact-checking standard

- Preserve the exact statement, source, date, speaker/account and surrounding context.
- Verify numerical claims against the original table and reproduce calculations.
- Seek primary records first, then corroboration and credible counter-evidence.
- Distinguish factual accuracy from interpretation, opinion and prediction.
- Record the evidence that supports and contradicts the claim and what remains unknown.
- Keep allegations separate from legal findings; state procedural status and right-of-reply.
- Use a verdict only where evidence justifies it. Unproven or insufficient evidence is acceptable.
- Do not publish submitter contact information, sensitive personal data or private materials without a valid editorial/legal basis.

## Immediate alert webhook

The submission API supports two optional Vercel environment variables:
- SABI_CLAIM_ALERT_WEBHOOK_URL: an HTTPS webhook receiver such as an organisation-controlled n8n, Make, Zapier or newsroom notification endpoint.
- SABI_CLAIM_ALERT_SECRET: optional bearer secret sent to that receiver in the Authorization header.

The API sends an event named sabi.claim.created after the Firestore record is saved. The payload contains claim text, claim type, context, subject, location, source links, timestamp and time-sensitive flag. It deliberately excludes submitter contact details. Delivery status is stored on the claim as sent, failed, invalid_endpoint or not_configured.

To connect it:
1. Create a private webhook receiver in the newsroom's chosen automation/notification service.
2. Configure SABI_CLAIM_ALERT_WEBHOOK_URL in the Vercel project environment settings for the production environment.
3. Configure the same secret on both ends if the receiver checks bearer authentication.
4. Redeploy the Vercel application so the environment variables take effect.
5. Submit a test claim and verify the Firestore alert status and webhook receiver event.

Important limitation: code can send the alert, but it cannot wake this ChatGPT conversation or autonomously browse and publish a fact-check unless a separate, authenticated agent receiver is connected to the webhook. That receiver is not currently configured by this change. Until it is connected, claims are safely stored in the private newsroom inbox; the 8 a.m. Sabi task has been updated to process claim payloads when they are available in its connected context, but it cannot read private Firestore documents by itself.

## Privacy and security

- The queue is readable only by Firebase-authenticated accounts with an approved Firestore editors record and an allowed role.
- Submitter contact is returned only to approved newsroom users.
- Public claim submissions are rate-limited per observed client IP in the current application process; this is a basic abuse guard, not a substitute for a durable distributed rate-limit service.
- The optional webhook excludes private contact data. Treat the webhook URL and secret as server-side configuration and never embed them in client code or public documents.
- The newsroom route must be tested with an unapproved user and an approved factchecker/editor/admin account after deployment.

## Public subject catalogue and claim impact

Every claim can be classified under a primary subject (a person, public officeholder, candidate, party, agency or other institution). The canonical subject label and key keep spelling variants together; the current alias map includes Bola Ahmed Tinubu, Peter Obi, Nyesom Wike, Godswill Akpabio and Chukwuma Charles Soludo. Other subjects receive a normalized key and can be consolidated by an editor.

The separate impact field describes how the claim frames its subject:
- Positive for subject: the claim presents the subject favourably.
- Negative for subject: the claim presents the subject unfavourably.
- Mixed impact: the claim contains both favourable and unfavourable framing.
- Neutral / factual: no clear favourable or unfavourable framing.
- Not assessed: impact has not yet been classified.

Impact is not a truth verdict, an assessment of a person's character, or a rating of political performance. The truth verdict remains a separate editorial finding. Public cards and the newsroom explain this distinction.

## Provenance and research-origin claims

The origin field records how a claim entered Sabi:
- Reader submission: sent through the public claim form.
- Sabi newsroom research: identified independently through newsroom monitoring and source research.

Reader contact details remain private. Sabi-origin research leads are inserted into the private newsroom queue with a research status and evidence trail. They are not automatically published. A newsroom-discovered claim becomes public only after the same evidence standard and human approval used for reader submissions.

The initial newsroom research leads include the FCT Minister's July 2026 satellite-road completion statement and Abia Governor Alex Otti's May 2026 road-project totals. The public reports located so far repeat the officials' stated totals; project-level documentation is still needed. These are research leads, not verified findings.

The initial public Sabi-research fact-check seeds cover:
- The President's September 2026 inflation-rate comparison, with a distinction between disinflation and falling prices.
- The President's October 2026 claim of more than 4% economic growth, qualified to the available first-half 2026 GDP data.
- The Anambra debt figures in the 2026 public dispute about Peter Obi's 2014 handover, distinguishing original facility amounts, a 2026 remaining balance and the nearest DMO snapshots.
- The viral claim that Peter Obi did not build any school facilities, distinguishing new standalone schools from classroom construction and school rehabilitation.

These starter records are seeded once by stable Firestore document IDs. Subsequent edits to the source seed file do not overwrite a fact-check that has already been created in Firestore; editors should update a live record through the newsroom process.

## Duplicate and related-claim handling

Before submission, the public form calls the claim lookup endpoint. The system normalizes case, punctuation, accents, whitespace and embedded URLs and calculates a SHA-256 fingerprint. A Firestore claimFingerprints document provides an atomic duplicate guard, so concurrent submissions with the same normalized wording cannot both enter the queue. Existing archived fact-checks and recent legacy queue entries are also checked.

An exact match is blocked and the user is directed to the existing public check or informed that the exact claim is already in the private queue. Similar published claims are presented as suggestions only. They are not blocked because a related statement may have a different date, speaker, scope or context. The newsroom must review these distinctions.

The duplicate rule is exact-normalized wording, not a semantic guarantee. It cannot detect every paraphrase or two claims that express the same proposition in different words. The pre-submission suggestions help users notice related coverage, and editors should still consolidate genuine duplicates during triage.

## Public fact-check library

The public `/fact-checks` archive supports search across claim wording, title, summary, subject and cited-source names, plus filters for:
- Subject / person / institution.
- Impact on subject.
- Provenance (reader submission, Sabi newsroom research, or legacy origin not recorded).
- Editorial verdict.

The public detail page repeats subject, impact, provenance and verdict separately. No private queue content, submitter contact details or private research notes are exposed.
