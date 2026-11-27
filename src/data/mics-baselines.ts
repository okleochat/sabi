/**
 * Extracted state tables from the 2021 Nigeria MICS/NICS Statistical Snapshots.
 * All values are pre-May-2023 baseline context, not outcomes attributed to current
 * governors. Borno estimates refer to the seven sampled LGAs shown by the source.
 */
export type MicsStateBaseline = {
  earlyChildhoodAttendance: number;
  organizedLearningAge5: number;
  primaryAttendance: number;
  juniorSecondaryAttendance: number;
  basicDrinkingWater: number;
  basicSanitation: number;
  basicHygiene: number;
  childLabour: number;
  womenMarriedBefore18: number;
};

export const micsStateBaseline2021: Record<string, MicsStateBaseline> = {
  Abia: { earlyChildhoodAttendance:79.7, organizedLearningAge5:90.5, primaryAttendance:88.3, juniorSecondaryAttendance:72.0, basicDrinkingWater:81.6, basicSanitation:49.0, basicHygiene:23.5, childLabour:37.8, womenMarriedBefore18:9.3 },
  Adamawa: { earlyChildhoodAttendance:23.5, organizedLearningAge5:64.5, primaryAttendance:65.8, juniorSecondaryAttendance:44.4, basicDrinkingWater:56.6, basicSanitation:33.3, basicHygiene:38.6, childLabour:29.5, womenMarriedBefore18:36.4 },
  "Akwa Ibom": { earlyChildhoodAttendance:72.3, organizedLearningAge5:94.3, primaryAttendance:85.5, juniorSecondaryAttendance:64.5, basicDrinkingWater:72.8, basicSanitation:54.7, basicHygiene:25.9, childLabour:37.0, womenMarriedBefore18:23.2 },
  Anambra: { earlyChildhoodAttendance:69.0, organizedLearningAge5:90.3, primaryAttendance:75.7, juniorSecondaryAttendance:74.7, basicDrinkingWater:90.9, basicSanitation:69.3, basicHygiene:33.9, childLabour:12.4, womenMarriedBefore18:13.4 },
  Bauchi: { earlyChildhoodAttendance:5.6, organizedLearningAge5:23.7, primaryAttendance:38.2, juniorSecondaryAttendance:14.3, basicDrinkingWater:55.3, basicSanitation:34.2, basicHygiene:20.9, childLabour:54.9, womenMarriedBefore18:75.1 },
  Bayelsa: { earlyChildhoodAttendance:41.2, organizedLearningAge5:95.2, primaryAttendance:86.4, juniorSecondaryAttendance:71.1, basicDrinkingWater:54.2, basicSanitation:24.5, basicHygiene:24.8, childLabour:26.1, womenMarriedBefore18:38.1 },
  Benue: { earlyChildhoodAttendance:36.3, organizedLearningAge5:73.4, primaryAttendance:75.7, juniorSecondaryAttendance:43.7, basicDrinkingWater:51.8, basicSanitation:33.1, basicHygiene:6.1, childLabour:36.8, womenMarriedBefore18:31.1 },
  Borno: { earlyChildhoodAttendance:10.1, organizedLearningAge5:36.6, primaryAttendance:45.5, juniorSecondaryAttendance:26.1, basicDrinkingWater:69.2, basicSanitation:55.2, basicHygiene:14.1, childLabour:37.6, womenMarriedBefore18:57.7 },
  "Cross River": { earlyChildhoodAttendance:59.0, organizedLearningAge5:91.8, primaryAttendance:85.9, juniorSecondaryAttendance:71.0, basicDrinkingWater:51.7, basicSanitation:18.2, basicHygiene:24.4, childLabour:35.1, womenMarriedBefore18:23.5 },
  Delta: { earlyChildhoodAttendance:77.5, organizedLearningAge5:92.0, primaryAttendance:82.6, juniorSecondaryAttendance:65.6, basicDrinkingWater:79.1, basicSanitation:46.7, basicHygiene:38.1, childLabour:15.9, womenMarriedBefore18:22.7 },
  Ebonyi: { earlyChildhoodAttendance:62.7, organizedLearningAge5:83.6, primaryAttendance:83.7, juniorSecondaryAttendance:61.8, basicDrinkingWater:85.7, basicSanitation:67.0, basicHygiene:42.2, childLabour:33.5, womenMarriedBefore18:13.1 },
  Edo: { earlyChildhoodAttendance:63.9, organizedLearningAge5:86.5, primaryAttendance:87.5, juniorSecondaryAttendance:69.0, basicDrinkingWater:93.5, basicSanitation:49.6, basicHygiene:26.6, childLabour:16.1, womenMarriedBefore18:14.1 },
  Ekiti: { earlyChildhoodAttendance:64.8, organizedLearningAge5:92.3, primaryAttendance:84.5, juniorSecondaryAttendance:75.9, basicDrinkingWater:82.7, basicSanitation:26.0, basicHygiene:39.8, childLabour:22.1, womenMarriedBefore18:23.0 },
  Enugu: { earlyChildhoodAttendance:80.5, organizedLearningAge5:90.2, primaryAttendance:86.3, juniorSecondaryAttendance:70.8, basicDrinkingWater:86.5, basicSanitation:45.7, basicHygiene:47.7, childLabour:29.2, womenMarriedBefore18:12.8 },
  Gombe: { earlyChildhoodAttendance:13.3, organizedLearningAge5:34.6, primaryAttendance:43.6, juniorSecondaryAttendance:24.6, basicDrinkingWater:51.0, basicSanitation:47.5, basicHygiene:12.8, childLabour:47.0, womenMarriedBefore18:50.3 },
  Imo: { earlyChildhoodAttendance:72.0, organizedLearningAge5:72.5, primaryAttendance:85.7, juniorSecondaryAttendance:76.0, basicDrinkingWater:90.8, basicSanitation:58.2, basicHygiene:37.0, childLabour:22.4, womenMarriedBefore18:8.9 },
  Jigawa: { earlyChildhoodAttendance:16.4, organizedLearningAge5:46.1, primaryAttendance:53.5, juniorSecondaryAttendance:21.9, basicDrinkingWater:74.6, basicSanitation:29.2, basicHygiene:13.8, childLabour:41.0, womenMarriedBefore18:70.8 },
  Kaduna: { earlyChildhoodAttendance:31.8, organizedLearningAge5:70.2, primaryAttendance:77.0, juniorSecondaryAttendance:39.4, basicDrinkingWater:66.0, basicSanitation:42.5, basicHygiene:24.5, childLabour:40.9, womenMarriedBefore18:45.3 },
  Kano: { earlyChildhoodAttendance:13.6, organizedLearningAge5:43.7, primaryAttendance:63.5, juniorSecondaryAttendance:39.2, basicDrinkingWater:66.2, basicSanitation:51.9, basicHygiene:65.5, childLabour:32.6, womenMarriedBefore18:56.7 },
  Katsina: { earlyChildhoodAttendance:9.7, organizedLearningAge5:42.2, primaryAttendance:64.0, juniorSecondaryAttendance:28.8, basicDrinkingWater:66.9, basicSanitation:27.4, basicHygiene:35.2, childLabour:50.4, womenMarriedBefore18:72.7 },
  Kebbi: { earlyChildhoodAttendance:3.5, organizedLearningAge5:20.8, primaryAttendance:34.0, juniorSecondaryAttendance:19.6, basicDrinkingWater:59.0, basicSanitation:20.2, basicHygiene:6.2, childLabour:46.9, womenMarriedBefore18:62.2 },
  Kogi: { earlyChildhoodAttendance:57.0, organizedLearningAge5:86.8, primaryAttendance:85.3, juniorSecondaryAttendance:54.4, basicDrinkingWater:71.4, basicSanitation:26.3, basicHygiene:19.4, childLabour:21.2, womenMarriedBefore18:25.4 },
  Kwara: { earlyChildhoodAttendance:46.9, organizedLearningAge5:67.0, primaryAttendance:72.2, juniorSecondaryAttendance:56.3, basicDrinkingWater:81.4, basicSanitation:24.4, basicHygiene:29.2, childLabour:19.2, womenMarriedBefore18:19.0 },
  Lagos: { earlyChildhoodAttendance:84.3, organizedLearningAge5:93.4, primaryAttendance:92.9, juniorSecondaryAttendance:86.4, basicDrinkingWater:97.9, basicSanitation:43.7, basicHygiene:39.7, childLabour:9.8, womenMarriedBefore18:8.5 },
  Nasarawa: { earlyChildhoodAttendance:33.4, organizedLearningAge5:64.3, primaryAttendance:64.7, juniorSecondaryAttendance:43.9, basicDrinkingWater:55.7, basicSanitation:30.2, basicHygiene:9.7, childLabour:39.2, womenMarriedBefore18:30.6 },
  Niger: { earlyChildhoodAttendance:16.5, organizedLearningAge5:42.9, primaryAttendance:55.7, juniorSecondaryAttendance:30.3, basicDrinkingWater:68.5, basicSanitation:23.8, basicHygiene:20.7, childLabour:42.9, womenMarriedBefore18:41.9 },
  Ogun: { earlyChildhoodAttendance:60.1, organizedLearningAge5:88.1, primaryAttendance:79.3, juniorSecondaryAttendance:59.0, basicDrinkingWater:74.8, basicSanitation:34.2, basicHygiene:25.4, childLabour:15.0, womenMarriedBefore18:24.0 },
  Ondo: { earlyChildhoodAttendance:71.6, organizedLearningAge5:90.7, primaryAttendance:85.1, juniorSecondaryAttendance:69.9, basicDrinkingWater:79.7, basicSanitation:26.0, basicHygiene:23.3, childLabour:8.7, womenMarriedBefore18:20.2 },
  Osun: { earlyChildhoodAttendance:77.1, organizedLearningAge5:84.1, primaryAttendance:71.6, juniorSecondaryAttendance:53.7, basicDrinkingWater:91.9, basicSanitation:25.9, basicHygiene:40.3, childLabour:23.2, womenMarriedBefore18:16.7 },
  Oyo: { earlyChildhoodAttendance:73.8, organizedLearningAge5:77.8, primaryAttendance:80.7, juniorSecondaryAttendance:62.3, basicDrinkingWater:81.9, basicSanitation:25.4, basicHygiene:25.4, childLabour:24.1, womenMarriedBefore18:13.2 },
  Plateau: { earlyChildhoodAttendance:37.4, organizedLearningAge5:75.4, primaryAttendance:78.1, juniorSecondaryAttendance:52.6, basicDrinkingWater:50.3, basicSanitation:25.1, basicHygiene:6.5, childLabour:26.3, womenMarriedBefore18:34.4 },
  Rivers: { earlyChildhoodAttendance:72.5, organizedLearningAge5:94.9, primaryAttendance:87.5, juniorSecondaryAttendance:77.4, basicDrinkingWater:85.5, basicSanitation:38.9, basicHygiene:32.5, childLabour:26.2, womenMarriedBefore18:14.2 },
  Sokoto: { earlyChildhoodAttendance:5.9, organizedLearningAge5:28.1, primaryAttendance:44.2, juniorSecondaryAttendance:14.1, basicDrinkingWater:36.1, basicSanitation:28.2, basicHygiene:24.4, childLabour:28.2, womenMarriedBefore18:53.9 },
  Taraba: { earlyChildhoodAttendance:21.1, organizedLearningAge5:59.0, primaryAttendance:64.0, juniorSecondaryAttendance:35.6, basicDrinkingWater:29.1, basicSanitation:28.5, basicHygiene:24.7, childLabour:31.8, womenMarriedBefore18:47.4 },
  Yobe: { earlyChildhoodAttendance:5.3, organizedLearningAge5:31.1, primaryAttendance:41.4, juniorSecondaryAttendance:25.7, basicDrinkingWater:66.1, basicSanitation:39.7, basicHygiene:16.4, childLabour:33.1, womenMarriedBefore18:43.1 },
  Zamfara: { earlyChildhoodAttendance:3.8, organizedLearningAge5:20.7, primaryAttendance:37.5, juniorSecondaryAttendance:18.5, basicDrinkingWater:65.0, basicSanitation:35.3, basicHygiene:17.0, childLabour:44.5, womenMarriedBefore18:59.9 },
  "Federal Capital Territory": { earlyChildhoodAttendance:62.0, organizedLearningAge5:79.6, primaryAttendance:86.9, juniorSecondaryAttendance:67.1, basicDrinkingWater:92.9, basicSanitation:60.2, basicHygiene:26.4, childLabour:18.5, womenMarriedBefore18:22.3 },
};

export const micsBaselineSource = {
  publisher: "National Bureau of Statistics and UNICEF",
  title: "2021 Nigeria Multiple Indicator Cluster Survey and National Immunization Coverage Survey — Statistical Snapshots",
  period: "2021 fieldwork; published August 2022",
  url: "https://nigerianstat.gov.ng/pdfuploads/2021%20MICS%20Statistical%20Snapshots%20Report.pdf",
  note: "All observations in this file pre-date the May 2023 gubernatorial and presidential administrations. They are baseline/context observations, not measures of those administrations' performance. Borno state estimates are based on seven of 27 LGAs in the source. Attendance figures are adjusted net attendance rates; WASH figures are percentages of population using the named basic service; child labour is among ages 5–17; child marriage is among women aged 20–49 who first married or entered union before 18."
};
