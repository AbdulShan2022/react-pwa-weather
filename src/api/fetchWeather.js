import axios from "axios";

export const fetchWeather = async (query) => {
    console.log(process.env.REACT_APP_WEATHER_API_KEY);
    
  const { data } = await axios.get(process.env.REACT_APP_URL, {
    params: {
      q: query,
      units: "metric",
      APPID: process.env.REACT_APP_WEATHER_API_KEY,
    },
  });
  return data;
};
