// Banner Ad:
let date = new Date();
let dayOfWeek = date.toLocaleDateString("en", {weekday: "long"});

function bannerAd() {
    document.querySelector(".banner-ad").style.display = "block";
}

if (dayOfWeek == "Friday") {
    bannerAd();
}