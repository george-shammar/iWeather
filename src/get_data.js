
const dataInfo = () => {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=c7911001fbb406aa98e26c70ab98ec78', {mode: 'cors'})
    .then(function(response) {
      console.log(response.json());
    });
}


async function getData() {
    try {
        let weather = await dataInfo();
        console.log(weather);
    } catch (err) {
        console.log(err);
    }
}