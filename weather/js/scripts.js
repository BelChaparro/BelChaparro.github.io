//Open menu button:
function toggleMenu() {
    document.querySelector("#primary-nav").classList.toggle("open");
    document.querySelector("#menu-btn").classList.toggle("open");
}

const x = document.querySelector("#menu-btn");
x.onclick = toggleMenu;


//Get current date:
// format: Wednesday, 24 July 2020
let currentDate = new Date();

let weekday = currentDate.toLocaleDateString("en", {weekday: "long"});
let day = currentDate.getDate();
let month = currentDate.toLocaleDateString("en", {month: "long",});
let year = currentDate.getFullYear();

currentDate = `${weekday}, ${day} ${month} ${year}`;
document.querySelector("#current-date").textContent = currentDate;


// Banner Ad:
function bannerAd() {
    document.querySelector(".banner-ad").style.display = "block";
}
console.log(weekday.toLowerCase());
if (weekday.toLowerCase() == "friday") {
    bannerAd;
}