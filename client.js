var http = require('http');

var options = {
    host: 'localhost',
    port: '8081',
    path: '/xyz.html'
}
var callback = (res) => {
    var body = '';
    res.on('data', function (data) {
        body += data;
    });
    res.on('end', ()=>{
        console.log(body);
    });
};
var req = http.request(options, callback);

req.end();
