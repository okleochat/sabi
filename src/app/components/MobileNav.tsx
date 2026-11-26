"use client";
import Link from "next/link";
import {useEffect,useState} from "react";
type Props={links:string[][]};
export default function MobileNav({links}:Props){
 const [open,setOpen]=useState(false);
 useEffect(()=>{if(!open)return;const onKey=(event:KeyboardEvent)=>{if(event.key==="Escape")setOpen(false)};document.addEventListener("keydown",onKey);document.body.style.overflow="hidden";return()=>{document.removeEventListener("keydown",onKey);document.body.style.overflow=""}},[open]);
 return <div className="sabi-nav">
  <nav className="nav sabi-desktop-nav" aria-label="Main navigation">{links.map(([href,label])=><Link href={href} key={href}>{label}</Link>)}</nav>
  <button className={"sabi-menu-toggle"+(open?" is-open":"")} type="button" aria-label={open?"Close menu":"Open menu"} aria-expanded={open} aria-controls="sabi-mobile-menu" onClick={()=>setOpen(v=>!v)}><span/><span/><span/><b>{open?"CLOSE":"MENU"}</b></button>
  {open&&<><button className="sabi-menu-scrim" type="button" aria-label="Close menu" onClick={()=>setOpen(false)}/><nav id="sabi-mobile-menu" className="sabi-menu-panel" aria-label="Mobile navigation">
   <div className="sabi-menu-kicker"><i className="pulse-dot"/> THE SABI DESK / 2027</div>
   {links.map(([href,label],i)=><Link href={href} key={href} onClick={()=>setOpen(false)}><small>{String(i+1).padStart(2,"0")}</small><span>{label}</span><b>↗</b></Link>)}
   <Link className="sabi-menu-cta" href="/sabi-check" onClick={()=>setOpen(false)}>CHECK A CLAIM <span>↗</span></Link>
   <div className="sabi-menu-foot">INDEPENDENT / CURIOUS / ALWAYS CHECKING</div>
  </nav></>}
 </div>;
}