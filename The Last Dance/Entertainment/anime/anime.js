/* =================================
   ANIME DATA
================================= */

const movies = [

    {
        id: 1,

        title: "Attack on Titan",

        year: "2013",

        genre: "Action",

        language: "Japanese",

        category: "Anime",

        poster: "images/aot.jpg",

        hero: "images/aot-hero.jpg",

        description:
            "Humanity fights for survival against terrifying Titans while uncovering the dark secrets behind their world."
    },


    {
        id: 2,

        title: "One Piece",

        year: "1999",

        genre: "Adventure",

        language: "Japanese",

        category: "Anime",

        poster: "images/onepiece.jpg",

        hero: "images/onepiece-hero.jpg",

        description:
            "Monkey D. Luffy and his crew travel across the Grand Line in search of the legendary One Piece treasure."
    },


    {
        id: 3,

        title: "Naruto: Shippuden",

        year: "2007",

        genre: "Action",

        language: "Japanese",

        category: "Anime",

        poster: "images/naruto.jpg",

        hero: "images/naruto-hero.jpg",

        description:
            "Naruto Uzumaki continues his journey as a powerful ninja while protecting his friends and pursuing his dream."
    },


    {
        id: 4,

        title: "Demon Slayer",

        year: "2019",

        genre: "Fantasy",

        language: "Japanese",

        category: "Anime",

        poster: "images/demonslayer.jpg",

        hero: "images/demonslayer-hero.jpg",

        description:
            "Tanjiro Kamado joins the Demon Slayer Corps after tragedy strikes his family and his sister becomes a demon."
    },


    {
        id: 5,

        title: "Death Note",

        year: "2006",

        genre: "Psychological",

        language: "Japanese",

        category: "Anime",

        poster: "images/deathnote.jpg",

        hero: "images/deathnote-hero.jpg",

        description:
            "A mysterious notebook gives Light Yagami the power to determine people's fate, leading to a dangerous battle of minds."
    }

];


/* =================================
   HERO SLIDER
================================= */

const heroSlides = movies;

let currentSlide = 0;


/* =================================
   HERO ELEMENTS
================================= */

const hero =
    document.getElementById("hero");

const heroTitle =
    document.getElementById("heroTitle");

const heroYear =
    document.getElementById("heroYear");

const heroGenre =
    document.getElementById("heroGenre");

const heroLanguage =
    document.getElementById("heroLanguage");

const heroDescription =
    document.getElementById("heroDescription");

const heroPlay =
    document.getElementById("heroPlay");

const heroInfo =
    document.getElementById("heroInfo");

const sliderDots =
    document.getElementById("sliderDots");


/* =================================
   SHOW HERO SLIDE
================================= */

function showSlide(index) {

    const movie =
        heroSlides[index];

    if (!movie) return;


    hero.style.backgroundImage =
        `url("${movie.hero}")`;


    heroTitle.textContent =
        movie.title;


    heroYear.textContent =
        `🎬 ${movie.year}`;


    heroGenre.textContent =
        movie.genre;


    heroLanguage.textContent =
        movie.language;


    heroDescription.textContent =
        movie.description;


    document
        .querySelectorAll(".slider-dot")
        .forEach((dot, i) => {

            dot.classList.toggle(
                "active",
                i === index
            );

        });

}


/* =================================
   CREATE SLIDER DOTS
================================= */

if (sliderDots) {

    sliderDots.innerHTML = "";

    heroSlides.forEach(
        (movie, index) => {

            const dot =
                document.createElement("div");

            dot.className =
                "slider-dot";

            if (index === 0) {

                dot.classList.add(
                    "active"
                );

            }

            dot.addEventListener(
                "click",
                () => {

                    currentSlide =
                        index;

                    showSlide(
                        currentSlide
                    );

                }
            );

            sliderDots.appendChild(dot);

        }
    );

}


/* =================================
   FIRST SLIDE
================================= */

showSlide(0);


/* =================================
   AUTO SLIDER
================================= */

if (heroSlides.length > 1) {

    setInterval(() => {

        currentSlide++;

        if (
            currentSlide >=
            heroSlides.length
        ) {

            currentSlide = 0;

        }

        showSlide(currentSlide);

    }, 5000);

}


/* =================================
   ANIME CARD
================================= */

function createMovieCard(movie) {

    const card =
        document.createElement("div");

    card.className =
        "movie-card";


    card.dataset.category =
        movie.category;


    card.dataset.genre =
        movie.genre;


    card.innerHTML = `

        <img
            class="poster"
            src="${movie.poster}"
            alt="${movie.title}"
            loading="lazy"
        >

        <span class="language">
            ${movie.language}
        </span>

        <button
            class="movie-play"
            aria-label="Watch ${movie.title}"
        >
            ▶
        </button>

        <div class="movie-info">

            <div class="movie-title">
                ${movie.title}
            </div>

            <div class="movie-meta">

                <span>🎬</span>

                <span>
                    ${movie.year}
                </span>

                <span>•</span>

                <span>
                    ${movie.genre}
                </span>

            </div>

        </div>

    `;


    /* CARD CLICK */

    card.addEventListener(
        "click",
        () => {

            openMovie(movie);

        }
    );


    /* PLAY BUTTON */

    const playButton =
        card.querySelector(
            ".movie-play"
        );


    playButton.addEventListener(
        "click",
        event => {

            event.stopPropagation();

            openMovie(movie);

        }
    );


    return card;

}


/* =================================
   MOVIE CONTAINER
================================= */

const movieContainer =
    document.getElementById(
        "trendingMovies"
    );


/* =================================
   RENDER
================================= */

function renderMovies(
    list = movies
) {

    if (!movieContainer) return;

    movieContainer.innerHTML = "";

    list.forEach(movie => {

        movieContainer.appendChild(
            createMovieCard(movie)
        );

    });

    checkResults(list);

}


renderMovies();


/* =================================
   SEARCH
================================= */

const searchInput =
    document.getElementById(
        "searchInput"
    );

const searchBtn =
    document.getElementById(
        "searchBtn"
    );


function performSearch() {

    if (!searchInput) return;


    const query =
        searchInput.value
            .trim()
            .toLowerCase();


    if (!query) {

        renderMovies(movies);

        return;

    }


    const results =
        movies.filter(movie => {

            return (

                movie.title
                    .toLowerCase()
                    .includes(query)

                ||

                movie.genre
                    .toLowerCase()
                    .includes(query)

                ||

                movie.language
                    .toLowerCase()
                    .includes(query)

                ||

                movie.category
                    .toLowerCase()
                    .includes(query)

            );

        });


    renderMovies(results);

}


/* SEARCH BUTTON */

if (searchBtn) {

    searchBtn.addEventListener(
        "click",
        performSearch
    );

}


/* LIVE SEARCH */

if (searchInput) {

    searchInput.addEventListener(
        "input",
        performSearch
    );


    searchInput.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Enter"
            ) {

                performSearch();

            }

        }
    );

}


/* =================================
   NO RESULTS
================================= */

const noResults =
    document.getElementById(
        "noResults"
    );


function checkResults(list) {

    if (!noResults) return;


    if (list.length === 0) {

        noResults.style.display =
            "block";

    } else {

        noResults.style.display =
            "none";

    }

}


/* =================================
   MODAL
================================= */

const modal =
    document.getElementById(
        "movieModal"
    );

const closeModal =
    document.getElementById(
        "closeModal"
    );

const modalPoster =
    document.getElementById(
        "modalPoster"
    );

const modalTitle =
    document.getElementById(
        "modalTitle"
    );

const modalLanguage =
    document.getElementById(
        "modalLanguage"
    );

const modalMeta =
    document.getElementById(
        "modalMeta"
    );

const modalDescription =
    document.getElementById(
        "modalDescription"
    );


/* =================================
   OPEN ANIME
================================= */

function openMovie(movie) {

    if (!modal) return;


    modalPoster.src =
        movie.poster;


    modalPoster.alt =
        movie.title;


    modalTitle.textContent =
        movie.title;


    modalLanguage.textContent =
        movie.language;


    modalMeta.textContent =
        `${movie.year} • ${movie.genre}`;


    modalDescription.textContent =
        movie.description;


    modal.classList.add(
        "show"
    );


    document.body.style.overflow =
        "hidden";

}


/* =================================
   CLOSE MODAL
================================= */

function closeMovie() {

    if (!modal) return;


    modal.classList.remove(
        "show"
    );


    document.body.style.overflow =
        "";

}


if (closeModal) {

    closeModal.addEventListener(
        "click",
        closeMovie
    );

}


/* CLICK OUTSIDE */

if (modal) {

    modal.addEventListener(
        "click",
        event => {

            if (
                event.target === modal
            ) {

                closeMovie();

            }

        }
    );

}


/* ESCAPE */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeMovie();

        }

    }
);


/* =================================
   HERO PLAY
================================= */

if (heroPlay) {

    heroPlay.addEventListener(
        "click",
        () => {

            const movie =
                heroSlides[
                    currentSlide
                ];

            if (movie) {

                openMovie(movie);

            }

        }
    );

}


/* =================================
   HERO INFO
================================= */

if (heroInfo) {

    heroInfo.addEventListener(
        "click",
        () => {

            const movie =
                heroSlides[
                    currentSlide
                ];

            if (movie) {

                openMovie(movie);

            }

        }
    );

}


/* =================================
   BOTTOM NAVIGATION
================================= */

const navItems =
    document.querySelectorAll(
        ".nav-item"
    );


navItems.forEach(item => {

    item.addEventListener(
        "click",
        () => {

            navItems.forEach(nav => {

                nav.classList.remove(
                    "active"
                );

            });


            item.classList.add(
                "active"
            );

        }
    );

});


/* =================================
   MOVIE ROW DRAG
================================= */

document
    .querySelectorAll(".movie-row")
    .forEach(row => {

        let isDown = false;

        let startX = 0;

        let scrollLeft = 0;


        row.addEventListener(
            "mousedown",
            event => {

                isDown = true;

                startX =
                    event.pageX -
                    row.offsetLeft;

                scrollLeft =
                    row.scrollLeft;

            }
        );


        row.addEventListener(
            "mouseleave",
            () => {

                isDown = false;

            }
        );


        row.addEventListener(
            "mouseup",
            () => {

                isDown = false;

            }
        );


        row.addEventListener(
            "mousemove",
            event => {

                if (!isDown) return;

                event.preventDefault();


                const x =
                    event.pageX -
                    row.offsetLeft;


                const walk =
                    (x - startX) * 1.5;


                row.scrollLeft =
                    scrollLeft - walk;

            }
        );

    });
