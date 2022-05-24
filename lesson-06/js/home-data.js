//Fetch towns data from JSON:
const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++ ) {

          if (towns[i].name == "Soda Springs") {
            displayTownData("soda", towns, i);
          }else if (towns[i].name == "Fish Haven") {
            displayTownData("fish", towns, i);
          }else if (towns[i].name == "Preston") {
            displayTownData("preston", towns, i);
          }
      }
    });

function displayTownData(town, towns, i) {
  document.querySelector(`#${town}-motto`).textContent = towns[i].motto;
  document.querySelector(`#${town}-year`).textContent = towns[i].yearFounded;
  document.querySelector(`#${town}-population`).textContent = towns[i].currentPopulation;
  document.querySelector(`#${town}-annual-rain`).textContent = towns[i].averageRainfall;
}