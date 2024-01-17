const btn = document.querySelector(".search-icon");
const city = document.getElementById("city");

btn.addEventListener("click", async () => {
    const receivedData = await sendDataToBacked(city.value.trim());
    console.log(receivedData.cod); // This will give us the status
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
