import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
export const metadata:Metadata={title:{default:"Sabi Politics — Understand the choices. Decide for yourself.",template:"%s | Sabi Politics"},description:"Clear, non-partisan and source-led information about Nigeria's 2027 elections."};
const links=[["/elections","Elections"],["/candidates","Candidates"],["/parties","Parties"],["/issues","Issues"],["/news","News"],["/fact-checks","Sabi Check"]];
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>
<header className="site-header"><Link href="/" className="brand" aria-label="Sabi Politics home"><span className="brand-mark">S</span><span><strong>SABI</strong><small>POLITICS / 2027</small></span></Link>
<nav className="main-nav" aria-label="Main navigation">{links.map(([href,label])=><Link href={href} key={href}>{label}</Link>)}</nav><Link className="header-cta" href="/sabi-check">Check a claim <span>↗</span></Link></header>
<main>{children}</main><footer className="site-footer"><div className="footer-top"><div><div className="footer-brand">SABI<span>.</span></div><p>Understand the choices.<br/>Decide for yourself.</p></div><div className="footer-links"><Link href="/voter-guide">Voter guide</Link><Link href="/sabi-check">Submit a claim</Link><Link href="/studio">Newsroom</Link><a href="https://www.inecnigeria.org/" target="_blank" rel="noreferrer">INEC ↗</a></div></div><div className="footer-bottom"><span>Independent. Non-partisan. Source-led.</span><span>© {new Date().getFullYear()} Sabi Politics</span></div></footer>
</body></html>}