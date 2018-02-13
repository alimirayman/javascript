var express = require('express')
var router = express.Router()

router.get('/', function(req, res){
  // res.send(`
  //   <html>
  //     <head>
  //       <link href=assets/style.css type=text/css rel=stylesheet>
  //     </head>
  //     <body>
  //       <h1>Hello Express!!</h1>
  //     </body>
  //   </html>
  // `)
  res.render('index')
})

module.exports = router