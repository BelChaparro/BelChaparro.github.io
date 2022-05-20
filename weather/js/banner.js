// Banner Ad:
let date = new Date();
let weekday = date.toLocaleDateString("en", {weekday: "long"});

function bannerAd() {
    document.querySelector(".banner-ad").style.display = "block";
}

if (weekday == "Friday") {
    bannerAd();
}