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
            console.log(response.main.temp);
            console.log(response.name, response.sys.country);
            console.log(response.main.humidity);
            console.log(response.main.pressure);
            console.log(response.main.temp_min);
            console.log(response.main.temp_max);
        });
        // weatherCard();
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