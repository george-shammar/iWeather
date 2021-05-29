
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

    const maxTemp = document.createElement('h4');
    maxTemp.setAttribute('class', 'px-3 fw-bold');
    const maxTempText =  document.createTextNode("Max-Temp");
    maxTemp.appendChild(maxTempText);

    const maxTempValue = document.createElement('h4');
    maxTempValue.setAttribute('class', 'px-5 fw-bold');
    const maxValue =  document.createTextNode("20 C");
    maxTempValue.appendChild(maxValue);

    dataContainer.appendChild(maxTempContainer);
}





        <div class="weather-card mt-5 border shadow">
            <i class="fas fa-cloud-sun-rain cloud"></i>


            <div class="d-flex justify-content-center color-font"> dataContainer
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
            </div>
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
           
        </div>