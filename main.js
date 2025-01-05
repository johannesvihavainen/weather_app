var input = document.querySelector('.input');
var content = document.querySelector('.content');
var button = document.querySelector('.submit');

let nameVal = document.querySelector('.name');
let temp = document.querySelector('.temp');
let desc = document.querySelector('.desc');
let area = document.querySelector('.location');


// var temperature = document.createElement('p');
// temperature.className = 'temperature';
// content.appendChild(temperature);

// var location = document.createElement('p');
// location.className = 'location';
// content.appendChild(location);

var inputValue = "";
input.addEventListener('input', (event) => {
    inputValue = event.target.value;
})
button.addEventListener('click', function () {
    fetchAPI(inputValue);
    console.log(inputValue);
})

function fetchAPI(location) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=f41b23c3dfe1b23b8e6b43aa7aae62ff`)
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            console.log(response);

            const temperature = response.main.temp;
            const weatherDescription = response.weather[0].description;


            displayData({
                main: {
                    temp: temperature,
                },
                name: response.name,
                weather: [{ description: weatherDescription }]
            });
        });


}

const displayData = (weather) => {
    temp.innerText = `${weather.main.temp}°C`
    desc.innerText = `${weather.weather[0].description}`
    area.innerText = `${weather.name}`
}



