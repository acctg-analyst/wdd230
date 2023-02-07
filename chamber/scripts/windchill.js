let temp = document.querySelector('#temperature span').textContent;
let windSpeed = document.querySelector('#windSpeed span').textContent;
let windChill = document.querySelector('#windChill span');

if (temp <= 50 && windSpeed > 3.0) {

    windChill.textContent = Math.round((35.74 + (0.6215 * temp)) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16)));
}
else {
    document.querySelector('#windChill').textContent = "Wind Chill: N/A";
};
