/**
 * NDHS 2024 Table 2.15, percentage of the de jure population experiencing
 * moderate or severe food insecurity, and severe food insecurity.
 * Values transcribed directly from the national/state rows.
 * All 36 states and FCT are present in the published state table.
 */
export type StateFoodInsecurity2024={moderateOrSevere:number;severe:number;samplePersons:number};
export const stateFoodInsecurity2024:Record<string,StateFoodInsecurity2024>={
  "Federal Capital Territory":{moderateOrSevere: 65.4, severe: 24.7,samplePersons:3104},
  "Benue":{moderateOrSevere: 62.9, severe: 23.5,samplePersons:4380},
  "Kogi":{moderateOrSevere: 71.3, severe: 25.7,samplePersons:2850},
  "Kwara":{moderateOrSevere: 66.4, severe: 30.5,samplePersons:3691},
  "Nasarawa":{moderateOrSevere: 37.9, severe: 16.2,samplePersons:4138},
  "Niger":{moderateOrSevere: 58.8, severe: 8.9,samplePersons:8727},
  "Plateau":{moderateOrSevere: 82.6, severe: 42,samplePersons:4486},
  "Adamawa":{moderateOrSevere: 70.7, severe: 30.9,samplePersons:4397},
  "Bauchi":{moderateOrSevere: 57.4, severe: 35.3,samplePersons:9836},
  "Borno":{moderateOrSevere: 85.6, severe: 44.2,samplePersons:5714},
  "Gombe":{moderateOrSevere: 73.8, severe: 44.2,samplePersons:3081},
  "Taraba":{moderateOrSevere: 81.9, severe: 50.5,samplePersons:3970},
  "Yobe":{moderateOrSevere: 94.1, severe: 65.9,samplePersons:4966},
  "Jigawa":{moderateOrSevere: 67.5, severe: 31.2,samplePersons:6386},
  "Kaduna":{moderateOrSevere: 70.4, severe: 33.9,samplePersons:11377},
  "Kano":{moderateOrSevere: 68.2, severe: 42.6,samplePersons:16193},
  "Katsina":{moderateOrSevere: 63.6, severe: 36.3,samplePersons:10155},
  "Kebbi":{moderateOrSevere: 55.8, severe: 34.5,samplePersons:4677},
  "Sokoto":{moderateOrSevere: 45.5, severe: 32.5,samplePersons:5950},
  "Zamfara":{moderateOrSevere: 83.7, severe: 50.7,samplePersons:5728},
  "Abia":{moderateOrSevere: 82.5, severe: 39.7,samplePersons:1836},
  "Anambra":{moderateOrSevere: 57.3, severe: 14.5,samplePersons:3179},
  "Ebonyi":{moderateOrSevere: 71.6, severe: 30.2,samplePersons:3678},
  "Enugu":{moderateOrSevere: 81.9, severe: 43.4,samplePersons:2095},
  "Imo":{moderateOrSevere: 66.1, severe: 23.3,samplePersons:2978},
  "Akwa Ibom":{moderateOrSevere: 87.7, severe: 39.9,samplePersons:2736},
  "Bayelsa":{moderateOrSevere: 69.7, severe: 32.6,samplePersons:1283},
  "Cross River":{moderateOrSevere: 59.2, severe: 18.7,samplePersons:2072},
  "Delta":{moderateOrSevere: 62.6, severe: 20.8,samplePersons:4055},
  "Edo":{moderateOrSevere: 49.6, severe: 15.2,samplePersons:2764},
  "Rivers":{moderateOrSevere: 76.6, severe: 33.5,samplePersons:4958},
  "Lagos":{moderateOrSevere: 61.8, severe: 30.7,samplePersons:6894},
  "Ogun":{moderateOrSevere: 78.2, severe: 33.1,samplePersons:5802},
  "Ondo":{moderateOrSevere: 61.1, severe: 22.7,samplePersons:2732},
  "Osun":{moderateOrSevere: 66.1, severe: 22.6,samplePersons:3215},
  "Oyo":{moderateOrSevere: 66.1, severe: 23.7,samplePersons:5314},
  "Ekiti":{moderateOrSevere: 68.1, severe: 27.9,samplePersons:1321},
};
export const ndhsFoodInsecuritySource={
 publisher:"Federal Ministry of Health & Social Welfare, National Population Commission and ICF",
 title:"Nigeria Demographic and Health Survey 2024 — Table 2.15 Food insecurity",
 period:"2024 survey; report published September 2025",
 url:"https://www.health.gov.ng/wp-content/uploads/2025/10/NDHS-2024-Final-Report_Disseminated17102025.pdf",
 note:"Percentages describe the de jure population experiencing moderate or severe food insecurity and severe food insecurity, based on the FAO Food Insecurity Experience Scale. Respondents were asked eight questions about constraints on access to adequate food over the previous 12 months. It is a household survey, not a direct causal assessment of a governor or President. Values are published state survey estimates; sample counts are reported person counts, not necessarily the unweighted number of respondents. The source drops household members with any food-insecurity responses marked refused or unknown."
};
