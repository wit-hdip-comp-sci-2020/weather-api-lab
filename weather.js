const axios = require("axios");
const apiKey = "YOUR API KEY"

console.log(`Weather API Key = ${apiKey}`);
const weatherRequest = `http://api.openweathermap.org/data/2.5/weather?q=Tramore,Ireland&appid=${apiKey}`;

async function getWeather() {
  let weather = {};
  const response = await axios.get(weatherRequest)
  if (response.status == 200) {
    weather = response.data
  }
  console.log(weather)
}

getWeather();
