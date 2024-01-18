const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.post("/", async (req, res) => {
    const city = req.body.cityName; // We are getting the city name from the frontend
    const weatherData = await sendDataToOpenWeather(city);
    res.json(weatherData);
});

// This function sends the city name to openWeather and gives us the response
const sendDataToOpenWeather = async (value) => {
    const apiKey = "5a1edfd7b39974e2ea0a177487ce9cef";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (err) {
        console.log("Could not fetch data from OpenWeather");
    }
};

app.listen(port, () => console.log(`Server started at port ${port}`));
