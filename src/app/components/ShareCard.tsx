"use client";
import {useState} from "react";

type ShareDetail={label:string;value:string};
type ShareFormat="portrait"|"square"|"story";
type Props={kind?:string;kicker:string;title:string;summary?:string;details?:ShareDetail[];source?:string;assessmentDate?:string;path?:string};

const PALETTE={ink:"#11120f",paper:"#f2f0e7",paper2:"#e6e3d9",lime:"#c5ff43",purple:"#6758e8",muted:"#77776d",white:"#ffffff"};

function wrapLines(ctx:CanvasRenderingContext2D,text:string,maxWidth:number){
 const words=String(text||"").replace(/\s+/g," ").trim().split(" ").filter(Boolean);
 const lines:string[]=[];let line="";
 for(const word of words){
  const candidate=line?line+" "+word:word;
  if(ctx.measureText(candidate).width>maxWidth&&line){lines.push(line);line=word;}
  else line=candidate;
 }
 if(line)lines.push(line);
 return lines;
}

function truncateLines(ctx:CanvasRenderingContext2D,lines:string[],maxLines:number,maxWidth:number){
 if(lines.length<=maxLines)return lines;
 const result=lines.slice(0,maxLines);
 let last=result[result.length-1];
 while(last.length&&ctx.measureText(last+"…").width>maxWidth)last=last.slice(0,-1);
 result[result.length-1]=last+"…";
 return result;
}

function oneLine(ctx:CanvasRenderingContext2D,text:string,maxWidth:number){
 let value=String(text||"").replace(/\s+/g," ").trim();
 while(value.length&&ctx.measureText(value+"…").width>maxWidth)value=value.slice(0,-1);
 return value===String(text||"").trim()?value:value+"…";
}

function drawLines(ctx:CanvasRenderingContext2D,lines:string[],x:number,y:number,lineHeight:number){
 for(const line of lines){ctx.fillText(line,x,y);y+=lineHeight;}
 return y;
}

function drawMono(ctx:CanvasRenderingContext2D,text:string,x:number,y:number,size:number,color:string,maxWidth:number){
 ctx.fillStyle=color;ctx.font="500 "+size+"px 'DM Mono', monospace";
 ctx.fillText(oneLine(ctx,text,maxWidth),x,y);
}

function drawDetailCard(ctx:CanvasRenderingContext2D,item:ShareDetail,index:number,x:number,y:number,width:number,height:number){
 const backgrounds=[PALETTE.white,PALETTE.paper2,PALETTE.white,PALETTE.paper2];
 ctx.fillStyle=backgrounds[index%backgrounds.length];ctx.fillRect(x,y,width,height);
 ctx.fillStyle=index%2===0?PALETTE.purple:PALETTE.lime;ctx.fillRect(x,y,10,height);
 ctx.fillStyle=PALETTE.muted;ctx.font="500 16px 'DM Mono', monospace";
 ctx.fillText(oneLine(ctx,String(item.label||"DETAIL").toUpperCase(),width-42),x+28,y+28);
 ctx.fillStyle=PALETTE.ink;ctx.font="700 25px 'Space Grotesk', Arial, sans-serif";
 const valueLines=truncateLines(ctx,wrapLines(ctx,String(item.value||"—"),width-48),2,width-48);
 drawLines(ctx,valueLines,x+28,y+61,29);
}

export default function ShareCard({kind="SABI / PUBLIC INTEREST",kicker,title,summary="",details=[],source,assessmentDate,path}:Props){
 const [busy,setBusy]=useState(false);const [message,setMessage]=useState("");const [format,setFormat]=useState<ShareFormat>("portrait");
 async function makeImage(){
  if(document.fonts?.ready)await document.fonts.ready;
  const canvas=document.createElement("canvas");canvas.width=1080;canvas.height=format==="square"?1080:format==="story"?1920:1350;
  const ctx=canvas.getContext("2d");if(!ctx)throw new Error("Image rendering is not supported on this device.");
  const width=canvas.width,height=canvas.height;
  const pad=64,footerHeight=format==="story"?176:150,footerY=height-footerHeight;
  ctx.fillStyle=PALETTE.paper;ctx.fillRect(0,0,width,height);

  // Heavy masthead: the same ink, paper, violet and acid-lime palette as the site.
  ctx.fillStyle=PALETTE.ink;ctx.fillRect(0,0,width,122);
  ctx.fillStyle=PALETTE.purple;ctx.fillRect(48,24,158,74);
  ctx.fillStyle=PALETTE.white;ctx.font="700 51px 'Space Grotesk', Arial, sans-serif";ctx.fillText("sabi",65,79);
  ctx.fillStyle=PALETTE.lime;ctx.fillRect(180,68,10,10);
  ctx.fillStyle=PALETTE.paper;ctx.font="600 18px 'DM Mono', monospace";ctx.fillText("POLITICS",236,53);
  ctx.fillStyle="#aaa99f";ctx.font="500 15px 'DM Mono', monospace";ctx.fillText("2027 EDITION / INDEPENDENT",236,79);
  ctx.fillStyle=PALETTE.lime;ctx.fillRect(846,31,186,58);
  ctx.fillStyle=PALETTE.ink;ctx.font="700 16px 'DM Mono', monospace";ctx.fillText("SABI / SHARE",864,55);
  ctx.font="500 12px 'DM Mono', monospace";ctx.fillText("NO CAP. JUST RECEIPTS.",864,75);

  const heroX=42,heroY=148,heroWidth=996;
  const heroHeight=format==="square"?382:format==="story"?565:455;
  // Offset black slab makes the hero feel like a printed editorial poster.
  ctx.fillStyle=PALETTE.ink;ctx.fillRect(heroX+12,heroY+12,heroWidth,heroHeight);
  ctx.fillStyle=PALETTE.purple;ctx.fillRect(heroX,heroY,heroWidth,heroHeight);
  ctx.fillStyle=PALETTE.lime;ctx.fillRect(heroX,heroY,heroWidth,14);
  ctx.save();ctx.beginPath();ctx.rect(heroX,heroY,heroWidth,heroHeight);ctx.clip();
  // Oversized type and orbit lines are decorative, never used as a text backdrop.
  ctx.globalAlpha=.12;ctx.fillStyle=PALETTE.white;ctx.font="700 300px 'Space Grotesk', Arial, sans-serif";ctx.fillText("S/",790,heroY+heroHeight-42);
  ctx.globalAlpha=.36;ctx.strokeStyle=PALETTE.white;ctx.lineWidth=3;
  ctx.beginPath();ctx.arc(920,heroY+heroHeight*.38,225,0,Math.PI*2);ctx.stroke();
  ctx.globalAlpha=.19;ctx.beginPath();ctx.arc(920,heroY+heroHeight*.38,265,0,Math.PI*2);ctx.stroke();
  ctx.globalAlpha=.12;ctx.lineWidth=1;
  for(let gx=heroX+40;gx<heroX+heroWidth;gx+=56){ctx.beginPath();ctx.moveTo(gx,heroY+24);ctx.lineTo(gx,heroY+heroHeight-20);ctx.stroke();}
  ctx.globalAlpha=1;
  ctx.fillStyle=PALETTE.lime;ctx.fillRect(pad,heroY+48,14,30);
  drawMono(ctx,String(kicker||kind).toUpperCase(),pad+28,heroY+70,18,PALETTE.white,840);

  const headline=String(title||"SABI / CHECK THE RECEIPTS").toLocaleUpperCase("en");
  const maxTitleLines=format==="story"?4:3;
  const titleTop=heroY+151;
  const titleAreaHeight=heroHeight-190;
  let titleSize=format==="square"?67:format==="story"?88:82;
  let titleLineHeight=titleSize*.94;
  let titleLines:string[]=[];
  while(titleSize>=46){
   ctx.font="700 "+titleSize+"px 'Space Grotesk', Arial, sans-serif";
   titleLineHeight=titleSize*.94;
   titleLines=wrapLines(ctx,headline,900);
   if(titleLines.length<=maxTitleLines&&titleLines.length*titleLineHeight<=titleAreaHeight)break;
   titleSize-=2;
  }
  ctx.font="700 "+titleSize+"px 'Space Grotesk', Arial, sans-serif";
  titleLines=truncateLines(ctx,wrapLines(ctx,headline,900),maxTitleLines,900);
  ctx.fillStyle=PALETTE.white;
  drawLines(ctx,titleLines,pad+4,titleTop,titleLineHeight);
  ctx.restore();

  // A small registration mark and acid strip finish the poster panel.
  ctx.fillStyle=PALETTE.ink;ctx.fillRect(heroX+heroWidth-180,heroY+heroHeight-18,168,18);
  ctx.fillStyle=PALETTE.lime;ctx.fillRect(heroX,heroY+heroHeight-12,heroWidth*.42,12);

  let bodyY=heroY+heroHeight+48;
  drawMono(ctx,"THE BRIEF / "+String(kind).toUpperCase(),pad,bodyY,15,PALETTE.purple,920);
  bodyY+=32;
  if(summary){
   ctx.fillStyle=PALETTE.ink;ctx.font="500 "+(format==="square"?27:format==="story"?31:29)+"px 'Space Grotesk', Arial, sans-serif";
   const summaryWidth=930,summaryLines=truncateLines(ctx,wrapLines(ctx,summary,summaryWidth),format==="square"?2:format==="story"?5:3,summaryWidth);
   bodyY=drawLines(ctx,summaryLines,pad,bodyY,format==="square"?37:43)+18;
  }
  if(details.length){
   ctx.fillStyle=PALETTE.ink;ctx.fillRect(pad,bodyY,952,3);
   ctx.fillStyle=PALETTE.lime;ctx.fillRect(pad,bodyY,112,7);
   bodyY+=26;
   const maxCards=format==="square"?2:format==="story"?6:4;
   const cardHeight=94,gapX=16,gapY=13,cardWidth=468;
   const maxRows=Math.max(0,Math.floor((footerY-bodyY-18+gapY)/(cardHeight+gapY)));
   const visibleCount=Math.min(details.length,maxCards,maxRows*2);
   for(let i=0;i<visibleCount;i++){
    const column=i%2,row=Math.floor(i/2);
    drawDetailCard(ctx,details[i],i,pad+column*(cardWidth+gapX),bodyY+row*(cardHeight+gapY),cardWidth,cardHeight);
   }
   if(visibleCount<details.length&&visibleCount>0){
    drawMono(ctx,"+ "+String(details.length-visibleCount)+" MORE DETAILS IN THE FULL REPORT",pad,Math.min(footerY-18,bodyY+Math.ceil(visibleCount/2)*(cardHeight+gapY)+14),12,PALETTE.muted,930);
   }
  }

  // Footer is a high-contrast signature panel with the page/source trail retained.
  ctx.fillStyle=PALETTE.ink;ctx.fillRect(0,footerY,width,footerHeight);
  ctx.fillStyle=PALETTE.lime;ctx.fillRect(0,footerY,18,footerHeight);
  ctx.fillStyle=PALETTE.white;ctx.font="700 35px 'Space Grotesk', Arial, sans-serif";ctx.fillText("READ THE RECEIPTS.",pad,footerY+55);
  ctx.fillStyle=PALETTE.lime;ctx.font="700 19px 'DM Mono', monospace";ctx.fillText("sabipolitics.web.app",pad,footerY+91);
  const trail=[assessmentDate,source].filter(Boolean).join("  /  ");
  ctx.fillStyle="#b8b7ae";ctx.font="400 14px 'DM Mono', monospace";
  ctx.fillText(oneLine(ctx,trail||"INDEPENDENT / NON-PARTISAN / SOURCE-LED",pad+0,930),pad,footerY+126);
  ctx.fillStyle=PALETTE.purple;ctx.fillRect(866,footerY+31,150,84);
  ctx.fillStyle=PALETTE.white;ctx.font="700 32px 'Space Grotesk', Arial, sans-serif";ctx.fillText("S/",902,footerY+87);
  ctx.fillStyle=PALETTE.lime;ctx.fillRect(846,footerY+31,12,84);
  ctx.fillStyle=PALETTE.paper;ctx.font="500 11px 'DM Mono', monospace";ctx.fillText("SABI / 2027",pad,height-18);

  return await new Promise<Blob>((resolve,reject)=>canvas.toBlob(blob=>blob?resolve(blob):reject(new Error("Could not create the image.")),"image/png"));
 }
 async function download(){setBusy(true);setMessage("");try{const blob=await makeImage();const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download="sabi-share-card-"+format+".png";a.click();URL.revokeObjectURL(url);setMessage("Image ready to save.");}catch(e){setMessage(e instanceof Error?e.message:"Could not create image.");}finally{setBusy(false);}}
 async function share(){setBusy(true);setMessage("");try{const blob=await makeImage();const file=new File([blob],"sabi-share-card-"+format+".png",{type:"image/png"});const url=path?new URL(path,window.location.origin).toString():window.location.href;const payload={files:[file],title,text:"Read more on Sabi Politics.",url};if(navigator.share&&(!navigator.canShare||navigator.canShare({files:[file]}))){await navigator.share(payload);}else{const link=document.createElement("a");link.href=URL.createObjectURL(blob);link.download="sabi-share-card-"+format+".png";link.click();await navigator.clipboard?.writeText(url);setMessage("Image downloaded and page link copied where supported.");}}catch(e){if(e instanceof Error&&e.name==="AbortError")return;setMessage(e instanceof Error?e.message:"Sharing is unavailable on this device.");}finally{setBusy(false);}}
 return <div className="sabi-share-actions" aria-label="Share this Sabi content"><span>MAKE IT SHAREABLE</span><label className="sabi-share-format">FORMAT <select value={format} onChange={e=>setFormat(e.target.value as ShareFormat)}><option value="portrait">Portrait</option><option value="square">Square</option><option value="story">Story</option></select></label><button type="button" onClick={download} disabled={busy}>{busy?"Preparing…":"↓ Download image"}</button><button type="button" onClick={share} disabled={busy}>↗ Share card</button>{message?<small role="status">{message}</small>:null}</div>;
}
