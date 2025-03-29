// const card = document.getElementById("card");
const searchBtn = document.getElementById("search-btn");
const cityName = document.getElementById("city-name");
let allWeatherData;

// This function will run whenever the page loads
window.addEventListener("load", async () => {
    // createOverlayAndLoader();
    // createWeatherInfoCard();
    allWeatherData = await sendDataToBacked("Godda");
    console.log(allWeatherData);
    // if (allWeatherData === 404) {
    //     errorTemplate("images/error.png", "404 Error Occured!");
    // } else {
    //     if (numberOfChildren() === 2) {
    //         deleteWeatherInfo();
    //     }

    //     // createCityAndTemp();
    //     // getDateAndTime();
    //     // updateCityAndTemp(allWeatherData);
    // }
    // deleteOverlayAndLoader();
});

// ============== EVENT LISTENERS ==============

searchBtn.addEventListener("click", async () => {
    // console.log(cityName.value);
    allWeatherData = await sendDataToBacked(cityName.value);
    console.log(allWeatherData);
    updateWeatherInfo(allWeatherData);
});

// ============== FUNCTIONS ==============

function updateWeatherInfo(weatherInfo) {
    document.querySelector(".temp").innerHTML = `${Math.round(
        weatherInfo.current.temp_c
    )}&deg;C`;

    document.querySelector(
        ".weather-img"
    ).src = `https:${weatherInfo.current.condition.icon}`;
}

/*
    This function will create something like this
    <div class="city-temp"></div>
*/
// const createWeatherInfoCard = () => {
//     const cityTemp = document.createElement("div");
//     cityTemp.classList.add("city-temp");
//     card.appendChild(cityTemp);
// };

// // This function triggers when the input field is clicked
// const cityName = document.getElementById("city-name");
// cityName.addEventListener("click", () => {
//     cityName.classList.add("click-animation");

//     document.body.addEventListener("click", (evt) => {
//         if (!cityName.contains(evt.target)) {
//             cityName.classList.remove("click-animation");
//         }
//     });
// });

// const months = {
//     0: "January",
//     1: "February",
//     2: "March",
//     3: "April",
//     4: "May",
//     5: "June",
//     6: "July",
//     7: "August",
//     8: "September",
//     9: "October",
//     10: "November",
//     11: "December",
// };

// // This function updates the current date and time
// const getDateAndTime = () => {
//     const currDate = new Date();
//     const date = currDate.getDate();
//     const month = currDate.getMonth();
//     let hour = currDate.getHours();
//     const ampm = hour >= 12 ? "pm" : "am";
//     hour = hour % 12 || 12;
//     const minute = currDate.getMinutes();

//     const dateTime = document.querySelector(".date-time");
//     dateTime.innerText = `${months[month].slice(
//         0,
//         3
//     )} ${date}, ${hour}:${minute}${ampm}`;

//     return dateTime;
// };

// /*
//     This function will return the number of child element
//     stored inside the weather info card
// */
// const numberOfChildren = () => {
//     const cityTemp = document.querySelector(".city-temp");
//     const numberOfChild = cityTemp.children.length;
//     return numberOfChild;
// };

// // This triggers when the search button is clicked
// searchBtn.addEventListener("click", async () => {
//     if (cityName.value.trim() !== "") {
//         createOverlayAndLoader();
//         const allWeatherData = await sendDataToBacked(cityName.value);
//         deleteOverlayAndLoader();
//         if (allWeatherData === 404) {
//             deleteWeatherInfo();
//             errorTemplate("images/error.png", "404 Error Occured!");
//         } else if (allWeatherData.cod === 200) {
//             if (numberOfChildren() === 2) {
//                 deleteCityNotFoundTemplate();
//                 createCityAndTemp();
//                 getDateAndTime();
//                 updateCityAndTemp(allWeatherData);
//             } else {
//                 getDateAndTime();
//                 updateCityAndTemp(allWeatherData);
//             }
//         } else {
//             deleteWeatherInfo();
//             errorTemplate("images/404-error.png", "City Not Found!");
//         }
//     }
// });

// /*
//     This function will create the child elements which will be stored
//     inside the weather info card.

//     This function will create something like this:

//     <span class="date-time">Date, Time</span>
//     <h2 class="city">City, Country</h2>
//     <div class="curr-temp">
//         <div class="svg">
//             <img src="images/clear_sky.svg" />
//         </div>
//         <span class="temp">Temperature</span>
//     </div>
//     <span class="feels-like">Feels like 35&deg;C. Clear sky.</span>
// */
// const createCityAndTemp = () => {
//     const dateTime = document.createElement("span");
//     dateTime.classList.add("date-time");

//     const city = document.createElement("h2");
//     city.classList.add("city");

//     const currTemp = document.createElement("div");
//     currTemp.classList.add("curr-temp");

//     const svg = document.createElement("div");
//     svg.classList.add("svg");

//     const img = document.createElement("img");

//     const temp = document.createElement("span");
//     temp.classList.add("temp");

//     svg.appendChild(img);
//     currTemp.appendChild(svg);
//     currTemp.appendChild(temp);

//     const feelsLike = document.createElement("span");
//     feelsLike.classList.add("feels-like");

//     const cityTemp = document.querySelector(".city-temp");

//     cityTemp.appendChild(dateTime);
//     cityTemp.appendChild(city);
//     cityTemp.appendChild(currTemp);
//     cityTemp.appendChild(feelsLike);
// };

// /*
//     This function will delete the child elements which is stored
//     inside the weather info card
// */
// const deleteWeatherInfo = () => {
//     const cityTemp = document.querySelector(".city-temp");
//     while (cityTemp.firstChild) {
//         cityTemp.removeChild(cityTemp.firstChild);
//     }
// };

// /*
//     This function will run either when the city does not exist or
//     when there is some problem going on in the backend server
// */
// const errorTemplate = (image, text) => {
//     const cityTemp = document.querySelector(".city-temp");
//     cityTemp.classList.add("city-not-exist");

//     const errorLogoContainer = document.createElement("div");
//     errorLogoContainer.classList.add("error-logo-container");
//     const errorLogo = document.createElement("img");
//     errorLogo.classList.add("error-logo");
//     errorLogo.src = image;
//     errorLogoContainer.appendChild(errorLogo);
//     cityTemp.appendChild(errorLogoContainer);

//     const h3 = document.createElement("h3");
//     h3.innerText = text;
//     cityTemp.appendChild(h3);
// };

// const deleteCityNotFoundTemplate = () => {
//     const cityTemp = document.querySelector(".city-temp");
//     cityTemp.classList.remove("city-not-exist");
//     deleteWeatherInfo();
// };

// // This function updates the weather inforation
// const updateCityAndTemp = (weatherInfo) => {
//     const city = document.querySelector(".city");
//     const img = document.querySelector("img");
//     img.classList.add("weather-logo");
//     const temp = document.querySelector(".temp");
//     const feelsLike = document.querySelector(".feels-like");
//     city.innerText = `${weatherInfo.name}, ${weatherInfo.sys.country}`;
//     temp.innerText = `${Math.round(weatherInfo.main.temp)}°C`;
//     feelsLike.innerText = `Feels like ${Math.round(
//         weatherInfo.main.feels_like
//     )}°C. ${weatherInfo.weather[0].description}.`;

//     if (weatherInfo.weather[0].main === "Thunderstorm") {
//         img.src = "images/thunderstorm.png";
//     } else if (weatherInfo.weather[0].main === "Drizzle") {
//         img.src = "images/drizzle.png";
//     } else if (weatherInfo.weather[0].main === "Rain") {
//         img.src = "images/rain.png";
//     } else if (weatherInfo.weather[0].main === "Snow") {
//         img.src = "images/snow.png";
//     } else if (weatherInfo.weather[0].main === "Clear") {
//         img.src = "images/clear_sky.png";
//     } else if (weatherInfo.weather[0].main === "Clouds") {
//         img.src = "images/clouds.png";
//     } else {
//         img.src = "images/mist.png";
//     }
// };

// // This function creates the overlay and loader functionality
// const createOverlayAndLoader = () => {
//     const card = document.getElementById("card");
//     const overlay = document.createElement("div");
//     overlay.classList.add("overlay");
//     const loader = document.createElement("div");
//     loader.classList.add("loader");
//     card.appendChild(overlay);
//     card.appendChild(loader);
// };

// // This functions deletes the overlay and loader functionality
// const deleteOverlayAndLoader = () => {
//     try {
//         const overlay = document.querySelector(".overlay");
//         overlay.remove();
//     } catch (error) {}

//     try {
//         const loader = document.querySelector(".loader");
//         loader.remove();
//     } catch (error) {}
// };

// This function sends data to the backend
const sendDataToBacked = async (city) => {
    const data = {
        cityName: city,
    };

    try {
        const response = await fetch("http://localhost:3000/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const weatherData = await response.json();
        return weatherData;
    } catch (err) {
        return 404;
    }
};

// https://weather-app-6h2o.onrender.com/
// http://localhost:3000/
