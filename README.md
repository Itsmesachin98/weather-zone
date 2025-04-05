🌤️ Weather Report Application
A full-stack Weather Report Application that provides real-time weather information, including:

Temperature

Air Quality Index (AQI)

Sunrise & Sunset Times

Local Time

Geolocation-based weather updates

Built with a modern frontend and Node.js backend, it integrates multiple APIs to dynamically fetch and display data based on city input or current location.

🚀 Features
🌐 Frontend
🔍 Search by City

Enter a city name to fetch current weather, humidity, wind speed, AQI, and more.

📍 Automatic Location Detection

Uses the Geolocation API to detect your current location and fetch weather data accordingly.

🌦️ Dynamic Weather Icons

Displays weather-specific SVG icons (e.g., sunny, cloudy, rainy).

🕒 Date and Time Display

Shows current date, time, and whether it’s Day or Night based on local time.

⏳ Loading Indicator

Displays a loader while data is being fetched for a smooth user experience.

🖥️ Backend
🌡️ Weather Data Fetching

Uses OpenWeather API to get current weather and AQI.

🌅 Sunrise and Sunset Times

Fetched using the Open-Meteo API.

⏰ Local Time Retrieval

Uses TimeZoneDB API to display city’s local time.

⚠️ Robust Error Handling

Handles invalid inputs, denied location permissions, and API failures gracefully.

🛠️ Technologies Used
Frontend:
HTML5

CSS3

JavaScript (ES6)

Geolocation API

Backend:
Node.js

Express.js

dotenv (for managing API keys)

CORS (for cross-origin requests)

APIs:
OpenWeather API – Weather & AQI data

Open-Meteo API – Sunrise & sunset times

TimeZoneDB API – Local time data

📦 Project Structure
pgsql
Copy
Edit
Weather App/
├── backend/
│ ├── app.js
│ ├── .env
│ ├── node_modules/
│ ├── package.json
│ └── package-lock.json
├── frontend/
│ ├── index.html
│ ├── style.css
│ └── script.js
├── .gitignore
└── README.md
⚙️ Installation & Setup
🔧 Prerequisites
Node.js installed

API Keys for:

OpenWeather API

TimeZoneDB API

📝 Steps
Clone the repository

bash
Copy
Edit
git clone <repo_url>
cd "Weather App"
Install dependencies

bash
Copy
Edit
cd backend
npm install
Create .env file In the backend/ folder, add:

env
Copy
Edit
OPENWEATHER_API_KEY=your_key_here
TIMEZONEDB_API_KEY=your_key_here
Start the server

bash
Copy
Edit
node app.js
Open the App Open frontend/index.html in your browser.

🔮 Future Enhancements
✅ Add unit tests for frontend/backend

📱 Improve responsive design for mobile

❌ Better error messages for invalid inputs

📊 Add hourly/weekly forecasts and detailed AQI info

📜 License
This project is licensed under the MIT License.
Feel free to use, modify, and distribute.

🙏 Acknowledgments
OpenWeather API

Open-Meteo API

TimeZoneDB API

MDN Web Docs – for JavaScript and Geolocation API references.

🤝 Contributing
Contributions are welcome!
Feel free to open issues or submit pull requests. 😊
