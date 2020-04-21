'use strict';

const express = require('express');
const exphbs  = require('express-handlebars');
const axios = require('axios');
const app = express();

const port = process.env.port || 3000;

app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => { res.render("index"); });

app.post("/weather", (req, res) => {
  const APIKEY = require('./sources/keys.json').API_KEY;
  const cityName = req.body.cityName;
  const url = `https://api.openweathermap.org/data/2.5/weather?APPID=${APIKEY}&q=${cityName}&units=metric`
  
  axios.get(url)
  .then((response) => {
    res.render('index', {
      cityName: cityName,
      weatherText: `${response.data.main.temp}°C`
    });
  })

  .catch(err => {
    res.render('index', { weatherText: "City is not found"})
  })

});

app.listen(port); 