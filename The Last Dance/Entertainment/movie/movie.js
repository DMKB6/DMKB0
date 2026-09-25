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
        description:
            "A workplace romance filled with friendship, emotions and unexpected moments between coworkers."
    }

];


/* =================================
   HERO SLIDER
================================= */

const heroSlides = [

    {
        title: "House of the Dragon",
        year: "2022",
        genre: "Fantasy",
        language: "English",
        image: "images/hero1.jpg",
        description:
            "A powerful fantasy story filled with dragons, royal families, ambition and a struggle for the Iron Throne."
    },

    {
        title: "The Gentlemen",
        year: "2019",
        genre: "Crime",
        language: "English",
        image: "images/hero2.jpg",
        description:
            "A stylish crime story involving powerful businessmen, dangerous criminals and a complicated underground empire."
    },

    {
        title: "Legend of the Blue Sea",
        year: "2016",
        genre: "Romance",
        language: "Korean",
        image: "images/hero3.jpg",
        description:
            "A fantasy romance about a mermaid and a clever con artist whose lives become connected across time."
    }

];

let currentSlide = 0;


/* =================================
   HERO ELEMENTS
================================= */

const hero =
    document.getElementById("hero");

const heroTitle =
    document.getElementById("heroTitle");

const heroDescription =
    document.getElementById("heroDescription");

const sliderDots =
    document.getElementById("sliderDots");


/* =================================
   SHOW HERO SLIDE
================================= */

function showSlide(index) {

    const slide =
        heroSlides[index];

    if (!slide) return;


    /* Background */

    if (hero) {

        hero.style.backgroundImage =
            `url("${slide.image}")`;

    }


    /* Title */

    if (heroTitle) {

        heroTitle.textContent =
            slide.title;

    }


    /* Description */

    if (heroDescription) {

        heroDescription.textContent =
            slide.description;

    }


    /* Active Dot */

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
        (slide, index) => {

            const dot =
                document.createElement("div");

            dot.classList.add(
                "slider-dot"
            );


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
   FIRST HERO SLIDE
================================= */

showSlide(0);


/* =================================
   AUTO HERO SLIDER
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


    /* =================================
       CARD CLICK
    ================================= */

    card.addEventListener(
        "click",
        () => {

            openMovie(movie);

        }
    );


    /* =================================
       PLAY BUTTON
    ================================= */

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
   CATEGORY FILTER
================================= */

const categoryButtons =
    document.querySelectorAll(
        ".category"
    );


if (categoryButtons.length > 0) {

    categoryButtons.forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    categoryButtons.forEach(
                        btn => {

                            btn.classList.remove(
                                "active"
                            );

                        }
                    );


                    button.classList.add(
                        "active"
                    );


                    const category =
                        button.dataset.category;


                    if (
                        category ===
                        "All"
                    ) {

                        renderMovies(
                            movies
                        );

                        return;

                    }


                    const filtered =
                        movies.filter(
                            movie => {

                                return (
                                    movie.category ===
                                        category ||

                                    movie.genre ===
                                        category
                                );

                            }
                        );


                    renderMovies(
                        filtered
                    );

                }
            );

        }
    );

}


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

        renderMovies();

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


/* =================================
   SEARCH BUTTON
================================= */

if (searchBtn) {

    searchBtn.addEventListener(
        "click",
        performSearch
    );

}


/* =================================
   SEARCH INPUT
================================= */

if (searchInput) {

    searchInput.addEventListener(
        "input",
        performSearch
    );


    searchInput.addEventListener(
        "keydown",
        event => {

            if (
                event.key ===
                "Enter"
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


    modal.classList.add("show");


    document.body.style.overflow =
        "hidden";

}


/* =================================
   CLOSE MOVIE
================================= */

function closeMovie() {

    if (!modal) return;


    modal.classList.remove(
        "show"
    );


    document.body.style.overflow =
        "";

}


/* =================================
   CLOSE BUTTON
================================= */

if (closeModal) {

    closeModal.addEventListener(
        "click",
        closeMovie
    );

}


/* =================================
   CLICK OUTSIDE MODAL
================================= */

if (modal) {

    modal.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                modal
            ) {

                closeMovie();

            }

        }
    );

}


/* =================================
   ESCAPE KEY
================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key ===
            "Escape"
        ) {

            closeMovie();

        }

    }
);


/* =================================
   HERO PLAY BUTTON
================================= */

const heroPlay =
    document.getElementById(
        "heroPlay"
    );


if (heroPlay) {

    heroPlay.addEventListener(
        "click",
        () => {

            const movie =
                movies.find(
                    item =>
                        item.title ===
                        heroTitle.textContent
                );


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
   MOUSE DRAG MOVIE ROW
================================= */

document
    .querySelectorAll(".movie-row")
    .forEach(row => {

        let isDown = false;
        let startX = 0;
        let scrollLeft = 0;


        /* MOUSE DOWN */

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


        /* MOUSE LEAVE */

        row.addEventListener(
            "mouseleave",
            () => {

                isDown = false;

            }
        );


        /* MOUSE UP */

        row.addEventListener(
            "mouseup",
            () => {

                isDown = false;

            }
        );


        /* MOUSE MOVE */

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
