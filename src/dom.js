
const weatherCard = (mainTemp, cityName, countryName ) => {
    // card Container
    const cardContainer = document.createElement('div');
    cardContainer.setAttribute('class', 'weather-card mt-5 border shadow');

    const body = document.getElementById('body');
    body.appendChild(cardContainer);

    // cloud icon
    const cloudIcon = document.createElement('i');
    cloudIcon.setAttribute('class', 'fas fa-cloud-sun-rain cloud');
    cardContainer.appendChild(cloudIcon);

    // data Container
    const dataContainer = document.createElement('div');
    dataContainer.setAttribute('class', 'd-flex justify-content-center color-font');
    cardContainer.appendChild(dataContainer);

    // max temperature conatainer
    const maxTempContainer = document.createElement('div');

    const maxTemp = document.createElement('h4');
    maxTemp.setAttribute('class', 'px-3 fw-bold');
    const maxTempText =  document.createTextNode("Max-Temp");
    maxTemp.appendChild(maxTempText);

    const maxTempValue = document.createElement('h4');
    maxTempValue.setAttribute('class', 'px-5 fw-bold');
    const maxValue =  document.createTextNode("20 C");
    maxTempValue.appendChild(maxValue);

    maxTempContainer.appendChild(maxTemp);
    maxTempContainer.appendChild(maxTempValue);

    dataContainer.appendChild(maxTempContainer);


    // min temperature conatainer
    const minTempContainer = document.createElement('div');

    const minTemp = document.createElement('h4');
    minTemp.setAttribute('class', 'px-3 fw-bold');
    const minTempText =  document.createTextNode("Min-Temp");
    minTemp.appendChild(minTempText);

    const minTempValue = document.createElement('h4');
    minTempValue.setAttribute('class', 'px-5 fw-bold');
    const minValue =  document.createTextNode("20 C");
    minTempValue.appendChild(minValue);

    minTempContainer.appendChild(minTemp);
    minTempContainer.appendChild(minTempValue);

    dataContainer.appendChild(minTempContainer);

    // humidity conatainer
    const humidityContainer = document.createElement('div');

    const minHumidity = document.createElement('h4');
    minHumidity.setAttribute('class', 'px-3 fw-bold');
    const minHumidityText =  document.createTextNode("Humidity");
    minHumidity.appendChild(minHumidityText);

    const minHumidityValue = document.createElement('h4');
    minHumidityValue.setAttribute('class', 'px-5 fw-bold');
    const humidityValue =  document.createTextNode("78%");
    minHumidityValue.appendChild(humidityValue);

    humidityContainer.appendChild(minHumidity);
    humidityContainer.appendChild(minHumidityValue);

    dataContainer.appendChild(humidityContainer);

    // pressure conatainer
    const pressureContainer = document.createElement('div');

    const minPressure = document.createElement('h4');
    minPressure.setAttribute('class', 'px-3 fw-bold');
    const minPressureText =  document.createTextNode("Pressure");
    minPressure.appendChild(minPressureText);

    const minPressureValue = document.createElement('h4');
    minPressureValue.setAttribute('class', 'px-5 fw-bold');
    const pressureValue =  document.createTextNode("101ha");
    minPressureValue.appendChild(pressureValue);

    pressureContainer.appendChild(minPressure);
    pressureContainer.appendChild(minPressureValue);

    dataContainer.appendChild(pressureContainer);

    // city container
    const cityContainer = document.createElement('div');
    cityContainer.setAttribute('class', 'd-flex justify-content-center');
    cardContainer.appendChild(cityContainer);

    // main city
    const mainCity = document.createElement('div');
    mainCity.setAttribute('class', 'pe-5');
    cityContainer.appendChild(mainCity);

    // value city
    const valueCityparagraph = document.createElement('p');
    valueCityparagraph.setAttribute('class', 'main color-white');
    const valueCity = document.createTextNode(mainTemp);
    valueCityparagraph.appendChild(valueCity);
    mainCity.appendChild(valueCityparagraph);

    // city paragraph
    const cityparagraph = document.createElement('p');
    cityparagraph.setAttribute('class', 'fs-3 color-white');
    const city = document.createTextNode(cityName, countryName);
    cityparagraph.appendChild(city);
    mainCity.appendChild(cityparagraph);

    // line
    const line = document.createElement('div');
    line.setAttribute('class', 'line');
    cityContainer.appendChild(line);

    // clouds
    const cloudContainer = document.createElement('div');
    

    const cloudParagraph = document.createElement('p');
    cloudParagraph.setAttribute('class', 'main ps-5 color-white');
    const cloud = document.createTextNode('Clouds');
    cloudParagraph.appendChild(cloud);
    cloudContainer.appendChild(cloudParagraph);

    cityContainer.appendChild(cloudContainer);
}

export default weatherCard;