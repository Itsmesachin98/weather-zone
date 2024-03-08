const card = document.getElementById("card");

window.addEventListener("load", async () => {
    createOverlayAndLoader();
    createWeatherInfoCard();
    createCityAndTemp();
    const allWeatherData = await sendDataToBacked("Godda");
    getDateAndTime();
    updateCityAndTemp(allWeatherData);
    deleteOverlayAndLoader();
});

/*
    This function will create something like this
    <div class="city-temp"></div>
*/
const createWeatherInfoCard = () => {
    const cityTemp = document.createElement("div");
    cityTemp.classList.add("city-temp");
    card.appendChild(cityTemp);
};

// This function triggers when the input field is clicked
const cityName = document.getElementById("city-name");
cityName.addEventListener("click", () => {
    cityName.classList.add("click-animation");

    document.body.addEventListener("click", (evt) => {
        if (!cityName.contains(evt.target)) {
            cityName.classList.remove("click-animation");
        }
    });
});

const months = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
};

// This function updates the current date and time
const getDateAndTime = () => {
    const currDate = new Date();
    const date = currDate.getDate();
    const month = currDate.getMonth();
    let hour = currDate.getHours();
    const ampm = hour >= 12 ? "pm" : "am";
    hour = hour % 12 || 12;
    const minute = currDate.getMinutes();

    const dateTime = document.querySelector(".date-time");
    dateTime.innerText = `${months[month].slice(
        0,
        3
    )} ${date}, ${hour}:${minute}${ampm}`;

    return dateTime;
};

const numberOfChildren = () => {
    const cityTemp = document.querySelector(".city-temp");
    const numberOfChild = cityTemp.children.length;
    return numberOfChild;
};

// This triggers when the search button is clicked
document.getElementById("search-btn").addEventListener("click", async () => {
    if (cityName.value.trim() !== "") {
        createOverlayAndLoader();
        const allWeatherData = await sendDataToBacked(cityName.value);
        deleteOverlayAndLoader();
        if (allWeatherData.cod === 200) {
            console.log(allWeatherData);
            if (numberOfChildren() === 2) {
                deleteCityNotFoundTemplate();
                createCityAndTemp();
                getDateAndTime();
                updateCityAndTemp(allWeatherData);
            } else {
                getDateAndTime();
                updateCityAndTemp(allWeatherData);
            }
        } else {
            deleteWeatherInfo();
            createCityNotFoundTemplate();
        }
    }
});

// This function will create the weather information card
const createCityAndTemp = () => {
    const dateTime = document.createElement("span");
    dateTime.classList.add("date-time");

    const city = document.createElement("h2");
    city.classList.add("city");

    const currTemp = document.createElement("div");
    currTemp.classList.add("curr-temp");

    const svg = document.createElement("div");
    svg.classList.add("svg");

    const img = document.createElement("img");

    const temp = document.createElement("span");
    temp.classList.add("temp");

    svg.appendChild(img);
    currTemp.appendChild(svg);
    currTemp.appendChild(temp);

    const feelsLike = document.createElement("span");
    feelsLike.classList.add("feels-like");

    const cityTemp = document.querySelector(".city-temp");

    cityTemp.appendChild(dateTime);
    cityTemp.appendChild(city);
    cityTemp.appendChild(currTemp);
    cityTemp.appendChild(feelsLike);
};

// This function will delete the weather information card
const deleteWeatherInfo = () => {
    const cityTemp = document.querySelector(".city-temp");
    while (cityTemp.firstChild) {
        cityTemp.removeChild(cityTemp.firstChild);
    }
};

// This function will run when the city does not exist
const createCityNotFoundTemplate = () => {
    const cityTemp = document.querySelector(".city-temp");
    cityTemp.classList.add("city-not-exist");

    const errorLogoContainer = document.createElement("div");
    errorLogoContainer.classList.add("error-logo-container");
    const errorLogo = document.createElement("img");
    errorLogo.classList.add("error-logo");
    errorLogo.src = "images/404-error.png";
    errorLogoContainer.appendChild(errorLogo);
    cityTemp.appendChild(errorLogoContainer);

    const h3 = document.createElement("h3");
    h3.innerText = "City Not Found!";
    cityTemp.appendChild(h3);
};

const deleteCityNotFoundTemplate = () => {
    const cityTemp = document.querySelector(".city-temp");
    cityTemp.classList.remove("city-not-exist");
    deleteWeatherInfo();
};

// This function updates the weather inforation
const updateCityAndTemp = (weatherInfo) => {
    const city = document.querySelector(".city");
    const img = document.querySelector("img");
    img.classList.add("weather-logo");
    const temp = document.querySelector(".temp");
    const feelsLike = document.querySelector(".feels-like");
    city.innerText = `${weatherInfo.name}, ${weatherInfo.sys.country}`;
    temp.innerText = `${Math.round(weatherInfo.main.temp)}°C`;
    feelsLike.innerText = `Feels like ${Math.round(
        weatherInfo.main.feels_like
    )}°C. ${weatherInfo.weather[0].description}.`;

    if (weatherInfo.weather[0].main === "Thunderstorm") {
        img.src = "images/thunderstorm.png";
    } else if (weatherInfo.weather[0].main === "Drizzle") {
        img.src = "images/drizzle.png";
    } else if (weatherInfo.weather[0].main === "Rain") {
        img.src = "images/rain.png";
    } else if (weatherInfo.weather[0].main === "Snow") {
        img.src = "images/snow.png";
    } else if (weatherInfo.weather[0].main === "Clear") {
        img.src = "images/clear_sky.png";
    } else if (weatherInfo.weather[0].main === "Clouds") {
        img.src = "images/clouds.png";
    } else {
        img.src = "images/mist.png";
    }
};

// This function creates the overlay and loader functionality
const createOverlayAndLoader = () => {
    const card = document.getElementById("card");
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    const loader = document.createElement("div");
    loader.classList.add("loader");
    card.appendChild(overlay);
    card.appendChild(loader);
};

// This functions deletes the overlay and loader functionality
const deleteOverlayAndLoader = () => {
    try {
        const overlay = document.querySelector(".overlay");
        overlay.remove();
    } catch (error) {}

    try {
        const loader = document.querySelector(".loader");
        loader.remove();
    } catch (error) {}
};

// This function sends data to the backend
const sendDataToBacked = async (city) => {
    const data = {
        cityName: city,
    };

    try {
        const response = await fetch("http://localhost:8080/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const weatherData = await response.json();
        return weatherData;
    } catch (err) {
        console.log("Could not fetch from the api");
    }
};
