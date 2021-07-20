class Ui{
    constructor(){
         this.date = document.getElementById('date');
         this.time = document.getElementById('time');
         this.location = document.getElementById('loc-name');
         this.weather = document.getElementById('weather');
         this.temp = document.getElementById('temp');
         this.feelLike = document.getElementById('feel-like');
         this.weatherIcon = document.getElementById('weather-icon');
         this.humidity = document.getElementById('humidity');
         this.description = document.getElementById('Description');
         this.wind = document.getElementById('wind');
         this.pressure = document.getElementById('pressure');
    }

    showData(data){
        this.location.innerText = data.name;
        this.temp.innerText = `${data.main.temp} ° C` ;
        this.feelLike.innerText = `Feels Like : ${data.main.feels_like} ° C` ;
        this.humidity.innerText = `${data.main.humidity} %`;
        this.description.innerText = data.weather[0].description;
        this.pressure.innerText = `${data.main.pressure} hPa`;
        this.wind.innerText = `${(parseFloat(data.wind.speed) * 1.609).toPrecision(2)} Kmph`;
        const iconUrl = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        this.weather.innerText = data.weather[0].main;
        this.weatherIcon.setAttribute('src',iconUrl);
        const date = new Date;
        let month = '';
        switch (date.getMonth()) {
            case 0:
                month = 'Jan';
                break;
            case 1:
                month = 'Feb';
                break;
            case 2:
                month = 'Mar';
                break;
            case 3:
                month = 'April';
                break;
            case 4:
                month = 'May';
                break;
            case 5:
                month = 'June';
                break;
            case 6:
                month = 'July';
                break;
            case 7:
                month = 'Aug';
                break;
            case 8:
                month = 'Sept';
                break;
            case 9:
                month = 'Oct';
                break;
            case 10:
                month = 'Nov';
                break;
            case 11:
                month = 'Dec';
                break;
        
            default:
                break;
        }

        let hours = date.getHours(),
        suffix = '',
        minutes = '';
        switch (date.getHours()) {
            case 13:
                hours = '01';
                break;
            case 14:
                hours = '02';
                break;
            case 15:
                hours = '03';
                break;
            case 16:
                hours = '04';
                break;
            case 17:
                hours = '05';
                break;
            case 18:
                hours = '06';
                break;
            case 19:
                hours = '07';
                break;
            case 20:
                hours = '08';
                break;
            case 21:
                hours = '09';
                break;
            case 22:
                hours = '10';
                break;
            case 23:
                hours = '11';
                break;
            case 24:
                hours = '12';
                break;
        
           
        }
        (date.getHours() > 12) ? suffix = 'pm' : suffix = 'am';
        (date.getMinutes() < 10) ? minutes = '0' + date.getMinutes() : minutes = date.getMinutes();

        this.date.innerHTML = `<span>${month} </span> <span>${date.getDate()} </span> `;
        this.time.innerHTML = `<span>${hours} :</span> <span>${minutes} </span> <span>${suffix}</span> `;
    }
}