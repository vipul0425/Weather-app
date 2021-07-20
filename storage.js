class Storage{
    constructor(){
        this.city;
        this.default_city = 'new delhi';
    }

    getLocationData(){
        if(localStorage.getItem('city') === null){
          this.city = this.default_city;
        }else{
 
            this.city = localStorage.getItem('city');
        }
        return this.city;
    }
    setLocationData(city){
    localStorage.setItem('city',city);
    }
}