import weatherCard from './dom';

const dataInfo = (location) => {
    const submitButton = document.getElementById('submit');
    submitButton.onclick = () => {
       location = document.getElementById('location').value;
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=c7911001fbb406aa98e26c70ab98ec78`, {mode: 'cors'})
        .then(function(response) {
          return (response.json());
        })
        .then(function(response) {
            // console.log(response);
            const mainTemp = response.main.temp;
            const cityName = response.name;
            const countryName = response.sys.country;
            const humidity = response.main.humidity;
            const pressure = response.main.pressure;
            const lowTemp = response.main.temp_min;
            const highTemp = response.main.temp_max;
        });
        // weatherCard(mainTemp, cityName, countryName, lowTemp, highTemp, humidity, pressure);
    }
}

const getData = async () => {
    try {
        const weather = await dataInfo();
    } catch (err) {
        console.log(err);
    }
}

export default getData;