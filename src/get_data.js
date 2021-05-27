
const dataInfo = () => {
    
}


async function getData() {
    try {
        let weather = await dataInfo();
        console.log(weather);
    } catch (err) {
        console.log(err);
    }
}