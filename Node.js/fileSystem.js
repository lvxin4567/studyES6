var fs = require('fs');
var path = require('path');
var buf = new Buffer.alloc(1024);

// fs.writeFile('input.txt', '我是通过fs.wirteFile写入的文件内容', (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     // fs.readFile('input.txt',(err,data)=>{
//     //     if(err){console.error(err);return;}
//     //     console.log("异步读取文件数据: " + data.toString());
//     // })
//     console.log("准备打开已存在的文件！");
//     fs.open('input.txt', 'r+', function (err, fd) {
//         if (err) {
//             return console.error(err);
//         }
//         console.log('fd', fd);
//         console.log("文件打开成功！");
//         console.log("准备读取文件：");
//         // fs.read(fd, buffer, offset, length, position, callback)
//         //fd - 通过 fs.open() 方法返回的文件描述符。
//         //buffer - 数据写入的缓冲区。
//         // offset - 缓冲区写入的写入偏移量。
//         //length - 要从文件中读取的字节数
//         //position - 文件读取的起始位置，如果 position 的值为 null，则会从当前文件指针的位置读取。
//         //callback - 回调函数，有三个参数err, bytesRead, buffer，err 为错误信息， bytesRead 表示读取的字节数，buffer 为缓冲区对象。
//         console.log(buf.length);
//         fs.read(fd, buf, 0, 4 , 0, function (err, bytes) {
//             if (err) {
//                 console.log(err);
//             }
//             console.log(bytes + "  字节被读取");

//             // 仅输出读取的字节
//             if (bytes > 0) {
//                 console.log(buf.slice(0, bytes).toString());
//             }
//         });
//     });
// })

// fs.readdir('../Node.js',(err,files)=>{
//     // console.log(files);

//     files.forEach((filename)=>{
//         // console.log(filename);

//         if(filename == "test.txt"){
//             var oldpath = path.join(pathfile,filename);
//             console.log(oldpath);
//             var basename = path.basename(oldpath);
//             var dirname = path.dirname(oldpath);

//             var newpath = dirname + "/" + basename.replace("test" , "input");
//             console.log(newpath);

//             fs.rename(oldpath , newpath , (err)=>{
//                 console.log(err)
//             })
//         }
//     })
// })

