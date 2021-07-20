// Init storage class
const storage = new Storage;
const loc = storage.getLocationData();

//Init weather class
const weather = new Weather(loc);

//Init Ui class
const ui = new Ui;

// on load
document.addEventListener('DOMContentLoaded',getWeather())

//change city

document.getElementById('save-changes').addEventListener('click',(e)=>{
    const city = document.getElementById('city-new').value;
    city === '' ? alert('Field cannot be empty') : weather.updateCity(city);
    getWeather();
    storage.setLocationData(city);
   
})

function getWeather() {
    weather.getWeather()
        .then(res => {
            ui.showData(res);
        })
        .catch(err => alert('something went wrong!'));
}
