// Init Weather object

const weather = new Weather('Mayo County', 'IE')

// Get Weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather)

// weather.changeLocation('Dublin', 'IE')

function getWeather() {
    weather.getWeather().then(data => console.log(data))
}