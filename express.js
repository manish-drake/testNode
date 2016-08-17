var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send(200, 'Hello world');
});

var server = app.listen(8081, () => {
    var add = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", add, port)
});