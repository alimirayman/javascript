var file = require('fs')

var greet = file.readFileSync(__dirname+'/hello.txt','utf8')
console.log(greet);

var greet2 = file.readFile(__dirname+'/hello.txt','utf8', function(err, data){
  console.log(data);
})

console.log('Done')