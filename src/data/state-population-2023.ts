/**
 * 2023 state and FCT population projections published in the NBS Demographic
 * Bulletin 2023 (Annex 3), sourced from the National Population Commission.
 * Used only as a denominator for 2024–2025 security fatality rates.
 * These are projections based on the 2006 census, not a new census count.
 */
export const statePopulation2023: Record<string, number> = {
  "Abia": 4232255,
  "Adamawa": 5017720,
  "Akwa Ibom": 5044286,
  "Anambra": 6061011,
  "Bauchi": 8529872,
  "Bayelsa": 2583352,
  "Benue": 6259867,
  "Borno": 6207654,
  "Cross River": 4490963,
  "Delta": 5737314,
  "Ebonyi": 3315180,
  "Edo": 4874613,
  "Ekiti": 3667047,
  "Enugu": 4768489,
  "Federal Capital Territory": 3171148,
  "Gombe": 4058199,
  "Imo": 5548808,
  "Jigawa": 7687056,
  "Kaduna": 9249537,
  "Kano": 15671491,
  "Katsina": 10661373,
  "Kebbi": 5711801,
  "Kogi": 4557686,
  "Kwara": 3626882,
  "Lagos": 13710862,
  "Nasarawa": 2948849,
  "Niger": 6965970,
  "Ogun": 6512195,
  "Ondo": 5422399,
  "Osun": 4494970,
  "Oyo": 8127483,
  "Plateau": 4807502,
  "Rivers": 7616859,
  "Sokoto": 6501265,
  "Taraba": 3689513,
  "Yobe": 3728525,
  "Zamfara": 5990131,
};
export const statePopulation2023Source = {
  publisher: "National Population Commission, reproduced by National Bureau of Statistics",
  title: "NBS Demographic Bulletin 2023 — Annex 3: Projected Population by State",
  period: "2023 population projection",
  url: "https://microdata.nigerianstat.gov.ng/index.php/catalog/182/download/1392/Demographic%20Bulletin%202023.pdf",
  note: "The projection is based on the 2006 Population and Housing Census. It is used as an approximate denominator for state-level 2024–2025 security fatality rates; it is not a fresh census or a precise 2025 population estimate.",
};
