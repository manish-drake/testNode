var buff = new Buffer(26);
for(var i = 0; i < 26; i++){
    buff[i] = 97 + i;
}
var buff1 = new Buffer('The alphabets: ');
var buff2 = Buffer.concat([buff1, buff]);
console.log(buff2.toString());
//console.log(buff.toJSON(buff));



