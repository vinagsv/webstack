const weatherDataEl = document.getElementById("weather-data");
const cityInputEl = document.getElementById("city-input");
const formEl = document.querySelector("form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const cityValue = cityInputEl.value;
  console.log(cityValue);
  getLatLon(cityValue);
});

async function getLatLon(city) {
  const res = await fetch(
    `https://nominatim.openstreetmap.org/search.php?q=${city}&format=jsonv2`
  );
  const [data] = await res.json();
  console.log(data);
  getWeatherData(data.lat, data.lon);
}

async function getWeatherData(lat, lon) {
  try {
    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,rain,wind_speed_10m`
    );

    if (!res.ok) {
      throw new Error("Network didn't respond with the data");
    }
    const data = await res.json();
    console.log(data);

    const temperature = Math.round(data.current.temperature_2m);
    const description = data.current.rain;

    const wind = data.current.wind_speed_10m;

    const details = [
      `Temperature: ${temperature}${data.current_units.temperature_2m}`,
      `Rain: ${description}`,
      `Wind: ${wind}${data.current_units.wind_speed_10m}`,
    ];

    weatherDataEl.querySelector(".details").innerHTML = details
      .map((detail) => `<div>${detail}</div>`)
      .join("");
  } catch (error) {
    weatherDataEl.querySelector(".details").innerHTML =
      "Failed to fetch the data from the APIs";
  }
}

// https://github.com/public-apis/public-apis
