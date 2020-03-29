class UI{
    constructor(){
        this.location = document.getElementById('w-location')
        this.desc = document.getElementById('w-desc')
        this.string = document.getElementById('w-string')
        this.icon = document.getElementById('w-icon')
        this.details = document.getElementById('w-details')
        this.humidity = document.getElementById('w-humidity')
        this.dewpoint = document.getElementById('w-dewpoint')
        this.uv = document.getElementById('w-uv')
        this.rise = document.getElementById('w-rise')
        this.set = document.getElementById('w-set')
        this.feelslike = document.getElementById('w-feels-like')
        this.wind = document.getElementById('w-wind')
        this.changeBtn = document.getElementById('w-change-btn')
    }

    paint(weather){
        const windSpeed = (weather.wind_spd * 3.6).toFixed(1)

        this.location.innerHTML = weather.city_name
        this.desc.innerHTML = weather.weather.description
        this.string.innerHTML = `${weather.temp} °C`
        this.icon.setAttribute('src', `https://www.weatherbit.io/static/img/icons/${weather.weather.icon}.png`)
        this.humidity.innerHTML = `<i class="fas fa-tint"></i>  Releative Humidity: ${weather.rh}%`
        this.feelslike.innerHTML = `<i class="fas fa-temperature-low"></i> Feels Like: ${weather.app_temp} °C`
        this.dewpoint.innerHTML = `<i class="fas fa-leaf"></i> DewPoint: ${weather.dewpt} °C.`
        this.uv.innerHTML = `<i class="fas fa-umbrella-beach"></i> UV Index: ${weather.uv}`
        this.rise.innerHTML = `<i class="fas fa-chevron-up"></i> Sunrise: ${weather.sunrise}`
        this.set.innerHTML = `<i class="fas fa-chevron-down"></i> Sunset: ${weather.sunset}`
        this.wind.innerHTML = `<i class="fas fa-wind"></i> Wind: ${windSpeed} km/hr`
    }
}