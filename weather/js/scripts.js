//Open menu button:
function toggleMenu() {
    document.querySelector("#primary-nav").classList.toggle("open");
    document.querySelector("#menu-btn").classList.toggle("open");
}

const x = document.querySelector("#menu-btn");
x.onclick = toggleMenu;

//Get current date:
// format: Wednesday, 24 July 2020
let currentDate = new Date().toLocaleDateString("en", {weekday: "long", day: "numeric", month: "long", year: "numeric"});
document.querySelector("#current-date").textContent = currentDate;