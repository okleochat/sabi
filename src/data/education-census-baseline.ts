/**
 * Federal Ministry of Education, Nigeria Education Statistics 2024 — live
 * Annual School Census portal snapshot generated 22 September 2026.
 *
 * This is an incomplete administrative return, not a census of every learner:
 * only 53.7% of listed schools submitted returns in the portal snapshot.
 * Preserve unusual ratios as published; do not use them for scoring until
 * reconciled against state EMIS returns. Rivers' zero/blank row is no usable
 * return, not evidence that the state has no learners.
 */
export type StateEducationCensus = {
  learners: number | null;
  learnerTeacherRatio: number | null;
  learnerClassroomRatio: number | null;
  learnerToiletRatio: number | null;
  femaleLearnersPercent: number | null;
  femaleTeachersPercent: number | null;
  specialNeedsLearners: number | null;
};

export const stateEducationCensus2024: Record<string, StateEducationCensus> = {
  Abia: { learners:1686406, learnerTeacherRatio:30.9, learnerClassroomRatio:74.7, learnerToiletRatio:120.4, femaleLearnersPercent:49.8, femaleTeachersPercent:72.7, specialNeedsLearners:6670 },
  Adamawa: { learners:1633168, learnerTeacherRatio:35.0, learnerClassroomRatio:56.2, learnerToiletRatio:172.7, femaleLearnersPercent:49.1, femaleTeachersPercent:44.3, specialNeedsLearners:19852 },
  "Akwa Ibom": { learners:594829, learnerTeacherRatio:24.6, learnerClassroomRatio:47.9, learnerToiletRatio:99.7, femaleLearnersPercent:51.4, femaleTeachersPercent:60.5, specialNeedsLearners:3599 },
  Anambra: { learners:159677, learnerTeacherRatio:23.0, learnerClassroomRatio:22.7, learnerToiletRatio:70.0, femaleLearnersPercent:49.5, femaleTeachersPercent:87.4, specialNeedsLearners:2021 },
  Bauchi: { learners:1932456, learnerTeacherRatio:47.4, learnerClassroomRatio:66.6, learnerToiletRatio:206.7, femaleLearnersPercent:48.6, femaleTeachersPercent:38.1, specialNeedsLearners:19038 },
  Bayelsa: { learners:282319, learnerTeacherRatio:17.0, learnerClassroomRatio:24.2, learnerToiletRatio:57.0, femaleLearnersPercent:50.7, femaleTeachersPercent:61.0, specialNeedsLearners:483 },
  Benue: { learners:458766, learnerTeacherRatio:19.2, learnerClassroomRatio:22.9, learnerToiletRatio:48.6, femaleLearnersPercent:50.2, femaleTeachersPercent:44.1, specialNeedsLearners:2585 },
  Borno: { learners:1133822, learnerTeacherRatio:45.7, learnerClassroomRatio:85.0, learnerToiletRatio:104.6, femaleLearnersPercent:49.6, femaleTeachersPercent:47.9, specialNeedsLearners:4740 },
  "Cross River": { learners:9231, learnerTeacherRatio:13.4, learnerClassroomRatio:21.2, learnerToiletRatio:62.4, femaleLearnersPercent:50.0, femaleTeachersPercent:63.2, specialNeedsLearners:95 },
  Delta: { learners:451373, learnerTeacherRatio:19.0, learnerClassroomRatio:20.7, learnerToiletRatio:60.1, femaleLearnersPercent:49.9, femaleTeachersPercent:75.6, specialNeedsLearners:1547 },
  Ebonyi: { learners:375511, learnerTeacherRatio:7.1, learnerClassroomRatio:32.7, learnerToiletRatio:309.3, femaleLearnersPercent:52.1, femaleTeachersPercent:40.3, specialNeedsLearners:3473 },
  Edo: { learners:601462, learnerTeacherRatio:35.1, learnerClassroomRatio:43.2, learnerToiletRatio:44.0, femaleLearnersPercent:38.3, femaleTeachersPercent:65.0, specialNeedsLearners:5114 },
  Ekiti: { learners:424582, learnerTeacherRatio:13.0, learnerClassroomRatio:28.1, learnerToiletRatio:53.5, femaleLearnersPercent:51.6, femaleTeachersPercent:68.0, specialNeedsLearners:6202 },
  Enugu: { learners:665361, learnerTeacherRatio:15.3, learnerClassroomRatio:25.2, learnerToiletRatio:3.0, femaleLearnersPercent:51.6, femaleTeachersPercent:75.8, specialNeedsLearners:3782 },
  "Federal Capital Territory": { learners:327585, learnerTeacherRatio:16.5, learnerClassroomRatio:40.7, learnerToiletRatio:54.0, femaleLearnersPercent:51.3, femaleTeachersPercent:58.4, specialNeedsLearners:3960 },
  Gombe: { learners:660132, learnerTeacherRatio:30.4, learnerClassroomRatio:58.0, learnerToiletRatio:135.6, femaleLearnersPercent:48.9, femaleTeachersPercent:43.8, specialNeedsLearners:10672 },
  Imo: { learners:1526355, learnerTeacherRatio:57.7, learnerClassroomRatio:75.7, learnerToiletRatio:252.3, femaleLearnersPercent:50.7, femaleTeachersPercent:79.1, specialNeedsLearners:7371 },
  Jigawa: { learners:1642807, learnerTeacherRatio:63.6, learnerClassroomRatio:77.6, learnerToiletRatio:140.6, femaleLearnersPercent:49.5, femaleTeachersPercent:24.5, specialNeedsLearners:17374 },
  Kaduna: { learners:2718125, learnerTeacherRatio:51.3, learnerClassroomRatio:57.0, learnerToiletRatio:139.5, femaleLearnersPercent:49.9, femaleTeachersPercent:54.2, specialNeedsLearners:16520 },
  Kano: { learners:5661463, learnerTeacherRatio:67.2, learnerClassroomRatio:93.1, learnerToiletRatio:176.9, femaleLearnersPercent:52.1, femaleTeachersPercent:39.8, specialNeedsLearners:34248 },
  Katsina: { learners:1988281, learnerTeacherRatio:78.5, learnerClassroomRatio:106.9, learnerToiletRatio:136.3, femaleLearnersPercent:49.1, femaleTeachersPercent:34.3, specialNeedsLearners:21447 },
  Kebbi: { learners:1023860, learnerTeacherRatio:55.4, learnerClassroomRatio:68.6, learnerToiletRatio:227.6, femaleLearnersPercent:42.8, femaleTeachersPercent:33.9, specialNeedsLearners:9931 },
  Kogi: { learners:356605, learnerTeacherRatio:16.1, learnerClassroomRatio:20.3, learnerToiletRatio:92.4, femaleLearnersPercent:50.1, femaleTeachersPercent:57.5, specialNeedsLearners:938 },
  Kwara: { learners:660631, learnerTeacherRatio:15.5, learnerClassroomRatio:34.5, learnerToiletRatio:73.0, femaleLearnersPercent:49.7, femaleTeachersPercent:58.4, specialNeedsLearners:79744 },
  Lagos: { learners:2036042, learnerTeacherRatio:15.5, learnerClassroomRatio:46.4, learnerToiletRatio:24.0, femaleLearnersPercent:50.6, femaleTeachersPercent:69.7, specialNeedsLearners:5096 },
  Nasarawa: { learners:64173, learnerTeacherRatio:18.7, learnerClassroomRatio:34.7, learnerToiletRatio:175.3, femaleLearnersPercent:52.0, femaleTeachersPercent:44.0, specialNeedsLearners:146 },
  Niger: { learners:829110, learnerTeacherRatio:24.5, learnerClassroomRatio:44.3, learnerToiletRatio:202.9, femaleLearnersPercent:46.1, femaleTeachersPercent:49.4, specialNeedsLearners:13114 },
  Ogun: { learners:1035082, learnerTeacherRatio:16.1, learnerClassroomRatio:36.2, learnerToiletRatio:37.0, femaleLearnersPercent:50.7, femaleTeachersPercent:65.9, specialNeedsLearners:3306 },
  Ondo: { learners:451325, learnerTeacherRatio:16.5, learnerClassroomRatio:21.7, learnerToiletRatio:52.7, femaleLearnersPercent:50.4, femaleTeachersPercent:64.0, specialNeedsLearners:1455 },
  Osun: { learners:274428, learnerTeacherRatio:29.1, learnerClassroomRatio:23.5, learnerToiletRatio:75.7, femaleLearnersPercent:51.2, femaleTeachersPercent:71.2, specialNeedsLearners:3280 },
  Oyo: { learners:2997053, learnerTeacherRatio:41.8, learnerClassroomRatio:86.0, learnerToiletRatio:140.7, femaleLearnersPercent:51.6, femaleTeachersPercent:64.5, specialNeedsLearners:23479 },
  Plateau: { learners:628699, learnerTeacherRatio:26.3, learnerClassroomRatio:33.0, learnerToiletRatio:113.0, femaleLearnersPercent:50.6, femaleTeachersPercent:49.3, specialNeedsLearners:5364 },
  Rivers: { learners:null, learnerTeacherRatio:null, learnerClassroomRatio:null, learnerToiletRatio:null, femaleLearnersPercent:null, femaleTeachersPercent:null, specialNeedsLearners:null },
  Sokoto: { learners:1212573, learnerTeacherRatio:65.2, learnerClassroomRatio:82.4, learnerToiletRatio:269.4, femaleLearnersPercent:46.3, femaleTeachersPercent:29.5, specialNeedsLearners:10592 },
  Taraba: { learners:1121176, learnerTeacherRatio:83.7, learnerClassroomRatio:91.3, learnerToiletRatio:831.1, femaleLearnersPercent:48.0, femaleTeachersPercent:33.6, specialNeedsLearners:2790 },
  Yobe: { learners:1140079, learnerTeacherRatio:62.3, learnerClassroomRatio:98.8, learnerToiletRatio:160.2, femaleLearnersPercent:51.3, femaleTeachersPercent:44.7, specialNeedsLearners:23352 },
  Zamfara: { learners:1061385, learnerTeacherRatio:50.0, learnerClassroomRatio:76.1, learnerToiletRatio:180.7, femaleLearnersPercent:41.8, femaleTeachersPercent:41.6, specialNeedsLearners:15336 },
};

export const educationCensusSource = {
  publisher: "Federal Ministry of Education",
  title: "Nigeria Education Statistics 2024 — Annual School Census",
  period: "School year 2024/2025",
  url: "https://emis.education.gov.ng/portal/",
  publishedAt: "Portal dataset generated 22 September 2026",
  nationalReportingRate: 53.7,
  totalSchools: 230844,
  schoolsReported: 124066,
  totalLearnersReported: 39825932,
  totalTeachersReported: 1185610,
  totalClassroomsReported: 725778,
  totalToiletsReported: 604479,
  note: "The latest dated portal snapshot reports 53.7% of listed schools submitted returns (124,066 of 230,844). All states and the FCT have a row, but Rivers is a zero/blank row and is treated as no usable return, not zero learners. Several ratios and special-needs counts are extreme or implausible (including Enugu's 3 learners per toilet, Taraba's 831.1, and Kwara's 79,744 reported special-needs learners); values are preserved as published but must be reconciled with state EMIS returns before any trend, comparison or scoring. These are incomplete administrative returns, not a representative census of all schools or a learning-outcome measure."
};
