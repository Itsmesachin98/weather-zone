require("dotenv").config();

const apiKey = process.env.WEATHER_API_KEY;
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
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
    const weatherData = await sendDataToOpenWeather(city);
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

// This function fetches weather data and Air Quality Index (AQI) for a given latitude and longitude.
// It first retrieves the AQI using the `getAqiFromOpenWeather` function, then fetches weather data
// from OpenWeather's API. If successful, it combines the AQI with the weather data and returns it.
async function sendLatLonToOpenWeather(lat, lon) {
    const cityTime = await getCityLocalTime(lat, lon);
    const aqi = await getAqiFromOpenWeather(lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            data.aqi = aqi.list[0].main.aqi;
            data.formatted = cityTime.formatted;
            return data;
        }
    } catch (error) {
        console.log("Error occurred while fetching url ", error);
    }
}

// This function sends the city name to openWeather and gives us the response
async function sendDataToOpenWeather(value) {
    let cityLat, cityLon;
    let aqi = "No Data";
    let data = null;

    // Url to get weather information
    const weatherInfoUrl = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${apiKey}&units=metric`;
    try {
        const weatherResponse = await fetch(weatherInfoUrl);
        data = await weatherResponse.json();

        if (data.cod === 200) {
            cityLat = data.coord.lat;
            cityLon = data.coord.lon;
        } else {
            return data;
        }
    } catch (error) {
        console.log("Error occurred while fetching url ", error);
        return data;
    }

    const cityTime = await getCityLocalTime(cityLat, cityLon);
    const airPollutionData = await getAqiFromOpenWeather(cityLat, cityLon);
    aqi = airPollutionData.list[0].main.aqi;
    data.aqi = aqi;
    data.formatted = cityTime.formatted;
    return data;

    // Url to get Air Qulaity Index (AQI) information
    // try {
    //     const aqiInfoUrl = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${cityLat}&lon=${cityLon}&appid=${apiKey}`;
    //     const aqiResponse = await fetch(aqiInfoUrl);
    //     const aqiData = await aqiResponse.json();
    //     aqi = aqiData.list[0].main.aqi;
    // } catch (error) {
    //     console.log("Error occurred while fetching weather info ", error);
    // }

    // data.aqi = aqi;
    // return data;
}

async function getAqiFromOpenWeather(lat, lon) {
    const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error occurred while fetching the AQI url ", error);
    }
}

async function getCityLocalTime(lat, lon) {
    const apiKey = process.env.TIMEZONE_DB_API_KEY;
    const url = `http://api.timezonedb.com/v2.1/get-time-zone?key=${apiKey}&format=json&by=position&lat=${lat}&lng=${lon}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error occurred while fetching the timezone url ", error);
    }
}

// app.listen(port, () => console.log(`Server started at port ${port}`));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    // console.log(`Server running on port ${PORT}`);
    console.log(`Server running on http://localhost:${PORT}`);
});

// https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${apiKey}&units=metric
// http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${value}&aqi=no
