const apiKey = "f5306e40ff5bd7e7f8cde95bb63dc81c";

const url = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(url + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    let data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + `°C`;
    document.querySelector(".humidity").innerHTML = data.main.humidity + `%`;
    document.querySelector(".wind").innerHTML = data.wind.speed + ` km/h`;
    const weatherCondition = data.weather[0].main;
    if (weatherCondition === "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (weatherCondition === "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (weatherCondition === "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (weatherCondition === "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (weatherCondition === "Mist") {
      weatherIcon.src = "images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
