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