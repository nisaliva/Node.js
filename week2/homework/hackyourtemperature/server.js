const express = require('express');
const exphbs =require('express-handlebars'); 
const axios =require('axios'); 
const app = express();

const port = process.env.port || 3000;

app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/weather', (req, res) => {
  const city = req.body.cityName;
  res.render('index', {cityName: city})
})

app.listen(port)
