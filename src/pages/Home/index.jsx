import React, { useState, useEffect } from "react";
import './WeatherCard.css'; // Add CSS for styling

const Index = () => {
  const [city, setCity] = useState("Visakhapatnam");
  const [weatherData, setWeatherData] = useState(null);
  const [weeklyData, setWeeklyData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = "d7317220751fbe3704344cfd8887655a";

  const fetchWeather = (city) => {
    setLoading(true);
    setError(null);
    // Fetch today's weather
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},IN&units=metric&appid=${apiKey}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => {
        setWeatherData(data.list[0]); // For current time-slot forecast
        setWeeklyData(data.list.slice(0, 7)); // Example of slicing first 7 slots for weekly forecast
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  return (
    <div className="weather-container">
      <div className="search-bar">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
        />
        <button onClick={() => fetchWeather(city)}>Search</button>
      </div>

      <div className="weather-cards">
        {loading ? (
          <div className="loading">Loading...</div>
        ) : error ? (
          <div className="error">Error: {error}</div>
        ) : (
          <>
            {/* Card 1: Today's Forecast */}
            <div className="card card-forecast">
              <h3>Today's Forecast</h3>
              <div>{`Temperature: ${weatherData.main.temp}°C`}</div>
              <div>{`Weather: ${weatherData.weather[0].description}`}</div>
              <div>{`Humidity: ${weatherData.main.humidity}%`}</div>
              <div>{`Time: ${new Date(weatherData.dt * 1000).toLocaleTimeString()}`}</div>
            </div>

            {/* Card 2: Air Conditions */}
            <div className="card card-air">
              <h3>Air Conditions</h3>
              <div>{`Real Feel: ${weatherData.main.feels_like}°C`}</div>
              <div>{`Chance of Rain: ${weatherData.pop * 100}%`}</div>
              <div>{`Pressure: ${weatherData.main.pressure} hPa`}</div>
              <div>{`Wind Speed: ${weatherData.wind.speed} km/h`}</div>
            </div>

            {/* Card 3: Weekly Forecast */}
            <div className="card card-weekly">
              <h3>Weekly Forecast</h3>
              <div className="weekly-grid">
                {weeklyData.map((day, index) => (
                  <div key={index} className="day-forecast">
                    <div>{new Date(day.dt * 1000).toLocaleDateString()}</div>
                    <div>{`Temp: ${day.main.temp}°C`}</div>
                    <div>{`Weather: ${day.weather[0].description}`}</div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Index;
