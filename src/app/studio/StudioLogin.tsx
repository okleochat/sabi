"use client";
import {useState} from "react";
import {GoogleAuthProvider,signInWithPopup,signOut} from "firebase/auth";
import {auth} from "@/lib/firebase-client";
type EvidenceLink={title:string;publisher?:string;url:string;sourceType?:string};
type Claim={id:string;claim:string;status:string;createdAt:string;claimType?:string;subject?:string;state?:string;context?:string;sourceUrl?:string;supportingUrls?:string[];contact?:string;isTimeSensitive?:boolean;reviewPriority?:string;alertStatus?:string;researchNotes?:string;reviewSummary?:string;findings?:string;verdict?:string;evidence?:EvidenceLink[]};
const verdicts=["True","Mostly true","Half true","Misleading","Mostly false","False","Unproven","Outdated","Insufficient evidence"];
const labels:Record<string,string>={"public-statement":"Public statement","campaign-promise":"Campaign promise","election-information":"Election information",statistics:"Statistics","image-video":"Image / video",policy:"Policy",other:"Other"};
function ClaimReviewCard({claim,token,refresh,setMessage}:{claim:Claim;token:()=>Promise<string>;refresh:()=>Promise<void>;setMessage:(s:string)=>void}){
 const [busy,setBusy]=useState(false),[status,setStatus]=useState(claim.status||"submitted"),[verdict,setVerdict]=useState(claim.verdict||""),[notes,setNotes]=useState(claim.researchNotes||""),[summary,setSummary]=useState(claim.reviewSummary||""),[findings,setFindings]=useState(claim.findings||""),[evidenceText,setEvidenceText]=useState((claim.evidence||[]).map(x=>x.url).join("\n")),[title,setTitle]=useState(claim.claim.slice(0,130)),[confirmed,setConfirmed]=useState(false);
 async function act(action:"save-claim-research"|"publish-factcheck"|"update-claim"){
  setBusy(true);setMessage("");
  try{
   const evidence=evidenceText.split(/\r?\n/).map(x=>x.trim()).filter(Boolean).slice(0,20).map(url=>({title:url,url,sourceType:"editor-added"}));
   const body:any={action,id:claim.id};
   if(action==="update-claim")body.status=status;
   if(action==="save-claim-research")Object.assign(body,{status,verdict,researchNotes:notes,reviewSummary:summary,findings,evidence});
   if(action==="publish-factcheck")Object.assign(body,{title,summary,findings,verdict,evidence,humanReviewConfirmed:confirmed});
   const res=await fetch("/api/studio",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+await token()},body:JSON.stringify(body)});
   const data=await res.json();if(!res.ok)throw new Error(data.error||"Newsroom action failed.");
   setMessage(action==="publish-factcheck"?"Fact-check published: "+data.url:action==="save-claim-research"?"Research notes saved.":"Workflow status updated.");
   setConfirmed(false);await refresh();
  }catch(e){setMessage(e instanceof Error?e.message:"Could not complete the action.");}
  finally{setBusy(false);}
 }
 return <article className="content-card studio-claim-card">
  <div className="studio-claim-top"><div><div className="eyebrow">{claim.status||"submitted"} · {labels[claim.claimType||"other"]||"Other"} · {claim.createdAt||""}</div><h3>{claim.claim}</h3></div><span className={"claim-priority "+(claim.isTimeSensitive?"urgent":"")}>{claim.isTimeSensitive?"TIME-SENSITIVE":claim.reviewPriority||"STANDARD"}</span></div>
  <div className="studio-claim-facts">{claim.subject?<div><span>SUBJECT</span><strong>{claim.subject}</strong></div>:null}{claim.state?<div><span>LOCATION</span><strong>{claim.state}</strong></div>:null}{claim.contact?<div><span>SUBMITTER CONTACT / PRIVATE</span><strong>{claim.contact}</strong></div>:null}<div><span>INSTANT ALERT</span><strong>{claim.alertStatus||"Not recorded"}</strong></div></div>
  {claim.context?<p><b>Context:</b> {claim.context}</p>:null}
  {claim.sourceUrl?<p><a href={claim.sourceUrl} target="_blank" rel="noreferrer">Open original claim source ↗</a></p>:null}
  {claim.supportingUrls?.map(url=><p key={url}><a href={url} target="_blank" rel="noreferrer">Open supporting material ↗</a></p>)}
  <div className="studio-review-fields">
   <label className="status-label">Workflow status<select value={status} disabled={busy} onChange={e=>setStatus(e.target.value)}><option value="submitted">Submitted</option><option value="triaged">Triaged</option><option value="researching">Researching</option><option value="editor_review">Editor review</option><option value="closed">Closed</option></select></label>
   <label>Editorial verdict (draft only)<select value={verdict} disabled={busy} onChange={e=>setVerdict(e.target.value)}><option value="">Not assessed</option>{verdicts.map(v=><option value={v} key={v}>{v}</option>)}</select></label>
   <label>Research notes / source checks<textarea value={notes} onChange={e=>setNotes(e.target.value)} maxLength={8000} rows={4} placeholder="Record primary documents, corroboration, conflicting sources and what remains unknown."/></label>
   <label>Short explanation for publication<textarea value={summary} onChange={e=>setSummary(e.target.value)} maxLength={2500} rows={3} placeholder="A clear, neutral summary of what the evidence supports."/></label>
   <label>Detailed findings<textarea value={findings} onChange={e=>setFindings(e.target.value)} maxLength={12000} rows={6} placeholder="Explain the exact wording, source, context, evidence, counter-evidence and limitations."/></label>
   <label>Evidence URLs — one per line<textarea value={evidenceText} onChange={e=>setEvidenceText(e.target.value)} rows={4} placeholder="https://official-source.gov.ng/report.pdf"/></label>
   <button className="button secondary" disabled={busy} onClick={()=>act("save-claim-research")}>{busy?"Saving…":"Save research notes"}</button>
   <div className="publish-review"><label className="publish-confirm"><input type="checkbox" checked={confirmed} onChange={e=>setConfirmed(e.target.checked)}/> I have personally checked the wording, context, sources, findings and verdict before publication.</label><label>Published fact-check headline<input value={title} onChange={e=>setTitle(e.target.value)} maxLength={220}/></label><button className="button" disabled={busy||!confirmed} onClick={()=>act("publish-factcheck")}>Publish reviewed fact-check ↗</button><small>Only an editor or administrator can publish, after explicit human confirmation.</small></div>
  </div>
 </article>;
}
export default function StudioLogin(){
 const [busy,setBusy]=useState(false),[user,setUser]=useState(""),[uid,setUid]=useState(""),[role,setRole]=useState(""),[claims,setClaims]=useState<Claim[]>([]),[pending,setPending]=useState(false),[message,setMessage]=useState("");
 async function loadStudio(idToken:string){
  const res=await fetch("/api/studio",{headers:{Authorization:"Bearer "+idToken},cache:"no-store"});const data=await res.json();
  if(res.status===403&&data.pending){setPending(true);setUid(data.uid||"");setUser(data.email||"");setMessage("Your Firebase account has been verified, but an administrator must approve it before newsroom access is granted.");return;}
  if(!res.ok)throw new Error(data.error||"Could not open the newsroom.");
  setPending(false);setUser(data.editor.email||"");setRole(data.editor.role||"");setClaims(data.claims||[]);setUid("");
 }
 async function login(){setBusy(true);setMessage("");try{const provider=new GoogleAuthProvider();provider.setCustomParameters({prompt:"select_account"});const result=await signInWithPopup(auth,provider);await loadStudio(await result.user.getIdToken());}catch(e){setMessage(e instanceof Error?e.message:"Sign-in failed.");}finally{setBusy(false);}}
 async function token(){const current=auth.currentUser;if(!current)throw new Error("Please sign in again.");return current.getIdToken();}
 async function refresh(){const current=auth.currentUser;if(!current)return;setBusy(true);try{await loadStudio(await current.getIdToken(true));}catch(e){setMessage(e instanceof Error?e.message:"Refresh failed.");}finally{setBusy(false);}}
 async function logout(){await signOut(auth);setUser("");setUid("");setRole("");setClaims([]);setPending(false);setMessage("");}
 const urgent=claims.filter(c=>c.isTimeSensitive&&c.status!=="closed").length,open=claims.filter(c=>c.status!=="closed").length;
 return <div className="studio-box">
  {!user&&!uid?<div className="form-panel"><h2>Staff sign-in</h2><p className="notice">Use your Google account. Only explicitly approved staff accounts can enter the newsroom.</p><button className="button" disabled={busy} onClick={login}>{busy?"Signing in…":"Continue with Google ↗"}</button></div>:null}
  {pending?<div className="form-panel"><h2>Access approval required</h2><p>{message}</p><div className="detail"><span>Signed-in account</span><strong>{user}</strong></div><div className="detail" style={{marginTop:10}}><span>Firebase user UID</span><strong style={{overflowWrap:"anywhere"}}>{uid}</strong></div><p className="notice">In Firestore, create a document in the <strong>editors</strong> collection using this UID as the document ID. Add fields <strong>role: "admin"</strong> and <strong>email: "{user}"</strong>. Then refresh this page.</p><div className="hero-actions"><button className="button" onClick={refresh} disabled={busy}>Check access</button><button className="button secondary" onClick={logout}>Sign out</button></div></div>:null}
  {user&&!pending?<div className="studio-dashboard">
   <div className="section-head"><div><div className="eyebrow">SIGNED IN / {role.toUpperCase()}</div><h2>CLAIM INBOX.</h2><p>{open} open submissions · {urgent} marked time-sensitive</p></div><div className="hero-actions"><button className="button" onClick={refresh} disabled={busy}>Refresh inbox</button><button className="button secondary" onClick={logout}>Sign out</button></div></div>
   <div className="notice" style={{margin:"8px 0 20px"}}><strong>CLAIM REVIEW WORKFLOW</strong><br/>Submissions are saved in Firestore and can dispatch an instant newsroom webhook when <code>SABI_CLAIM_ALERT_WEBHOOK_URL</code> is configured. Research notes and sources stay private to editors. Only an editor or administrator can publish a fact-check after explicitly confirming human review. Nothing is auto-published.</div>
   {claims.length?<div className="studio-claims">{claims.map(c=><ClaimReviewCard key={c.id} claim={c} token={token} refresh={refresh} setMessage={setMessage}/>)}</div>:<div className="empty-state">No claims have been submitted yet.</div>}
  </div>:null}
  {message&&!pending?<p className="notice" role="status">{message}</p>:null}
 </div>;
}
