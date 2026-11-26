/**
 * NALABE 2022 state-level learning assessment, extracted from Tables 3.3, 3.6
 * and 3.9 of the UBEC/UNICEF report.
 *
 * Tuple = [weighted learner count used in analysis, mean scale score,
 * percentage reaching the report's minimum proficiency (levels 3+4)].
 * This is a nationally representative assessment of P3, P5 and JS2 in 2022.
 * It predates the administrations inaugurated in May 2023 and is a baseline,
 * not evidence of current officeholder performance or progress during tenure.
 */
export type NalabeStateScore = { weightedLearnerCount:number; meanScaleScore:number; minimumProficiencyPercent:number };
export type NalabeClass = "P3 mathematics" | "P5 mathematics" | "JS2 mathematics";

const raw: Record<NalabeClass, Record<string,[number,number,number]>> = {
  "P3 mathematics": {
    "Abia": [
      470,
      491,
      37
    ],
    "Adamawa": [
      2480,
      480,
      36
    ],
    "Akwa Ibom": [
      3928,
      493,
      45
    ],
    "Anambra": [
      375,
      490,
      41
    ],
    "Bauchi": [
      3099,
      485,
      42
    ],
    "Bayelsa": [
      133,
      492,
      45
    ],
    "Benue": [
      935,
      503,
      53
    ],
    "Borno": [
      3506,
      486,
      43
    ],
    "Cross River": [
      445,
      491,
      44
    ],
    "Delta": [
      1032,
      500,
      49
    ],
    "Ebonyi": [
      152,
      494,
      46
    ],
    "Edo": [
      868,
      487,
      37
    ],
    "Ekiti": [
      93,
      498,
      49
    ],
    "Enugu": [
      108,
      499,
      49
    ],
    "Federal Capital Territory": [
      1119,
      502,
      54
    ],
    "Gombe": [
      2630,
      508,
      57
    ],
    "Imo": [
      1422,
      531,
      75
    ],
    "Jigawa": [
      2814,
      495,
      52
    ],
    "Kaduna": [
      3480,
      511,
      62
    ],
    "Kano": [
      3905,
      510,
      63
    ],
    "Katsina": [
      3506,
      527,
      76
    ],
    "Kebbi": [
      3118,
      530,
      75
    ],
    "Kogi": [
      297,
      535,
      75
    ],
    "Kwara": [
      424,
      489,
      42
    ],
    "Lagos": [
      1562,
      504,
      55
    ],
    "Nasarawa": [
      1502,
      478,
      12
    ],
    "Niger": [
      2378,
      511,
      63
    ],
    "Ogun": [
      1286,
      491,
      42
    ],
    "Ondo": [
      1260,
      493,
      46
    ],
    "Osun": [
      417,
      493,
      43
    ],
    "Oyo": [
      3730,
      478,
      30
    ],
    "Plateau": [
      1136,
      467,
      18
    ],
    "Rivers": [
      536,
      458,
      21
    ],
    "Sokoto": [
      2517,
      501,
      53
    ],
    "Taraba": [
      1839,
      508,
      61
    ],
    "Yobe": [
      1983,
      469,
      26
    ],
    "Zamfara": [
      2097,
      515,
      65
    ]
  },
  "P5 mathematics": {
    "Abia": [
      653,
      469,
      19
    ],
    "Adamawa": [
      2229,
      466,
      10
    ],
    "Akwa Ibom": [
      3771,
      478,
      29
    ],
    "Anambra": [
      565,
      488,
      34
    ],
    "Bauchi": [
      3152,
      477,
      25
    ],
    "Bayelsa": [
      144,
      483,
      31
    ],
    "Benue": [
      837,
      483,
      31
    ],
    "Borno": [
      3453,
      475,
      27
    ],
    "Cross River": [
      375,
      485,
      34
    ],
    "Delta": [
      1141,
      487,
      34
    ],
    "Ebonyi": [
      302,
      480,
      30
    ],
    "Edo": [
      1693,
      478,
      19
    ],
    "Ekiti": [
      148,
      488,
      35
    ],
    "Enugu": [
      147,
      490,
      40
    ],
    "Federal Capital Territory": [
      1261,
      466,
      14
    ],
    "Gombe": [
      2377,
      492,
      43
    ],
    "Imo": [
      1843,
      511,
      63
    ],
    "Jigawa": [
      2742,
      485,
      37
    ],
    "Kaduna": [
      3349,
      499,
      49
    ],
    "Kano": [
      4034,
      492,
      47
    ],
    "Katsina": [
      3385,
      503,
      59
    ],
    "Kebbi": [
      2983,
      499,
      46
    ],
    "Kogi": [
      292,
      501,
      46
    ],
    "Kwara": [
      360,
      479,
      25
    ],
    "Lagos": [
      2343,
      490,
      35
    ],
    "Nasarawa": [
      926,
      494,
      44
    ],
    "Niger": [
      2248,
      488,
      39
    ],
    "Ogun": [
      1545,
      480,
      23
    ],
    "Ondo": [
      1408,
      488,
      32
    ],
    "Osun": [
      407,
      479,
      23
    ],
    "Oyo": [
      3801,
      475,
      21
    ],
    "Plateau": [
      982,
      462,
      7
    ],
    "Rivers": [
      523,
      479,
      24
    ],
    "Sokoto": [
      2595,
      478,
      22
    ],
    "Taraba": [
      1153,
      480,
      32
    ],
    "Yobe": [
      2589,
      470,
      15
    ],
    "Zamfara": [
      2112,
      495,
      47
    ]
  },
  "JS2 mathematics": {
    "Abia": [
      202,
      449,
      6
    ],
    "Adamawa": [
      514,
      456,
      13
    ],
    "Akwa Ibom": [
      1100,
      449,
      7
    ],
    "Anambra": [
      491,
      462,
      10
    ],
    "Bauchi": [
      582,
      458,
      20
    ],
    "Bayelsa": [
      157,
      459,
      13
    ],
    "Benue": [
      248,
      453,
      8
    ],
    "Borno": [
      935,
      448,
      5
    ],
    "Cross River": [
      236,
      456,
      13
    ],
    "Delta": [
      857,
      454,
      6
    ],
    "Ebonyi": [
      185,
      456,
      14
    ],
    "Edo": [
      755,
      451,
      3
    ],
    "Ekiti": [
      219,
      448,
      3
    ],
    "Enugu": [
      194,
      457,
      4
    ],
    "Federal Capital Territory": [
      908,
      459,
      8
    ],
    "Gombe": [
      454,
      476,
      24
    ],
    "Imo": [
      1208,
      478,
      31
    ],
    "Jigawa": [
      856,
      474,
      14
    ],
    "Kaduna": [
      1086,
      468,
      19
    ],
    "Kano": [
      1151,
      461,
      14
    ],
    "Katsina": [
      715,
      464,
      25
    ],
    "Kebbi": [
      735,
      480,
      34
    ],
    "Kogi": [
      124,
      451,
      2
    ],
    "Kwara": [
      301,
      470,
      25
    ],
    "Lagos": [
      1158,
      470,
      15
    ],
    "Nasarawa": [
      156,
      469,
      23
    ],
    "Niger": [
      466,
      460,
      12
    ],
    "Ogun": [
      1016,
      449,
      3
    ],
    "Ondo": [
      549,
      447,
      3
    ],
    "Osun": [
      246,
      455,
      11
    ],
    "Oyo": [
      1088,
      455,
      8
    ],
    "Plateau": [
      127,
      456,
      11
    ],
    "Rivers": [
      1141,
      455,
      6
    ],
    "Sokoto": [
      434,
      474,
      26
    ],
    "Taraba": [
      251,
      467,
      10
    ],
    "Yobe": [
      634,
      462,
      24
    ],
    "Zamfara": [
      395,
      467,
      21
    ]
  }
};

export const nalabeStateLearning2022: Record<NalabeClass, Record<string,NalabeStateScore>> =
  Object.fromEntries(Object.entries(raw).map(([level,states])=>[
    level,
    Object.fromEntries(Object.entries(states).map(([state,[weightedLearnerCount,meanScaleScore,minimumProficiencyPercent]])=>[
      state,{weightedLearnerCount,meanScaleScore,minimumProficiencyPercent}
    ]))
  ])) as Record<NalabeClass,Record<string,NalabeStateScore>>;

export const nalabeSource = {
  publisher: "Universal Basic Education Commission and UNICEF",
  title: "National Assessment of Learning Achievement in Basic Education (NALABE) 2022",
  period: "Assessment conducted October 2022; report published December 2025",
  url: "https://www.unicef.org/nigeria/media/14341/file/NALABE%202022%20Report_pdf.pdf.pdf",
  sample: "75,067 Primary 3 learners, 71,041 Primary 5 learners and 23,564 JS2 learners sampled across all 36 states and the FCT. Table weighted-learner counts are not the raw number of learners actually tested.",
  definition: "Minimum proficiency is levels 3 and 4 on the report's scale. Mean scale scores and proficiency rates are two separate measures.",
  note: "This is a pre-May-2023 baseline. It cannot be attributed to a governor who assumed office in 2023 or later. Some state-level weighted learner samples are small (for example, Enugu P3 n=108, Ekiti P3 n=93, and Rivers P3 n=536); interpret estimates with the report's methods and sampling limitations. No current tenure change can be calculated without a comparable follow-up assessment."
};
