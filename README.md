# 🌦️ Weather Report Application

A full-stack weather web app that fetches real-time weather data, air quality index (AQI), sunrise/sunset times, and local time for any city or location.

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Itsmesachin98/weather_app.git
cd weather-app
```

### 2️⃣ Install Backend Dependencies

```bash
cd backend
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file inside the `backend` folder and add:

```env
OPENWEATHER_API_KEY=your_openweather_api_key
TIMEZONEDB_API_KEY=your_timezonedb_api_key
```

### 4️⃣ Start the Server

```bash
node app.js
```

### 5️⃣ Open the App in Browser

Simply open the following file in your browser:

```bash
frontend/index.html
```

---

## 📂 Folder Structure

```bash
📁 Weather App
│
├── 📁 backend
│   ├── app.js                # Node.js + Express backend logic
│   ├── .env                  # API keys
│   ├── package.json          # Project metadata and dependencies
│   ├── package-lock.json     # Dependency lock file
│   └── node_modules/         # Installed dependencies
│
├── 📁 frontend
│   ├── index.html            # Main UI
│   ├── style.css             # Styling and layout
│   └── script.js             # Frontend logic and API requests
│
├── .gitignore                # Git ignored files
└── README.md                 # Project documentation
```

---

## 💡 Future Improvements

-   ✅ Responsive mobile-friendly design
-   ✅ User-friendly error messages
-   🔁 Hourly and Weekly weather forecast
-   📊 Detailed AQI breakdown
-   🌙 Dark mode toggle
-   🧪 Unit testing support

---

## 🫡 Acknowledgments

-   [OpenWeather API](https://openweathermap.org/)
-   [Open-Meteo API](https://open-meteo.com/)
-   [TimeZoneDB API](https://timezonedb.com/)
-   [MDN Web Docs](https://developer.mozilla.org/)

---

## 🤝 Contributing

Contributions are always welcome!

1. Fork the repo
2. Create a branch
    ```bash
    git checkout -b feature/your-feature
    ```
3. Commit your changes
    ```bash
    git commit -m 'Add something cool'
    ```
4. Push to your fork
    ```bash
    git push origin feature/your-feature
    ```
5. Open a pull request 🚀

---

## 📜 License

This project is licensed under the **MIT License**.  
Feel free to use, modify, and distribute for personal or commercial use.
