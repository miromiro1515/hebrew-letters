/* Short success celebration: a balloon and "כל הכבוד" in the middle of the screen. Non-blocking, no stars or progress. */
(function(){
var last=0;
window.lpCelebrate=function(o){
 o=o||{};var now=Date.now();if(now-last<1200)return;last=now;
 try{
  if(!document.getElementById('lp-cel-css')){
   var st=document.createElement('style');st.id='lp-cel-css';
   st.textContent='.lp-cel{position:fixed;left:50%;top:46%;z-index:10000;transform:translate(-50%,-50%);text-align:center;pointer-events:none;animation:lpcel 1.7s ease-out forwards}.lp-cel .b{font-size:96px;line-height:1;filter:drop-shadow(0 6px 8px #0003)}.lp-cel .t{display:inline-block;margin-top:4px;padding:6px 18px;border-radius:999px;background:#fff;color:#7a3db8;font:800 28px Arial,sans-serif;box-shadow:0 4px 14px #7a3db84d}@keyframes lpcel{0%{opacity:0;transform:translate(-50%,-30%) scale(.5)}18%{opacity:1;transform:translate(-50%,-50%) scale(1.1)}70%{opacity:1;transform:translate(-50%,-62%) scale(1)}100%{opacity:0;transform:translate(-50%,-90%) scale(1)}}@media (prefers-reduced-motion:reduce){.lp-cel{animation:lpfade 1.4s forwards}@keyframes lpfade{0%,70%{opacity:1}100%{opacity:0}}}';
   document.head.appendChild(st);
  }
  var d=document.createElement('div');d.className='lp-cel';d.setAttribute('aria-hidden','true');
  var balloons=['🎈','🎈','🎉','🎈'];
  d.innerHTML='<div class="b">'+balloons[Math.floor(Math.random()*balloons.length)]+'</div><div class="t">כל הכבוד!</div>';
  document.body.appendChild(d);setTimeout(function(){d.remove()},1800);
 }catch(e){}
 if(o.speak!==false){try{var u=new SpeechSynthesisUtterance('כל הכבוד');u.lang='he-IL';u.rate=.95;speechSynthesis.speak(u)}catch(e){}}
};
})();
