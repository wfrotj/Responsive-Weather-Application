import "./style.css";
import fetchCurrentWeather from "./src/fetchCurrentWeather";
import appendWeather from "./src/appendWeather";
import updateTime from "./src/updateTime";

const formWeather = document.getElementById("form-weather");
const searchWeatherInput = document.getElementById("search-weather-input");

formWeather.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = searchWeatherInput.value;

  if (input === "") return;

  fetchCurrentWeather(input).then((data) => {
    appendWeather(data);
    searchWeatherInput.value = "";
  });
});
