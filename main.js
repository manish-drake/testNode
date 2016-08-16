var fs = require('fs');
fs.readFile('credits.txt', function(err, data){
    if(err) return consol.error(err);
    console.log(data.toString());
})

console.log('Program ended');