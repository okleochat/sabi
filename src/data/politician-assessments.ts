export type ImpactBenchmark={score:number;rank:number;totalStates:36;edition:"2025";publisher:"Phillips Consulting";sourceUrl:string;rankingSourceUrl:string;methodology:string};
export type IntegrityReference={score:number;assessedPromises:number;publisher:"The Receipt";sourceUrl:string;lastUpdated:"2026-11-23";note:string};
const impactByState:Record<string,{rank:number;score:number}>={
  "Lagos": {
    "rank": 1,
    "score": 100
  },
  "Ogun": {
    "rank": 2,
    "score": 97
  },
  "Kaduna": {
    "rank": 3,
    "score": 94
  },
  "Adamawa": {
    "rank": 4,
    "score": 91
  },
  "Niger": {
    "rank": 5,
    "score": 89
  },
  "Nasarawa": {
    "rank": 6,
    "score": 86
  },
  "Gombe": {
    "rank": 7,
    "score": 83
  },
  "Jigawa": {
    "rank": 8,
    "score": 80
  },
  "Plateau": {
    "rank": 9,
    "score": 77
  },
  "Abia": {
    "rank": 10,
    "score": 74
  },
  "Oyo": {
    "rank": 11,
    "score": 71
  },
  "Bauchi": {
    "rank": 12,
    "score": 69
  },
  "Ebonyi": {
    "rank": 13,
    "score": 66
  },
  "Cross River": {
    "rank": 14,
    "score": 63
  },
  "Kebbi": {
    "rank": 15,
    "score": 60
  },
  "Edo": {
    "rank": 16,
    "score": 57
  },
  "Delta": {
    "rank": 17,
    "score": 54
  },
  "Kwara": {
    "rank": 18,
    "score": 51
  },
  "Yobe": {
    "rank": 19,
    "score": 49
  },
  "Enugu": {
    "rank": 20,
    "score": 46
  },
  "Akwa Ibom": {
    "rank": 21,
    "score": 43
  },
  "Osun": {
    "rank": 22,
    "score": 40
  },
  "Benue": {
    "rank": 23,
    "score": 37
  },
  "Taraba": {
    "rank": 24,
    "score": 34
  },
  "Rivers": {
    "rank": 25,
    "score": 31
  },
  "Ekiti": {
    "rank": 26,
    "score": 29
  },
  "Ondo": {
    "rank": 27,
    "score": 26
  },
  "Zamfara": {
    "rank": 28,
    "score": 23
  },
  "Bayelsa": {
    "rank": 29,
    "score": 20
  },
  "Kano": {
    "rank": 30,
    "score": 17
  },
  "Imo": {
    "rank": 31,
    "score": 14
  },
  "Katsina": {
    "rank": 32,
    "score": 11
  },
  "Sokoto": {
    "rank": 33,
    "score": 9
  },
  "Anambra": {
    "rank": 34,
    "score": 6
  },
  "Kogi": {
    "rank": 35,
    "score": 3
  },
  "Borno": {
    "rank": 36,
    "score": 0
  }
};
const integrityByState:Record<string,{score:number;assessedPromises:number}>={
 "Abia":{score:75,assessedPromises:2},
 "Delta":{score:37.5,assessedPromises:4},
 "Enugu":{score:70,assessedPromises:5},
 "Kaduna":{score:62.5,assessedPromises:4},
 "Kano":{score:30,assessedPromises:5},
 "Lagos":{score:60,assessedPromises:5},
 "Oyo":{score:62.5,assessedPromises:4},
 "Rivers":{score:50,assessedPromises:4}
};
export function getPoliticianAssessment(person:{id:string;state?:string}):{impactBenchmark:ImpactBenchmark|null;integrityReference:IntegrityReference|null}{
 const state=person.state||"";
 const impact=impactByState[state];
 const integrity=integrityByState[state];
 return {
  impactBenchmark:impact?{...impact,totalStates:36,edition:"2025",publisher:"Phillips Consulting",sourceUrl:"https://pspi.com.ng/pspi-report/",rankingSourceUrl:"https://wikkitimes.com/lagos-ogun-kaduna-top-2025-state-performance-rankings-pspi-report/",methodology:"Rank-normalised percentile: (36 − state rank) ÷ 35 × 100. This is a derived benchmark from the published rank, not Phillips Consulting's raw score or Sabi's own five-dimension Impact Score."}:null,
  integrityReference:integrity?{...integrity,publisher:"The Receipt",sourceUrl:"https://www.thereceipt.ng/governors/"+state.toLowerCase().replace(/ /g,"-"),lastUpdated:"2026-11-23",note:"External promise-ledger reference, not a Sabi editorial verdict. The Receipt's audited sample may not cover the complete manifesto; Sabi has not independently re-scored these commitments."}:null
 };
}
