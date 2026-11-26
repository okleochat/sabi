"use client";
import {useState} from "react";
import {GoogleAuthProvider,signInWithPopup,signOut} from "firebase/auth";
import {auth} from "@/lib/firebase-client";
type Claim={id:string;claim:string;status:string;createdAt:string;context?:string;sourceUrl?:string};
export default function StudioLogin(){
 const [busy,setBusy]=useState(false);const [user,setUser]=useState("");const [uid,setUid]=useState("");const [claims,setClaims]=useState<Claim[]>([]);const [pending,setPending]=useState(false);const [message,setMessage]=useState("");
 async function loadStudio(idToken:string){
  const res=await fetch("/api/studio",{headers:{Authorization:"Bearer "+idToken},cache:"no-store"});
  const data=await res.json();
  if(res.status===403&&data.pending){setPending(true);setUid(data.uid||"");setUser(data.email||"");setMessage("Your Firebase account has been verified, but an administrator must approve it before newsroom access is granted.");return;}
  if(!res.ok)throw new Error(data.error||"Could not open the newsroom.");
  setPending(false);setUser(data.editor.email||"");setClaims(data.claims||[]);setUid("");
 }
 async function login(){
  setBusy(true);setMessage("");
  try{const provider=new GoogleAuthProvider();provider.setCustomParameters({prompt:"select_account"});const result=await signInWithPopup(auth,provider);await loadStudio(await result.user.getIdToken());}
  catch(e){setMessage(e instanceof Error?e.message:"Sign-in failed.");}
  finally{setBusy(false);}
 }
 async function refresh(){const current=auth.currentUser;if(!current)return;setBusy(true);try{await loadStudio(await current.getIdToken(true));}catch(e){setMessage(e instanceof Error?e.message:"Refresh failed.");}finally{setBusy(false);}}
 async function updateClaim(id:string,status:string){const current=auth.currentUser;if(!current)return;setBusy(true);try{const res=await fetch("/api/studio",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+await current.getIdToken()},body:JSON.stringify({action:"update-claim",id,status})});const data=await res.json();if(!res.ok)throw new Error(data.error||"Could not update claim.");await refresh();}catch(e){setMessage(e instanceof Error?e.message:"Update failed.");}finally{setBusy(false);}}
 async function logout(){await signOut(auth);setUser("");setUid("");setClaims([]);setPending(false);setMessage("");}
 return <div className="studio-box">
 {!user&&!uid?<div className="form-panel"><h2>Staff sign-in</h2><p className="notice">Use your Google account. Only accounts explicitly approved in the Firestore editors collection can enter the newsroom.</p><button className="button" disabled={busy} onClick={login}>{busy?"Signing in…":"Continue with Google ↗"}</button></div>:null}
 {pending?<div className="form-panel"><h2>Access approval required</h2><p>{message}</p><div className="detail"><span>Signed-in account</span><strong>{user}</strong></div><div className="detail" style={{marginTop:10}}><span>Firebase user UID</span><strong style={{overflowWrap:"anywhere"}}>{uid}</strong></div><p className="notice">In Firestore, create a document in the <strong>editors</strong> collection using this UID as the document ID. Add fields <strong>role: "admin"</strong> and <strong>email: "{user}"</strong>. Then refresh this page.</p><div className="hero-actions"><button className="button" onClick={refresh} disabled={busy}>Check access</button><button className="button secondary" onClick={logout}>Sign out</button></div></div>:null}
 {user&&!pending&&claims.length>=0?<div className="studio-dashboard"><div className="section-head"><div><div className="eyebrow">Signed in as {user}</div><h2>Claim inbox</h2></div><div className="hero-actions"><button className="button" onClick={refresh} disabled={busy}>Refresh</button><button className="button secondary" onClick={logout}>Sign out</button></div></div>
 <div className="notice" style={{margin:"20px 0"}}><strong>SABI DAILY EDITORIAL DESK</strong><br/>ChatGPT prepares the daily research report separately. Editors should use the report as a research queue, verify every primary source, then add approved articles, fact-checks and records through the newsroom workflow. Nothing from an external AI report is published automatically.</div>
 {claims.length? <div className="studio-claims">{claims.map(c=><article className="content-card" key={c.id}><div className="eyebrow">{c.status||"submitted"} · {c.createdAt||""}</div><h3>{c.claim}</h3>{c.context?<p>{c.context}</p>:null}{c.sourceUrl?<p><a href={c.sourceUrl} target="_blank" rel="noreferrer">Open submitted source ↗</a></p>:null}<label className="status-label">Workflow status<select value={c.status||"submitted"} disabled={busy} onChange={e=>updateClaim(c.id,e.target.value)}><option value="submitted">Submitted</option><option value="triaged">Triaged</option><option value="researching">Researching</option><option value="editor_review">Editor review</option><option value="closed">Closed</option></select></label></article>)}</div>:<div className="empty-state">No claims have been submitted yet.</div>}
 </div>:null}
 {message&&!pending?<p className="notice" role="status">{message}</p>:null}
 </div>;
}