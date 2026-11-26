import type {Metadata} from "next";
import Link from "next/link";
import {notFound} from "next/navigation";
import {issueBriefs} from "@/data/issue-briefs";
export const dynamic="force-static";
export async function generateStaticParams(){return issueBriefs.map(i=>({slug:i.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const i=issueBriefs.find(x=>x.slug===slug);return {title:i?.title||"Issue brief"};}
export default async function IssueDetail({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const issue=issueBriefs.find(x=>x.slug===slug);if(!issue)notFound();return <div className="page-shell">
<div className="profile-breadcrumb"><Link href="/issues">← ALL ISSUE BRIEFS</Link><span>/</span><span>POLICY FILE / {issue.number}</span></div>
<section className="page-intro"><div className="eyebrow"><span/>POLICY FILE / {issue.number}</div><h1>{issue.title.toUpperCase()}.</h1><p>{issue.tagline}</p></section>
<section className="page-section issue-detail-copy"><div className="issue-lead"><div className="eyebrow">THE SABI TAKE</div><p>{issue.overview}</p></div>
<div className="issue-layout"><div className="question-card"><div className="eyebrow">ASK THE CANDIDATES</div><h3>Questions voters should ask</h3><ol>{issue.questions.map(q=><li key={q}>{q}</li>)}</ol></div><div className="question-card"><div className="eyebrow">FOLLOW THE RECEIPTS</div><h3>What to track</h3><ul>{issue.whatToTrack.map(q=><li key={q}>{q}</li>)}</ul></div></div>
<div className="issue-sources"><div className="eyebrow">START WITH PRIMARY SOURCES</div>{issue.sources.map(s=><a key={s.url} href={s.url} target="_blank" rel="noreferrer"><span>{s.publisher}</span>{s.title} ↗</a>)}</div>
</section></div>;}