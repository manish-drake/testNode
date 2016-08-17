var fs = require('fs');
var data = '';

var readerStream = fs.createReadStream('credits.txt');

readerStream.setEncoding('UTF8');

readerStream.on('data', function(chunk){
    data += chunk;
});

readerStream.on('end', function(){
    console.log(data);
});

readerStream.on('error', function(err){
    console.log(err.stack);
});

var wStream = fs.createWriteStream('output.txt');

wStream.write('Quick brown fox', 'UTF8');
wStream.end();

wStream.on('finish', ()=> {
    console.error('Write complete');
});

var rStream = fs.createReadStream('output.txt');

var newWStream = fs.createWriteStream('piped output.txt');

rStream.pipe(newWStream);


console.log('End');