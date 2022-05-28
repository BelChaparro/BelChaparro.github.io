//Get town data from API:
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&appid=74931a27fd930b4c0759da539d3eb770";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //Display Weather Summary:
    document.querySelector("#current-condition").textContent = jsObject.weather[0].description;
    let tempInF = (jsObject.main.temp - 273.15) * 9/5 + 32;
    document.querySelector("#temperature").textContent = (Math.round(tempInF * 10) / 10);
    document.querySelector("#humidity").textContent = jsObject.main.humidity;
    document.querySelector("#wind-speed").textContent = jsObject.wind.speed;
});


//Get town upcoming events:
const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++ ) {

          if (towns[i].name == "Soda Springs") {
            towns[i].events.forEach(event => document.querySelector("#events").innerHTML += `<ul><li>${event}</li></ul>`);
            ;
          }
      }
    });


//Town Forecast:
const forecastApi = "https://api.openweathermap.org/data/2.5/forecast?lat=42.654369&lon=-111.604668&appid=74931a27fd930b4c0759da539d3eb770";
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
      let convertedTemp = (timeFilteredData[i-1].main.temp - 273.15) * 9/5 + 32;
      document.querySelector(`#day${i}-data`).textContent = (Math.round(convertedTemp * 10) / 10)  + " °F";
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