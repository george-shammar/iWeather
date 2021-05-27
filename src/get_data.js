


async function getData() {
    try {
        let weather = await dataInfo();
        console.log(weather);
    } catch (err) {

    }
}