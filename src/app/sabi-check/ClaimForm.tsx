"use client";
import {FormEvent,useRef,useState} from "react";
type Existing={title:string;url:string;subject:string;verdict:string;impact:string};
export default function ClaimForm(){
 const claimRef=useRef<HTMLTextAreaElement>(null);
 const [busy,setBusy]=useState(false),[checking,setChecking]=useState(false),[message,setMessage]=useState(""),[reference,setReference]=useState("");
 const [match,setMatch]=useState<Existing|null>(null),[queued,setQueued]=useState(false),[related,setRelated]=useState<Existing[]>([]),[checked,setChecked]=useState("");
 async function checkArchive(){
  const claim=String(claimRef.current?.value||"").trim();
  if(claim.length<12){setMessage("Paste the exact claim first (at least 12 characters).");return;}
  setChecking(true);setMatch(null);setQueued(false);setRelated([]);
  try{
   const res=await fetch("/api/claims?claim="+encodeURIComponent(claim),{cache:"no-store"});
   const data=await res.json();if(!res.ok)throw new Error(data.error||"Archive search failed.");
   setMatch(data.exactMatch||null);setQueued(Boolean(data.alreadyInQueue));setRelated(data.suggestions||[]);setChecked(claim);
   if(data.exactMatch)setMessage("This exact claim has already been verified. Open the existing fact-check.");
   else if(data.alreadyInQueue)setMessage("This exact claim is already in the private newsroom queue.");
   else setMessage((data.suggestions||[]).length?"Related checks found below. They are not exact duplicates; you may submit a genuinely different claim.":"No exact published match found. You can submit this claim.");
  }catch(e){setMessage(e instanceof Error?e.message:"Archive search failed.");}
  finally{setChecking(false);}
 }
 async function submit(e:FormEvent<HTMLFormElement>){
  e.preventDefault();const form=e.currentTarget;const values=new FormData(form);const claim=String(values.get("claim")||"").trim();
  if(checked!==claim){setMessage("Check the archive before submitting.");await checkArchive();return;}
  if(match||queued){setMessage("This claim already exists. Please use the existing Sabi Check record.");return;}
  setBusy(true);setMessage("");setReference("");
  const payload={claim,claimType:String(values.get("claimType")||"other"),subject:String(values.get("subject")||""),state:String(values.get("state")||""),context:String(values.get("context")||""),sourceUrl:String(values.get("sourceUrl")||""),supportingUrls:String(values.get("supportingUrls")||"").split(/\r?\n/).map(x=>x.trim()).filter(Boolean),contact:String(values.get("contact")||""),isTimeSensitive:values.get("isTimeSensitive")==="on",website:String(values.get("website")||"")};
  try{
   const res=await fetch("/api/claims",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)});
   const data=await res.json();
   if(res.status===409){setMessage(data.error||"This claim already exists.");setReference(data.existingUrl||"");return;}
   if(!res.ok)throw new Error(data.error||"Submission failed.");
   form.reset();setChecked("");setMatch(null);setQueued(false);setRelated([]);
   setMessage(data.alertStatus==="sent"?"Claim received. The newsroom has been alerted.":"Claim received and safely queued in the newsroom.");
   setReference("Your reference: "+data.id);
  }catch(err){setMessage(err instanceof Error?err.message:"Submission failed. Please try again.");}
  finally{setBusy(false);}
 }
 const blocked=Boolean(match||queued);
 return <form className="form-panel form-stack" onSubmit={submit}>
  <label>What claim should we check?<textarea ref={claimRef} name="claim" minLength={12} maxLength={2500} required placeholder="Paste the exact statement. Keep the wording as close to the original as possible." onChange={()=>{setChecked("");setMatch(null);setQueued(false);setRelated([]);}}/></label>
  <button className="button secondary" type="button" onClick={checkArchive} disabled={checking||busy}>{checking?"Checking archive…":"Check existing claims first ↗"}</button>
  {message?<p role="status" className="notice">{message}</p>:null}
  {match?<article className="claim-duplicate-card"><div className="eyebrow">EXACT MATCH / PUBLISHED</div><strong>{match.title}</strong><p>{match.verdict} · {match.subject} · {match.impact}</p><a href={match.url}>OPEN FACT-CHECK ↗</a></article>:null}
  {queued?<p className="notice">The newsroom already has this exact claim. Please do not submit a second copy.</p>:null}
  {related.length?<div className="claim-match-list"><div className="eyebrow">RELATED PUBLISHED CHECKS</div>{related.map((item,i)=><article key={item.url||i}><strong>{item.title}</strong><p>{item.subject} · {item.verdict} · {item.impact}</p><a href={item.url}>READ RELATED CHECK ↗</a></article>)}</div>:null}
  <label>What kind of claim is it?<select name="claimType" defaultValue="public-statement"><option value="public-statement">Public statement / speech</option><option value="campaign-promise">Campaign promise / manifesto</option><option value="election-information">Election information / INEC</option><option value="statistics">Statistic / chart / numerical claim</option><option value="image-video">Image / video / viral media</option><option value="policy">Policy / government action</option><option value="other">Other</option></select></label>
  <label>Who or what is the claim about? (optional)<input name="subject" maxLength={160} placeholder="Candidate, public officeholder, party, agency or organisation"/></label>
  <label>Which state or location is relevant? (optional)<input name="state" maxLength={80} placeholder="State, LGA or Nigeria-wide"/></label>
  <label>Where did you see it? (optional)<textarea name="context" maxLength={800} placeholder="Date, speech, programme, platform or other context."/></label>
  <label>Link to the original claim or source (recommended)<input type="url" name="sourceUrl" maxLength={1500} placeholder="https://"/></label>
  <label>Other useful evidence links (optional)<textarea name="supportingUrls" maxLength={4000} placeholder="One URL per line. Add an official report, original video or independent source."/></label>
  <label>Email for follow-up (optional)<input type="email" name="contact" maxLength={200} placeholder="Only visible to the newsroom team"/></label>
  <label className="claim-urgent"><input type="checkbox" name="isTimeSensitive"/> This claim may affect an imminent vote, election deadline, public safety or fast-moving event.</label>
  <div style={{position:"absolute",left:"-10000px"}} aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off"/></label></div>
  <button className="button" type="submit" disabled={busy||checking||blocked}>{busy?"Sending…":blocked?"Already recorded":"Submit claim ↗"}</button>
  {reference?<p className="claim-reference">{reference.startsWith("/")?<a href={reference}>OPEN EXISTING CHECK ↗</a>:reference}</p>:null}
  <p className="notice">Submissions stay private while under review. Editors verify the wording, date, source and context before publication. A newsroom alert does not automatically determine whether a claim is true or false.</p>
 </form>;
}
