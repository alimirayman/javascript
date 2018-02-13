var http  = require('http'),
    fs    = require('fs')

http.createServer(function(req, res){
  
  if(req.url === '/'){
    // Setting Headers
    res.writeHead(200, {'Content-type': 'text/html'});
    // Reading file and converting to string
    var html = fs.readFileSync(__dirname+'/index.htm', 'utf8')
    // setting the dynamic content
    var message = 'The dynamic content'
    // replacing the placeholder in the content from the file to the dynamic data 
    html = html.replace('{{message}}', message)
    // returning the html data
    res.end(html)
  
    /*
      Easier and fast way
        
        var html = fs.readFileSync(__dirname+'/index.htm').pipe(res)   
    */
  }
  else if(req.url === '/api'){
    res.writeHead(200, {'Content-type': 'application/json'});
    var obj = {
      firstName: 'John',
      lastname: 'Doe'
    }
    res.end(JSON.stringify(obj))
  }
  else{
    res.writeHead(404, {'Content-type': 'text/html'})
    res.end('<h1 style="text-align:center">.404.</h1>')
  }

}).listen(1337, '127.0.0.1');