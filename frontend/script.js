const btn = document.querySelector(".search-icon");
const city = document.getElementById("city");
const main = document.querySelector("main");

btn.addEventListener("click", async () => {
    // It returns true if there is an element of class "temp-container" exists.
    // Otherwise, it returns false
    const isThereTempContainer = document.querySelector(".temp-container")
        ? true
        : false;

    // It returns true if there is an element of class "empty-input" exists.
    // Otherwise, it returns false
    const isInputEmpty = document.querySelector(".empty-input") ? true : false;

    // This stores the data that we recieved from the backend
    const receivedData = await sendDataToBacked(city.value.trim());

    // It checks if the input field is empty or not
    if (parseInt(receivedData.cod) === 400) {
        if (isThereTempContainer) {
            if (!isInputEmpty) {
                const tempContainer = document.querySelector(".temp-container");
                tempContainer.parentNode.insertBefore(
                    createSpan("The input field cannot be blank"),
                    tempContainer
                );
            } else {
                const span = document.querySelector(".empty-input");
                span.innerText = "The input field cannot be blank";
            }
        } else {
            if (!isInputEmpty) {
                main.appendChild(createSpan("The input field cannot be blank"));
            } else {
                const span = document.querySelector(".empty-input");
                span.innerText = "The input field cannot be blank";
            }
        }

        // It checks if the city we entered is valid or not
    } else if (parseInt(receivedData.cod) === 404) {
        if (isThereTempContainer) {
            if (!isInputEmpty) {
                const tempContainer = document.querySelector(".temp-container");
                tempContainer.parentNode.insertBefore(
                    createSpan("The city you entered does not exist"),
                    tempContainer
                );
            } else {
                const span = document.querySelector(".empty-input");
                span.innerText = "The city you entered does not exist";
            }
        } else {
            if (!isInputEmpty) {
                main.appendChild(
                    createSpan("The city you entered does not exist")
                );
            } else {
                const span = document.querySelector(".empty-input");
                span.innerText = "The city you entered does not exist";
            }
        }

        // If everything is okay it gives the us the temperature of the city
    } else if (parseInt(receivedData.cod) === 200) {
        if (isInputEmpty) {
            removeSpan();
        }

        if (!isThereTempContainer) {
            main.appendChild(
                createDiv(receivedData.name, receivedData.main.temp)
            );
        } else {
            const temperature = document.querySelector(".temperature");
            temperature.innerText = `The temperature of ${receivedData.name} is ${receivedData.main.temp}°C`;
        }
    }
});

// This function sends data to the backend
const sendDataToBacked = async (value) => {
    const data = {
        cityName: value,
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

// This function creates something like this
/*
    <div>
        <p></p>
    </div>
*/
const createDiv = (city, temp) => {
    const div = document.createElement("div");
    div.classList.add("temp-container");
    const p = document.createElement("p");
    p.classList.add("temperature");
    p.innerText = `The temperature of ${city} is ${temp}°C`;
    div.appendChild(p);
    main.appendChild(div);
    return div;
};

// This function creates a span element
const createSpan = (innerTextToShow) => {
    const span = document.createElement("span");
    span.classList.add("empty-input");
    span.innerText = innerTextToShow;
    return span;
};

// This function removes the span element
const removeSpan = () => {
    const span = document.querySelector(".empty-input");
    span.remove();
};
