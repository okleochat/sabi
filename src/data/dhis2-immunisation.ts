/**
 * DHIS2 annualised "fully immunised by age one" coverage rates copied from
 * Figure 26 of the Federal Ministry of Health & Social Welfare, State of Health
 * of the Nation Report 2024.
 *
 * Values are administrative coverage percentages, 2023 and 2024. A reported
 * value above 100% is retained as published, not capped: numerator/denominator
 * quality, migration, catchment and target-population estimates can produce
 * coverage ratios over 100. This is not the household-survey NDHS measure.
 */
export const stateDhIs2Immunisation2023To2024: Record<string,{year2023:number;year2024:number}> = {
  Abia:{year2023:51.2,year2024:61.2},
  Adamawa:{year2023:97.6,year2024:104.6},
  "Akwa Ibom":{year2023:41.0,year2024:59.4},
  Anambra:{year2023:72.9,year2024:77.1},
  Bauchi:{year2023:64.5,year2024:71.5},
  Bayelsa:{year2023:26.2,year2024:38.1},
  Benue:{year2023:33.2,year2024:47.3},
  Borno:{year2023:56.5,year2024:81.8},
  "Cross River":{year2023:72.2,year2024:64.8},
  Delta:{year2023:64.8,year2024:68.9},
  Ebonyi:{year2023:68.9,year2024:75.7},
  Edo:{year2023:26.9,year2024:37.7},
  Ekiti:{year2023:60.9,year2024:68.4},
  Enugu:{year2023:55.0,year2024:50.1},
  "Federal Capital Territory":{year2023:75.6,year2024:34.4},
  Gombe:{year2023:78.6,year2024:77.0},
  Imo:{year2023:48.3,year2024:60.1},
  Jigawa:{year2023:91.9,year2024:91.8},
  Kaduna:{year2023:82.5,year2024:80.9},
  Kebbi:{year2023:64.1,year2024:62.0},
  Kogi:{year2023:75.4,year2024:74.0},
  Katsina:{year2023:54.1,year2024:57.8},
  Kwara:{year2023:83.5,year2024:91.8},
  Lagos:{year2023:51.4,year2024:60.3},
  Nasarawa:{year2023:68.2,year2024:77.3},
  Niger:{year2023:86.4,year2024:85.3},
  Ogun:{year2023:64.7,year2024:72.0},
  Ondo:{year2023:73.7,year2024:76.5},
  Osun:{year2023:37.2,year2024:40.5},
  Oyo:{year2023:65.9,year2024:69.3},
  Plateau:{year2023:47.5,year2024:60.4},
  Rivers:{year2023:42.8,year2024:56.5},
  Sokoto:{year2023:50.2,year2024:42.0},
  Taraba:{year2023:80.9,year2024:87.1},
  Yobe:{year2023:84.4,year2024:97.4},
  Zamfara:{year2023:64.6,year2024:62.0}
};

export const dhis2ImmunisationSource = {
  publisher:"Federal Ministry of Health & Social Welfare",
  title:"State of Health of the Nation Report 2024, Figure 26",
  period:"Annualised administrative rates for 2023 and 2024",
  url:"https://fmohconnect.gov.ng/wp-content/uploads/2025/05/The-State-of-Health-of-the-Nation-Report-2024.pdf",
  note:"DHIS2 annualised fully-immunised-by-age-one coverage; values over 100% are preserved exactly as published. The report says 28 states improved and notes declines in Enugu, FCT, Kebbi, Sokoto and Zamfara. A coverage ratio can exceed 100% because administrative denominators and catchment flows are imperfect; this is not the same construct as NDHS survey coverage of children aged 12–23 months fully vaccinated for basic antigens."
};
