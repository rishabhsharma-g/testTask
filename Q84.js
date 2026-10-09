async function getWeather() {
    const city = document.getElementById("city").value.trim();
    const message = document.getElementById("message");
    const weather = document.getElementById("weather");

    if (city === "") {
        message.textContent = "Please enter a city name.";
        weather.innerHTML = "";
        return;
    }

    message.textContent = "Loading weather...";
    weather.innerHTML = "";

    try {
        // Step 1: Find city coordinates
        const cityResponse = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`
        );

        if (!cityResponse.ok) {
            throw new Error("Could not search for city.");
        }

        const cityData = await cityResponse.json();

        if (!cityData.results || cityData.results.length === 0) {
            throw new Error("City not found. Try another name.");
        }

        const location = cityData.results[0];

        // Step 2: Get weather using coordinates
        const weatherResponse = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m`
        );

        if (!weatherResponse.ok) {
            throw new Error("Could not get weather data.");
        }

        const weatherData = await weatherResponse.json();
        const current = weatherData.current;

        // Step 3: Display weather
        message.textContent = "Weather in " + location.name;

        weather.innerHTML = `
            <h2>${current.temperature_2m} °C</h2>
            <p>Feels like: ${current.apparent_temperature} °C</p>
            <p>Humidity: ${current.relative_humidity_2m}%</p>
            <p>Wind Speed: ${current.wind_speed_10m} km/h</p>
            <p>Weather Code: ${current.weather_code}</p>
        `;

    } catch (error) {
        message.textContent = error.message.includes("City not found")
            ? error.message
            : "Unable to load weather. Check your internet and try again.";

        console.log("Error:", error);
    }
}