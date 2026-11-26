import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCandidate } from "@/lib/data";
export const dynamic="force-dynamic";
export async function generateMetadata({params}:{params:Promise<{id:string}>}):Promise<Metadata>{const {id}=await params;const c=await getCandidate(id);return {title:c?.displayName||"Candidate profile"};}
export default async function CandidateProfile({params}:{params:Promise<{id:string}>}){
 const {id}=await params;const c=await getCandidate(id);if(!c)notFound();
 const initials=c.displayName.split(" ").slice(0,2).map(x=>x[0]).join("");
 return <div className="wrap"><div className="page-intro"><div className="kicker"><Link href="/candidates">Candidates</Link> / Profile</div><p>Official particulars captured from INEC’s published list.</p></div>
 <section className="profile-top"><div className="portrait"><span className="portrait-initials">{initials}</span><span className="portrait-note">Verified portrait to be added</span></div>
 <div className="profile-title"><span className="party-tag">{c.partyCode}</span><h1>{c.displayName}</h1><p>Presidential candidate listed for Nigeria’s 2027 general election. This profile currently contains only particulars transcribed from the official INEC list; biographical and policy details will be added with separate citations.</p>
 <div className="profile-details"><div className="detail"><span>Running mate</span><strong>{c.runningMateOfficialName||"Not stated"}</strong></div><div className="detail"><span>Age on published list</span><strong>{c.ageAtPublication??"Not stated"}</strong></div><div className="detail"><span>Qualifications listed</span><strong>{c.qualifications||"Not stated"}</strong></div><div className="detail"><span>Running mate qualifications</span><strong>{c.runningMateQualifications||"Not stated"}</strong></div></div>
 <div className="source-note">Source: {c.source?.publisher||"INEC"} · {c.source?.publishedAt||"Publication date not available"}<br/><a href={c.source?.url} target="_blank" rel="noreferrer">View original INEC document ↗</a></div>
 </div></section></div>;
}