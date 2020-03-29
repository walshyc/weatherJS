// Init Classes
const ui = new UI()
const storage = new Storage()

// Get stored location data
const weatherLocation = storage.getLocationData()
const weather = new Weather(weatherLocation.city, weatherLocation.country)

// Get Weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather)

// Change location event
document.getElementById('w-change-btn').addEventListener('click', e => {
    const city = document.getElementById('city').value
    const country = document.getElementById('country').value

    // Change location
    weather.changeLocation(city, country)

    // Set location in LS
    storage.setLocationData(city, country)
    getWeather()
    $('#locModal').modal('hide')
})

function getWeather() {
    weather.getWeather().then(data => {
        ui.paint(data)
    })
}