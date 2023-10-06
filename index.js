// 9478e11105466109c3b8ee83ffaf1798
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const api_key = "9478e11105466109c3b8ee83ffaf1798";
const api_url = `https://api.openweathermap.org/data/2.5/weather?units=metric&lang=ru&q=`;
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
let temp = document.querySelector(".temp");
let city = document.querySelector(".city");
let city_input = document.querySelector(".city_input");
let search_box = document.querySelector('.search input');
let search_button = document.querySelector('.search button');

async function check_weather(city_input) {
    const response = await fetch(api_url + city_input + `&appid=${api_key}`);
    let data = await response.json();

    city.innerHTML = data.name;
    temp.innerHTML = Math.floor(data.main.temp) + "°C";
    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + "km/h";

    console.log(data);
}


search_button.addEventListener('click', (e) => {
    check_weather(search_box.value);
})


check_weather("MAdrid");


