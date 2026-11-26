"use client";
import {useState} from "react";

type ShareDetail={label:string;value:string};
type Props={kind?:string;kicker:string;title:string;summary?:string;details?:ShareDetail[];source?:string;assessmentDate?:string;path?:string};

function drawWrapped(ctx:CanvasRenderingContext2D,text:string,x:number,y:number,maxWidth:number,lineHeight:number,maxLines:number){
 const words=String(text||"").split(/\s+/);let line="",lines=0;
 for(const word of words){const test=line?line+" "+word:word;if(ctx.measureText(test).width>maxWidth&&line){ctx.fillText(line,x,y);y+=lineHeight;lines++;line=word;if(lines>=maxLines-1)break;}else line=test;}
 if(line&&lines<maxLines){let remaining=words.slice(words.indexOf(line.split(" ")[0])).join(" ");if(lines===maxLines-1&&ctx.measureText(remaining).width>maxWidth){while(remaining.length&&ctx.measureText(remaining+"…").width>maxWidth)remaining=remaining.slice(0,-1);line=remaining+"…";}ctx.fillText(line,x,y);y+=lineHeight;lines++;}
 return y;
}

export default function ShareCard({kind="SABI / PUBLIC INTEREST",kicker,title,summary="",details=[],source,assessmentDate,path}:Props){
 const [busy,setBusy]=useState(false);const [message,setMessage]=useState("");
 async function makeImage(){
  const canvas=document.createElement("canvas");canvas.width=1080;canvas.height=1350;
  const ctx=canvas.getContext("2d");if(!ctx)throw new Error("Image rendering is not supported on this device.");
  ctx.fillStyle="#f2f0e7";ctx.fillRect(0,0,1080,1350);
  ctx.fillStyle="#11120f";ctx.fillRect(0,0,1080,18);
  ctx.fillStyle="#6758e8";ctx.fillRect(0,18,22,1332);
  ctx.fillStyle="#11120f";ctx.font="500 25px monospace";ctx.fillText("SABI POLITICS",72,94);
  ctx.fillStyle="#6758e8";ctx.font="700 24px monospace";ctx.fillText("INDEPENDENT / NON-PARTISAN",72,148);
  ctx.fillStyle="#c5ff43";ctx.fillRect(72,188,220,12);
  ctx.fillStyle="#77776d";ctx.font="500 22px monospace";ctx.fillText(String(kind).toUpperCase().slice(0,54),72,250);
  ctx.fillStyle="#11120f";ctx.font="700 76px 'Arial', sans-serif";
  let y=drawWrapped(ctx,title,72,355,900,88,4);
  if(summary){ctx.fillStyle="#45463f";ctx.font="400 34px 'Arial', sans-serif";y=drawWrapped(ctx,summary,72,y+38,900,49,5);}
  if(details.length){y+=30;ctx.fillStyle="#6758e8";ctx.fillRect(72,y,936,4);y+=42;const visible=details.slice(0,5);for(const item of visible){ctx.fillStyle="#77776d";ctx.font="500 20px monospace";ctx.fillText(String(item.label).toUpperCase().slice(0,38),72,y);ctx.fillStyle="#11120f";ctx.font="700 30px 'Arial', sans-serif";ctx.fillText(String(item.value).slice(0,70),470,y);y+=68;}}
  ctx.fillStyle="#11120f";ctx.fillRect(72,1160,936,2);
  ctx.fillStyle="#11120f";ctx.font="700 30px 'Arial', sans-serif";ctx.fillText("READ THE RECEIPTS.",72,1220);
  ctx.fillStyle="#6758e8";ctx.font="500 21px monospace";ctx.fillText("sabipolitics.web.app",72,1264);
  ctx.fillStyle="#77776d";ctx.font="400 17px monospace";ctx.fillText([assessmentDate,source].filter(Boolean).join("  ·  ").slice(0,92),72,1310);
  return await new Promise<Blob>((resolve,reject)=>canvas.toBlob(blob=>blob?resolve(blob):reject(new Error("Could not create the image.")),"image/png"));
 }
 async function download(){setBusy(true);setMessage("");try{const blob=await makeImage();const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download="sabi-share-card.png";a.click();URL.revokeObjectURL(url);setMessage("Image ready to save.");}catch(e){setMessage(e instanceof Error?e.message:"Could not create image.");}finally{setBusy(false);}}
 async function share(){setBusy(true);setMessage("");try{const blob=await makeImage();const file=new File([blob],"sabi-share-card.png",{type:"image/png"});const url=path?new URL(path,window.location.origin).toString():window.location.href;const payload={files:[file],title, text:"Read more on Sabi Politics.",url};if(navigator.share&&(!navigator.canShare||navigator.canShare({files:[file]}))){await navigator.share(payload);}else{const link=document.createElement("a");link.href=URL.createObjectURL(blob);link.download="sabi-share-card.png";link.click();await navigator.clipboard?.writeText(url);setMessage("Image downloaded and page link copied where supported.");}}catch(e){if(e instanceof Error&&e.name==="AbortError")return;setMessage(e instanceof Error?e.message:"Sharing is unavailable on this device.");}finally{setBusy(false);}}
 return <div className="sabi-share-actions" aria-label="Share this Sabi content"><span>MAKE IT SHAREABLE</span><button type="button" onClick={download} disabled={busy}>{busy?"Preparing…":"↓ Download image"}</button><button type="button" onClick={share} disabled={busy}>↗ Share card</button>{message?<small role="status">{message}</small>:null}</div>;
}
