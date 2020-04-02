var http = require('http');

let server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write(`<html>
        <head>
          <link rel="stylesheet" type="text/css" href="style.css" />
          <title>My First Web Server</title>
        </head>
        <body>
          <h1>Hello, anyone there?</h1>
          <div id="content"></div>
          <script src="script.js"></script>
        </body>
        </html>`); 
    } else if (req.url==='/script.js') {
        res.setHeader('Content-Type','text/javascript')
        res.write(`document.getElementById('content')
        .appendChild(document.createTextNode('Welcome to Server-land!'))`)
    } else if (req.url === '/style.css') {
		res.setHeader('Content-Type','text/css');
		res.write(`body{text-align: center}  #content {color: blue}`);
    }
    
    res.end(); 
});

server.listen(3000); 