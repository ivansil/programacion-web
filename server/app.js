const http = require('http');
const fs = require('fs');

http.createServer( (req, res) => {    
    
    res.writeHead(200, {'Content-Type': 'text/html'}); 
    let html = fs.readFileSync(__dirname + '/index.html'); 
    res.end(html);

}).listen(4321, '127.0.0.1');