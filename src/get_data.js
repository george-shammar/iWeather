import {error, weatherCard} from './dom';

const dataInfo = (location) => {
  const submitButton = document.getElementById('submit');

  submitButton.onclick = () => {
    location = document.getElementById('location').value;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=c7911001fbb406aa98e26c70ab98ec78`, { mode: 'cors' })
      .then((response) => (response.json()))
      .then((response) => {
        const { description } = response.weather[0];
        const mainTemp = Math.round((response.main.temp)-273.15);
        const cityName = response.name;
        const countryName = response.sys.country;
        const { humidity } = response.main;
        const { pressure } = response.main;
        const lowTemp = Math.round((response.main.temp_min)-273.15);
        const highTemp = Math.round((response.main.temp_max)-273.15);

        weatherCard(mainTemp, cityName, countryName, lowTemp,
          highTemp, humidity, pressure, description);

        // convert temp units
        document.getElementById('f').onclick = () => {
          const temp = convertToFerhenheit(mainTemp);
          const high = convertToFerhenheit(highTemp);
          const low = convertToFerhenheit(lowTemp);
          document.getElementById('main-temp').innerHTML = temp;
          document.getElementById('low-temp').innerHTML = low;
          document.getElementById('high-temp').innerHTML = high;
        }
        
        document.getElementById('c').onclick = () => {
          const temp = convertToCelsius(mainTemp);
          const high = convertToCelsius(highTemp);
          const low = convertToCelsius(lowTemp);
          document.getElementById('main-temp').innerHTML = temp;
          document.getElementById('low-temp').innerHTML = low;
          document.getElementById('high-temp').innerHTML = high;
        }


      }).catch((err) => {
        document.querySelector('#body').innerHTML = '';
        return error();
      });
      document.getElementById('error').innerHTML = '';
  };
};


 


const convertToFerhenheit = (temp) => {
  return (Math.round((temp) * 9/5 + 32));
}

const convertToCelsius = (temp) => {
  return Math.round(temp);
}








const getData = async () => {
    const weather = await dataInfo();
    return weather;
};

export default getData;


