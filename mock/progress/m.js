/* Shared preview data + shell for client progress mocks (preview only) */
const ic=(k,c='')=>`<svg class="i ${c}" viewBox="0 0 256 256" aria-hidden="true">${IC[k]||''}</svg>`;
const TODAY='16 Nov';
const P={name:'Online store',launch:'28 Nov 2026',daysLeft:12,
 stages:[
  {n:'Brief',ic:'notepad',from:'2 Nov',to:'6 Nov',st:'done',okBy:'6 Nov',tasks:[
    {t:'Kickoff call',d:'2 Nov'},{t:'Requirements shared',d:'4 Nov'},{t:'Scope and price agreed',d:'6 Nov'}]},
  {n:'Design',ic:'palette',from:'7 Nov',to:'12 Nov',st:'reopened',okBy:'12 Nov',pay:1,tasks:[
    {t:'Homepage design',d:'9 Nov'},{t:'Product page design',d:'10 Nov'},{t:'Mobile layouts',d:'11 Nov'},{t:'Checkout design',d:'12 Nov'},
    {t:'Festive offers banner',added:'14 Nov',eta:'19 Nov',now:1}]},
  {n:'Build',ic:'code',from:'13 Nov',to:'22 Nov',st:'now',tasks:[
    {t:'Pages built',d:'14 Nov'},{t:'Payments connected',d:'15 Nov'},{t:'Product catalogue upload',now:1},{t:'Speed and security checks'}]},
  {n:'Review',ic:'magnifying-glass',from:'23 Nov',to:'25 Nov',st:'next',you:1,tasks:[
    {t:'You review the full site',you:1},{t:'We apply your feedback'}]},
  {n:'Launch',ic:'rocket-launch',from:'26 Nov',to:'28 Nov',st:'later',tasks:[
    {t:'Site goes live on your domain'},{t:'Final live checks'}]},
  {n:'Handover',ic:'handshake',from:'29 Nov',to:'30 Nov',st:'later',tasks:[]}
 ]};
P.stages.forEach((s,i)=>{s.i=i;s.done=s.tasks.filter(t=>t.d).length;s.total=s.tasks.length;s.added=s.tasks.filter(t=>t.added).length;});
P.done=P.stages.reduce((a,s)=>a+s.done,0);P.total=P.stages.reduce((a,s)=>a+s.total,0);P.pct=Math.round(P.done/P.total*100);
P.cur=P.stages.find(s=>s.st==='now');
const ST={done:'Complete',reopened:'Complete · 1 added',now:'In progress',next:'Up next',later:'Coming up'};

/* theme */
(function(){let t=null;try{t=localStorage.getItem('hdT')}catch(e){}
 if(!t)t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.dataset.t=t;})();
function toggleTheme(){const r=document.documentElement;r.dataset.t=r.dataset.t==='dark'?'light':'dark';try{localStorage.setItem('hdT',r.dataset.t)}catch(e){};paint&&paint();}

/* payment notice state: due | paid | none */
let PAY='due';
function payCard(){
 if(PAY==='none')return'';
 if(PAY==='paid')return`<div class="pay paid"><span class="pi">${ic('d:seal-check')}</span><div class="pt"><b>Payment received. Thank you!</b><span>₹25,000 for the Design stage, received on 15 Nov. Your receipt is in Files & payments.</span></div><button class="px" onclick="setPay('none')" aria-label="Dismiss">${ic('r:x')}</button></div>`;
 return`<div class="pay"><span class="pi">${ic('d:currency-inr')}</span><div class="pt"><b>Design is complete. Payment of ₹25,000 is pending.</b><span>This is the 2nd of 3 planned payments. Please pay by 19 Nov.</span></div><div class="pa"><button class="btn pri">Pay now</button><button class="btn gh">View invoice</button></div></div>`;
}
function setPay(v){PAY=v;document.querySelectorAll('[data-pay]').forEach(b=>b.classList.toggle('on',b.dataset.pay===v));const el=document.getElementById('payslot');if(el)el.innerHTML=payCard();}

function shell(opt,title){
 const opts=window.OPTS||[['1','Task ribbon'],['2','Skyline'],['3','Chapters']];
 return`<div class="demo"><div class="dw"><span class="dl">Preview</span>${opts.map(o=>`<a href="../${o[0]}/" class="${o[0]===opt?'on':''}">${o[0]} · ${o[1]}</a>`).join('')}
 <span class="sp"></span><span class="dl">Payment card</span>${[['due','Pending'],['paid','Received'],['none','None']].map(p=>`<button data-pay="${p[0]}" class="${p[0]===PAY?'on':''}" onclick="setPay('${p[0]}')">${p[1]}</button>`).join('')}</div></div>
 <header class="top"><div class="tw"><img src="/img/logo-3d.png" alt="" class="lg"><div class="brand"><b>HARITT DEVELOPERS</b><span>Project Space</span></div><span class="sp"></span>
 <span class="proj">${ic('r:dot-outline','live')}${P.name}</span><button class="th" onclick="toggleTheme()" aria-label="Switch theme">${ic('r:sun','sun')}${ic('r:moon','moon')}</button></div></header>`;
}
