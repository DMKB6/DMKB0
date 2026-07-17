/*=========================================
 WORLD CUP V2 - script.js
=========================================*/

/* Floating Particles */

const particles = document.querySelector(".particles");

for(let i=0;i<80;i++){

    const dot=document.createElement("span");

    let size=Math.random()*6+2;

    dot.style.width=size+"px";
    dot.style.height=size+"px";

    dot.style.left=Math.random()*100+"%";

    dot.style.animationDuration=
    (Math.random()*10+8)+"s";

    dot.style.animationDelay=
    Math.random()*5+"s";

    particles.appendChild(dot);

}

/*======================================
Mouse Glow
======================================*/

const glow=document.createElement("div");

glow.className="mouseGlow";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.pageX+"px";

glow.style.top=e.pageY+"px";

});

/*======================================
Scroll Fade
======================================*/

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".group-card,.match-card,.team-card")
.forEach(el=>observer.observe(el));

/*======================================
Score Pulse Random
======================================*/

setInterval(()=>{

document.querySelectorAll(".score")
.forEach(score=>{

score.animate(

[
{transform:"scale(1)"},
{transform:"scale(1.15)"},
{transform:"scale(1)"}
],

{

duration:700

});

});

},3000);

/*======================================
Champion Glow
======================================*/

const champion=document.querySelector(".champion");

if(champion){

setInterval(()=>{

champion.classList.toggle("winner");

},1200);

}

/*======================================
Confetti
======================================*/

function confetti(){

for(let i=0;i<40;i++){

let c=document.createElement("div");

c.className="confetti";

c.style.left=Math.random()*100+"vw";

c.style.background=
["gold","#2196ff","#ffffff","#00d4ff"]
[Math.floor(Math.random()*4)];

c.style.animationDuration=
(Math.random()*3+3)+"s";

document.body.appendChild(c);

setTimeout(()=>{

c.remove();

},6000);

}

}

setInterval(confetti,9000);

/*======================================
Trophy Sparkle
======================================*/

setInterval(()=>{

let s=document.createElement("div");

s.className="spark";

let trophy=document.querySelector(".hero-trophy");

if(!trophy) return;

let rect=trophy.getBoundingClientRect();

s.style.left=
rect.left+rect.width/2+"px";

s.style.top=
rect.top+rect.height/2+"px";

document.body.appendChild(s);

setTimeout(()=>{

s.remove();

},1500);

},500);

/*======================================
Background Light
======================================*/

let angle=0;

setInterval(()=>{

angle++;

document.body.style.backgroundPosition=
angle+"px center";

},50);