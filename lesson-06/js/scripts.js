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
let month = currentDate.toLocaleDateString("en", {month: "long"});
let year = currentDate.getFullYear();

currentDate = `${weekday}, ${day} ${month} ${year}`;
document.querySelector("#current-date").textContent = currentDate;


// LazyLoad Images:
// Get all images with the "data-src" attribute:
let imagesToLoad = document.querySelectorAll('img[data-src]');

const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {image.removeAttribute('data-src');};
};
  
// Intersection Observer to load images only when the user scrolls
//down to display them in the viewport:

//Check to see if Intersection Observer is suported:
if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    // Loop through each image, check status, and load if necessary:
    imagesToLoad.forEach((img) => {observer.observe(img)});
  } 
  else { // If not supported, load all images:
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }