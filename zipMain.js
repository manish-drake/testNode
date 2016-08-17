var fs = require('fs');
var zlib = require('zlib');

var rStream = fs.createReadStream('credits.txt');
var gZip = zlib.createGzip();
var zStream = rStream.pipe(gZip);

var wStream = fs.createWriteStream('credits.txt.gz');

zStream.pipe(wStream);

wStream.on('end', () => {
    var r1Stream = fs.createReadStream('credits.txt.gz');
    var gUnZip = zlib.createGunzip();
    var unZipPipe = r1Stream.pipe(gUnZip);

    var w1Stream = fs.createWriteStream('credits unzipped.txt');
    unZipPipe.pipe(w1Stream, (err) => {
        console.error(err.stack);
    });
})


console.log('End');