
const weatherCard = () => {
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
    valueCityparagraph.setAttribute('class', 'main');
    const valueCity = document.createTextNode('29 C');
    valueCityparagraph.appendChild(valueCity);
    mainCity.appendChild(valueCityparagraph);

    // city paragraph
    const cityparagraph = document.createElement('p');
    cityparagraph.setAttribute('class', 'fs-3');
    const city = document.createTextNode('Accra, GH');
    cityparagraph.appendChild(city);
    mainCity.appendChild(cityparagraph);

    // line
    const line = document.createElement('div');
    line.setAttribute('class', 'line');
    cityContainer.appendChild(line);

    // clouds
    const cloudContainer = document.createElement('div');
    mainCity.setAttribute('class', 'pe-5');
    cityContainer.appendChild(mainCity);
}





        <div class="weather-card mt-5 border shadow"> card Container
            <i class="fas fa-cloud-sun-rain cloud"></i>

            <div class="d-flex justify-content-center">
                <div class="pe-5">
                    <p class="main">29</p>
                    <p class="fs-3">Accra, GH</p>
                </div>
                <div class="line"></div>
                <div>
                    <p class="main ps-5">Clouds</p>
                </div>
            </div>
            {/* <div class="d-flex justify-content-center color-font"> dataContainer
                <div> maxTempContainer
                    <h4 class="px-3 fw-bold">Max-Temp</h4>
                    <h4 class="px-5 fw-bold">20</h4>
                </div>
                <div>
                    <h4 class="px-3 fw-bold">Min-Temp</h4>
                    <h4 class="px-5 fw-bold">20</h4>
                </div>
                <div>
                    <h4 class="px-3 fw-bold">Humidity</h4>
                    <h4 class="px-5 fw-bold">20</h4>
                </div>
                <div>
                    <h4 class="px-3 fw-bold">Pressure</h4>
                    <h4 class="px-5 fw-bold">1012ha</h4>
                </div>
            </div> */}
           
           
        </div>