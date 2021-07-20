class Weather{
    constructor(city){
       this.api_key = '4c05e67630f41674c61c5238084c65a6';
       this.city = city;
    }

   async getWeather(){
 
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.api_key}`)

    const resData = await response.json();

    return resData;
    }

    updateCity(city){
        this.city = city;
    }

}