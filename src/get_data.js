import {error, weatherCard} from './dom';

const dataInfo = (location) => {
  const submitButton = document.getElementById('submit');

  submitButton.onclick = () => {
    location = document.getElementById('location').value;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=c7911001fbb406aa98e26c70ab98ec78`, { mode: 'cors' })
      .then((response) => (response.json()))
      .then((response) => {
        const { description } = response.weather[0];
        const mainTemp = Math.round((response.main.temp) - 273);
        const cityName = response.name;
        const countryName = response.sys.country;
        const { humidity } = response.main;
        const { pressure } = response.main;
        const lowTemp = Math.round((response.main.temp_min) - 273);
        const highTemp = Math.round((response.main.temp_max) - 273);

        weatherCard(mainTemp, cityName, countryName, lowTemp,
          highTemp, humidity, pressure, description);

        // convert to fahrenheit

        const ferhButton = document.getElementById('fer');
        ferhButton.onclick = () => {
          const mainTempFer = Math.round((mainTemp * (9 / 5)) + 32);
          const lowTempFer = Math.round((lowTemp * (9 / 5)) + 32);
          const highTempFer = Math.round((highTemp * (9 / 5)) + 32);
          weatherCard(mainTempFer, cityName, countryName, lowTempFer,
            highTempFer, humidity, pressure, description);
        };
      }).catch((err) => {
        document.querySelector('#body').innerHTML = '';
        return error();
      });
      document.getElementById('error').innerHTML = '';
  };
};


const getData = async () => {
  try {
    const weather = await dataInfo();
    return weather;
  } catch(err) {

  }
};

export default getData;