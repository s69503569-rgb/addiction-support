const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'メニューを閉じる':'メニューを開く');toggle.textContent=open?'×':'☰';});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰';}));
const pref=document.getElementById('prefecture');
document.getElementById('searchPref').addEventListener('click',()=>{if(!pref.value){pref.focus();alert('都道府県を選択してください。');return;}const q=encodeURIComponent(pref.value+' 依存症 相談窓口 医療機関');window.open('https://www.google.com/maps/search/?api=1&query='+q,'_blank','noopener');});
const status=document.getElementById('locationStatus');
document.getElementById('useLocation').addEventListener('click',()=>{if(!navigator.geolocation){status.textContent='このブラウザでは現在地を取得できません。都道府県を選択して検索してください。';return;}status.textContent='現在地を確認しています…';navigator.geolocation.getCurrentPosition(pos=>{const {latitude,longitude}=pos.coords;status.textContent='地図サービスで近くの相談先を表示します。';const q=encodeURIComponent('依存症 相談窓口 医療機関');window.open(`https://www.google.com/maps/search/${q}/@${latitude},${longitude},12z`,'_blank','noopener');},err=>{status.textContent=err.code===1?'位置情報の利用が許可されませんでした。都道府県から検索できます。':'現在地を取得できませんでした。都道府県から検索してください。';},{enableHighAccuracy:false,timeout:10000,maximumAge:300000});});
