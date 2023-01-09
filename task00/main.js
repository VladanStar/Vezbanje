// https://api.openweathermap.org/data/2.5/forecast/daily?q=Jagodina&mode=json&appid=1b1d0ad1ab386b48e8311d1e61b27554

// fetch("https://api.openweathermap.org/data/2.5/forecast/daily?q=Jagodina&units=imperial&mode=json&appid=1b1d0ad1ab386b48e8311d1e61b27554")
// .then((response) => response.json())
//   .then((data) => console.log(data));
// var e= document.getElementById("city").value;

function renderWeather(weather) {
  // let query = document.getElementsByClassName("city").value;
  console.log(weather);
  let resultsContainer = document.getElementById("weather-result");
  // create h2 for name
  let city = document.createElement("h2");
  city.textContent = weather.city.name;
  resultsContainer.append(city);
  // create p for humidity, wind, dwscription, temp

  let temp = document.createElement("p");
  temp.textContent = "Temp: " + weather.list[0].temp.day + "F";
  resultsContainer.append(temp);

  let humidity = document.createElement("p");
  humidity.textContent = "Humidity: " + weather.list[0].humidity;
  resultsContainer.append(humidity);

  let wind = document.createElement("p");
  wind.textContent = "Clouds: " + weather.list[0].weather[0].main;
  resultsContainer.append(wind);

  var weatherDetails = weather.list[0].weather[0].id;
  if (weatherDetails && weatherDetails.description) {
    let descriptions = document.createElement("p");
    descriptions.textContent = weatherDetails.descriptions;
    resultsContainer.append(descriptions);
  }
}

// Fetch weather data for city
function fetchWeather(query) {
  query = query.options[query.selectedIndex].text;
  let url =
    "https://api.openweathermap.org/data/2.5/forecast/daily?q=" +
    query +
    "&mode=json&appid=1b1d0ad1ab386b48e8311d1e61b27554";

  fetch(url)
    .then((response) => response.json())
    .then((data) => renderWeather(data));
}
