// api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=fd4ddf579d99660e5467901202dda0e3

const weatherData = [
    { city: 'Beograd', temperature: 15 },
    { city: 'Novi Sad', temperature: 13 },
    { city: 'Niš', temperature: 14 },
    { city: 'Kragujevac', temperature: 12 },
    { city: 'Subotica', temperature: 10 },
    { city: 'Čačak', temperature: 11 },
    { city: 'Kraljevo', temperature: 13 },
    { city: 'Pančevo', temperature: 15 },
    { city: 'Sombor', temperature: 12 },
    { city: 'Zrenjanin', temperature: 14 }
  ];
  
  function displayWeather(data, date) {
    // kreiramo tabelu
    const table = document.createElement('table');
  
    // kreiramo zaglavlje tabele
    const headerRow = document.createElement('tr');
    const cityHeader = document.createElement('th');
    cityHeader.textContent = 'Grad';
    headerRow.appendChild(cityHeader);
    const temperatureHeader = document.createElement('th');
    temperatureHeader.textContent = 'Temperatura';
    headerRow.appendChild(temperatureHeader);
    table.appendChild(headerRow);
  
    // kreiramo redove tabele sa podacima o vremenu
    data.forEach(row => {
      const tableRow = document.createElement('tr');
      const cityCell = document.createElement('td');
      cityCell.textContent = row.city;
      tableRow.appendChild(cityCell);
      const temperatureCell = document.createElement('td');
      temperatureCell.textContent = row.temperature;
      tableRow.appendChild(temperatureCell);
      table.appendChild(tableRow);
    });
  
    // postavljamo tabelu na stranicu
    document.body.appendChild(table);
  }
  
  // pozivamo funkciju za prikaz vremenske prognoze
  displayWeather(weatherData, '2022-01-09');