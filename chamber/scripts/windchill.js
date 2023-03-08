const apiURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Boise%2C%20Idaho?unitGroup=us&key=PFARUPTJZN58SQSPDJGRUH2G8&contentType=json";


let windSpeed = document.querySelector('#windSpeed span');
let weatherDescription = document.querySelector('#weatherDiscription');
let weatherIcon = document.querySelector('#weatherIcon');
let windChill = document.querySelector('#windChill span');

const getWeather = async () => {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);

    let temp = data.currentConditions.temp;
    document.querySelector('#temperature span').textContent = (temp).toFixed(1);

    let image = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Monochrome/${data.currentConditions.icon}.svg`;
    // https://github.com/visualcrossing/WeatherIcons/blob/main/SVG/1st%20Set%20-%20Monochrome/partly-cloudy-day.svg

    windSpeed.textContent = data.currentConditions.windspeed;
    weatherDescription.textContent = data.currentConditions.conditions;
    weatherIcon.src = image;
    weatherIcon.alt = data.currentConditions.conditions + ' icon';

    if (temp <= 50 && data.currentConditions.windspeed > 3.0) {

        windChill.textContent = Math.round((35.74 + (0.6215 * temp)) - (35.75 * Math.pow(windSpeed.textContent, 0.16)) + (0.4275 * temp * Math.pow(windSpeed.textContent, 0.16)));
    }
    else {
        windChill.textContent = "Wind Chill: N/A";
    };


};
getWeather();




