/**
 * State-level ACLED-derived security event and fatality totals published by
 * the European Union Agency for Asylum in its 19 January 2026 COI response.
 *
 * Reference window: 1 Jan 2024–31 Dec 2025. Values are not current full-tenure
 * counts. ACLED fatalities are estimated direct deaths per event and do not
 * distinguish civilian from non-civilian deaths. Do not sum with other
 * incident/fatality registers as if definitions were interchangeable.
 */
export type StateSecurity2024To2025 = {
  incidents: number;
  estimatedFatalities: number;
};

export const stateSecurity2024To2025: Record<string, StateSecurity2024To2025> = {
  Abia: { incidents:98, estimatedFatalities:160 },
  Adamawa: { incidents:86, estimatedFatalities:148 },
  "Akwa Ibom": { incidents:52, estimatedFatalities:63 },
  Anambra: { incidents:223, estimatedFatalities:313 },
  Bauchi: { incidents:53, estimatedFatalities:164 },
  Bayelsa: { incidents:39, estimatedFatalities:44 },
  Benue: { incidents:467, estimatedFatalities:1439 },
  Borno: { incidents:1126, estimatedFatalities:5973 },
  "Cross River": { incidents:40, estimatedFatalities:53 },
  Delta: { incidents:216, estimatedFatalities:228 },
  Ebonyi: { incidents:66, estimatedFatalities:126 },
  Edo: { incidents:230, estimatedFatalities:208 },
  Ekiti: { incidents:30, estimatedFatalities:16 },
  Enugu: { incidents:135, estimatedFatalities:140 },
  "Federal Capital Territory": { incidents:183, estimatedFatalities:151 },
  Gombe: { incidents:14, estimatedFatalities:13 },
  Imo: { incidents:162, estimatedFatalities:292 },
  Jigawa: { incidents:23, estimatedFatalities:45 },
  Kaduna: { incidents:543, estimatedFatalities:1048 },
  Kano: { incidents:52, estimatedFatalities:69 },
  Katsina: { incidents:1028, estimatedFatalities:2578 },
  Kebbi: { incidents:118, estimatedFatalities:291 },
  Kogi: { incidents:202, estimatedFatalities:216 },
  Kwara: { incidents:225, estimatedFatalities:253 },
  Lagos: { incidents:178, estimatedFatalities:174 },
  Nasarawa: { incidents:109, estimatedFatalities:183 },
  Niger: { incidents:316, estimatedFatalities:1058 },
  Ogun: { incidents:131, estimatedFatalities:121 },
  Ondo: { incidents:86, estimatedFatalities:73 },
  Osun: { incidents:61, estimatedFatalities:51 },
  Oyo: { incidents:68, estimatedFatalities:59 },
  Plateau: { incidents:328, estimatedFatalities:981 },
  Rivers: { incidents:136, estimatedFatalities:118 },
  Sokoto: { incidents:497, estimatedFatalities:867 },
  Taraba: { incidents:157, estimatedFatalities:242 },
  Yobe: { incidents:153, estimatedFatalities:271 },
  Zamfara: { incidents:1023, estimatedFatalities:3275 },
};

export const stateSecuritySource = {
  publisher: "European Union Agency for Asylum (EUAA), based on ACLED curated data",
  title: "COI Query Response — Nigeria: Major political, security and human rights developments",
  period: "1 January 2024–31 December 2025",
  sourceDataAsOf: "9 January 2026",
  publishedAt: "19 January 2026",
  url: "https://www.ecoi.net/en/file/local/2135519/2026_01_EUAA_COI_Query_Response_Q4_Nigeria_Major_political_security_human_rights_developments.pdf",
  note: "The EUAA table counts incidents coded as battles, explosions/remote violence and violence against civilians. It reports 8,654 incidents and 21,504 estimated fatalities nationally, including 7,590 fatalities in incidents coded as violence against civilians. ACLED fatalities are estimates and do not distinguish civilian from non-civilian deaths. The 2024–2025 window leaves the first part of the current 2023–2027 tenure unrepresented and must not be described as the entire tenure."
};
