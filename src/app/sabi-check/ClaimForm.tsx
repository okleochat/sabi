"use client";
import {FormEvent,useState} from "react";
export default function ClaimForm(){
 const [busy,setBusy]=useState(false);const [message,setMessage]=useState("");const [alert,setAlert]=useState("");
 async function submit(e:FormEvent<HTMLFormElement>){
  e.preventDefault();const formElement=e.currentTarget;setBusy(true);setMessage("");setAlert("");
  const form=new FormData(formElement);
  const payload={
   claim:String(form.get("claim")||""),
   claimType:String(form.get("claimType")||"other"),
   subject:String(form.get("subject")||""),
   state:String(form.get("state")||""),
   context:String(form.get("context")||""),
   sourceUrl:String(form.get("sourceUrl")||""),
   supportingUrls:String(form.get("supportingUrls")||"").split(/\r?\n/).map(x=>x.trim()).filter(Boolean),
   contact:String(form.get("contact")||""),
   isTimeSensitive:form.get("isTimeSensitive")==="on",
   website:String(form.get("website")||""),
  };
  try{
   const res=await fetch("/api/claims",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)});
   const data=await res.json();if(!res.ok)throw new Error(data.error||"We could not submit this claim.");
   formElement.reset();
   if(data.alertStatus==="sent")setMessage("Claim received. The newsroom has also been sent a new-submission alert.");
   else if(data.alertStatus==="failed")setMessage("Claim received and safely queued. The instant alert could not be delivered, so it will remain in the newsroom inbox.");
   else setMessage("Claim received and safely queued in the newsroom. The instant alert channel is not connected yet.");
   setAlert("Your reference: "+data.id);
  }catch(err){setMessage(err instanceof Error?err.message:"Submission failed. Please try again.");}
  finally{setBusy(false);}
 }
 return <form className="form-panel form-stack" onSubmit={submit}>
  <label>What claim should we check?<textarea name="claim" minLength={12} maxLength={2500} required placeholder="Paste the exact statement. Keep the wording as close to the original as possible."/></label>
  <label>What kind of claim is it?<select name="claimType" defaultValue="public-statement"><option value="public-statement">Public statement / speech</option><option value="campaign-promise">Campaign promise / manifesto</option><option value="election-information">Election information / INEC</option><option value="statistics">Statistic / chart / numerical claim</option><option value="image-video">Image / video / viral media</option><option value="policy">Policy / government action</option><option value="other">Other</option></select></label>
  <label>Who or what is the claim about? (optional)<input name="subject" maxLength={160} placeholder="Candidate, public officeholder, party, agency or organisation"/></label>
  <label>Which state or location is relevant? (optional)<input name="state" maxLength={80} placeholder="State, LGA or Nigeria-wide"/></label>
  <label>Where did you see it? (optional)<textarea name="context" maxLength={800} placeholder="Date, speech, programme, platform or other context."/></label>
  <label>Link to the original claim or source (recommended)<input type="url" name="sourceUrl" maxLength={1500} placeholder="https://"/></label>
  <label>Other useful evidence links (optional)<textarea name="supportingUrls" maxLength={4000} placeholder="One URL per line. Add an official report, original video or independent source."/></label>
  <label>Email for follow-up (optional)<input type="email" name="contact" maxLength={200} placeholder="Only visible to the newsroom team"/></label>
  <label className="claim-urgent"><input type="checkbox" name="isTimeSensitive"/> This claim may affect an imminent vote, election deadline, public safety or fast-moving event.</label>
  <div style={{position:"absolute",left:"-10000px"}} aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off"/></label></div>
  <button className="button" type="submit" disabled={busy}>{busy?"Sending…":"Submit claim ↗"}</button>
  {message?<p role="status" className="notice">{message}</p>:null}{alert?<p className="claim-reference">{alert}</p>:null}
  <p className="notice">Submissions are private while in the review queue. Sabi editors verify the original wording, date, source and context before publishing. An automated alert can notify the newsroom when the optional webhook is configured; it does not automatically decide whether a claim is true or false.</p>
 </form>;
}
