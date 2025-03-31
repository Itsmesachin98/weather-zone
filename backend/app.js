require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is running!");
});

app.post("/", async (req, res) => {
    const city = req.body.cityName; // We are getting the city name from the frontend
    const weatherData = await sendDataToOpenWeather(city);
    res.json(weatherData);
});

// This function sends the city name to openWeather and gives us the response
const sendDataToOpenWeather = async (value) => {
    const apiKey = process.env.API_KEY;
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

    // Url to get Air Qulaity Index (AQI) information
    try {
        const aqiInfoUrl = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${cityLat}&lon=${cityLon}&appid=${apiKey}`;
        const aqiResponse = await fetch(aqiInfoUrl);
        const aqiData = await aqiResponse.json();
        aqi = aqiData.list[0].main.aqi;
    } catch (error) {
        console.log("Error occurred while fetching weather info ", error);
    }

    data.aqi = aqi;
    return data;
};

// app.listen(port, () => console.log(`Server started at port ${port}`));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    // console.log(`Server running on port ${PORT}`);
    console.log(`Server running on http://localhost:${PORT}`);
});

// https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${apiKey}&units=metric
// http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${value}&aqi=no
