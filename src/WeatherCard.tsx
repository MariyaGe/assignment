import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faCloud,
  faCloudRain,
  faWind,
  faDroplet,
} from "@fortawesome/free-solid-svg-icons";

function WeatherCard({ weather }: { weather: any }) {
  const getIcon = (condition: any) => {
    switch (condition) {
      case "Clouds":
        return faCloud;
      case "Rain":
        return faCloudRain;
      default:
        return faSun;
    }
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">
          {weather.name}, {weather.sys.country}
        </h5>
        <FontAwesomeIcon
          icon={getIcon(weather.weather[0].main)}
          size="2x"
          className="mb-2"
        />
        <p className="card-text">Temperature: {weather.main.temp}°C</p>
        <p className="card-text">
          <FontAwesomeIcon icon={faWind} /> Wind: {weather.wind.speed} m/s
        </p>
        <p className="card-text">
          <FontAwesomeIcon icon={faDroplet} /> Humidity: {weather.main.humidity}
          %
        </p>
      </div>
    </div>
  );
}

export default WeatherCard;
