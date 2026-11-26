/**
 * Federal Ministry of Education, Nigeria Education Statistics 2024.
 * Portal tables copied as published for school year 2024/2025.
 * The portal reports 57.9% national school reporting completeness. Rivers is
 * rendered as zero learners and blank ratios; treat that as no usable return.
 * Ratios are retained exactly as published; apparent anomalies require source review.
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
  Abia: { learners:1686341, learnerTeacherRatio:30.9, learnerClassroomRatio:74.8, learnerToiletRatio:120.4, femaleLearnersPercent:49.8, femaleTeachersPercent:72.7, specialNeedsLearners:6670 },
  Adamawa: { learners:1633168, learnerTeacherRatio:35.0, learnerClassroomRatio:56.2, learnerToiletRatio:172.7, femaleLearnersPercent:49.1, femaleTeachersPercent:44.3, specialNeedsLearners:19852 },
  "Akwa Ibom": { learners:592850, learnerTeacherRatio:24.6, learnerClassroomRatio:47.7, learnerToiletRatio:99.4, femaleLearnersPercent:51.4, femaleTeachersPercent:60.5, specialNeedsLearners:3599 },
  Anambra: { learners:158597, learnerTeacherRatio:23, learnerClassroomRatio:22.5, learnerToiletRatio:70.2, femaleLearnersPercent:49.5, femaleTeachersPercent:87.4, specialNeedsLearners:2005 },
  Bauchi: { learners:1932456, learnerTeacherRatio:47.4, learnerClassroomRatio:66.6, learnerToiletRatio:206.7, femaleLearnersPercent:48.6, femaleTeachersPercent:38.1, specialNeedsLearners:19038 },
  Bayelsa: { learners:282314, learnerTeacherRatio:17.0, learnerClassroomRatio:24.2, learnerToiletRatio:57.0, femaleLearnersPercent:50.7, femaleTeachersPercent:61.0, specialNeedsLearners:483 },
  Benue: { learners:458732, learnerTeacherRatio:19.2, learnerClassroomRatio:22.9, learnerToiletRatio:48.6, femaleLearnersPercent:50.2, femaleTeachersPercent:44.1, specialNeedsLearners:2585 },
  Borno: { learners:1173707, learnerTeacherRatio:46, learnerClassroomRatio:84.6, learnerToiletRatio:104.7, femaleLearnersPercent:49.7, femaleTeachersPercent:47.6, specialNeedsLearners:4817 },
  "Cross River": { learners:9145, learnerTeacherRatio:13.5, learnerClassroomRatio:21.3, learnerToiletRatio:61.8, femaleLearnersPercent:50.0, femaleTeachersPercent:63.9, specialNeedsLearners:95 },
  Delta: { learners:451373, learnerTeacherRatio:19.0, learnerClassroomRatio:20.7, learnerToiletRatio:60.1, femaleLearnersPercent:49.9, femaleTeachersPercent:75.6, specialNeedsLearners:1547 },
  Ebonyi: { learners:375576, learnerTeacherRatio:7.1, learnerClassroomRatio:32.7, learnerToiletRatio:308.9, femaleLearnersPercent:52.1, femaleTeachersPercent:40.3, specialNeedsLearners:3473 },
  Edo: { learners:600198, learnerTeacherRatio:35.1, learnerClassroomRatio:43.3, learnerToiletRatio:43.9, femaleLearnersPercent:38.2, femaleTeachersPercent:65, specialNeedsLearners:5129 },
  Ekiti: { learners:424582, learnerTeacherRatio:13.0, learnerClassroomRatio:28.1, learnerToiletRatio:53.5, femaleLearnersPercent:51.6, femaleTeachersPercent:68.0, specialNeedsLearners:6202 },
  Enugu: { learners:665361, learnerTeacherRatio:15.3, learnerClassroomRatio:25.2, learnerToiletRatio:3.0, femaleLearnersPercent:51.6, femaleTeachersPercent:75.8, specialNeedsLearners:3782 },
  "Federal Capital Territory": { learners:327585, learnerTeacherRatio:16.5, learnerClassroomRatio:40.7, learnerToiletRatio:54.0, femaleLearnersPercent:51.3, femaleTeachersPercent:58.4, specialNeedsLearners:3960 },
  Gombe: { learners:660349, learnerTeacherRatio:30.4, learnerClassroomRatio:58.1, learnerToiletRatio:135.6, femaleLearnersPercent:48.9, femaleTeachersPercent:43.8, specialNeedsLearners:10672 },
  Imo: { learners:1526355, learnerTeacherRatio:57.7, learnerClassroomRatio:75.7, learnerToiletRatio:252.3, femaleLearnersPercent:50.7, femaleTeachersPercent:79.1, specialNeedsLearners:7371 },
  Jigawa: { learners:1642807, learnerTeacherRatio:63.6, learnerClassroomRatio:77.6, learnerToiletRatio:140.6, femaleLearnersPercent:49.5, femaleTeachersPercent:24.5, specialNeedsLearners:17374 },
  Kaduna: { learners:2718039, learnerTeacherRatio:51.3, learnerClassroomRatio:56.9, learnerToiletRatio:139.5, femaleLearnersPercent:49.9, femaleTeachersPercent:54.2, specialNeedsLearners:16520 },
  Kano: { learners:5831652, learnerTeacherRatio:65.5, learnerClassroomRatio:91.7, learnerToiletRatio:172.5, femaleLearnersPercent:52.3, femaleTeachersPercent:39.8, specialNeedsLearners:35174 },
  Katsina: { learners:1988281, learnerTeacherRatio:78.5, learnerClassroomRatio:106.9, learnerToiletRatio:136.3, femaleLearnersPercent:49.1, femaleTeachersPercent:34.3, specialNeedsLearners:21447 },
  Kebbi: { learners:1029361, learnerTeacherRatio:55.1, learnerClassroomRatio:68.6, learnerToiletRatio:228.5, femaleLearnersPercent:42.7, femaleTeachersPercent:33.9, specialNeedsLearners:9938 },
  Kogi: { learners:356605, learnerTeacherRatio:16.1, learnerClassroomRatio:20.3, learnerToiletRatio:92.4, femaleLearnersPercent:50.1, femaleTeachersPercent:57.5, specialNeedsLearners:938 },
  Kwara: { learners:661953, learnerTeacherRatio:15.5, learnerClassroomRatio:34.6, learnerToiletRatio:73.1, femaleLearnersPercent:49.7, femaleTeachersPercent:58.4, specialNeedsLearners:79746 },
  Lagos: { learners:2036506, learnerTeacherRatio:15.5, learnerClassroomRatio:46.4, learnerToiletRatio:24.0, femaleLearnersPercent:50.6, femaleTeachersPercent:69.7, specialNeedsLearners:5096 },
  Nasarawa: { learners:64173, learnerTeacherRatio:18.7, learnerClassroomRatio:34.7, learnerToiletRatio:175.3, femaleLearnersPercent:52.0, femaleTeachersPercent:44.0, specialNeedsLearners:146 },
  Niger: { learners:828786, learnerTeacherRatio:24.5, learnerClassroomRatio:44.3, learnerToiletRatio:203, femaleLearnersPercent:46.1, femaleTeachersPercent:49.4, specialNeedsLearners:13113 },
  Ogun: { learners:1046351, learnerTeacherRatio:16, learnerClassroomRatio:36.2, learnerToiletRatio:36.9, femaleLearnersPercent:50.7, femaleTeachersPercent:65.8, specialNeedsLearners:3333 },
  Ondo: { learners:459905, learnerTeacherRatio:16.5, learnerClassroomRatio:21.9, learnerToiletRatio:52.4, femaleLearnersPercent:50.4, femaleTeachersPercent:64.0, specialNeedsLearners:2145 },
  Osun: { learners:280773, learnerTeacherRatio:28.5, learnerClassroomRatio:23.3, learnerToiletRatio:73.9, femaleLearnersPercent:51.2, femaleTeachersPercent:71.1, specialNeedsLearners:3293 },
  Oyo: { learners:2995492, learnerTeacherRatio:41.8, learnerClassroomRatio:86, learnerToiletRatio:140.6, femaleLearnersPercent:51.6, femaleTeachersPercent:64.5, specialNeedsLearners:23479 },
  Plateau: { learners:628699, learnerTeacherRatio:26.3, learnerClassroomRatio:33.0, learnerToiletRatio:113.0, femaleLearnersPercent:50.6, femaleTeachersPercent:49.3, specialNeedsLearners:5364 },
  Rivers: { learners:null, learnerTeacherRatio:null, learnerClassroomRatio:null, learnerToiletRatio:null, femaleLearnersPercent:null, femaleTeachersPercent:null, specialNeedsLearners:null },
  Sokoto: { learners:1212573, learnerTeacherRatio:65.2, learnerClassroomRatio:82.4, learnerToiletRatio:269.4, femaleLearnersPercent:46.3, femaleTeachersPercent:29.5, specialNeedsLearners:10592 },
};

export const educationCensusSource = {
  publisher: "Federal Ministry of Education",
  title: "Nigeria Education Statistics 2024 — Annual School Census",
  period: "School year 2024/2025",
  url: "https://emis.education.gov.ng/portal/",
  publishedAt: "Portal dataset generated 18 July 2026, 08:19 UTC",
  nationalReportingRate: 57.9,
  totalSchools: 215033,
  schoolsReported: 124543,
  note: "The portal reports only 57.9% of listed schools submitted data nationally. Some state totals and ratios are extreme or visibly incomplete; the page table omits Taraba, Yobe and Zamfara and shows Rivers with zero learners and blank ratios. Those are missing returns, not zero-performing systems. All state rows are raw administrative reporting, not necessarily representative or directly comparable across the entire school universe. Verify anomalous entries against state EMIS returns before trend or performance use."
};
  Taraba: { learners:1184014, learnerTeacherRatio:83.2, learnerClassroomRatio:91.6, learnerToiletRatio:854.3, femaleLearnersPercent:47.8, femaleTeachersPercent:33.8, specialNeedsLearners:2921 },
  Yobe: { learners:1140079, learnerTeacherRatio:62.3, learnerClassroomRatio:98.8, learnerToiletRatio:160.2, femaleLearnersPercent:51.3, femaleTeachersPercent:44.7, specialNeedsLearners:23352 },
  Zamfara: { learners:1061437, learnerTeacherRatio:50.0, learnerClassroomRatio:76.1, learnerToiletRatio:180.7, femaleLearnersPercent:41.8, femaleTeachersPercent:41.6, specialNeedsLearners:15336 },
