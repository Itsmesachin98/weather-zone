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
    let cityCode;

    // Url to get city code
    const cityCodeUrl = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${value}`;
    try {
        const response = await fetch(cityCodeUrl);
        console.log(response);
        if (response.status === 200) {
            const data = await response.json();

            if (data === null) {
                // The search bar is empty
            } else if (data.length === 0) {
                // The entered city is incorrect
            } else {
                cityCode = data[0].Key;
                console.log(`${value}'s city code is ${cityCode}`);
            }
        } else {
            console.log("Unable to fetch url");
            return;
        }
    } catch (error) {
        console.log("Error occurred while fetching city code ", error);
        return;
    }

    // Url to get weather info
    try {
        const weatherInfoUrl = `http://dataservice.accuweather.com/forecasts/v1/daily/1day/${cityCode}?apikey=${apiKey}&details=true&metric=true`;
        const weatherInfo = await fetch(weatherInfoUrl);
        const weatherData = await weatherInfo.json();
        console.log(weatherData);
    } catch (error) {
        console.log("Error occurred while fetching weather info ", error);
    }

    // try {
    //     let data = 400;
    //     const response = await fetch(url);
    //     if (response.status === 200) {
    //         data = await response.json();
    //     }
    //     return data;
    // } catch (err) {
    //     console.log("Could not fetch data from OpenWeather");
    // }
};

// app.listen(port, () => console.log(`Server started at port ${port}`));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    // console.log(`Server running on port ${PORT}`);
    console.log(`Server running on http://localhost:${PORT}`);
});

// https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${apiKey}&units=metric
// http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${value}&aqi=no
