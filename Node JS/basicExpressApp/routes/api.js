var express = require('express'),
    router = express.Router()

router.get('/:id', function(req, res){
  // res.send('<h1> Person: '+ req.params.id +' </h1>')

  var person = { ID: req.params.id }
  
  res.render('person', person)
})

router.post('/', function(req, res){
  res.send('Got that data bro!!');
  console.log(req.body.firstName);
  console.log(req.body.lastName);
})

router.delete('/:id', function(req, res){
  
})

module.exports = router