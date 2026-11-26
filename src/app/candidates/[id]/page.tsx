import type {Metadata} from "next";
import Link from "next/link";
import {notFound} from "next/navigation";
import {getCandidate} from "@/lib/data";
import {candidatePortraits,candidateBackgrounds} from "@/data/candidate-media";
export const dynamic="force-dynamic";
export async function generateMetadata({params}:{params:Promise<{id:string}>}):Promise<Metadata>{const {id}=await params;const c=await getCandidate(id);return {title:c?.displayName||"Candidate profile"};}
export default async function CandidateProfile({params}:{params:Promise<{id:string}>}){
 const {id}=await params;const c=await getCandidate(id);if(!c)notFound();
 const portrait=candidatePortraits[c.id],background=candidateBackgrounds[c.id];
 const initials=c.displayName.split(" ").slice(0,2).map(x=>x[0]).join("");
 return <div className="page-shell"><div className="profile-breadcrumb"><Link href="/candidates">← ALL CANDIDATES</Link><span>/</span><span>PROFILE / {c.partyCode}</span></div>
 <section className="profile-top">
 <div className="profile-art">{portrait?<><img src={portrait.url} alt={portrait.alt}/><small>PHOTO: {portrait.credit} · {portrait.license} · <a href={portrait.sourceUrl} target="_blank" rel="noreferrer">IMAGE SOURCE ↗</a></small></>:<div className="profile-placeholder"><span>{initials}</span><small>PORTRAIT SOURCE BEING VERIFIED</small></div>}</div>
 <div className="profile-title"><div className="eyebrow"><span/>PRESIDENTIAL CANDIDATE / 2027</div><span className="party-tag">{c.partyCode}</span><h1>{c.displayName}</h1>
 <p>{background?.summary||"INEC lists this person as a presidential candidate for the 2027 general election. This profile currently displays official particulars captured from the Commission's list. Additional biographical, political and policy information will be added after separate source checks."}</p>
 <div className="profile-details">
 <div className="detail"><span>RUNNING MATE</span><strong>{c.runningMateOfficialName||"Not stated in source"}</strong></div>
 <div className="detail"><span>AGE ON INEC LIST</span><strong>{c.ageAtPublication??"Not stated"}</strong></div>
 <div className="detail"><span>QUALIFICATIONS LISTED</span><strong>{c.qualifications||"Not stated"}</strong></div>
 <div className="detail"><span>RUNNING MATE QUALIFICATIONS</span><strong>{c.runningMateQualifications||"Not stated"}</strong></div>
 </div>
 <div className="source-note">OFFICIAL SOURCE: {c.source?.publisher||"INEC"} · {c.source?.publishedAt||"DATE NOT AVAILABLE"}<br/><a href={c.source?.url} target="_blank" rel="noreferrer">VIEW INEC CANDIDATE LIST ↗</a></div>
 </div></section>
 <section className="profile-research"><div className="eyebrow"><span/>THE RESEARCH FILE</div><h2>WHAT WE KNOW.<br/>WHAT WE'RE STILL CHECKING.</h2><div className="content-grid"><article className="content-card"><div className="eyebrow">VERIFIED SO FAR</div><h3>Official ticket details</h3><p>Candidate name, party code, running mate and particulars shown above are transcribed from INEC's published list.</p></article><article className="content-card"><div className="eyebrow">NEXT RESEARCH LAYER</div><h3>Biography & public record</h3><p>Political history, public offices, major decisions and independently sourced biography are added only when supported by reliable records.</p></article><article className="content-card"><div className="eyebrow">POLICY FILE</div><h3>Promises & positions</h3><p>Manifesto statements and policy proposals will be linked to the original document, with dates and clear distinctions between proposals and outcomes.</p></article></div>
 {background?.sources?.length?<div className="profile-source-list"><strong>Additional profile sources</strong>{background.sources.map(s=><a key={s.url} href={s.url} target="_blank" rel="noreferrer">{s.publisher}: {s.title} ↗</a>)}</div>:null}
 {portrait?<p className="source-note">IMAGE ATTRIBUTION: {portrait.credit} · {portrait.license} · <a href={portrait.licenseUrl} target="_blank" rel="noreferrer">LICENCE DETAILS ↗</a></p>:null}
 </section></div>;
}