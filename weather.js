class Weather {
    constructor(city, country) {
        this.apiKey = '5ddc997a924411b86605ee45d14972a1'
        this.city = city
        this.country = country
    }

    // Fetch weather from api
    async getWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}`)

        const responseData = await response.json()

        return responseData
    }

    changeLocation(city, country) {
        this.city = city
        this.country = country
    }
}