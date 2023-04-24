export default async function fetchCurrentWeather(city) {
  const API_KEY = "b28fd5cbc45c29eae0305ec3104296ef";
  const CURRENT_WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  const response = await fetch(CURRENT_WEATHER_API);
  const weatherData = await response.json();

  return weatherData;
}
