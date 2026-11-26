import type {Metadata} from "next";
import Link from "next/link";
import "./globals.css";
export const metadata:Metadata={
 title:{default:"Sabi — Politics, without the boring bits.",template:"%s | Sabi Politics"},
 description:"The people. The policies. The power moves. We break it all down so you can make up your own mind.",
 metadataBase:new URL("https://sabipolitics.web.app")
};
const links=[["/","The desk"],["/sabi-check","Sabi Check"],["/candidates","Candidates"],["/live","Sabi Live"],["/issues","The issues"],["/news","Newsroom"]];
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>
<div className="topline"><span className="pulse-dot"/><span>THE 2027 ELECTION DESK IS OPEN</span><span className="topline-extra">INDEPENDENT / CURIOUS / ALWAYS CHECKING</span><Link href="/elections">EXPLORE SABI ↗</Link></div>
<header className="site-header"><Link href="/" className="logo" aria-label="Sabi Politics home"><span className="logo-main">sabi<span>.</span></span><span className="logo-edition">POLITICS<br/>2027 EDITION</span></Link>
<nav className="nav" aria-label="Main navigation">{links.map(([href,label])=><Link href={href} key={href}>{label}</Link>)}</nav>
<Link className="header-link" href="/sabi-check">CHECK A CLAIM <span>↗</span></Link></header>
<main>{children}</main>
<footer className="site-footer"><div className="footer-main"><div><div className="footer-logo">sabi<b>.</b></div><p>Politics, without the boring bits.<br/>Read wide. Ask questions. Check the receipts.</p></div>
<div><div className="eyebrow" style={{color:"#c5ff43"}}>A citizen's field guide / vol. 01</div><p>The future is a public project. Sabi is independent and non-partisan. We explain the choices so you can make up your own mind.</p></div>
<nav><Link href="/elections">Election calendar</Link><Link href="/candidates">Candidate explorer</Link><Link href="/parties">Political parties</Link><Link href="/issues">The big issues</Link><Link href="/news">Newsroom</Link><Link href="/fact-checks">Fact-check library</Link><Link href="/voter-guide">Voter guide</Link><Link href="/sabi-check">Submit a claim</Link><Link href="/studio">Newsroom access ↗</Link><a href="https://inecnigeria.org/" target="_blank" rel="noreferrer">INEC official site ↗</a></nav></div>
<div className="footer-bottom"><span>INDEPENDENT / NON-PARTISAN / SOURCE-LED</span><span>© {new Date().getFullYear()} SABI POLITICS</span></div></footer>
</body></html>;}