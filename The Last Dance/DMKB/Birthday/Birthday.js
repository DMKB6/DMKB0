/* =====================================================
   FRIENDS BIRTHDAY DATA
   সাল দেওয়ার দরকার নেই
===================================================== */

const friends = [

    {
        name: "সিবগাতুল্লাহ সোহান",
        birthday: "30 July",
        image: "images/sibgatullah-sohan.jpg"
    },

    {
        name: "হাসান আল বান্নাহ",
        birthday: "2 October",
        image: "images/hasan-al-banna.jpg"
    },

    {
        name: "আবিদুর রহমান",
        birthday: "11 February",
        image: "images/abidur-rahman.jpg"
    },

    {
        name: "নাফিজ শাহরিয়ার",
        birthday: "30 December",
        image: "images/nafiz-shahriar.jpg"
    },

    {
        name: "তামিম ইকবাল",
        birthday: "22 December",
        image: "images/tamim-iqbal.jpg"
    },

    {
        name: "আসিফ ইকরাম",
        birthday: "27 May",
        image: "images/asif-ikram.jpg"
    },

    {
        name: "আব্দুল খালেক",
        birthday: "15 December",
        image: "images/abdul-khalek.jpg"
    },

    {
        name: "আরমান আসিফ",
        birthday: "3 December",
        image: "images/arman-asif.jpg"
    },

    {
        name: "নাজমুস সায়াদাত",
        birthday: "23 July",
        image: "images/najmus-sayadat.jpg"
    },

    {
        name: "হুজাইফা আস সাবুনী",
        birthday: "29 November",
        image: "images/huzaifa-as-sabuni.jpg"
    },

    {
        name: "মাহদী হাসান",
        birthday: "6 October",
        image: "images/mahdi-hasan.jpg"
    },

    {
        name: "মুহিত",
        birthday: "25 March",
        image: "images/muhit.jpg"
    },

    {
        name: "মাহবুবুল্লাহ মুসা",
        birthday: "22 November",
        image: "images/mahbubullah-musa.jpg"
    },

    {
        name: "ওয়াজিহ উদ্দিন ত্বাকি",
        birthday: "21 July",
        image: "images/wajih-uddin-twaqi.jpg"
    },

    {
        name: "জাহিদুল ইসলাম সুজন",
        birthday: "17 June",
        image: "images/zahidul-islam-sujon.jpg"
    },

    {
        name: "আল-আমিন",
        birthday: "10 December",
        image: "images/al-amin.jpg"
    },

    {
        name: "হাবিবুল্লাহ ইসা",
        birthday: "22 November",
        image: "images/habibullah-isa.jpg"
    },

    {
        name: "জুনায়েদ আখন্দ",
        birthday: "6 March",
        image: "images/junaid-akhand.jpg"
    },

    {
        name: "মুদাব্বির হোসাইন আনসারী",
        birthday: "28 June",
        image: "images/mudabbir-hossain-ansari.jpg"
    },

    {
        name: "ইয়াহইয়া আত তাহেরি",
        birthday: "5 April",
        image: "images/yahya-at-taheri.jpg"
    },

    {
        name: "জুবায়ের আহমেদ",
        birthday: "16 July",
        image: "images/zubair-ahmed.jpg"
    },

    {
        name: "নাজমুল ইসলাম",
        birthday: "12 January",
        image: "images/nazmul-islam.jpg"
    },

    {
        name: "তানভির হোসাইন",
        birthday: "18 September",
        image: "images/tanvir-hossain.jpg"
    },

    {
        name: "আবির হোসাইন",
        birthday: "25 May",
        image: "images/abir-hossain.jpg"
    },

    {
        name: "রাফিউল ইসলাম",
        birthday: "4 January",
        image: "images/rafiul-islam.jpg"
    },

    {
        name: "মাহদি বিন মোবারক",
        birthday: "9 December",
        image: "images/mahdi-bin-mobarak.jpg"
    },

    /* নতুন বন্ধু */

    {
        name: "তামিম বিন সাঈদ",
        birthday: "26 July",
        image: "images/tamim-bin-saeed.jpg"
    },

    {
        name: "মীর রাফি",
        birthday: "10 September",
        image: "images/mir-rafi.jpg"
    },

    {
        name: "আব্দুল্লাহ ইয়ামেন",
        birthday: "19 September",
        image: "images/abdullah-yamen.jpg"
    },

    {
        name: "তাহসিন",
        birthday: "20 December",
        image: "images/tahsin.jpg"
    }

];


/* =====================================================
   MONTHS
===================================================== */

const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];


/* =====================================================
   VARIABLES
===================================================== */

let lastOrder = "";

let lastDay = new Date().toDateString();

let birthdayCelebrated = {};


/* =====================================================
   GET BIRTHDAY MONTH + DAY
===================================================== */

function getBirthdayInfo(birthday) {

    const parts = birthday.trim().split(/\s+/);

    const day = parseInt(parts[0], 10);

    const month = monthNames.indexOf(parts[1]);

    return {
        day: day,
        month: month
    };
}


/* =====================================================
   GET NEXT BIRTHDAY
===================================================== */

function getNextBirthday(birthday) {

    const info = getBirthdayInfo(birthday);

    const now = new Date();

    let year = now.getFullYear();

    let nextBirthday = new Date(
        year,
        info.month,
        info.day,
        0, 0, 0, 0
    );

    const isToday =
        now.getMonth() === info.month &&
        now.getDate() === info.day;

    if (nextBirthday < now && !isToday) {

        nextBirthday = new Date(
            year + 1,
            info.month,
            info.day,
            0, 0, 0, 0
        );

    }

    return nextBirthday;
}


/* =====================================================
   DISPLAY DATE
   সাল দেখাবে না
===================================================== */

function formatDate(date) {

    return date.toLocaleDateString("bn-BD", {
        day: "numeric",
        month: "long"
    });

}


/* =====================================================
   CREATE BIRTHDAY CARD
===================================================== */

function createCard(friend, index, isNext) {

    const birthday = getNextBirthday(friend.birthday);

    const card = document.createElement("div");

    card.className = "birthday-card";

    const info = getBirthdayInfo(friend.birthday);

    const now = new Date();

    if (
        now.getMonth() === info.month &&
        now.getDate() === info.day
    ) {

        card.classList.add("birthday-today");

    }

    if (isNext) {

        card.classList.add("next-birthday");

    }

    card.dataset.birthday = birthday.getTime();

    card.dataset.friendName = friend.name;

    card.innerHTML = `

        <div class="card-number">
            ${String(index + 1).padStart(2, "0")}
        </div>

        ${
            isNext
                ? `<div class="next-badge">⭐ NEXT BIRTHDAY</div>`
                : ""
        }

        <div class="avatar">

            <img
                src="${friend.image}"
                alt="${friend.name}"
                onerror="this.onerror=null; this.src='images/default.jpg';"
            >

        </div>

        <h2 class="friend-name">
            ${friend.name}
        </h2>

        <p class="birthday-date">
            🎂 ${formatDate(birthday)}
        </p>

        <div class="countdown">

            <div class="time-box">
                <span class="time-number days">00</span>
                <span class="time-label">দিন</span>
            </div>

            <div class="time-box">
                <span class="time-number hours">00</span>
                <span class="time-label">ঘণ্টা</span>
            </div>

            <div class="time-box">
                <span class="time-number minutes">00</span>
                <span class="time-label">মিনিট</span>
            </div>

            <div class="time-box">
                <span class="time-number seconds">00</span>
                <span class="time-label">সেকেন্ড</span>
            </div>

        </div>

    `;

    return card;
}


/* =====================================================
   SORT BIRTHDAYS
===================================================== */

function getSortedFriends() {

    return [...friends].sort((a, b) => {

        const dateA = getNextBirthday(a.birthday);

        const dateB = getNextBirthday(b.birthday);

        return dateA - dateB;

    });

}


/* =====================================================
   RENDER BIRTHDAY LIST
===================================================== */

function renderBirthdays() {

    const list = document.getElementById("birthdayList");

    if (!list) return;

    const sortedFriends = getSortedFriends();

    const newOrder = sortedFriends
        .map(friend => friend.name)
        .join("|");

    if (
        newOrder === lastOrder &&
        list.children.length > 0
    ) {

        return;

    }

    lastOrder = newOrder;

    list.innerHTML = "";

    sortedFriends.forEach((friend, index) => {

        const card = createCard(
            friend,
            index,
            index === 0
        );

        list.appendChild(card);

    });

}


/* =====================================================
   UPDATE COUNTDOWN
===================================================== */

function updateCountdown() {

    const now = new Date();

    const nowTime = now.getTime();

    const cards = document.querySelectorAll(".birthday-card");

    cards.forEach(card => {

        const friendName = card.dataset.friendName;

        const friend = friends.find(
            item => item.name === friendName
        );

        if (!friend) return;

        const info = getBirthdayInfo(friend.birthday);

        const isBirthdayToday =
            now.getMonth() === info.month &&
            now.getDate() === info.day;

        /* Birthday Today */

        if (isBirthdayToday) {

            card.classList.add("birthday-today");

            const countdown = card.querySelector(".countdown");

            if (countdown) {
                countdown.style.display = "none";
            }

            let happyBirthday = card.querySelector(".happy-birthday");

            if (!happyBirthday) {

                happyBirthday = document.createElement("div");

                happyBirthday.className = "happy-birthday";

                happyBirthday.innerHTML = "🎉🎂 Happy Birthday! 🎂🎉";

                if (countdown) {

                    countdown.parentNode.insertBefore(
                        happyBirthday,
                        countdown
                    );

                } else {

                    card.appendChild(happyBirthday);

                }

            }

            const dateElement = card.querySelector(".birthday-date");

            if (dateElement) {
                dateElement.innerHTML = `🎂 ${formatDate(now)}`;
            }

            const celebrationKey =
                friendName + "-" + now.getFullYear();

            if (!birthdayCelebrated[celebrationKey]) {

                birthdayCelebrated[celebrationKey] = true;

                createConfetti();

            }

            return;

        }

        /* Birthday শেষ হলে Countdown */

        card.classList.remove("birthday-today");

        const happyBirthday = card.querySelector(".happy-birthday");

        if (happyBirthday) {
            happyBirthday.remove();
        }

        const countdown = card.querySelector(".countdown");

        if (countdown) {
            countdown.style.display = "grid";
        }

        const nextBirthday = getNextBirthday(friend.birthday);

        card.dataset.birthday = nextBirthday.getTime();

        const difference = nextBirthday.getTime() - nowTime;

        const days = Math.floor(
            difference / (1000 * 60 * 60 * 24)
        );

        const hours = Math.floor(
            (difference % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );

        const minutes = Math.floor(
            (difference % (1000 * 60 * 60)) /
            (1000 * 60)
        );

        const seconds = Math.floor(
            (difference % (1000 * 60)) / 1000
        );

        const daysElement = card.querySelector(".days");
        const hoursElement = card.querySelector(".hours");
        const minutesElement = card.querySelector(".minutes");
        const secondsElement = card.querySelector(".seconds");

        if (daysElement) {
            daysElement.textContent = String(days).padStart(2, "0");
        }

        if (hoursElement) {
            hoursElement.textContent = String(hours).padStart(2, "0");
        }

        if (minutesElement) {
            minutesElement.textContent = String(minutes).padStart(2, "0");
        }

        if (secondsElement) {
            secondsElement.textContent = String(seconds).padStart(2, "0");
        }

    });

}


/* =====================================================
   TODAY'S DATE
===================================================== */

function showTodayDate() {

    const today = new Date();

    const element = document.getElementById("todayDate");

    if (!element) return;

    element.textContent =
        "📅 আজ: " +
        today.toLocaleDateString("bn-BD", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        });

}


/* =====================================================
   CHECK NEW DAY
===================================================== */

function checkNewDay() {

    const today = new Date();

    const todayString = today.toDateString();

    if (todayString !== lastDay) {

        lastDay = todayString;

        lastOrder = "";

        renderBirthdays();

    }

    showTodayDate();

}


/* =====================================================
   CONFETTI
===================================================== */

function createConfetti() {

    const container = document.getElementById("confetti");

    if (!container) return;

    for (let i = 0; i < 70; i++) {

        const piece = document.createElement("div");

        piece.className = "confetti";

        piece.style.left = Math.random() * 100 + "vw";

        piece.style.width = Math.random() * 8 + 5 + "px";

        piece.style.height = Math.random() * 12 + 8 + "px";

        piece.style.background =
            `hsl(${Math.random() * 360}, 90%, 60%)`;

        piece.style.animationDuration =
            Math.random() * 2 + 3 + "s";

        piece.style.animationDelay =
            Math.random() * 0.5 + "s";

        container.appendChild(piece);

        setTimeout(() => {
            piece.remove();
        }, 6000);

    }

}


/* =====================================================
   WEBSITE START
===================================================== */

renderBirthdays();

showTodayDate();

updateCountdown();


/* প্রতি ১ সেকেন্ডে Countdown Update */

setInterval(() => {

    updateCountdown();

}, 1000);


/* প্রতি ১০ সেকেন্ডে Date Check */

setInterval(() => {

    checkNewDay();

}, 10000);
