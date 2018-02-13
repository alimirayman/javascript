var fs = require('fs'),
    zlib = require('zlib')

var readable = fs.createReadStream(__dirname+'/greet.txt')

var writable = fs.createWriteStream(__dirname+'/coppyGreet.txt')

var gzip = zlib.createGzip()

var compressed = fs.createWriteStream(__dirname+'/greet.txt.gz')

// Basic Piping
// readable.on('data', function(chunk){
//   console.log(chunk.length);
//   writable.write(chunk);
// })

readable.pipe(writable)

readable.pipe(gzip).pipe(compressed)
