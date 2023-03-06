const hamburger = document.querySelector(".header__hamburger");
const navMenu = document.querySelector(".header__nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiYmlsYWx6dWtvIiwiYSI6ImNsYW8zcnQ4ejB2dzMzc29iZXRlZWk1ZTcifQ.yfUOi5f7MeqWqKvBdm49lg';

async function reverseGeocodeAsync(lon, lat) {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/Terlo.json?proximity=-73.990593%2C40.740121&access_token=` + MAPBOX_ACCESS_TOKEN;
  const response = await fetch(url);
  const data = await response.json();
  const address = data.features[0].place_name;
  return address;
}

async function main() {
  const lon = -73.990593; // Terloplein longitude
  const lat = 40.740121; // Terloplein latitude
  const address = await reverseGeocodeAsync(lon, lat);

  let lader = document.querySelector('.loader-1');
  lader.style.display = 'none';

  let plaats  = document.getElementById("adres");
  plaats.textContent = address;
}

main();
