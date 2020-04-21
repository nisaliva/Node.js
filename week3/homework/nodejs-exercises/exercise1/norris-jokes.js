const express = require('express')
const fetch = require('node-fetch')
const app = express()

const apiURL = "http://api.icndb.com/jokes/random/"
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    fetch(apiURL)
    .then(res => res.json())
    .then(json => {
        res.send(json.value.joke);
    })
    .catch(err => res.send(err));
   
})

app.listen(port);