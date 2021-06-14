const dotenv = require('dotenv');
dotenv.config();

const express = require('express')
const app = express()
const fetch = require('node-fetch')
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'))

// designates what port the app will listen to for incoming requests
app.listen(8080, function() {
    console.log('Example app listening on port 8080!')
})


//Starting to work on API call
const GEO_KEY = process.env.GEO_KEY;
const WEATHER_KEY = process.env.WEATHER_KEY;
const PIX_KEY= process.env.PIX_KEY;

app.post('/add', async (req, res) => {
    const city = req.body.city;
    let startDate = req.body.startDate;
    const cityResults = await fetch(`http://api.geonames.org/searchJSON?q=${city}&maxRows=1&username=${GEO_KEY}`, { method: 'POST' });
    const locationData = await cityResults.json();
    let lat = locationData.geonames[0].lat;
    let lon = locationData.geonames[0].lng;

    let newStartDate = Date.parse(startDate);
    console.log(newStartDate);
    let now = new Date;
    let endOfDay = new Date(now - now % 864e5 + 864e5 - 1);
    endOfDay =  Math.floor(endOfDay.getTime() / 1000);
    console.log(endOfDay)

    const displayData = {
        city: city,
        startDate: startDate
    }
    
    if ((newStartDate /1000) < endOfDay) {
        console.log('this is today!')
        const weatherResults = await fetch(`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${WEATHER_KEY}&units=I`, { method: 'GET' });
        const weatherData = await weatherResults.json();
        console.log(weatherData);
        displayData.temp = weatherData.data[0].temp;

    } else {
        console.log("this is NOT today!")
        const futureWeather = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&key=${WEATHER_KEY}&units=I`, {method: 'GET' });
        const futureData = await futureWeather.json();
        console.log(futureData);
        displayData.temp= futureData.data[0].temp;
    }

    try {
        const pictureResults = await fetch(`https://pixabay.com/api/?key=${PIX_KEY}&q=${city}`, { method: 'GET'});
        const pictureData = await pictureResults.json();
        let cityPicture = pictureData.hits[0].webformatURL;
        console.log(cityPicture);
        displayData.cityPicture = cityPicture;

    } catch (error) {
        console.log("error",error)
    }   
    console.log(displayData);
    res.send(displayData);
});


