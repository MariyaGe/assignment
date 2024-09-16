import { useEffect, useState } from "react";
import { getForecastData, getWeatherData } from "./action";
import ForecastCard from "./ForecastCard";
import SearchBar from "./SearchBar";
import "./styles.css";
import WeatherCard from "./WeatherCard";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      if (city) {
        try {
          const weather = await getWeatherData(city);
          const forecast = await getForecastData(city);
          setWeatherData(weather);
          setForecastData(forecast);
          setError(""); // Reset error
        } catch (err) {
          setError("City not found or API error.");
        }
      }
    };
    fetchWeather();
  }, [city]);
  const handleCityChange = (newCity: any) => {
    setCity(newCity);
  };

  return (
    <div className="container">
      <h1>Weather Dashboard</h1>
      <SearchBar onCityChange={handleCityChange} />
      {error && <div className="alert alert-danger">{error}</div>}
      {weatherData && <WeatherCard weather={weatherData} />}
      {forecastData && <ForecastCard forecast={forecastData} />}
    </div>
  );
}

export default App;
