// Get and assign current year to HTML element with an ID of "current-year":
const currentYear = new Date().getFullYear();
document.querySelector("#current-year").textContent = currentYear;

// Assigns the last modification date to the element with an ID of "last-update-date":
const lastModifiedDate =  document.lastModified;
document.querySelector("#last-update-date").textContent = lastModifiedDate;