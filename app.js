// Init Weather object
const weather = new Weather('Buenos Aires', 'ar')
const ui = new UI()

// Get Weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather)

// Change location event
document.getElementById('w-change-btn').addEventListener('click', e => {
    const city = document.getElementById('city').value
    const country = document.getElementById('country').value

    weather.changeLocation(city, country)
    getWeather()
    $('#locModal').modal('hide')
})

function getWeather() {
    weather.getWeather().then(data => {
        ui.paint(data)
    })
}