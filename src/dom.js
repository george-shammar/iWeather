
const weatherCard = () => {
    const cardContainer = document.createElement('div');
    cardContainer.setAttribute('class', 'weather-card mt-5 border shadow');

    const cloudIcon = document.createElement('i');
    cloudIcon.setAttribute('class', 'fas fa-cloud-sun-rain cloud');
    cardContainer.appendChild(cloudIcon);

    const dataContainer = document.createElement('div');
    dataContainer.setAttribute('class', 'd-flex justify-content-center color-font');

}





        <div class="weather-card mt-5 border shadow">
            <i class="fas fa-cloud-sun-rain cloud"></i>


            <div class="d-flex justify-content-center color-font">
                <div>
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