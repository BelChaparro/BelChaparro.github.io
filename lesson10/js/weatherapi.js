const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=74931a27fd930b4c0759da539d3eb770";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    //Display temperature in document:
    document.querySelector("#current-temp").textContent = jsObject.main.temp;

    //Display image path and image in document:
    const imagesrc = "http://openweathermap.org/img/wn/" + jsObject.weather[0].icon + ".png"
    const description = jsObject.weather[0].description;
    document.querySelector("#imagesrc").textContent = imagesrc;
    document.querySelector("#icon").setAttribute("src", imagesrc);
    document.querySelector("#icon").setAttribute("alt", description);
});