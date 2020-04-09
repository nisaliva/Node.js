'use strict';

const express = require('express')
const app = express()
const fs = require("fs");

const port = process.env.port || 3000;

app.use(express.json());

// Creating new posts
app.post('/blogs', (req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    fs.writeFileSync(title, content);
    res.end('ok')
})
 
//Updating existing posts
app.put('/blogs', (req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    
    if (fs.existsSync(title)) {
      fs.writeFileSync(title, content);
      res.end('ok')
    }
    else {
      res.end('post does not exist');
    }
})

//Deleting posts
app.delete('/blogs/:title', (req, res) => {
    const title = req.params.title

    fs.unlinkSync(title);
    res.end('ok');
})

//Reading posts
app.get('/blogs/:title', (req, res) => {
    const title = req.params.title;
    res.sendfile(title);
    res.end('ok');
})

app.listen(port);