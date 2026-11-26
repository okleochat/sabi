export type CommitmentStatus="completed"|"substantially_completed"|"partially_completed"|"not_started"|"abandoned"|"not_verifiable";
export type Commitment={id:string;weight:number;status:CommitmentStatus;approved:boolean};
export type IntegrityCatalogueCoverage={cataloguedCommitments:number;identifiableCommitments:number};
const INTEGRITY_CATALOGUE_THRESHOLD=0.6;
const commitmentWeight=(item:Commitment)=>Number.isFinite(item.weight)?Math.max(1,Math.min(5,item.weight)):1;

export function calculateIntegrityScore(items:Commitment[],catalogue:IntegrityCatalogueCoverage){
 const {cataloguedCommitments,identifiableCommitments}=catalogue;
 if(!Number.isInteger(cataloguedCommitments)||!Number.isInteger(identifiableCommitments)||cataloguedCommitments<0||identifiableCommitments<0||cataloguedCommitments>identifiableCommitments)throw new Error("Invalid manifesto catalogue coverage");
 const catalogueCoverage=identifiableCommitments?Math.round(100*cataloguedCommitments/identifiableCommitments):0;
 const catalogueGatePassed=identifiableCommitments>0&&cataloguedCommitments/identifiableCommitments>=INTEGRITY_CATALOGUE_THRESHOLD;
 const totalWeight=items.reduce((n,x)=>n+commitmentWeight(x),0);
 const assessed=items.filter(x=>x.approved&&x.status!=="not_verifiable");
 const denominator=assessed.reduce((n,x)=>n+commitmentWeight(x),0);
 const values:Record<Exclude<CommitmentStatus,"not_verifiable">,number>={completed:1,substantially_completed:.75,partially_completed:.5,not_started:0,abandoned:0};
 const numerator=assessed.reduce((n,x)=>n+commitmentWeight(x)*values[x.status as Exclude<CommitmentStatus,"not_verifiable">],0);
 const score=catalogueGatePassed&&denominator>0?Math.round(100*numerator/denominator):null;
 const scoreStatus=!catalogueGatePassed?"insufficient-manifesto-catalogue-coverage":denominator===0?"insufficient-evidence":"ready";
 return {score,scoreStatus,catalogueCoverage,catalogueGatePassed,cataloguedCommitments,identifiableCommitments,catalogueCoverageThreshold:60,assessedCommitments:assessed.length,totalCommitments:items.length,evidenceCoverage:totalWeight?Math.round(100*denominator/totalWeight):0,assessedWeight:denominator,totalWeight};
}
export type ImpactDimensionId="living-standards"|"health"|"education"|"economy-infrastructure"|"safety-governance";
export type ImpactDimension={id:ImpactDimensionId;score:number|null;plannedWeight:number;assessable:boolean;approved:boolean};
export function calculateImpactScore(dimensions:ImpactDimension[]){
 const assessable=dimensions.filter(x=>x.assessable&&x.approved&&x.score!==null);
 const planned=dimensions.reduce((n,x)=>n+x.plannedWeight,0);
 const covered=assessable.reduce((n,x)=>n+x.plannedWeight,0);
 const weight=covered;
 const gatePassed=assessable.length>=3&&planned>0&&covered/planned>=.6&&weight>0;
 const score=gatePassed?Math.round(assessable.reduce((n,x)=>n+Math.max(0,Math.min(100,x.score as number))*x.plannedWeight,0)/weight):null;
 return {score,scoreStatus:gatePassed?"ready":"insufficient-impact-evidence",assessableDimensions:assessable.length,totalDimensions:dimensions.length,evidenceCoverage:planned?Math.round(100*covered/planned):0};
}
export function scoreIndicatorChange(change:number,comparatorChange:number,materialityThreshold:number){
 if(!Number.isFinite(change)||!Number.isFinite(comparatorChange)||!Number.isFinite(materialityThreshold)||materialityThreshold<=0)throw new Error("Invalid indicator scoring inputs");
 const relative=(change-comparatorChange)/materialityThreshold;
 return Math.round(50+50*Math.max(-1,Math.min(1,relative)));
}
