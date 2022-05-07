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