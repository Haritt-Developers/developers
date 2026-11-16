/* Shared parts for Task ribbon variations */
window.OPTS=[['a','Spotlight'],['b','Dark stage'],['c','Three zones']];
const NOWT=P.cur.tasks.find(t=>t.now&&!t.d);
const NEXT=P.stages[P.cur.i+1];
const word=s=>s.st==='done'?'Done':s.st==='reopened'?'Done':s.st==='now'?'Now':s.st==='next'?'Next':'Later';
const kind=t=>t.d?'d':t.added?'a':t.now?'n':'t';
function cells(s,o={}){
 if(!s.total)return `<div class="cells"><div class="cell e" title="Final step">${ic('r:flag')}</div></div>`;
 return `<div class="cells">${s.tasks.map(t=>`<div class="cell ${kind(t)}" title="${t.t}">${o.icons?(t.d?ic('r:check'):t.added?ic('r:plus'):t.now?ic('r:circle-notch','spin'):''):''}</div>`).join('')}</div>`;
}
function sentence(s){
 if(s.st==='done')return `Finished on ${s.to}`;
 if(s.st==='reopened')return `Finished on ${s.to} · 1 new task added on 14 Nov`;
 if(s.st==='now')return `Working on it now · ${s.done} of ${s.total} done · aim ${s.to}`;
 if(s.st==='next')return `Starts around ${s.from} · you will check the site here`;
 return s.total?`Starts around ${s.from}`:`Around ${s.to} · final step`;
}
function taskWord(t){return t.d?`Done ${t.d}`:t.added?`Added ${t.added} at your request · ready by ${t.eta}`:t.now?'Working on it now':t.you?'Your turn · we will send you a link':'Not started yet'}
function list(){
 return `<div class="lst">${P.stages.map(s=>{
  const open=s.st==='now'||s.added;
  const si=s.st==='done'||s.st==='reopened'?ic('r:check'):s.st==='now'?`<i class="pulse"></i>`:`${s.i+1}`;
  return `<div class="lr ${s.st} ${open?'open':''}"><button class="lh" onclick="this.parentNode.classList.toggle('open')">
   <span class="ls">${si}</span><span class="lt"><b>${s.n}${s.st==='now'?' <span class="chip c-acc">Now</span>':''}${s.added?' <span class="chip c-am">+1 new task</span>':''}${s.you?' <span class="chip c-mu">Needs your check</span>':''}</b><span>${sentence(s)}</span></span>
   <span class="lc">${s.total?`${s.done}/${s.total}`:''}</span>${ic('r:caret-down','cv')}</button>
   <div class="lb">${s.added?`<div class="lnote">${ic('d:info')}<div>You asked for a festive offers banner on 14 Nov, so we added it to Design. The approved designs stay as they are. <b>Your launch date does not change.</b></div></div>`:''}
   ${s.total?`<ul>${s.tasks.map(t=>`<li class="${kind(t)}">${t.d?ic('d:check-circle'):t.added?ic('d:plus-circle'):t.now?ic('r:circle-notch'):ic('r:circle')}<span><b>${t.t}</b><small>${taskWord(t)}</small></span></li>`).join('')}</ul>`:`<div class="note">${ic('d:handshake')} We hand over logins, files and a short guide. Details come closer to the date.</div>`}</div></div>`}).join('')}</div>`;
}
function page(opt,hero,css){
 document.getElementById('app').innerHTML=shell(opt)+`<main class="w">${hero}
 <div class="h2"><h2>All stages</h2><span>Updated today, ${TODAY}</span></div>${list()}
 <div class="foot">Preview with sample data · Haritt Developers</div></main>`;
}
function paint(){}
