/**
 * Nigeria MPI 2022, NBS Appendix D Table D6.
 * Data collection: MPI Survey 2021/22; national report published November 2022.
 * Fields retain source estimates and 95% confidence intervals:
 * MPI value, incidence/headcount %, intensity %, population share %, poor population (millions).
 * State estimates are representative for all states except Borno (source note).
 * These are pre-May-2023 inherited-condition baselines, not current-term outcomes.
 */
export type StateMpi2022 = {
 mpi:number; mpiCiLow:number; mpiCiHigh:number;
 incidence:number; incidenceCiLow:number; incidenceCiHigh:number;
 intensity:number; populationShare:number; poorMillions:number;
};
export const stateMpi2022:Record<string,StateMpi2022>={
  "Abia":{mpi:0.101,mpiCiLow:0.086,mpiCiHigh:0.116,incidence:29.8,incidenceCiLow:25.5,incidenceCiHigh:34.1,intensity:33.9,populationShare:1.8,poorMillions:1.12},
  "Adamawa":{mpi:0.283,mpiCiLow:0.257,mpiCiHigh:0.309,incidence:68.7,incidenceCiLow:63.6,incidenceCiHigh:73.8,intensity:41.2,populationShare:2.4,poorMillions:3.44},
  "Akwa Ibom":{mpi:0.293,mpiCiLow:0.268,mpiCiHigh:0.319,incidence:71.3,incidenceCiLow:66.3,incidenceCiHigh:76.3,intensity:41.1,populationShare:3.4,poorMillions:5.08},
  "Anambra":{mpi:0.109,mpiCiLow:0.094,mpiCiHigh:0.125,incidence:32.1,incidenceCiLow:27.7,incidenceCiHigh:36.4,intensity:34.1,populationShare:2.4,poorMillions:1.64},
  "Bauchi":{mpi:0.298,mpiCiLow:0.275,mpiCiHigh:0.321,incidence:73.9,incidenceCiLow:69.6,incidenceCiHigh:78.1,intensity:40.4,populationShare:3.7,poorMillions:5.71},
  "Bayelsa":{mpi:0.401,mpiCiLow:0.38,mpiCiHigh:0.423,incidence:88.5,incidenceCiLow:85.8,incidenceCiHigh:91.3,intensity:45.3,populationShare:1.4,poorMillions:2.61},
  "Benue":{mpi:0.312,mpiCiLow:0.287,mpiCiHigh:0.337,incidence:75,incidenceCiLow:70.4,incidenceCiHigh:79.7,intensity:41.6,populationShare:3,poorMillions:4.71},
  "Borno":{mpi:0.315,mpiCiLow:0.287,mpiCiHigh:0.343,incidence:72.5,incidenceCiLow:67.6,incidenceCiHigh:77.4,intensity:43.4,populationShare:1.5,poorMillions:2.25},
  "Cross River":{mpi:0.299,mpiCiLow:0.281,mpiCiHigh:0.317,incidence:75.4,incidenceCiLow:71.7,incidenceCiHigh:79.2,intensity:39.7,populationShare:2.2,poorMillions:3.44},
  "Delta":{mpi:0.173,mpiCiLow:0.153,mpiCiHigh:0.194,incidence:47.6,incidenceCiLow:42.3,incidenceCiHigh:52.8,intensity:36.4,populationShare:2.7,poorMillions:2.73},
  "Ebonyi":{mpi:0.32,mpiCiLow:0.298,mpiCiHigh:0.343,incidence:78,incidenceCiLow:73.3,incidenceCiHigh:82.6,intensity:41.1,populationShare:2.2,poorMillions:3.66},
  "Edo":{mpi:0.126,mpiCiLow:0.109,mpiCiHigh:0.143,incidence:35.4,incidenceCiLow:31,incidenceCiHigh:39.8,intensity:35.6,populationShare:1.9,poorMillions:1.4},
  "Ekiti":{mpi:0.125,mpiCiLow:0.104,mpiCiHigh:0.147,incidence:36,incidenceCiLow:30.4,incidenceCiHigh:41.5,intensity:34.9,populationShare:1.7,poorMillions:1.31},
  "Enugu":{mpi:0.234,mpiCiLow:0.211,mpiCiHigh:0.257,incidence:63.1,incidenceCiLow:57.7,incidenceCiHigh:68.4,intensity:37.2,populationShare:2,poorMillions:2.63},
  "Gombe":{mpi:0.38,mpiCiLow:0.359,mpiCiHigh:0.401,incidence:86.2,incidenceCiLow:83.4,incidenceCiHigh:89.1,intensity:44,populationShare:1.7,poorMillions:3.02},
  "Imo":{mpi:0.142,mpiCiLow:0.125,mpiCiHigh:0.16,incidence:40.7,incidenceCiLow:36.1,incidenceCiHigh:45.3,intensity:35,populationShare:2.1,poorMillions:1.8},
  "Jigawa":{mpi:0.385,mpiCiLow:0.356,mpiCiHigh:0.414,incidence:84.3,incidenceCiLow:79.9,incidenceCiHigh:88.7,intensity:45.7,populationShare:3.2,poorMillions:5.76},
  "Kaduna":{mpi:0.298,mpiCiLow:0.277,mpiCiHigh:0.319,incidence:73.9,incidenceCiLow:69.7,incidenceCiHigh:78.1,intensity:40.3,populationShare:5.1,poorMillions:8.04},
  "Kano":{mpi:0.27,mpiCiLow:0.244,mpiCiHigh:0.297,incidence:66.3,incidenceCiLow:61.1,incidenceCiHigh:71.4,intensity:40.8,populationShare:7.5,poorMillions:10.51},
  "Katsina":{mpi:0.304,mpiCiLow:0.277,mpiCiHigh:0.33,incidence:72.7,incidenceCiLow:67.7,incidenceCiHigh:77.8,intensity:41.7,populationShare:4.5,poorMillions:6.92},
  "Kebbi":{mpi:0.385,mpiCiLow:0.357,mpiCiHigh:0.413,incidence:82.2,incidenceCiLow:78.2,incidenceCiHigh:86.3,intensity:46.8,populationShare:2.5,poorMillions:4.28},
  "Kogi":{mpi:0.25,mpiCiLow:0.224,mpiCiHigh:0.276,incidence:61.3,incidenceCiLow:56.2,incidenceCiHigh:66.5,intensity:40.8,populationShare:2.2,poorMillions:2.88},
  "Kwara":{mpi:0.185,mpiCiLow:0.152,mpiCiHigh:0.217,incidence:48.3,incidenceCiLow:41.1,incidenceCiHigh:55.5,intensity:38.2,populationShare:1.7,poorMillions:1.72},
  "Lagos":{mpi:0.101,mpiCiLow:0.084,mpiCiHigh:0.118,incidence:29.4,incidenceCiLow:24.9,incidenceCiHigh:33.9,intensity:34.3,populationShare:6.8,poorMillions:4.22},
  "Nasarawa":{mpi:0.243,mpiCiLow:0.219,mpiCiHigh:0.266,incidence:60.7,incidenceCiLow:55.8,incidenceCiHigh:65.7,intensity:39.9,populationShare:1.1,poorMillions:1.36},
  "Niger":{mpi:0.278,mpiCiLow:0.255,mpiCiHigh:0.301,incidence:69.1,incidenceCiLow:64.1,incidenceCiHigh:74.2,intensity:40.2,populationShare:2.5,poorMillions:3.6},
  "Ogun":{mpi:0.289,mpiCiLow:0.227,mpiCiHigh:0.35,incidence:68.1,incidenceCiLow:59.3,incidenceCiHigh:77,intensity:42.4,populationShare:2.6,poorMillions:3.78},
  "Ondo":{mpi:0.095,mpiCiLow:0.077,mpiCiHigh:0.113,incidence:27.2,incidenceCiLow:22.4,incidenceCiHigh:32,intensity:34.9,populationShare:2.2,poorMillions:1.3},
  "Osun":{mpi:0.15,mpiCiLow:0.126,mpiCiHigh:0.174,incidence:40.7,incidenceCiLow:34.8,incidenceCiHigh:46.6,intensity:36.8,populationShare:2.2,poorMillions:1.88},
  "Oyo":{mpi:0.19,mpiCiLow:0.159,mpiCiHigh:0.221,incidence:48.7,incidenceCiLow:42.3,incidenceCiHigh:55,intensity:39,populationShare:3.7,poorMillions:3.79},
  "Plateau":{mpi:0.365,mpiCiLow:0.345,mpiCiHigh:0.385,incidence:84,incidenceCiLow:80.6,incidenceCiHigh:87.3,intensity:43.5,populationShare:2.4,poorMillions:4.32},
  "Rivers":{mpi:0.241,mpiCiLow:0.219,mpiCiHigh:0.264,incidence:62.4,incidenceCiLow:57.7,incidenceCiHigh:67,intensity:38.7,populationShare:3.3,poorMillions:4.4},
  "Sokoto":{mpi:0.409,mpiCiLow:0.391,mpiCiHigh:0.427,incidence:90.5,incidenceCiLow:88.2,incidenceCiHigh:92.8,intensity:45.2,populationShare:3,poorMillions:5.81},
  "Taraba":{mpi:0.34,mpiCiLow:0.316,mpiCiHigh:0.364,incidence:79.4,incidenceCiLow:75.7,incidenceCiHigh:83.1,intensity:42.8,populationShare:1.7,poorMillions:2.81},
  "Yobe":{mpi:0.37,mpiCiLow:0.346,mpiCiHigh:0.394,incidence:83.5,incidenceCiLow:79.9,incidenceCiHigh:87.1,intensity:44.3,populationShare:1.8,poorMillions:3.23},
  "Zamfara":{mpi:0.328,mpiCiLow:0.303,mpiCiHigh:0.353,incidence:78,incidenceCiLow:73.4,incidenceCiHigh:82.7,intensity:42.1,populationShare:2.5,poorMillions:4.17},
  "Federal Capital Territory":{mpi:0.186,mpiCiLow:0.157,mpiCiHigh:0.215,incidence:48.3,incidenceCiLow:41.9,incidenceCiHigh:54.6,intensity:38.6,populationShare:1.6,poorMillions:1.59}
};
export const stateMpiSource={
 publisher:"National Bureau of Statistics; Federal Government of Nigeria, with UNDP and UNICEF technical support",
 title:"Nigeria Multidimensional Poverty Index Survey Results 2022 — Appendix D, Table D6",
 period:"MPI Survey 2021/22; published November 2022",
 url:"https://www.nigerianstat.gov.ng/pdfuploads/NIGERIA%20MULTIDIMENSIONAL%20POVERTY%20INDEX%20SURVEY%20RESULTS%202022.pdf",
 note:"MPI is incidence multiplied by intensity, reflecting the share of weighted possible deprivations experienced by multidimensionally poor people. Incidence is the share of people identified as multidimensionally poor; intensity is the average weighted deprivation share among poor people. The source says state estimates are representative for all states except Borno. Figures pre-date the May 2023 administrations and must be used as inherited baseline only; do not describe them as a current governor's result."
};
