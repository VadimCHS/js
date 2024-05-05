// Задание 1
// 1. Поиск в интернете (бесплатные api примеры).
// 2. Найти любые данные, на произвольную тему.
// 3. Создать файл data.js.
// 4. Создать переменную которая будет хранить данные из публичных api.

// Задание 2
// 1. Создать файл index.html.
// 2. Подключить data.js.
// 3. Сформировать контент из данных (картинка загловок и параграф).
// 4. Добавить данный контент в вёрстку.
// 5. * Добавить стили при необходимости (по желанию).

"use script"

const elContainer = document.querySelector('div.container');

const cities = ['Сочи', 'Казань', 'Москва', 'Челябинск'];
let count = 0;

const parseData = JSON.parse(dataInfo);
count = 0;
parseData.forEach(el => {
    
    const newDivEl = document.createElement('div');
    newDivEl.classList.add('new_container');

    const newImgEl = document.createElement('img');
    newImgEl.classList.add(el.class);
    newImgEl.setAttribute('src', el.url);
    newDivEl.appendChild(newImgEl);
    
    elContainer.appendChild(newDivEl);
});

const containerEl = elContainer.querySelectorAll('.new_container');
console.log(containerEl);



fetch("https://api.open-meteo.com/v1/forecast?latitude=43.5992,55.7887,55.7522,55.154&longitude=39.7257,49.1221,37.6156,61.4291&current=temperature_2m,relative_humidity_2m,precipitation,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,daylight_duration,precipitation_sum&timezone=auto").then((response) => response.json()).then((parseResult) => {
    parseResult.forEach(element => {
        // console.log(element);
        if (count > 3) {
            count = 0;
        }

        const newDivEl = document.createElement('div');
        newDivEl.classList.add('content_container');


        const newHEl = document.createElement('h2');
        newHEl.classList.add('el-position')
        newHEl.innerHTML = cities[count];
        newDivEl.appendChild(newHEl);

        const tempEl = document.createElement('p');
        tempEl.classList.add('el-position')
        tempEl.innerHTML = `Температура: ${element.current.temperature_2m} ${element.current_units.temperature_2m}`;
        newDivEl.appendChild(tempEl);

        const humidityEl = document.createElement('p');
        humidityEl.classList.add('el-position')
        humidityEl.innerHTML = `Влажность: ${element.current.relative_humidity_2m} ${element.current_units.relative_humidity_2m}`;
        newDivEl.appendChild(humidityEl);

        const speedEl = document.createElement('p');
        speedEl.classList.add('el-position')
        speedEl.innerHTML = `Скорость ветра: ${element.current.wind_speed_10m} ${element.current_units.wind_speed_10m}`;
        newDivEl.appendChild(speedEl);

        containerEl[count++].appendChild(newDivEl);
    });
});




