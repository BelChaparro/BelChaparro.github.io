//Open menu button:
function toggleMenu() {
    document.querySelector("#primary-nav").classList.toggle("open");
    document.querySelector("#menu-btn").classList.toggle("open");
}

const x = document.querySelector("#menu-btn");
x.onclick = toggleMenu;

// Get and assign current year to HTML element with an ID of "current-year":
const currentYear = new Date().getFullYear();
document.querySelector("#current-year").textContent = currentYear;

// Assigns the last modification date to the element with an ID of "last-update-date":
const lastModifiedDate =  document.lastModified;
document.querySelector("#last-modified").textContent = lastModifiedDate;