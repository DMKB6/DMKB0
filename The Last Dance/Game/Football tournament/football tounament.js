/* =========================================
   WORLD CUP 2026
   FINAL JAVASCRIPT
========================================= */


/* =========================================
   FLOATING PARTICLES
========================================= */

const particles =
    document.querySelector(".particles");

if(particles){

    for(let i = 0; i < 80; i++){

        const dot =
            document.createElement("span");

        const size =
            Math.random() * 5 + 2;

        dot.style.width =
            size + "px";

        dot.style.height =
            size + "px";

        dot.style.left =
            Math.random() * 100 + "%";

        dot.style.animationDuration =
            Math.random() * 10 + 8 + "s";

        dot.style.animationDelay =
            Math.random() * 8 + "s";

        particles.appendChild(dot);
    }
}


/* =========================================
   MOUSE GLOW
========================================= */

const glow =
    document.createElement("div");

glow.className =
    "mouseGlow";

glow.style.position =
    "fixed";

glow.style.width =
    "120px";

glow.style.height =
    "120px";

glow.style.borderRadius =
    "50%";

glow.style.pointerEvents =
    "none";

glow.style.transform =
    "translate(-50%,-50%)";

glow.style.background =
    "radial-gradient(circle, rgba(0,255,102,.12), transparent 70%)";

glow.style.zIndex =
    "-1";

document.body.appendChild(glow);


document.addEventListener(
    "mousemove",
    function(e){

        glow.style.left =
            e.clientX + "px";

        glow.style.top =
            e.clientY + "px";
    }
);


/* =========================================
   SCROLL REVEAL
========================================= */

const observer =
    new IntersectionObserver(
        function(entries){

            entries.forEach(
                function(entry){

                    if(entry.isIntersecting){

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";
                    }
                }
            );

        },
        {
            threshold:.15
        }
    );


document.querySelectorAll(
    ".table-card, .match-card, .match, .champion-box"
).forEach(
    function(element){

        element.style.opacity =
            "0";

        element.style.transform =
            "translateY(35px)";

        element.style.transition =
            "opacity .8s ease, transform .8s ease";

        observer.observe(element);
    }
);


/* =========================================
   SCORE PULSE
========================================= */

setInterval(
    function(){

        document
            .querySelectorAll(".score")
            .forEach(
                function(score){

                    score.animate(
                        [
                            {
                                transform:
                                    "scale(1)"
                            },

                            {
                                transform:
                                    "scale(1.12)"
                            },

                            {
                                transform:
                                    "scale(1)"
                            }
                        ],
                        {
                            duration:700,
                            easing:"ease-in-out"
                        }
                    );

                }
            );

    },
    3500
);


/* =========================================
   CHAMPION GLOW
========================================= */

const champion =
    document.querySelector(".champion-box");

if(champion){

    setInterval(
        function(){

            champion.animate(
                [
                    {
                        filter:
                            "brightness(1)"
                    },

                    {
                        filter:
                            "brightness(1.18)"
                    },

                    {
                        filter:
                            "brightness(1)"
                    }
                ],
                {
                    duration:1500,
                    easing:"ease-in-out"
                }
            );

        },
        3000
    );
}


/* =========================================
   CONFETTI
========================================= */

function createConfetti(){

    for(let i = 0; i < 35; i++){

        const c =
            document.createElement("div");

        c.className =
            "confetti";

        c.style.left =
            Math.random() * 100 + "vw";

        c.style.animationDuration =
            Math.random() * 3 + 3 + "s";

        c.style.animationDelay =
            Math.random() * 1.5 + "s";

        const colors = [
            "#ffd700",
            "#00ff66",
            "#ffffff",
            "#00d4ff"
        ];

        c.style.background =
            colors[
                Math.floor(
                    Math.random() * colors.length
                )
            ];

        c.style.transform =
            `rotate(${Math.random()*360}deg)`;

        document.body.appendChild(c);

        setTimeout(
            function(){

                c.remove();

            },
            6500
        );
    }
}


/* Start confetti after page load */

setTimeout(
    createConfetti,
    1800
);


/* Repeat */

setInterval(
    createConfetti,
    12000
);


/* =========================================
   TROPHY SPARKLES
========================================= */

const trophy =
    document.querySelector(
        ".champion-trophy"
    );


function createSpark(){

    if(!trophy)
        return;

    const spark =
        document.createElement("div");

    spark.className =
        "spark";

    const rect =
        trophy.getBoundingClientRect();

    spark.style.left =
        rect.left +
        Math.random() * rect.width +
        "px";

    spark.style.top =
        rect.top +
        Math.random() * rect.height +
        "px";

    document.body.appendChild(spark);

    setTimeout(
        function(){

            spark.remove();

        },
        1500
    );
}


setInterval(
    createSpark,
    550
);


/* =========================================
   PAGE LOAD
========================================= */

window.addEventListener(
    "load",
    function(){

        document.body.classList.add(
            "loaded"
        );

    }
);
