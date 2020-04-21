'use strict';
const express = require('express')
const fetch = require('node-fetch')
const app = express()

const apiUrl = "https://restapiabasicauthe-sandbox.mxapps.io/api/books"
const port = process.env.PORT || 3000

const admin = 'admin:hvgX8KlVEa'
const auth = Buffer.from(admin).toString('base64');
// encode admin:hvgX8KlVEa to base64 -> YWRtaW46aHZnWDhLbFZFYQoK

app.get('/', (req, res) => {
    fetch(apiUrl ,{ headers: {'Authorization': `Basic ${auth}`}})
    .then(res => res.json())
    .then(json => {
           console.log(json)
        res.send('Done! Please check the console!');
    })
    .catch(err => res.send(err));
})

app.listen(port);

