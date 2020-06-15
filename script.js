function check() {
    let city = document.querySelector('.selectMenu').value;


    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=228562f46700846f45f0066acfa4e451`)
        .then(resp => resp.json())
        .then(function(data) {
            outs('.city-name', data.name);
            outs('.card-text', Math.floor(data.main.temp - 273) + " " + '&deg;')
            outs('.maxTemp', Math.floor(data.main.temp_max - 273) + " " + '&deg;')
            outs('.minTemp', Math.floor(data.main.temp_min - 273) + " " + ' &deg;')
            outs('.weather', `Weather : ${data.weather[0]['main']}`)
            outs('.windSpeed', `Wind Speed : ${data.wind.speed}`)
            outs('.card-img', `<img src = 'https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png' > `)
        })
}

function checkIn() {
    let cityIn = document.querySelector('.inputMenu').value;

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityIn}&appid=228562f46700846f45f0066acfa4e451`)
        .then(resp => resp.json())
        .then(function(data) {
            outs('.city-name', data.name);
            outs('.card-text', Math.floor(data.main.temp - 273) + " " + '&deg;')
            outs('.maxTemp', Math.floor(data.main.temp_max - 273) + " " + '&deg;')
            outs('.minTemp', Math.floor(data.main.temp_min - 273) + " " + ' &deg;')
            outs('.weather', `Weather : ${data.weather[0]['main']}`)
            outs('.windSpeed', `Wind Speed : ${data.wind.speed}`)
            outs('.card-img', `<img src = 'https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png' > `)
        })
}

function outs(block, out) {
    let b = document.querySelectorAll(block);
    for (let item of b) {
        item.innerHTML = out;
    }
}


document.querySelector('.btn1').addEventListener('click', check)
document.querySelector('.btn2').addEventListener('click', checkIn)