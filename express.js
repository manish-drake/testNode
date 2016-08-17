var fs = require('fs');
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var multer = require('multer');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static('public'));
app.use(urlencodedParser);
var upload = multer({ dest: '/tmp/' });


app.get('/', (req, res) => {
    console.log('Got a GET request from server');
    res.send(200, 'Hello Get');
});

app.post('/', (req, res) => {
    console.log('Got a POST request from server');
    res.send(200, 'Hello POST');
});

// This responds a DELETE request for the /del_user page.
app.delete('/del_user', function (req, res) {
    console.log('Got a DELETE request for /del_user');
    res.send('Hello DELETE');
})

// This responds a GET request for the /list_user page.
app.get('/index.htm', function (req, res) {
    res.sendFile(__dirname + '/index.htm');
})
// This responds a GET request for the /list_user page.
app.get('/uploader.htm', function (req, res) {
    res.sendFile(__dirname + '/uploader.htm');
})

app.post('/process_get', urlencodedParser, function (req, res) {
    var response = {
        first_name: req.body.fname,
        last_name: req.body.lname
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

app.post('/file_upload', upload.single('theFile'), (req, res) => {
    console.log(req.file.originalname);
    console.log(req.file.path);
    console.log(req.file.type);

    var file = __dirname + "/" + req.file.originalname;
    fs.readFile(req.file.path, (err, data) => {
        fs.writeFile(file, data, (err) => {
            if (err) {
                console.error(err.stack);
            }
            else {
                var response = {
                    message: 'File uploaded successfully',
                    filename: req.file.originalname
                };
                console.log(response);
                res.end( JSON.stringify( response ) );
            }
        })
    })
})

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function (req, res) {
    console.log('Got a GET request for /ab*cd');
    res.send('Page Pattern Match');
})

var server = app.listen(8081, () => {
    var add = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", add, port)
});