// https://api.openweathermap.org/data/2.5/forecast/daily?q=Jagodina&mode=json&appid=1b1d0ad1ab386b48e8311d1e61b27554

// fetch("https://api.openweathermap.org/data/2.5/forecast/daily?q=Jagodina&units=imperial&mode=json&appid=1b1d0ad1ab386b48e8311d1e61b27554")
// .then((response) => response.json())
//   .then((data) => console.log(data));

function renderWeather(weather) {
  
  console.log(weather)
  let resultsContainer = document.getElementById("weather-result");
  // create h2 for name
  let city = document.createElement('h2');
  city.textContent = weather.name;
  resultsContainer.append(city);
  // create p for humidity, wind, dwscription, temp

  let temp = document.createElement("p");
  temp.textContent = "Temp: " + weather.list[0].temp.day + "F";
  resultsContainer.append(temp)
  
  let humidity =  document.createElement("p");
  humidity.textContent = "Humidity: " + weather.list[0].humidity;
  resultsContainer.append(humidity);

  let wind = document.createElement("p");
  wind.textContent = "Clouds: " + weather.list[0].weather[0].main
  resultsContainer.append(wind);

  details.append("")
}

// Fetch weather data for city
function fetchWeather(query){
  let url = "https://api.openweathermap.org/data/2.5/forecast/daily?q=Kragujevac&mode=json&appid=1b1d0ad1ab386b48e8311d1e61b27554";

   fetch(url)
 .then((response) => response.json())
  .then((data) => renderWeather(data))
}
fetchWeather();