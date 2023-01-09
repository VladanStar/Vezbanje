// https://api.openweathermap.org/data/2.5/forecast/daily?q=Jagodina&mode=json&appid=1b1d0ad1ab386b48e8311d1e61b27554

fetch("https://api.openweathermap.org/data/2.5/forecast/daily?q=Jagodina&mode=json&appid=1b1d0ad1ab386b48e8311d1e61b27554")
.then((response) => response.json())
  .then((data) => console.log(data));