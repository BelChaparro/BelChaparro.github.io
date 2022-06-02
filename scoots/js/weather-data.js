//Get Cozumel data from API:
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=3530103&appid=74931a27fd930b4c0759da539d3eb770";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //Display Weather Summary:
    let tempInF = (jsObject.main.temp - 273.15) * 9/5 + 32;
    document.querySelector("#temperature").textContent = (Math.round(tempInF * 10) / 10);
    document.querySelector("#current-condition").textContent = jsObject.weather[0].description;
    document.querySelector("#humidity").textContent = jsObject.main.humidity;
});

//Cozumel Forecast:
const forecastApi = "https://api.openweathermap.org/data/2.5/forecast?lat=20.508329&lon=-86.945831&appid=74931a27fd930b4c0759da539d3eb770";
fetch(forecastApi)
  .then((response) => response.json())
  .then((forecast) => {
    
    let timeFilteredData = forecast.list.filter(item =>  item["dt_txt"].includes("12:00:00"));
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