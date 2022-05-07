// Calculate windchill:
//formula: f = 35.74 + 0.6215t - 35.75 (s^0.16) + 0.4275t(s^0.16)

const temperature = document.querySelector("#temperature").value;
const windSpeed = parseInt(document.querySelector("#wind-speed").value);
let windChill;
console.log(temperature, windSpeed);

function computeWindChill (temp, speed) {
    windChill = 35.74 + 0.6215 * temp - 35.75 (speed ** 0.16) + 0.4275 * temp * (speed ** 0.16)
    return windChill;
}

if (temperature <= 50 && speed > 3) {
    windChill = computeWindChill(temperature, windChill);
} 
else {
    windChill = "N/A";
}

document.querySelector("#wind-chill").textContent = windChill;