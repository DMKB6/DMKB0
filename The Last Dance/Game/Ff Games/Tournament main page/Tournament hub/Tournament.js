/* ==========================
   FLOATING PARTICLES
========================== */

const bg = document.querySelector(".bg-animation");

for(let i=0;i<80;i++){

    const star=document.createElement("span");

    star.classList.add("particle");

    star.style.left=Math.random()*100+"%";

    star.style.top=Math.random()*100+"%";

    star.style.width=(Math.random()*5+2)+"px";

    star.style.height=star.style.width;

    star.style.animationDuration=(Math.random()*8+5)+"s";

    star.style.animationDelay=Math.random()*5+"s";

    bg.appendChild(star);

}

/* ==========================
   PLAYER ENTRY ANIMATION
========================== */

const players=document.querySelectorAll(".player");

players.forEach((player,index)=>{

    player.style.opacity="0";
    player.style.transform="translateY(50px)";

    setTimeout(()=>{

        player.style.transition="0.8s";

        player.style.opacity="1";
        player.style.transform="translateY(0)";

    },index*250);

});

/* ==========================
   TITLE GLOW EFFECT
========================== */

const title=document.querySelector(".title-box");

setInterval(()=>{

    title.style.boxShadow="0 0 50px cyan";

    setTimeout(()=>{

        title.style.boxShadow="0 0 20px cyan";

    },500);

},2000);

/* ==========================
   RANDOM TABLE GLOW
========================== */

setInterval(()=>{

    players.forEach(player=>{

        player.style.boxShadow="none";

    });

    const random=Math.floor(Math.random()*players.length);

    players[random].style.boxShadow="0 0 30px cyan";

},1500);

/* ==========================
   DATE BOX PULSE
========================== */

const dateBox=document.querySelector(".date-box");

setInterval(()=>{

    dateBox.animate([

        {transform:"scale(1)"},

        {transform:"scale(1.06)"},

        {transform:"scale(1)"}

    ],{

        duration:1000

    });

},2500);

/* ==========================
   TIME COLOR CHANGE
========================== */

const time=document.querySelector(".time-box");

const colors=[

"#00ffff",
"#00ff99",
"#66ccff",
"#bb33ff"

];

let c=0;

setInterval(()=>{

    time.style.color=colors[c];

    time.style.textShadow="0 0 25px "+colors[c];

    c++;

    if(c>=colors.length){

        c=0;

    }

},1200);

/* ==========================
   BACKGROUND LIGHT MOVE
========================== */

let angle=0;

setInterval(()=>{

    angle+=0.4;

    document.body.style.backgroundPosition=

    Math.sin(angle)*50+"px "+

    Math.cos(angle)*50+"px";

},30);

/* ==========================
   MOUSE GLOW
========================== */

document.addEventListener("mousemove",(e)=>{

    document.body.style.background=

    `radial-gradient(circle at ${e.clientX}px ${e.clientY}px,

    rgba(0,255,255,.08),

    #050816 60%)`;

});