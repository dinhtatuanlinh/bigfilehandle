const http = require('http');
const fs = require("fs");
const pipeline = require("stream");


//Sử dụng phương thức createWriteStream

const writerStream = fs.createWriteStream("b.txt");
// readStream.setEncoding("utf8");
// readStream.on('data', (chunk)=>{
//     console.log(chunk);
// })
// let port = 3000;
// http.createServer((req,res)=>{
//     // fs.readFile("a.txt", (err, data) => {
//     //     if (err) throw err;
    
//     //     res.end(data);
//     //   });
//     const readStream = fs.createReadStream("a.txt");
//     readStream.pipe(res)
// }).listen(port,()=>{
//     console.log(`running at http://localhost:${port}`);
// })
// readStream.pipe(writerStream);
// pipeline(
//     fs.createReadStream("bigFile.txt"),
//     fs.createWriteStream("output.txt"),
//     (err) => {
//       if (err) {
//         console.error('Pipeline failed.', err);
//       } else {
//         console.log('Pipeline succeeded.');
//       }
//     }
// );


for(let i=1; i<=1000000; i++){
    writerStream.write('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n');
}
writerStream.end();
// Bắt sự kiện finish của Streams
writerStream.on("finish", function () {
    console.log("Write done.");
});
// Bắt sự kiện error khi xảy ra lỗi
writerStream.on("error", function (err) {
    console.log(err.stack);
});
