/* Accueil animé + bouton « Mettre à jour » pour les apps by Stephen hébergées sur GitHub Pages.
   Utilisation : dans index.html, juste après <body> :
   <script>window.ENTREE={name:'KOTRANA',sub:'by Stephen',tag:'Voir clair. Tenir.',logo:'icon-192.png',v:'2026.11.04-1955'}</script>
   <script src="entree.js"></script>
   et un fichier version.json à côté : {"v":"2026.11.04-1955"} (même numéro). */
(function(){
  var C=window.ENTREE||{};if(!C.name)return;
  var q=location.search,fromUpdate=/[?&]u=/.test(q),done=false;
  var css='#en{position:fixed;inset:0;z-index:2147483000;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0;padding:max(24px,env(safe-area-inset-top)) max(24px,env(safe-area-inset-right)) max(28px,env(safe-area-inset-bottom)) max(24px,env(safe-area-inset-left));background:#08111F;color:#EAF4FF;font-family:"DM Sans",system-ui,-apple-system,sans-serif;overflow:hidden;transition:opacity .5s ease,transform .5s ease;text-align:center}'+
  '#en.out{opacity:0;transform:scale(1.04);pointer-events:none}'+
  '#en .bg{position:absolute;inset:-20%;background:radial-gradient(40% 35% at 25% 30%,rgba(92,200,255,.30),transparent 70%),radial-gradient(45% 40% at 78% 72%,rgba(45,127,179,.38),transparent 70%);animation:enDrift 14s ease-in-out infinite alternate;filter:blur(6px)}'+
  '#en .mid{position:relative;display:flex;flex-direction:column;align-items:center;flex:1;justify-content:center;width:100%;max-width:420px}'+
  '#en .lg{position:relative;width:112px;height:112px;display:grid;place-items:center;margin-bottom:28px}'+
  '#en .lg img{width:96px;height:96px;border-radius:28px;display:block;position:relative;z-index:2;animation:enPop .9s cubic-bezier(.2,.9,.3,1.2) both,enFloat 5s ease-in-out 1s infinite;box-shadow:0 18px 50px rgba(47,176,255,.35)}'+
  '#en .rg{position:absolute;inset:0;border-radius:50%;border:1.5px solid rgba(92,200,255,.55);opacity:0;animation:enRing 3.6s ease-out infinite}#en .rg:nth-child(2){animation-delay:1.2s}#en .rg:nth-child(3){animation-delay:2.4s}'+
  '#en h1{margin:0;font-family:"Sora",system-ui,sans-serif;font-weight:800;font-size:clamp(34px,11vw,48px);letter-spacing:.14em;display:flex;justify-content:center;padding-left:.14em}'+
  '#en h1 span{display:inline-block;opacity:0;transform:translateY(18px);animation:enRise .7s cubic-bezier(.2,.8,.2,1) forwards}'+
  '#en .sub{margin-top:10px;font-family:"Sora",system-ui,sans-serif;font-weight:700;font-size:14px;letter-spacing:.18em;text-transform:uppercase;color:#A8E4FF;opacity:0;animation:enFade .8s ease 1.1s forwards}'+
  '#en .tg{margin-top:18px;font-size:17px;color:#8CA6C6;opacity:0;animation:enFade .8s ease 1.4s forwards}'+
  '#en .bt{position:relative;width:100%;max-width:420px;display:flex;flex-direction:column;gap:10px;opacity:0;transform:translateY(14px);animation:enRise .8s ease 1.7s forwards}'+
  '#en button{font:inherit;cursor:pointer;border:0;border-radius:18px;min-height:54px;font-family:"Sora",system-ui,sans-serif;font-weight:700;font-size:16px}'+
  '#en .go{background:linear-gradient(135deg,#A8E4FF,#5CC8FF);color:#04243B;box-shadow:0 10px 30px rgba(92,200,255,.35)}'+
  '#en .up{background:transparent;color:#EAF4FF;border:1px solid #223B63;min-height:46px;font-size:14px}'+
  '#en button:focus-visible{outline:2px solid #fff;outline-offset:3px}#en button:disabled{opacity:.6}'+
  '#en .st{min-height:20px;font-size:13px;color:#8CA6C6;margin-top:2px}#en .vv{font-size:11.5px;color:#5d7595;margin-top:4px}'+
  '@keyframes enPop{from{opacity:0;transform:scale(.5) rotate(-8deg)}to{opacity:1;transform:none}}@keyframes enFloat{50%{transform:translateY(-7px)}}'+
  '@keyframes enRing{0%{opacity:.7;transform:scale(.8)}100%{opacity:0;transform:scale(2.3)}}@keyframes enRise{to{opacity:1;transform:none}}@keyframes enFade{to{opacity:1}}'+
  '@keyframes enDrift{from{transform:translate3d(-3%,-2%,0) scale(1)}to{transform:translate3d(4%,3%,0) scale(1.12)}}'+
  '@media (prefers-reduced-motion:reduce){#en *{animation-duration:.01s!important;animation-delay:0s!important;animation-iteration-count:1!important}#en{transition:none}}';
  function add(){
    if(fromUpdate||sessionStorage.getItem('en_skip')){history.replaceState(null,'',location.pathname+location.hash);if(fromUpdate)setTimeout(function(){toast('Mis à jour · version '+(C.v||''))},600);return}
    var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
    var el=document.createElement('div');el.id='en';el.setAttribute('role','dialog');el.setAttribute('aria-label','Accueil '+C.name);
    var letters=String(C.name).split('').map(function(ch,i){return '<span style="animation-delay:'+(0.5+i*0.07).toFixed(2)+'s">'+ch+'</span>'}).join('');
    el.innerHTML='<div class="bg"></div><div class="mid"><div class="lg"><i class="rg"></i><i class="rg"></i><i class="rg"></i>'+(C.logo?'<img src="'+C.logo+'" alt="">':'')+'</div><h1 aria-label="'+C.name+'">'+letters+'</h1>'+(C.sub?'<div class="sub">'+C.sub+'</div>':'')+(C.tag?'<div class="tg">'+C.tag+'</div>':'')+'</div><div class="bt"><button class="go" type="button">Entrer</button><button class="up" type="button">Mettre à jour</button><div class="st" aria-live="polite"></div><div class="vv">Version '+(C.v||'–')+'</div></div>';
    document.body.appendChild(el);
    var go=el.querySelector('.go'),up=el.querySelector('.up'),msg=el.querySelector('.st');
    go.onclick=function(){if(done)return;done=true;try{sessionStorage.setItem('en_skip','1')}catch(e){}el.classList.add('out');setTimeout(function(){el.remove()},520);window.dispatchEvent(new Event('entree:enter'))};
    up.onclick=function(){up.disabled=true;up.textContent='Vérification…';msg.textContent='';
      fetch('version.json?t='+Date.now(),{cache:'no-store'}).then(function(r){if(!r.ok)throw 0;return r.json()}).then(function(j){
        if(j&&j.v&&j.v!==C.v){msg.textContent='Nouvelle version trouvée. Mise à jour…';up.textContent='Mise à jour…';
          setTimeout(function(){location.replace(location.pathname+'?u='+encodeURIComponent(j.v))},500)}
        else{up.disabled=false;up.textContent='Mettre à jour';msg.textContent='Tu as déjà la dernière version.'}
      }).catch(function(){up.disabled=false;up.textContent='Mettre à jour';msg.textContent='Pas de connexion. Réessaie quand tu as du réseau.'})};
  }
  if(document.body)add();else document.addEventListener('DOMContentLoaded',add);
  function toast(t){var d=document.createElement('div');d.textContent=t;d.style.cssText='position:fixed;left:50%;transform:translateX(-50%);bottom:calc(110px + env(safe-area-inset-bottom,0px));z-index:2147483001;background:#EAF4FF;color:#08111F;padding:11px 18px;border-radius:14px;font:600 14px system-ui,sans-serif;box-shadow:0 10px 30px rgba(0,0,0,.35);max-width:90%';document.body.appendChild(d);setTimeout(function(){d.remove()},2600)}
})();
