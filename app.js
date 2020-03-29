// Init Weather object


const weather = new Weather('Castlebar', 'ie')
const ui = new UI()

// Get Weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather)


function getWeather() {
    weather.getWeather().then(data => {
        ui.paint(data)
    })
}