'use strict';
const express = require('express')
const fetch = require('node-fetch')
const app = express()

const apiUrl = "https://reservation100-sandbox.mxapps.io/api/reservations"
const port = process.env.PORT || 3000

const body = {
    "name": "John Doe",
    "numberOfPeople": 3
  }

app.get('/', (req, res) => {
    fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then (res => res.text())
    .then(text => {
        res.send(text)
    })
    .catch(err => res.send(err));
})

app.listen(port);
