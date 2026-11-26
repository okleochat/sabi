# Sabi Politics

Next.js application for Sabi Politics, the first Sabi civic-information edition focused on Nigeria's 2027 elections.

## Project structure
The Next.js application lives in `src/` to match the Firebase App Hosting backend's configured source path.

## Stack
- Next.js App Router
- Firebase App Hosting
- Cloud Firestore via Firebase Admin SDK and App Hosting Application Default Credentials
- Firebase Authentication for newsroom sign-in
- Firestore-backed public claim intake and editorial workflow

## Development
Run commands from the `src/` directory:

```bash
npm install
npm run dev
npm run build
```

## Firebase services
Project ID: `sabipolitics`

App Hosting runtime uses the Firebase App Hosting compute service account and Application Default Credentials. No service-account private key should be committed.

The `candidates` collection is populated idempotently from the source-captured INEC presidential roster on first successful server read. Public submissions are written to `claims`. Editorial access requires a document in `editors/{firebase-auth-uid}` with a role of `admin`, `editor`, or `factchecker`.

## Editorial standards
Candidate particulars in the initial seed are captured from INEC's final presidential list. Biographies, photographs, policy positions and performance assessments must be researched separately and linked to their sources before publication. Fact-check verdicts require human editorial review.
