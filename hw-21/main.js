document.querySelector('#js--button').addEventListener('click', function () {
    const promise = fetch('http://api.openweathermap.org/data/2.5/weather?q=KYIV&units=metric&APPID=5d066958a60d315387d9492393935c19', {
        method: "GET",
    })
    promise
        .then(res => res.json())
        .then(data => {
            const iconUrl = "http://openweathermap.org/img/w/" + data['weather'][0]['icon'] + ".png";
            document.querySelector('#js--country').innerHTML = JSON.stringify(data.name);
            document.querySelector('#js--temp').innerHTML = JSON.stringify(data.main.temp);
            document.querySelector('#js--pressure').innerHTML = JSON.stringify(data.main.pressure);
            document.querySelector('#js--description').innerHTML = JSON.stringify(data['weather'][0]['description']);
            document.querySelector('#js--humidity').innerHTML = JSON.stringify(data.main.humidity);
            document.querySelector('#js--wind-speed').innerHTML = JSON.stringify(data.wind.speed);
            document.querySelector('#js--deg').innerHTML = JSON.stringify(data.wind.deg);
            document.querySelector('#js--icon').setAttribute('src', iconUrl);
        })
})