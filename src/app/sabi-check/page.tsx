import type {Metadata} from "next";
import {getPublishedRecords} from "@/lib/data";
import {claimSpotlights} from "@/data/claim-discovery";
import SabiCheckDesk from "./SabiCheckDesk";
export const metadata:Metadata={title:"Sabi Check — No cap. Just receipts."};
export const dynamic="force-dynamic";
export default async function SabiCheckPage(){
 const records=await getPublishedRecords("factchecks");
 const publishedChecks=records.slice().sort((a,b)=>String(b.publishedAt||b.createdAt||"").localeCompare(String(a.publishedAt||a.createdAt||"")));
 return <div className="page-shell sabi-check-page">
  <SabiCheckDesk spotlights={claimSpotlights} publishedChecks={publishedChecks as any}/>
 </div>;
}
