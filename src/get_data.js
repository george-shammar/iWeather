const getLocation = (location) => {
    location = document.getElementById('location').value;
    return location;
}

const dataInfo = () => {
    getLocation(location);
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=c7911001fbb406aa98e26c70ab98ec78`, {mode: 'cors'})
    .then(function(response) {
      console.log(response.json());
    });
}

const getData = async () => {
    try {
        const weather = await dataInfo();
        console.log(weather);
    } catch (err) {
        console.log(err);
    }
}

export default getData;