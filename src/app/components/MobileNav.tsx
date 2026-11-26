"use client";
import Link from "next/link";
import {useEffect,useState} from "react";
type Props={links:string[][]};
export default function MobileNav({links}:Props){
 const [open,setOpen]=useState(false);
 useEffect(()=>{if(!open)return;const close=(e:KeyboardEvent)=>{if(e.key==="Escape")setOpen(false)};document.addEventListener("keydown",close);document.body.style.overflow="hidden";return()=>{document.removeEventListener("keydown",close);document.body.style.overflow=""}},[open]);
 return <div className="mobile-nav-wrap">
  <nav className="nav desktop-nav" aria-label="Main navigation">{links.map(([href,label])=><Link href={href} key={href}>{label}</Link>)}</nav>
  <button className={"menu-toggle"+(open?" is-open":"")} type="button" aria-label={open?"Close navigation menu":"Open navigation menu"} aria-expanded={open} aria-controls="sabi-mobile-menu" onClick={()=>setOpen(v=>!v)}>
   <span/><span/><span/><b>{open?"CLOSE":"MENU"}</b>
  </button>
  {open?<><button className="mobile-menu-scrim" aria-label="Close navigation menu" onClick={()=>setOpen(false)}/><nav id="sabi-mobile-menu" className="mobile-menu-panel" aria-label="Mobile navigation">
   <div className="mobile-menu-kicker"><span className="pulse-dot"/> THE SABI DESK / 2027</div>
   {links.map(([href,label],i)=><Link href={href} key={href} onClick={()=>setOpen(false)}><small>0{i+1}</small><span>{label}</span><b>↗</b></Link>)}
   <Link className="mobile-menu-cta" href="/sabi-check" onClick={()=>setOpen(false)}>CHECK A CLAIM <span>↗</span></Link>
   <div className="mobile-menu-foot">INDEPENDENT / CURIOUS / ALWAYS CHECKING</div>
  </nav></>:null}
 </div>;
}