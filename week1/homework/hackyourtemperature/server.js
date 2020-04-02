const express = require('express');
const handlebars =require('express-handlebars'); 
const axios =require('axios'); 
const app = express();

app.get('/', (req, res) => {
  res.send('hello from backend to frontend!')
});

app.listen(3000)