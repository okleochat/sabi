"use client";
import {FormEvent,useState} from "react";
export default function ClaimForm(){
 const [busy,setBusy]=useState(false);const [message,setMessage]=useState("");
 async function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();setBusy(true);setMessage("");const form=new FormData(e.currentTarget);const payload={claim:String(form.get("claim")||""),context:String(form.get("context")||""),sourceUrl:String(form.get("sourceUrl")||""),contact:String(form.get("contact")||""),website:String(form.get("website")||"")};
 try{const res=await fetch("/api/claims",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)});const data=await res.json();if(!res.ok)throw new Error(data.error||"We could not submit this claim.");e.currentTarget.reset();setMessage("Claim received. Our editorial team will review it and may contact you if you provided an email.");}
 catch(err){setMessage(err instanceof Error?err.message:"Submission failed. Please try again.");}finally{setBusy(false);}}
 return <form className="form-panel form-stack" onSubmit={submit}>
 <label>What claim should we check?<textarea name="claim" minLength={12} maxLength={2000} required placeholder="Paste the exact statement or describe the claim."/></label>
 <label>Where did you see it? (optional)<input name="context" maxLength={500} placeholder="For example, a campaign speech, post or broadcast."/></label>
 <label>Link to the original source (optional)<input type="url" name="sourceUrl" maxLength={1500} placeholder="https://"/></label>
 <label>Email for follow-up (optional)<input type="email" name="contact" maxLength={200}/></label>
 <div style={{position:"absolute",left:"-10000px"}} aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off"/></label></div>
 <button className="button" type="submit" disabled={busy}>{busy?"Sending…":"Submit claim ↗"}</button>
 {message?<p role="status" className="notice">{message}</p>:null}
 <p className="notice">Submitting a claim does not guarantee a fact-check. Sabi’s editors assess public interest, verifiability and available evidence. Claims are not automatically rated by AI.</p>
 </form>;
}