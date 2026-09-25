/* =================================
   MOVIE DATA
================================= */

const movies = [

    {
        id: 1,

        title: "House of the Dragon",

        year: "2022",

        genre: "Fantasy",

        language: "English",

        category: "Hollywood",

        poster: "house.jpg",

        hero:
            "Hou.jpg",

        description:
            "A powerful fantasy story filled with dragons, royal families, ambition and a struggle for the Iron Throne."
    },


    {
        id: 2,

        title: "The Gentlemen",

        year: "2019",

        genre: "Crime",

        language: "English",

        category: "Hollywood",

        poster: "images/movie2.jpg",

        hero:
            "images/hero2.jpg",

        description:
            "A stylish crime story involving powerful businessmen, dangerous criminals and a complicated underground empire."
    },


    {
        id: 3,

        title: "Our Sticky Love",

        year: "2026",

        genre: "Romance",

        language: "Korean",

        category: "Drama",

        poster: "images/movie3.jpg",

        hero:
            "images/hero3.jpg",

        description:
            "A sweet romantic story about two people whose lives become unexpectedly connected through love and friendship."
    },


    {
        id: 4,

        title: "Legend of the Blue Sea",

        year: "2016",

        genre: "Romance",

        language: "Korean",

        category: "Drama",

        poster: "images/movie4.jpg",

        hero:
            "images/hero4.jpg",

        description:
            "A fantasy romance about a mermaid and a clever con artist whose lives become connected across time."
    },


    {
        id: 5,

        title: "See You at Work Tomorrow",

        year: "2026",

        genre: "Romance",

        language: "Korean",

        category: "Drama",

        poster: "images/movie5.jpg",

        hero:
            "images/hero5.jpg",

        description:
            "A workplace romance filled with friendship, emotions and unexpected moments between coworkers."
    }

];


/* =================================
   HERO SLIDES
================================= */

const heroSlides = movies;


/* =================================
   CURRENT SLIDE
================================= */

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


    /* ================================
       HERO BACKGROUND
    ================================= */

    if (hero) {

        hero.style.backgroundImage =
            `url("${movie.hero}")`;

    }


    /* ================================
       HERO TEXT
    ================================= */

    if (heroTitle) {

        heroTitle.textContent =
            movie.title;

    }


    if (heroYear) {

        heroYear.textContent =
            `🎬 ${movie.year}`;

    }


    if (heroGenre) {

        heroGenre.textContent =
            movie.genre;

    }


    if (heroLanguage) {

        heroLanguage.textContent =
            movie.language;

    }


    if (heroDescription) {

        heroDescription.textContent =
            movie.description;

    }


    /* ================================
       DOTS
    ================================= */

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
   MOVIE CARD
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
            aria-label="Play ${movie.title}"
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


    if (playButton) {

        playButton.addEventListener(
            "click",
            event => {

                event.stopPropagation();

                openMovie(movie);

            }
        );

    }


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
   RENDER MOVIES
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


/* =================================
   INITIAL MOVIES
================================= */

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

        renderMovies(
            movies
        );

        return;

    }


    const results =
        movies.filter(
            movie => {

                return (

                    movie.title
                        .toLowerCase()
                        .includes(query)

                    ||

                    movie.category
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

                );

            }
        );


    renderMovies(results);

}


/* SEARCH BUTTON */

if (searchBtn) {

    searchBtn.addEventListener(
        "click",
        performSearch
    );

}


/* SEARCH INPUT */

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
   MOVIE MODAL
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
   OPEN MOVIE
================================= */

function openMovie(movie) {

    if (!modal) return;


    if (modalPoster) {

        modalPoster.src =
            movie.poster;

        modalPoster.alt =
            movie.title;

    }


    if (modalTitle) {

        modalTitle.textContent =
            movie.title;

    }


    if (modalLanguage) {

        modalLanguage.textContent =
            movie.language;

    }


    if (modalMeta) {

        modalMeta.textContent =
            `${movie.year} • ${movie.genre}`;

    }


    if (modalDescription) {

        modalDescription.textContent =
            movie.description;

    }


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
