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


// Banner Ad:
let date = new Date();
let dayOfWeek = date.toLocaleDateString("en", {weekday: "long"});

function bannerAd() {
    document.querySelector(".banner-ad").style.display = "block";
}

if (dayOfWeek == "Friday") {
    bannerAd();
}


//Get town data from API:
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=74931a27fd930b4c0759da539d3eb770";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //Display Weather Summary:
    document.querySelector("#current-condition").textContent = jsObject.weather[0].description;
    document.querySelector("#temperature").textContent = jsObject.main.temp;
    document.querySelector("#humidity").textContent = jsObject.main.humidity;
    document.querySelector("#wind-speed").textContent = jsObject.wind.speed;
});


//Town Forecast:
const forecastApi = "https://api.openweathermap.org/data/2.5/forecast?lat=42.0963&lon=-111.8766&appid=74931a27fd930b4c0759da539d3eb770";
fetch(forecastApi)
  .then((response) => response.json())
  .then((forecast) => {
    
    let timeFilteredData = forecast.list.filter(item =>  item["dt_txt"].includes("18:00:00"));
    let currentDate = new Date();
    
    for (let i = 1; i <= timeFilteredData.length; i++ ) {      
      let day = new Date(currentDate.getTime() + i * 24 * 60 * 60 * 1000);
      outputDailyForecast(day, i, timeFilteredData);
    }

    function outputDailyForecast(day, i, timeFilteredData) {
      document.querySelector(`#day${i}-name`).textContent = day.toLocaleDateString("en", {weekday: "long"});
      const imagesrc = "http://openweathermap.org/img/wn/" + timeFilteredData[i-1].weather[0].icon + ".png";
      document.querySelector(`#day${i}-img`).setAttribute("src", imagesrc);
      document.querySelector(`#day${i}-data`).textContent = timeFilteredData[i-1].main.temp + " °F";
    }
});


// Calculate windchill:
//formula: f = 35.74 + 0.6215t - 35.75 (s^0.16) + 0.4275t(s^0.16)

const temperature = parseInt(document.querySelector("#temperature").textContent);
const windSpeed = parseInt(document.querySelector("#wind-speed").textContent);

function computeWindChill (temp, speed) {
    return Math.round(35.74 + 0.6215 * temp - 35.75 * (speed ** 0.16) + 0.4275 * temp * (speed ** 0.16))
};

if (temperature <= 50 && windSpeed > 3) {
    document.querySelector("#wind-chill").textContent = `${computeWindChill(temperature, windSpeed)} °F`;
} 
else {
    document.querySelector("#wind-chill").textContent = "N/A";
}


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