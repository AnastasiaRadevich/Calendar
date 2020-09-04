window.addEventListener('load', () => {

    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');



    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {

            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=fe8940aec30a368f7e80bae77afe9473`;

            fetch(api)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    console.log(data);
                    const temperature = Math.round(data.main.temp - 273);
                    const weatherDescriptions = data.weather[0].description;
                    
                    //Set DOM elements from API

                    temperatureDescription.textContent = weatherDescriptions;
                    temperatureDegree.textContent = temperature;
                    locationTimezone.textContent = data.name;

                });
        });
    }
    

});