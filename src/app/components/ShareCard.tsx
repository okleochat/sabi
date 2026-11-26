"use client";
import {useState} from "react";

type ShareDetail={label:string;value:string};
type Props={kind?:string;kicker:string;title:string;summary?:string;details?:ShareDetail[];source?:string;assessmentDate?:string;path?:string};

function drawWrapped(ctx:CanvasRenderingContext2D,text:string,x:number,y:number,maxWidth:number,lineHeight:number,maxLines:number){
 const words=String(text||"").split(/\\s+/);const lines:string[]=[];let line="";
 for(const word of words){const candidate=line?line+" "+word:word;if(ctx.measureText(candidate).width>maxWidth&&line){lines.push(line);line=word;if(lines.length===maxLines-1)break;}else line=candidate;}
 if(line&&lines.length<maxLines)lines.push(line);
 if(lines.length===maxLines&&words.length>lines.join(" ").split(/\\s+/).length){let last=lines[lines.length-1];while(last.length&&ctx.measureText(last+"…").width>maxWidth)last=last.slice(0,-1);lines[lines.length-1]=last+"…";}
 for(const item of lines){ctx.fillText(item,x,y);y+=lineHeight;}
 return y;
}

export default function ShareCard({kind="SABI / PUBLIC INTEREST",kicker,title,summary="",details=[],source,assessmentDate,path}:Props){
 const [busy,setBusy]=useState(false);const [message,setMessage]=useState("");const [format,setFormat]=useState<"portrait"|"square"|"story">("portrait");
 async function makeImage(){
  const canvas=document.createElement("canvas");canvas.width=1080;canvas.height=format==="square"?1080:format==="story"?1920:1350;
  const ctx=canvas.getContext("2d");if(!ctx)throw new Error("Image rendering is not supported on this device.");
  ctx.fillStyle="#f2f0e7";ctx.fillRect(0,0,1080,1350);
  ctx.fillStyle="#11120f";ctx.fillRect(0,0,1080,18);
  ctx.fillStyle="#6758e8";ctx.fillRect(0,18,22,1332);
  ctx.fillStyle="#11120f";ctx.font="500 25px monospace";ctx.fillText("SABI POLITICS",72,94);
  ctx.fillStyle="#6758e8";ctx.font="700 24px monospace";ctx.fillText("INDEPENDENT / NON-PARTISAN",72,148);
  ctx.fillStyle="#c5ff43";ctx.fillRect(72,188,220,12);
  ctx.fillStyle="#77776d";ctx.font="500 22px monospace";ctx.fillText(String(kind).toUpperCase().slice(0,54),72,250);
  ctx.fillStyle="#6758e8";ctx.font="600 22px monospace";ctx.fillText(String(kicker).toUpperCase().slice(0,68),72,300);
  ctx.fillStyle="#11120f";ctx.font="700 76px 'Arial', sans-serif";
  let y=drawWrapped(ctx,title,72,355,900,88,format==="square"?2:3);
  if(summary){ctx.fillStyle="#45463f";ctx.font="400 34px 'Arial', sans-serif";y=drawWrapped(ctx,summary,72,y+38,900,49,format==="square"?2:3);}
  if(details.length){y+=30;ctx.fillStyle="#6758e8";ctx.fillRect(72,y,936,4);y+=42;const visible=details.slice(0,format==="square"?2:4);for(const item of visible){ctx.fillStyle="#77776d";ctx.font="500 20px monospace";ctx.fillText(String(item.label).toUpperCase().slice(0,38),72,y);ctx.fillStyle="#11120f";ctx.font="700 30px 'Arial', sans-serif";ctx.fillText(String(item.value).slice(0,42),470,y);y+=60;}}
  const footerY=canvas.height-190;ctx.fillStyle="#11120f";ctx.fillRect(72,footerY,936,2);
  ctx.fillStyle="#11120f";ctx.font="700 30px 'Arial', sans-serif";ctx.fillText("READ THE RECEIPTS.",72,footerY+60);
  ctx.fillStyle="#6758e8";ctx.font="500 21px monospace";ctx.fillText("sabipolitics.web.app",72,footerY+104);
  ctx.fillStyle="#77776d";ctx.font="400 17px monospace";ctx.fillText([assessmentDate,source].filter(Boolean).join("  ·  ").slice(0,92),72,footerY+150);
  return await new Promise<Blob>((resolve,reject)=>canvas.toBlob(blob=>blob?resolve(blob):reject(new Error("Could not create the image.")),"image/png"));
 }
 async function download(){setBusy(true);setMessage("");try{const blob=await makeImage();const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download="sabi-share-card-"+format+".png";a.click();URL.revokeObjectURL(url);setMessage("Image ready to save.");}catch(e){setMessage(e instanceof Error?e.message:"Could not create image.");}finally{setBusy(false);}}
 async function share(){setBusy(true);setMessage("");try{const blob=await makeImage();const file=new File([blob],"sabi-share-card-"+format+".png",{type:"image/png"});const url=path?new URL(path,window.location.origin).toString():window.location.href;const payload={files:[file],title, text:"Read more on Sabi Politics.",url};if(navigator.share&&(!navigator.canShare||navigator.canShare({files:[file]}))){await navigator.share(payload);}else{const link=document.createElement("a");link.href=URL.createObjectURL(blob);link.download="sabi-share-card-"+format+".png";link.click();await navigator.clipboard?.writeText(url);setMessage("Image downloaded and page link copied where supported.");}}catch(e){if(e instanceof Error&&e.name==="AbortError")return;setMessage(e instanceof Error?e.message:"Sharing is unavailable on this device.");}finally{setBusy(false);}}
 return <div className="sabi-share-actions" aria-label="Share this Sabi content"><span>MAKE IT SHAREABLE</span><label className="sabi-share-format">FORMAT <select value={format} onChange={e=>setFormat(e.target.value as "portrait"|"square"|"story")}><option value="portrait">Portrait</option><option value="square">Square</option><option value="story">Story</option></select></label><button type="button" onClick={download} disabled={busy}>{busy?"Preparing…":"↓ Download image"}</button><button type="button" onClick={share} disabled={busy}>↗ Share card</button>{message?<small role="status">{message}</small>:null}</div>;
}
