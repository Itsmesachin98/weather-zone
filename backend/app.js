require("dotenv").config();

const apiKey = process.env.WEATHER_API_KEY;
const express = require("express");
const cors = require("cors");
const app = express();

app.use(
    cors({
        origin: "https://weather-app-khaki-delta-94.vercel.app",
    })
);

app.use(express.json());

// ===================== ROUTES =====================
app.get("/", (req, res) => {
    res.send("Server is running!");
});

// Handles POST requests to the root endpoint.
// Expects a city name in the request body, fetches weather and AQI data,
// and returns the combined data as JSON.
app.post("/", async (req, res) => {
    const city = req.body.city;
    const weatherData = await sendCityToOpenWeather(city);
    res.json(weatherData);
});

// Handles POST requests to "/latlon".
// Expects latitude and longitude in the request body, fetches weather and AQI data,
// and returns the combined data as JSON.
app.post("/latlon", async (req, res) => {
    const { lat, lon } = req.body;
    const weatherData = await sendLatLonToOpenWeather(lat, lon);
    res.json(weatherData);
});

// ===================== FUNCTIONS =====================

// Fetches weather data, AQI, local time, and sunrise/sunset times for a given latitude and longitude.
// Combines data from OpenWeather, TimeZoneDB, and Open-Meteo APIs into a single response object.
// Returns the combined data or logs an error if the request fails.
async function sendLatLonToOpenWeather(lat, lon) {
    let data;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        data = await response.json();

        if (data.cod === 200) {
            const sunriseAndSunsetTime = await getSunriseAndSunsetTime(
                lat,
                lon
            );
            data.sunrise = sunriseAndSunsetTime.sunriseTime;
            data.sunset = sunriseAndSunsetTime.sunsetTime;
            data.aqi = await getAqiFromOpenWeather(lat, lon);
            data.localTime = await getCityLocalTime(lat, lon);
        } else {
            console.log("Wrong latitude or longitude", data);
        }
    } catch (error) {
        console.log("Error occurred while fetching OpenWeather url ", error);
        data = null;
    }

    return data;
}

// Fetches weather data for a given city name using OpenWeather's API.
// Retrieves the latitude and longitude of the city from the initial response.
// Executes additional API calls to fetch sunrise, sunset, AQI, and local time data
// based on the city's coordinates.
// Returns the combined weather data or logs an error if the request fails.
async function sendCityToOpenWeather(city) {
    let lat, lon;
    let data;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        data = await response.json();

        if (data.cod === 200) {
            lat = data.coord.lat;
            lon = data.coord.lon;
        } else {
            console.log("City not found", data);
            return data;
        }
    } catch (error) {
        console.log("Error occurred while fetching OpenWeatherMap url ", error);
        data = null;
        return data;
    }

    // Executes additional API calls to fetch sunrise, sunset, AQI, and local time data
    // only if the initial weather data response is successful.
    const sunriseAndSunsetTime = await getSunriseAndSunsetTime(lat, lon);
    data.sunrise = sunriseAndSunsetTime.sunriseTime;
    data.sunset = sunriseAndSunsetTime.sunsetTime;
    data.aqi = await getAqiFromOpenWeather(lat, lon);
    data.localTime = await getCityLocalTime(lat, lon);

    return data;
}

// Fetches the sunrise and sunset times for a given latitude and longitude.
// Uses the Open-Meteo API to retrieve daily sunrise and sunset data.
// Returns an object containing the sunrise and sunset times or "No Data" if unavailable.
async function getSunriseAndSunsetTime(lat, lon) {
    let sunriseTime = "No Data";
    let sunsetTime = "No Data";
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=sunrise,sunset&timezone=auto`;

    try {
        const response = await fetch(url);
        if (response.status === 200) {
            const data = await response.json();
            sunriseTime = data.daily.sunrise[0];
            sunsetTime = data.daily.sunset[0];
        }
    } catch (error) {
        console.log(
            "Error occurred while fetching the sunrise and sunset url: ",
            error
        );
    }

    return { sunriseTime, sunsetTime };
}

// Fetches the Air Quality Index (AQI) for a given latitude and longitude.
// Uses OpenWeather's Air Pollution API to retrieve AQI data.
// Returns the AQI value or "No Data" if the request fails.
async function getAqiFromOpenWeather(lat, lon) {
    let aqi = "No Data";
    const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        if (response.status === 200) {
            const data = await response.json();
            aqi = data.list[0].main.aqi;
        }
    } catch (error) {
        console.log("Error occurred while fetching the AQI url ", error);
    }

    return aqi;
}

// Fetches the local time for a given latitude and longitude.
// Uses the TimeZoneDB API to retrieve the formatted local time of the city.
// Returns the local time as a string or "Unknown" if the request fails.
async function getCityLocalTime(lat, lon) {
    let localCityTime = "Unknown";
    const apiKey = process.env.TIMEZONE_DB_API_KEY;
    const url = `http://api.timezonedb.com/v2.1/get-time-zone?key=${apiKey}&format=json&by=position&lat=${lat}&lng=${lon}`;

    try {
        const response = await fetch(url);
        if (response.status === 200) {
            const data = await response.json();
            if (data.status === "OK") {
                localCityTime = data.formatted;
            }
        }
    } catch (error) {
        console.log("Error occurred while fetching the timezone url ", error);
    }

    return localCityTime;
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    // console.log(`Server running on http://localhost:${PORT}`);
});
