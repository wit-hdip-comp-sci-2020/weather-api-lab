const apiKey = "YOUR API KEY"
const weatherRequest = `http://api.openweathermap.org/data/2.5/weather?q=Tramore,Ireland&appid=${apiKey}`;

function renderCell(row, col, value) {
  const cell = row.insertCell(col);
  cell.innerHTML = value;
}

async function renderWeather(report) {
  const table = document.getElementById("weather-table");
  const row = table.insertRow(-1);
  renderCell(row, 0, report.feelsLike);
  renderCell(row,1, report.clouds);
  renderCell(row,2, report.windSpeed);
  renderCell(row,3, report.windDirection);
  renderCell(row,4, report.visibility);
  renderCell(row,5, report.humidity);
}

async function fetchWeather() {
  let weather = {};
  const response = await axios.get(weatherRequest)
  if (response.status == 200) {
    weather = response.data
  }
  const report = {
    feelsLike : Math.round(weather.main.feels_like -273.15),
    clouds : weather.weather[0].description,
    windSpeed: weather.wind.speed,
    windDirection: weather.wind.deg,
    visibility: weather.visibility/1000,
    humidity : weather.main.humidity
  }
  renderWeather(report)
}
