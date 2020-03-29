class Weather {
    constructor(city, country) {
        this.apiKey = '89bd4ded646244a98be19ed6057abdd0'
        this.city = city
        this.country = country
    }

    // Fetch weather from api
    async getWeather() {
        const response = await fetch(`https://api.weatherbit.io/v2.0/current?city=${this.city}&country=${this.country}&key=${this.apiKey}`)

        const responseData = await response.json()
        console.log(responseData.data[0].wind_dir)
        return responseData.data[0]
    }

    changeLocation(city, country) {
        this.city = city
        this.country = country
    }
}