const fs = require ('fs');
// //read stream
// const readStream = fs.createReadStream('./docs/blog2.txt');

// readStream.on('data', (chunk) =>{
//     console.log('-----NEW CHUNK====-');
//     console.log(chunk.toString());
// });

// WRITE STREAM
const readStream = fs.createReadStream('./docs/blog2.txt');
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// readStream.on('data', (chunk) =>{
//     console.log('-----NEW CHUNK====-');
// // //   console.log(chunk.toString());
//     writeStream.write('\nNEW CHUNK\n');
//     writeStream.write(chunk);
// });

readStream.pipe(writeStream);