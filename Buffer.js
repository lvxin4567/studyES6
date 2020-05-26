//Node.js Buffer

// const buf = Buffer.from('runoob' , 'ascii');

// console.log(buf.toString('hex'));

// console.log(buf.toString('base64'));

// console.log(buf.toString())

const buf1 = Buffer.alloc(10);
// console.log(buf1);
len = buf1.write("runoob");
console.log(buf1 , len);

console.log(buf1.toString('utf8' , 1 , 3));

var brr =[1,2,3];
brr.forEach(element => {
    console.log(element);
});


//Node.js Stream
var fs = require('fs')
var data = ''
var readerStream = fs.createReadStream('./Node.js/input.txt');
readerStream.setEncoding('UTF8');
// 处理流事件 --> data, end, and error
readerStream.on('data', (chunk) => {
   console.log(chunk)
    data += chunk;
 });
 readerStream.on('end',function(){
    console.log(data);
 });
 readerStream.on('error', function(err){
    console.log(err.stack);
 });

