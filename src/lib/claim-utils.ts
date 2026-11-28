import { createHash } from "node:crypto";

export type ClaimImpact = "positive" | "negative" | "mixed" | "neutral" | "unclear";
export type ClaimOrigin = "reader-submission" | "sabi-research";

export function normalizeClaim(value: unknown): string {
  return String(value || "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/https?:\/\/\S+/g, " ")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function claimFingerprint(value: unknown): string {
  const normalized = normalizeClaim(value);
  return createHash("sha256").update(normalized).digest("hex");
}

const subjectAliases: Record<string, { key: string; label: string; type: string }> = {
  "bola tinubu": { key: "bola-tinubu", label: "Bola Ahmed Tinubu", type: "elected-official" },
  "bola ahmed tinubu": { key: "bola-tinubu", label: "Bola Ahmed Tinubu", type: "elected-official" },
  "president tinubu": { key: "bola-tinubu", label: "Bola Ahmed Tinubu", type: "elected-official" },
  "tinubu": { key: "bola-tinubu", label: "Bola Ahmed Tinubu", type: "elected-official" },
  "peter obi": { key: "peter-obi", label: "Peter Obi", type: "presidential-candidate" },
  "obi": { key: "peter-obi", label: "Peter Obi", type: "presidential-candidate" },
  "nyesom wike": { key: "nyesom-wike", label: "Nyesom Wike", type: "public-official" },
  "fct minister wike": { key: "nyesom-wike", label: "Nyesom Wike", type: "public-official" },
  "wike": { key: "nyesom-wike", label: "Nyesom Wike", type: "public-official" },
  "seyi makinde": { key: "seyi-makinde", label: "Seyi Makinde", type: "elected-official" },
  "makinde": { key: "seyi-makinde", label: "Seyi Makinde", type: "elected-official" },
  "oluseyi makinde": { key: "seyi-makinde", label: "Seyi Makinde", type: "elected-official" },
  "atiku abubakar": { key: "atiku-abubakar", label: "Atiku Abubakar", type: "presidential-candidate" },
  "atiku": { key: "atiku-abubakar", label: "Atiku Abubakar", type: "presidential-candidate" },
  "former vice president atiku": { key: "atiku-abubakar", label: "Atiku Abubakar", type: "presidential-candidate" },
  "alex otti": { key: "alex-otti", label: "Alex Otti", type: "elected-official" },
  "alexander otti": { key: "alex-otti", label: "Alex Otti", type: "elected-official" },
  "otti": { key: "alex-otti", label: "Alex Otti", type: "elected-official" },
  "godswill akpabio": { key: "godswill-akpabio", label: "Godswill Akpabio", type: "public-official" },
  "akpabio": { key: "godswill-akpabio", label: "Godswill Akpabio", type: "public-official" },
  "charles soludo": { key: "charles-soludo", label: "Chukwuma Charles Soludo", type: "elected-official" },
  "soludo": { key: "charles-soludo", label: "Chukwuma Charles Soludo", type: "elected-official" },
  "chukwuma soludo": { key: "charles-soludo", label: "Chukwuma Charles Soludo", type: "elected-official" },
  "plateau state government": { key: "plateau-state-government", label: "Plateau State Government", type: "public-agency" },
  "plateau government": { key: "plateau-state-government", label: "Plateau State Government", type: "public-agency" },
  "national peace committee": { key: "national-peace-committee", label: "National Peace Committee", type: "public-agency" },
  "bishop matthew hassan kukah committee": { key: "national-peace-committee", label: "National Peace Committee", type: "public-agency" },
  "ok movement": { key: "ok-movement", label: "OK Movement", type: "political-support-organisation" },
  "obi kwankwaso movement": { key: "ok-movement", label: "OK Movement", type: "political-support-organisation" },
  "nigeria democratic congress": { key: "nigeria-democratic-congress", label: "Nigeria Democratic Congress", type: "political-party" },
  "jarrett tenebe": { key: "jarrett-tenebe", label: "Jarrett Tenebe", type: "party-official" },
  "2023 ebonyi governorship election": { key: "2023-ebonyi-governorship-election", label: "2023 Ebonyi governorship election", type: "election" },
  "ebonyi state": { key: "ebonyi-state", label: "Ebonyi State", type: "state" },
  "francis nwifuru": { key: "francis-nwifuru", label: "Francis Nwifuru", type: "elected-official" },
  "ifeanyi odii": { key: "ifeanyi-odii", label: "Ifeanyi Odii", type: "gubernatorial-candidate" },
  "babajide sanwo-olu": { key: "babajide-sanwo-olu", label: "Babajide Sanwo-Olu", type: "elected-official" },
  "caleb mutfwang": { key: "caleb-mutfwang", label: "Caleb Mutfwang", type: "elected-official" },
  "federal government": { key: "federal-government", label: "Federal Government of Nigeria", type: "public-agency" },
  "federal government of nigeria": { key: "federal-government", label: "Federal Government of Nigeria", type: "public-agency" },
  "edo state police command": { key: "edo-state-police-command", label: "Edo State Police Command", type: "public-agency" }
};

export function resolveClaimSubject(value: unknown, preferredType = ""): { subject: string; subjectKey: string; subjectType: string } {
  const raw = String(value || "").trim().replace(/\s+/g, " ").slice(0, 160);
  const normalized = normalizeClaim(raw);
  const known = subjectAliases[normalized];
  const subject = known?.label || raw;
  const subjectKey = known?.key || normalized.replace(/[^\p{L}\p{N}]+/gu, "-").replace(/^-|-$/g, "").slice(0, 100);
  return {
    subject,
    subjectKey,
    subjectType: preferredType || known?.type || (subject ? "other" : "")
  };
}

export function impactLabel(value: unknown): string {
  switch (value) {
    case "positive": return "Positive for subject";
    case "negative": return "Negative for subject";
    case "mixed": return "Mixed impact";
    case "neutral": return "Neutral / factual";
    default: return "Unclear / effect not established";
  }
}
