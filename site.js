(function(){
var nav=document.getElementById('nav');function ns(){nav.classList.toggle('s',scrollY>20)}ns();addEventListener('scroll',ns,{passive:true});
var m=document.getElementById('mmenu'),mb=document.getElementById('mbtn'),mc=document.getElementById('mclose');
function mt(o){m.classList.toggle('open',o);mb.setAttribute('aria-expanded',o);document.body.style.overflow=o?'hidden':''}
mb.onclick=function(){mt(true)};mc.onclick=function(){mt(false)};m.addEventListener('click',function(e){if(e.target.closest('a'))mt(false)});
addEventListener('keydown',function(e){if(e.key==='Escape'&&m.classList.contains('open'))mt(false)});
window.__closeMenu=function(){mt(false)};
var FS='https://firestore.googleapis.com/v1/projects/harsh-reset/databases/(default)/documents:commit?key=AIzaSyDggasAVdqpvamkn1xeex2NmPUqG9JiZJ4',DOCS='projects/harsh-reset/databases/(default)/documents',HOOK='https://script.google.com/macros/s/AKfycbxpI5YUi8D_Lxlzwx2CRcnY-muhqzFGd3mSTUIPynVYEFgVrSulFLiklTwcXj2dNDdJ/exec',EMAIL='developers@haritt.com';
function onLinks(){var p=location.pathname;document.querySelectorAll('#nav .links a').forEach(function(a){var h=a.getAttribute('href');a.classList.toggle('on',h!=='/'&&p.indexOf(h)===0)})}
function form(){var f=document.getElementById('flForm');if(!f||f.__on)return;f.__on=1;
 f.querySelectorAll('#need button').forEach(function(x){x.onclick=function(){x.setAttribute('aria-pressed',x.getAttribute('aria-pressed')!=='true')}});
 var seg=f.querySelectorAll('.seg button'),st=f.querySelector('#subT'),lbl=f.querySelector('#mailLbl');
 seg.forEach(function(x){x.onclick=function(){seg.forEach(function(y){y.setAttribute('aria-pressed',y===x)});var c=x.dataset.m==='c';if(st)st.textContent=c?'Request a 10-minute call':'Send for a First Look';if(lbl)lbl.firstChild.nodeValue=c?'Where do we send a call time? ':'Where do we send it? '}});
 var ok=f.querySelector('#flOk');
 function err(el,msg){var n=el.parentNode.querySelector('.err');if(!msg){el.classList.remove('bad');if(n)n.remove();return true}el.classList.add('bad');if(!n){n=document.createElement('div');n.className='err';el.parentNode.appendChild(n)}n.textContent=msg;return false}
 f.onsubmit=function(e){e.preventDefault();
  var link=f.querySelector('#flLink'),ab=f.querySelector('#flAbout'),ml=f.querySelector('#flMail');
  var a=err(ab,ab.value.trim().length<10?'Please add a line or two about your business.':''),b=err(ml,/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(ml.value.trim())?'':'Please add an email so we can reply.');
  if(!a){ab.focus();return}if(!b){ml.focus();return}
  var call=f.querySelector('.seg button[data-m="c"]').getAttribute('aria-pressed')==='true';
  var need=[].filter.call(f.querySelectorAll('#need button'),function(x){return x.getAttribute('aria-pressed')==='true'}).map(function(x){return x.textContent});
  var em=ml.value.trim(),nm=em.split('@')[0].replace(/[._\-+0-9]+/g,' ').trim();nm=nm?(nm.charAt(0).toUpperCase()+nm.slice(1)).slice(0,100):'First Look';if(nm.length<2)nm='First Look';
  var d={name:nm,email:em,company:link.value.trim().slice(0,200),site:link.value.trim().slice(0,200),services:(call?'10-minute call':'First Look review')+(need.length?', '+need.join(', '):''),budget:'Not sure yet',timeline:'Flexible',desc:ab.value.trim().slice(0,5000),src:('developers.haritt.com'+location.pathname).slice(0,80),status:'new'};
  var btn=f.querySelector('button[type=submit]'),bh=btn.innerHTML;btn.disabled=true;if(st)st.textContent='Sending…';
  var id='';for(var i=0;i<20;i++)id+='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'[Math.floor(Math.random()*62)];
  var fl={};Object.keys(d).forEach(function(k){if(d[k])fl[k]={stringValue:d[k]}});
  fetch(FS,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({writes:[{update:{name:DOCS+'/enquiries/'+id,fields:fl},updateTransforms:[{fieldPath:'at',setToServerValue:'REQUEST_TIME'}],currentDocument:{exists:false}}]})})
  .then(function(r){if(!r.ok)throw new Error(r.status);
   try{fetch(HOOK,{method:'POST',mode:'no-cors',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify(Object.assign({id:id},d)),keepalive:true}).catch(function(){})}catch(x){}
   try{window.hva&&hva('event','enquiry_sent')}catch(x){}
   [].forEach.call(f.children,function(c){if(c!==ok)c.style.display='none'});
   ok.innerHTML='<b>Thank you. We’ve got it.</b><br>'+(call?'We’ll email a call time to ':'Your First Look will reach ')+'<b></b> within 3 working days. Need to add something? Write to <a href="mailto:'+EMAIL+'">'+EMAIL+'</a>.';ok.querySelectorAll('b')[1].textContent=em;ok.hidden=false})
  .catch(function(){btn.disabled=false;btn.innerHTML=bh;
   var mt='mailto:'+EMAIL+'?subject='+encodeURIComponent((call?'10-minute call':'First Look')+' request')+'&body='+encodeURIComponent('Link: '+(d.site||'-')+'\nNeed: '+d.services+'\nEmail: '+em+'\n\n'+d.desc);
   ok.innerHTML='Couldn’t send it from here, so your email app should open with it ready. If it didn’t, <a href="'+mt+'">email it to us</a>.';ok.hidden=false;location.href=mt})}}
window.dvInit=function(){if(location.pathname==='/pricing/'){location.replace('/engagement/');return}onLinks();form();
 if(document.getElementById('field'))(function(){
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  

  /* HERO FIELD: scattered points drift, then settle into an ordered grid near the right side (chaos -> system) */
  var cv=document.getElementById('field'),cx=cv.getContext('2d'),P=[],W,H,dpr,t0=performance.now();
  function size(){dpr=Math.min(2,devicePixelRatio||1);W=cv.clientWidth;H=cv.clientHeight;cv.width=W*dpr;cv.height=H*dpr;cx.setTransform(dpr,0,0,dpr,0,0);
    P=[];var cols=W<700?9:14,rows=W<700?9:10,gx=W<700?W*.1:W*.52,gw=W<700?W*.8:W*.42,gy=H*.12,gh=H*.55;
    for(var r=0;r<rows;r++)for(var c=0;c<cols;c++){P.push({x:Math.random()*W,y:Math.random()*H,tx:gx+gw*c/(cols-1),ty:gy+gh*r/(rows-1),s:Math.random()*Math.PI*2,hot:Math.random()<.08})}}
  function frame(now){var t=(now-t0)/1000,k=Math.min(1,Math.max(0,(t-.6)/2.6));k=k<.5?4*k*k*k:1-Math.pow(-2*k+2,3)/2;
    cx.clearRect(0,0,W,H);
    for(var i=0;i<P.length;i++){var p=P[i],wob=(1-k)*24+3;p.cx=p.x+(p.tx-p.x)*k+Math.sin(t*.7+p.s)*wob;p.cy=p.y+(p.ty-p.y)*k+Math.cos(t*.6+p.s)*wob}
    cx.lineWidth=1;
    for(var i=0;i<P.length;i++){for(var j=i+1;j<P.length;j++){var a=P[i],b=P[j],dx=a.cx-b.cx,dy=a.cy-b.cy,d=dx*dx+dy*dy,lim=k>.9?5200:9000;if(d<lim){cx.strokeStyle='rgba(255,140,90,'+(0.16*(1-d/lim))+')';cx.beginPath();cx.moveTo(a.cx,a.cy);cx.lineTo(b.cx,b.cy);cx.stroke()}}}
    for(var i=0;i<P.length;i++){var p=P[i];cx.fillStyle=p.hot?'rgba(255,120,60,.95)':'rgba(244,241,236,.55)';cx.beginPath();cx.arc(p.cx,p.cy,p.hot?2.4:1.4,0,7);cx.fill();
      if(p.hot&&k>.95){cx.strokeStyle='rgba(255,91,41,'+(.35+.25*Math.sin(t*2+p.s))+')';cx.beginPath();cx.arc(p.cx,p.cy,7+3*Math.sin(t*2+p.s),0,7);cx.stroke()}}
    if(!reduce&&cv.isConnected)requestAnimationFrame(frame)}
  size();var rs=function(){if(!cv.isConnected){removeEventListener('resize',rs);return}size();if(reduce)frame(t0+9000)};addEventListener('resize',rs);
  if(reduce)frame(t0+9000);else requestAnimationFrame(frame);

  /* STORY: active step drives the stage */
  var steps=document.querySelectorAll('.step'),scenes=document.querySelectorAll('.scene'),rail=document.querySelectorAll('#rail i'),url=document.getElementById('url'),names=['understand','discover','strategize','create','improve'],cur=-1;
  function act(n){if(n===cur)return;cur=n;steps.forEach(function(s,i){s.classList.toggle('on',i===n)});
    scenes.forEach(function(s,i){s.classList.remove('on');if(i===n){void s.offsetWidth;s.classList.add('on')}});
    rail.forEach(function(r,i){r.classList.toggle('on',i<=n)})}
  act(0);
  if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)act(+e.target.dataset.s)})},{rootMargin:'-45% 0px -45% 0px'});steps.forEach(function(s){io.observe(s)})}

  /* WHAT YOU NEED rows */
  var Q=[
    ["More people should know about my business.",["Who your customers are","Your Google and social pages","What a new visitor sees first"],"Google profile, social content, local ads","Websites & Digital Experiences"],
    ["I want more enquiries and sales.",["Where enquiries come from","How fast they get a reply","Where people drop off"],"Landing page, ads, enquiry tracking, follow-ups","Websites & Digital Experiences, Custom Digital Solutions"],
    ["I want my business online, properly.",["What customers need to find","Pages that matter","How people contact you"],"A clear website or store, Google set up","Websites & Digital Experiences"],
    ["Repetitive work eats my day.",["Tasks that repeat daily","Where info gets lost","What can be automatic"],"Enquiry inbox, reminders, simple dashboards","Custom Digital Solutions"],
    ["I need an app or custom software.",["Who uses it and why","Smallest version worth building","What it connects to"],"A focused first version, then grow it","Applications & Platforms"],
    ["I'm not sure what I need yet.",["Your business and goal","What already exists","Where the real gap is"],"A free First Look with three honest observations","First Look"]
  ];
  var rows=document.getElementById('rows');
  rows.innerHTML=Q.map(function(q,i){return '<div class="row'+(i===0?' open':'')+'"><button aria-expanded="'+(i===0)+'" aria-controls="a'+i+'" id="q'+i+'"><span class="n">0'+(i+1)+'</span><span class="q">'+q[0]+'</span><span class="pl"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg></span></button><div class="ans" id="a'+i+'" role="region" aria-labelledby="q'+i+'"><div><div class="in"><span></span><div><h4>What we’d look at</h4><ul>'+q[1].map(function(x){return'<li>'+x+'</li>'}).join('')+'</ul></div><div><h4>Likely starting point</h4><p>'+q[2]+'</p></div><div><h4>Service</h4><p>'+q[3]+'</p><p style="margin-top:12px"><a href="#first-look" style="color:var(--flare)">Start with a First Look →</a></p></div></div></div></div></div>'}).join('');
  rows.querySelectorAll('.row button').forEach(function(b){b.addEventListener('click',function(){var r=b.parentNode,o=!r.classList.contains('open');rows.querySelectorAll('.row').forEach(function(x){x.classList.remove('open');x.querySelector('button').setAttribute('aria-expanded','false')});if(o){r.classList.add('open');b.setAttribute('aria-expanded','true')}})});

  /* SERVICES depth */
  var C=[
    [["A website and online presence that makes people trust you and get in touch.","Websites, Online stores, Landing pages, Google profile"],["Business websites, online stores and landing pages, with your Google profile, domain and email set up properly, so visitors turn into enquiries.","Websites, Online stores, Google Business, Domain + email"],["Next.js or Shopify builds, Core Web Vitals, structured data, analytics and conversion tracking, DNS and email routing.","Next.js, Shopify, Schema, Web Vitals, GA4"]],
    [["Apps and online tools that your customers or your team use every day.","Mobile apps, Web apps, Portals, Dashboards"],["Android and web apps, booking and customer portals, admin dashboards. We start with the smallest version worth building, then grow it.","Android, Web apps, Customer portals, Admin panels"],["Kotlin and Jetpack Compose, React and Next.js, Firebase backends, sign-in and roles, Play Store releases.","Kotlin, Compose, React, Firebase, Auth"]],
    [["Systems that take repetitive work off your plate, so no customer slips through.","Enquiry inbox, Follow-ups, CRM, AI assist"],["One inbox for every enquiry, automatic follow-ups and reminders, a simple CRM, and AI that drafts replies while a person stays in charge.","Enquiry inbox, Automation, CRM, AI drafts"],["Workflow automation, APIs and webhooks, WhatsApp Business integrations, language models with human review, Firestore or Sheets data.","APIs, Webhooks, WhatsApp API, LLM + review"]]
  ];
  var db=document.querySelectorAll('.depth button');
  function dep(d){db.forEach(function(b){b.setAttribute('aria-pressed',b.dataset.d==d)});for(var k=0;k<3;k++){document.querySelector('[data-c="'+k+'"]').textContent=C[k][d][0];document.querySelector('[data-t="'+k+'"]').innerHTML=C[k][d][1].split(', ').map(function(t){return'<span>'+t+'</span>'}).join('')}}
  db.forEach(function(b){b.addEventListener('click',function(){dep(+b.dataset.d)})});dep(0);

  })();
 
if(document.getElementById('wfGo')||document.getElementById('faForm'))(function(){(function(){
var steps=[].slice.call(document.querySelectorAll('#wfSteps .fs'));
function has(t,a){return a.some(function(w){return t.indexOf(w)>-1})}
function analyse(m){var t=m.toLowerCase(),ch=/kya|hai|kar|chahiye|kitna/.test(t)?'WhatsApp (Hinglish)':'WhatsApp',intent,team,reply,fu,items=[];
 var ord=(t.match(/#?\b(\d{3,6})\b/)||[])[1];
 var when=(t.match(/\b(today|tonight|tomorrow|monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b/)||[])[1];if(when&&!/^to/.test(when))when=when[0].toUpperCase()+when.slice(1);
 var time=(t.match(/\b(\d{1,2}(:\d{2})?\s?(am|pm))\b/)||[])[1];
 var ppl=(t.match(/\bfor (\d{1,2})\b/)||[])[1];
 if(has(t,['disappoint','not arrived','hasn\'t arrived','late','complain','wrong','refund','bad'])){intent='Complaint';team='Owner (priority)';reply='Sorry about this'+(ord?' — order #'+ord:'')+'. I\'m checking it right now and will update you within 30 minutes.';fu='In 30 min: owner checks the status and replies'}
 else if(has(t,['book','table','reserve','appointment','slot','demo','visit'])){intent='Booking request';team='Front desk';reply='Happy to book'+(ppl?' for '+ppl:'')+(when?' '+when:'')+(time?' at '+time:'')+'. Confirming availability now.';fu=(when||'Today')+': confirm booking, reminder sent the day before'}
 else if(has(t,['price','fees','fee','cost','kitna','rate','available','size','stock','deliver'])){intent='Product / price enquiry';team='Sales';if(has(t,['saree','banarasi']))items.push('Green Banarasi saree');if(has(t,['kurta']))items.push('Blue kurta');if(has(t,['maths','class']))items.push('Class 10 Maths batch');
  reply='Yes'+(items.length?', '+items[0]:'')+' is available. Price and details: catalogue link. '+(has(t,['deliver'])?'Delivery'+(when?' by '+when:'')+' is possible.':'Want me to reserve it?');fu='Tomorrow 11 am: if no reply, send a gentle reminder'}
 else{intent='General question';team='Front desk';reply='Thanks for your message! Someone from our team will reply shortly.';fu='In 2 hours: check that a person replied'}
 var det=[];if(items.length)det.push('item: '+items.join(', '));if(ord)det.push('order: #'+ord);if(when)det.push('day: '+when);if(time)det.push('time: '+time);if(ppl)det.push('people: '+ppl);
 return [['Received','Channel: '+ch+'\n"'+m.slice(0,90)+(m.length>90?'…':'')+'"'],['Understood','Intent: '+intent+(det.length?'\nDetails: '+det.join(' · '):'')],['Routed','Assigned to: '+team+'\nLogged in the enquiry inbox'],['Reply drafted','"'+reply+'"\nReady for one-tap send'],['Follow-up set',fu]];}
var tm=[];function run(){tm.forEach(clearTimeout);var r=analyse(document.getElementById('wfIn').value.trim()||'Hello');steps.forEach(function(s){s.classList.remove('on')});
 r.forEach(function(x,i){tm.push(setTimeout(function(){var s=steps[i];s.querySelector('b').textContent=x[0];s.querySelector('span').textContent=x[1];s.classList.add('on')},350+i*550))})}
document.getElementById('wfGo').onclick=run;
document.querySelectorAll('#wfChips button').forEach(function(b){b.onclick=function(){document.getElementById('wfIn').value=b.textContent;run()}});
var KB=[
 ['Timings',['open','close','timing','time','hours','sunday','monday','weekend','today'],'We\'re open Monday to Saturday 8 am – 11 pm, and Sunday 9 am – 11 pm.'],
 ['Menu',['vegan','veg','vegetarian','menu','food','gluten','jain','dish','eat'],'Yes. Our menu has vegetarian, vegan and Jain options, clearly marked. Full menu: oliveember.in/menu'],
 ['Bookings',['book','table','reserve','reservation','party','people','group'],'You can book a table for up to 12 people here or on WhatsApp. For bigger groups, we\'ll arrange the terrace.'],
 ['Location',['where','located','location','address','parking','map','reach'],'We\'re at C-Scheme, Jaipur, opposite Central Park. Free parking for 20 cars. Map: maps.app/olive'],
 ['Delivery',['deliver','delivery','zomato','swiggy','order','takeaway','home'],'Yes, we deliver within 6 km through our website, and takeaway is available all day.'],
 ['Payments',['pay','upi','card','cash','payment'],'We accept UPI, cards and cash.']];
var chat=document.getElementById('faChat');
function add(t,c,s){var d=document.createElement('div');d.className='bub '+c;d.textContent=t;if(s){var sm=document.createElement('small');sm.textContent=s;d.appendChild(sm)}chat.appendChild(d);chat.scrollTop=chat.scrollHeight}
function ask(q){if(!q)return;add(q,'u');var w=q.toLowerCase().replace(/[^a-z0-9 ]/g,' ').split(/\s+/),best=null,sc=0;
 KB.forEach(function(k){var s=k[1].filter(function(x){return w.indexOf(x)>-1}).length;if(s>sc){sc=s;best=k}});
 setTimeout(function(){if(best)add(best[2],'b','Source: '+best[0]+' · approved info');else add('I\'m not sure about that one, so I\'ve passed it to the café team. They\'ll reply here shortly.','b h','Handed over to a person')},500)}
document.getElementById('faForm').onsubmit=function(e){e.preventDefault();var i=document.getElementById('faIn');ask(i.value.trim());i.value=''};
document.querySelectorAll('#faChips button').forEach(function(b){b.onclick=function(){ask(b.textContent)}});
})();})();
};
window.dvInit();})();