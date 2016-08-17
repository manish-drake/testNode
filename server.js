var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer((req, res) => {
    var path = url.parse(req.url).pathname;
    console.log('Request received for: ' + req.url);
    fs.readFile('credits.txt', (err, data) => {
        res.end(data);
    });

});

server.listen(8081);