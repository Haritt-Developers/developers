(function(){
var EMAIL='developers@haritt.com',FS='https://firestore.googleapis.com/v1/projects/harsh-reset/databases/(default)/documents:commit?key=AIzaSyDggasAVdqpvamkn1xeex2NmPUqG9JiZJ4',DOCS='projects/harsh-reset/databases/(default)/documents',HOOK='https://script.google.com/macros/s/AKfycbxpI5YUi8D_Lxlzwx2CRcnY-muhqzFGd3mSTUIPynVYEFgVrSulFLiklTwcXj2dNDdJ/exec';
function track(n,p){try{window.hva&&hva('event',n,p)}catch(e){}try{window.gtag&&gtag('event',n,p||{})}catch(e){}}
/* mobile menu */
var mb=document.getElementById('mbtn'),mm=document.getElementById('mm');
function menu(o){document.body.classList.toggle('mo',o);if(mb){mb.setAttribute('aria-expanded',o);mb.textContent=o?'Close':'Menu'}}
if(mb){mb.onclick=function(){menu(!document.body.classList.contains('mo'))}}
if(mm){mm.addEventListener('click',function(e){if(e.target.closest('a'))menu(false)})}
addEventListener('keydown',function(e){if(e.key==='Escape')menu(false)});
window.__closeMenu=function(){menu(false)};
/* CTA clicks */
document.addEventListener('click',function(e){var a=e.target.closest('a');if(!a)return;var h=a.getAttribute('href')||'';
 if(h.indexOf('/first-look/')===0)track('cta_click',{to:'first_look',from:location.pathname});
 else if(h.indexOf('mailto:')===0)track('email_click',{from:location.pathname})});
function onLinks(){var p=location.pathname;document.querySelectorAll('#nav .nl a').forEach(function(a){var h=a.getAttribute('href');a.classList.toggle('on',h!=='/'&&p.indexOf(h)===0)})}
/* home page */
function home(){

const bt=[...document.querySelectorAll('#zgc button')],bs=[...document.querySelectorAll('#zgs .zg-sc')],br=document.getElementById('zgs');let bi=0,bTimer;
function brief(i){if(!br.isConnected){clearInterval(window.__bT);return}bt[bi].classList.remove('on');bs[bi].classList.remove('on');bt[bi].setAttribute('aria-pressed','false');bi=i;bt[i].classList.add('on');bs[i].classList.add('on');bt[i].setAttribute('aria-pressed','true')}
bt.forEach((b,i)=>b.onclick=()=>{clearInterval(bTimer);brief(i)});if(!matchMedia('(prefers-reduced-motion: reduce)').matches)clearInterval(window.__bT);bTimer=window.__bT=setInterval(()=>brief((bi+1)%bt.length),3600);
document.querySelectorAll('.it').forEach(e=>e.onclick=()=>e.classList.toggle('on'));
const C=[["Websites","A site that explains what you do, shows up on Google and turns visitors into calls, bookings or orders.","Responsive build, fast on 4G, SEO-ready structure, CMS where needed, analytics and accessibility checked."],
["Web apps & dashboards","Software in your browser for running the business: enquiries, orders, staff, customers and reports.","Role-based access, secure login, database design, audit trails, exports and integrations through APIs."],
["Mobile apps","An app your customers or staff use daily on their phone, for booking, ordering, learning or tracking.","Android and iPhone apps, push notifications, offline support where needed, store listing and release."],
["E-commerce","An online store your customers can browse and pay on, with stock and delivery handled for you.","Product catalogue, UPI, card and COD payments, order management, shipping and inventory sync."],
["AI & automation","Repetitive work done automatically, and AI added only where it actually saves time or money.","Workflow automation, WhatsApp and email triggers, AI classification and assistants, CRM and API integrations."],
["Custom software","Software made for the way your business runs, when ready-made tools do not fit.","Custom workflows, job and stock tracking, role-based access, reports, and integrations with the tools you already use."],
["Digital growth & marketing","Being found on Google and Maps, and knowing which channel actually brings customers.","Technical and local SEO, Google Business profile, analytics and conversion tracking, landing pages and campaign setup."],
["Brand & digital identity","A logo, colours and type that look consistent everywhere your business appears online and offline.","Logo construction, colour and type system, social and print templates, usage guide and source files."]];
const caps=[...document.querySelectorAll('.cap')],scn=[...document.querySelectorAll('.scn')];
function cap(i){caps.forEach((c,j)=>c.classList.toggle('on',j==i));scn.forEach((s,j)=>s.classList.toggle('on',j==i));document.getElementById('capname').textContent=C[i][0];document.getElementById('pw').textContent=C[i][1];document.getElementById('uh').textContent=C[i][2]}
caps.forEach((c,i)=>c.onclick=()=>cap(i));cap(0);
const jy=document.getElementById("jy");if(jy){const jp=document.getElementById("jyp"),jg=document.getElementById("jyg"),jk=document.getElementById("jyk"),js=[...jy.querySelectorAll(".jy-s")],jn=[...jy.querySelectorAll(".jy-n")],L=jp.getTotalLength(),kL=jk.getTotalLength(),nl=[200,280,360,450].map(x=>{let lo=0,hi=L;for(let k=0;k<20;k++){const m=(lo+hi)/2;jp.getPointAtLength(m).x<x?lo=m:hi=m}return lo});[jp,jg].forEach(e=>{e.style.strokeDasharray=L;e.style.strokeDashoffset=L});jk.style.strokeDasharray=kL;
const rm=matchMedia("(prefers-reduced-motion: reduce)").matches;
window.__jy=function(){if(!jy.isConnected)return;const h=innerHeight,mob=innerWidth<=900,a=js[0].getBoundingClientRect(),z=js[js.length-1].getBoundingClientRect(),c0=a.top+a.height/2,c1=z.top+z.height/2,t=h*(mob?.8:.55);let p=rm?1:Math.min(1,Math.max(0,(t-c0)/(c1-c0||1)));const kp=Math.min(1,Math.max(0,(h-a.top)/(h*.6)));jk.style.strokeDashoffset=rm?0:kL*(1-kp);const off=L*(1-p);jp.style.strokeDashoffset=off;jg.style.strokeDashoffset=off;const dl=L*p;jn.forEach((n,i)=>n.classList.toggle("on",dl>=nl[i]-2));let ai=0;js.forEach((e,i)=>{const r=e.getBoundingClientRect();if(r.top+r.height/2<h*(mob?.86:.62))ai=i});js.forEach((e,i)=>e.classList.toggle("on",i===ai||rm));jy.dataset.s=ai;jy.style.setProperty("--k",(1-p*.75).toFixed(2))};
if(!window.__jyb){window.__jyb=1;addEventListener("scroll",()=>window.__jy&&window.__jy(),{passive:true});addEventListener("resize",()=>window.__jy&&window.__jy())}window.__jy()}
const pn=document.querySelector(".zg-pn");if(pn&&matchMedia("(hover:hover) and (pointer:fine)").matches&&!matchMedia("(prefers-reduced-motion: reduce)").matches){const hv=pn.closest("section");hv.onpointermove=e=>{const r=pn.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;pn.style.setProperty("--ry",(x*5).toFixed(2)+"deg");pn.style.setProperty("--rx",(-y*4).toFixed(2)+"deg")};hv.onpointerleave=()=>{pn.style.setProperty("--ry","0deg");pn.style.setProperty("--rx","0deg")}}

}
/* enquiry form */
function form(){var f=document.getElementById('flForm');if(!f||f.__on)return;f.__on=1;
 var need=f.querySelectorAll('#need button'),seg=f.querySelectorAll('.seg button'),ok=f.querySelector('#flOk'),st=f.querySelector('#subT');
 need.forEach(function(x){x.onclick=function(){x.setAttribute('aria-pressed',x.getAttribute('aria-pressed')!=='true')}});
 seg.forEach(function(x){x.onclick=function(){seg.forEach(function(y){y.setAttribute('aria-pressed',y===x)})}});
 var q=new URLSearchParams(location.search).get('need');
 if(q){need.forEach(function(x){var slug=x.dataset.v.toLowerCase().replace(/&/g,'').replace(/[^a-z]+/g,'-').replace(/^-|-$/g,'');if(slug.indexOf(q.split('-')[0])===0)x.setAttribute('aria-pressed','true')})}
 function err(el,msg){var box=el.closest('.fld'),n=box.querySelector('.err');if(!msg){el.classList.remove('bad');el.removeAttribute('aria-invalid');if(n)n.remove();return true}
  el.classList.add('bad');el.setAttribute('aria-invalid','true');if(!n){n=document.createElement('div');n.className='err';n.id=el.id+'Err';box.appendChild(n);el.setAttribute('aria-describedby',n.id)}n.textContent=msg;return false}
 var ab=f.querySelector('#flAbout'),ml=f.querySelector('#flMail'),lk=f.querySelector('#flLink'),hp=f.querySelector('#flCo');
 ab.addEventListener('input',function(){if(ab.classList.contains('bad')&&ab.value.trim().length>=10)err(ab,'')});
 ml.addEventListener('input',function(){if(ml.classList.contains('bad')&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(ml.value.trim()))err(ml,'')});
 f.onsubmit=function(e){e.preventDefault();
  var a=err(ab,ab.value.trim().length<10?'Please write at least a line about your business or project.':''),b=err(ml,/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(ml.value.trim())?'':'Please enter an email address we can reply to.');
  if(!a){ab.focus();return}if(!b){ml.focus();return}
  if(hp&&hp.value){ok.className='ok';ok.textContent='Thank you.';ok.hidden=false;return}
  var call=f.querySelector('.seg button[data-m="c"]').getAttribute('aria-pressed')==='true';
  var picked=[].filter.call(need,function(x){return x.getAttribute('aria-pressed')==='true'}).map(function(x){return x.dataset.v});
  var em=ml.value.trim(),nm=em.split('@')[0].replace(/[._\-+0-9]+/g,' ').trim();nm=nm?(nm.charAt(0).toUpperCase()+nm.slice(1)).slice(0,100):'';if(nm.length<2)nm='Website enquiry';
  var link=lk.value.trim().slice(0,200);
  var d={name:nm,email:em,company:link,site:link,services:(call?'Short call':'Written reply')+(picked.length?', '+picked.join(', '):''),budget:'Not discussed',timeline:'Not discussed',desc:ab.value.trim().slice(0,5000),src:('developers.haritt.com'+location.pathname).slice(0,80),status:'new'};
  var btn=f.querySelector('button[type=submit]');btn.disabled=true;btn.setAttribute('aria-busy','true');st.textContent='Sending…';ok.hidden=true;
  var id='';for(var i=0;i<20;i++)id+='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'[Math.floor(Math.random()*62)];
  var fl={};Object.keys(d).forEach(function(k){if(d[k])fl[k]={stringValue:d[k]}});
  fetch(FS,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({writes:[{update:{name:DOCS+'/enquiries/'+id,fields:fl},updateTransforms:[{fieldPath:'at',setToServerValue:'REQUEST_TIME'}],currentDocument:{exists:false}}]})})
  .then(function(r){if(!r.ok)throw new Error(r.status);
   try{fetch(HOOK,{method:'POST',mode:'no-cors',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify(Object.assign({id:id},d)),keepalive:true}).catch(function(){})}catch(x){}
   track('enquiry_sent',{reply:call?'call':'written'});
   [].forEach.call(f.children,function(c){if(c!==ok)c.style.display='none'});
   ok.className='ok';ok.innerHTML='<b>Thank you. Your message has reached us.</b><br>We will reply to <b></b>. If you want to add anything, write to <a href="mailto:'+EMAIL+'">'+EMAIL+'</a>.';ok.querySelectorAll('b')[1].textContent=em;ok.hidden=false;ok.focus&&ok.setAttribute('tabindex','-1');ok.focus()})
  .catch(function(){btn.disabled=false;btn.removeAttribute('aria-busy');st.textContent='Send';
   var mt='mailto:'+EMAIL+'?subject='+encodeURIComponent('Project enquiry')+'&body='+encodeURIComponent('Link: '+(link||'-')+'\nNeed: '+d.services+'\nEmail: '+em+'\n\n'+d.desc);
   ok.className='ok err2';ok.innerHTML='We could not send this from the website just now. Your details are still in the form. You can try again, or <a href="'+mt+'">send it by email instead</a>.';ok.hidden=false;track('enquiry_failed')})}}
/* case studies: chapter nav, demo tabs, lightbox, drawn diagrams */
function cases(){
 var nav=document.querySelector('.chnav');
 if(nav&&!nav.__on&&'IntersectionObserver' in window){nav.__on=1;var links={};nav.querySelectorAll('a').forEach(function(a){links[a.getAttribute('href').slice(1)]=a});
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var a=links[e.target.id];if(!a)return;nav.querySelectorAll('a.on').forEach(function(x){x.classList.remove('on');x.removeAttribute('aria-current')});a.classList.add('on');a.setAttribute('aria-current','true');var ol=a.closest('ol');if(ol.scrollWidth>ol.clientWidth)ol.scrollTo({left:a.offsetLeft-16,behavior:'smooth'})}})},{rootMargin:'-45% 0px -50% 0px'});
  document.querySelectorAll('[data-ch]').forEach(function(s){io.observe(s)})}
 document.querySelectorAll('[data-demo]').forEach(function(d){if(d.__on)return;d.__on=1;var tabs=[].slice.call(d.querySelectorAll('[role=tab]'));
  function pick(i,f){tabs.forEach(function(t,j){var on=i===j;t.setAttribute('aria-selected',on);t.tabIndex=on?0:-1;document.getElementById(t.getAttribute('aria-controls')).hidden=!on});if(f)tabs[i].focus();track('case_demo_step',{step:i+1})}
  tabs.forEach(function(t,i){t.onclick=function(){pick(i)};t.onkeydown=function(e){var k=e.key,n=null;if(k==='ArrowDown'||k==='ArrowRight')n=(i+1)%tabs.length;else if(k==='ArrowUp'||k==='ArrowLeft')n=(i-1+tabs.length)%tabs.length;else if(k==='Home')n=0;else if(k==='End')n=tabs.length-1;if(n!==null){e.preventDefault();pick(n,true)}}})});
 var zs=document.querySelectorAll('img[data-zoom]');
 if(zs.length&&window.HTMLDialogElement){var dl=document.getElementById('lbx');if(!dl){dl=document.createElement('dialog');dl.id='lbx';dl.className='lbx';dl.setAttribute('aria-label','Image preview');dl.innerHTML='<button type="button">Close</button><img alt="">';document.body.appendChild(dl);dl.querySelector('button').onclick=function(){dl.close()};dl.addEventListener('click',function(e){if(e.target===dl)dl.close()})}
  zs.forEach(function(im){if(im.__z)return;im.__z=1;im.tabIndex=0;im.setAttribute('role','button');im.setAttribute('aria-label','Open larger: '+im.alt);
   function op(){var b=dl.querySelector('img');b.src=im.currentSrc||im.src;b.alt=im.alt;dl.showModal();dl.querySelector('button').focus();track('case_image_open',{img:im.getAttribute('src')})}
   im.onclick=op;im.onkeydown=function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();op()}}})}
 var dr=document.querySelectorAll('[data-draw]');
 if(dr.length){if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion: reduce)').matches){dr.forEach(function(x){x.classList.add('go')})}else{var io2=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('go');io2.unobserve(e.target)}})},{threshold:.35});dr.forEach(function(x){io2.observe(x)})}}
}
function rv(){var sel='.sec .head,.idx .it,.bench,.wgrid>a,.wbig,.wsm,.cl,.cta .w>*,.phero>*,.sg>*,.incl>*,.qa>*,.relw>*,.jy-v';var els=[].slice.call(document.querySelectorAll(sel)).filter(function(e){return !e.classList.contains('rv')&&!e.closest('.hv')});if(!els.length)return;if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion: reduce)').matches)return;var vh=innerHeight;els.forEach(function(e){var r=e.getBoundingClientRect();if(r.top<vh*.92)return;e.classList.add('rv');var p=e.parentNode,k=[].indexOf.call(p.children,e);e.style.setProperty('--dl',Math.min(k,5)*70+'ms')});var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -8% 0px',threshold:.08});els.forEach(function(e){if(e.classList.contains('rv'))io.observe(e)})}
if(!window.__sc){window.__sc=1;var _sc=function(){document.body.classList.toggle('scrolled',scrollY>8)};addEventListener('scroll',_sc,{passive:true});_sc()}
window.dvInit=function(){onLinks();menu(false);if(document.getElementById('zgc'))home();form();cases();rv()};
window.dvInit();
})();
