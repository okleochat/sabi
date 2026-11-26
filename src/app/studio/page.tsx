import type {Metadata} from "next";
import StudioLogin from "./StudioLogin";
export const metadata:Metadata={title:"Newsroom"};
export default function StudioPage(){return <div className="wrap"><section className="page-intro"><div className="kicker">Sabi newsroom</div><h1>Editorial workspace.</h1><p>Review public submissions and move claims through a documented editorial workflow. Access is restricted to explicitly approved staff accounts.</p></section><section className="section"><StudioLogin/></section></div>;}