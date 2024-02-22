// # readable.pipe(writable)

// readable.on('data', (chunk) => {
//   writable.write(chunk);
// });

// readable.on('end', () => {
//   writable.end();
// });
const fs = require('fs');

const readableStream = fs.createReadStream('./input.txt', {
  highWaterMark: 10 //we are specifying the size of internal buffer in bytes
});
const writableStream = fs.createWriteStream('./output.txt');
readableStream.on('data', (chunk) => {
  console.log(chunk)
  console.log(`Received ${chunk.length} bytes of data`);
  writableStream.write(chunk)
});
readableStream.on('end',()=>{
  writableStream.end()
  console.log(1)
})