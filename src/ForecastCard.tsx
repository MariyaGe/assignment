import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faCloud,
  faCloudRain,
  faWind,
  faDroplet,
} from "@fortawesome/free-solid-svg-icons";

function ForecastCard({ forecast }: { forecast: any }) {
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

  const forecastData = forecast.list.slice(0, 5);

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">5-Day Forecast</h5>
        <div className="row">
          {forecastData.map((day: any, index: any) => (
            <div className="col-md-2" key={index}>
              <div className="card">
                <div className="card-body">
                  <p className="card-title">
                    {new Date(day.dt * 1000).toLocaleDateString()}
                  </p>
                  <FontAwesomeIcon
                    icon={getIcon(day.weather[0].main)}
                    size="2x"
                    className="mb-2"
                  />
                  <p className="card-text">High: {day.main.temp_max}°C</p>
                  <p className="card-text">Low: {day.main.temp_min}°C</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ForecastCard;
