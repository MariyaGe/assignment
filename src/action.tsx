import axios from "axios";

const API_BASE_URL = "https://openweathermap.org/";

export const getWeatherData = async (city: any, apiKey?: any) => {
  try {
    const response = await await axios.get(
      `${API_BASE_URL}/forecast?q=${city}&units=metric`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getForecastData = async (city: any, apiKey?: any) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/forecast?q=${city}&units=metric`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
