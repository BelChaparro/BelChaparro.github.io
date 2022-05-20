// Banner Ad:
let currentDate = new Date();
let weekday = currentDate.toLocaleDateString("en", {weekday: "long"});

function bannerAd() {
    document.querySelector(".banner-ad").style.display = "block";
}

if (weekday == "Friday") {
    bannerAd();
}