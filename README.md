# Sabi Politics

Sabi Politics is the first civic-information edition from Sabi, focused on Nigeria's 2027 elections.

## Application
The Next.js application source is under `src/`:
- `src/app` — page routes and API endpoints
- `src/lib` — Firebase server/client and data access
- `src/data` — source-captured INEC presidential ticket dataset

The project includes package manifests at the repository root and under `src/` so Firebase App Hosting can build whether its configured app root is `/` or `/src`. The recommended App Hosting root directory is `/`, matching the checked-in rollout trigger `src/app/*`.

## Stack
- Next.js App Router
- Firebase App Hosting
- Cloud Firestore via Firebase Admin SDK and App Hosting Application Default Credentials
- Firebase Authentication for newsroom sign-in
- Firestore-backed public claim intake and editorial workflow

## Development
From the repository root:

```bash
npm install
npm run dev
npm run build
```

Or from `src/` when using that folder as the app root:

```bash
cd src
npm install
npm run dev
npm run build
```

## Firebase services
Project ID: `sabipolitics`

App Hosting runtime uses its compute service account and Application Default Credentials. No service-account private key should be committed.

The `candidates` collection is populated idempotently from the source-captured INEC presidential roster on first successful server read. Public submissions are written to `claims`. Editorial access requires a document in `editors/{firebase-auth-uid}` with a role of `admin`, `editor`, or `factchecker`.

## Editorial standards
Candidate particulars in the initial seed are captured from INEC's final presidential list. Biographies, photographs, policy positions and performance assessments must be researched separately and linked to their sources before publication. Fact-check verdicts require human editorial review.
