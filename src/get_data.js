import './style.css';
import { error, weatherCard } from './dom';

const buttonDiv = document.querySelector('.button-div');
buttonDiv.style.display = 'none';

const bgOne = document.querySelector('.body-one');


const changeBackground = (temp) => {
  if (temp <= 20) {
    bgOne.style.backgroundColor = 'rgb(137, 202, 153)';
  } else if (temp > 20 <= 25) {
    bgOne.style.backgroundColor = 'rgb(245, 217, 126)';
  } else if (temp > 25 <= 30) {
    bgOne.style.backgroundColor = 'rgb(44, 241, 248)';
  } else {
    bgOne.style.backgroundColor = 'rgb(235, 122, 184)';
  }
};

const convertToFerhenheit = (temp) => Math.round(temp * (9 / 5) + 32);

const convertToCelsius = (temp) => Math.round(temp);

const dataInfo = (location) => {
  const submitButton = document.getElementById('submit');

  submitButton.onclick = () => {
    location = document.getElementById('location').value;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=c7911001fbb406aa98e26c70ab98ec78`, { mode: 'cors' })
      .then((response) => (response.json()))
      .then((response) => {
        const { description } = response.weather[0];
        const mainTemp = Math.round((response.main.temp) - 273.15);
        const cityName = response.name;
        const countryName = response.sys.country;
        const { humidity } = response.main;
        const { pressure } = response.main;
        const lowTemp = Math.round((response.main.temp_min) - 273.15);
        const highTemp = Math.round((response.main.temp_max) - 273.15);

        weatherCard(mainTemp, cityName, countryName, lowTemp,
          highTemp, humidity, pressure, description);
        buttonDiv.style.display = 'block';

        changeBackground(mainTemp);

        // convert temp units
        document.getElementById('f').onclick = () => {
          const temp = convertToFerhenheit(mainTemp);
          const high = convertToFerhenheit(highTemp);
          const low = convertToFerhenheit(lowTemp);
          document.getElementById('main-temp').innerHTML = `${temp}°F`;
          document.getElementById('low-temp').innerHTML = `${low}°F`;
          document.getElementById('high-temp').innerHTML = `${high}°F`;
        };

        document.getElementById('c').onclick = () => {
          const temp = convertToCelsius(mainTemp);
          const high = convertToCelsius(highTemp);
          const low = convertToCelsius(lowTemp);
          document.getElementById('main-temp').innerHTML = `${temp}°C`;
          document.getElementById('low-temp').innerHTML = `${low}°C`;
          document.getElementById('high-temp').innerHTML = `${high}°C`;
        };
      }).catch((err) => {
        document.querySelector('#body').innerHTML = '';
        return error(err);
      });
    document.getElementById('error').innerHTML = '';
  };
};


const getData = async () => {
  const weather = await dataInfo();
  return weather;
};

export default getData;
