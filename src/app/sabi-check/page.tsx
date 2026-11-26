import type {Metadata} from "next";
import ClaimForm from "./ClaimForm";
export const metadata:Metadata={title:"Submit a claim"};
export default function SabiCheckPage(){return <div className="wrap"><section className="page-intro"><div className="kicker">Sabi Check</div><h1>Heard a claim?<br/>Let’s check it.</h1><p>Send us the exact statement and, where possible, the original source. Our team reviews claims using evidence and transparent editorial standards.</p></section><section className="section"><ClaimForm/></section></div>;}