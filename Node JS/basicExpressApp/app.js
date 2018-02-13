var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    mongoose = require('mongoose')

    
var basicRoute = require('./routes/index'),
    apiRoute = require('./routes/api')
    
var port = process.env.PORT || 3000
var dbusername = process.env.DBUSERNAME || 'test'
var dbuserpass = process.env.DBUSERPASS || 'test'

mongoose.connect(`mongodb://${dbusername}:${dbuserpass}@ds015942.mlab.com:15942/meantodos`)

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function(){
  console.log('connected');
})

var Schema = mongoose.Schema

var personSchema = new Schema({
  firstname: String,
  lastname: String,
  address: String
})

var Person = mongoose.model('Person', personSchema);

var john = Person({
  firstname: 'John',
  lastname: 'Doe',
  address: '555 Main St'
})

john.save(function(err){
  if(err) throw err;

  console.log('person saved!')
})

var jane = Person({
  firstname: 'Jane',
  lastname: 'Doe',
  address: '555 Main St'
})

jane.save(function(err){
  if(err) throw err;

  console.log('person saved!')
})

// Middlewares
app.use('/assets', express.static(__dirname+'/public'))
app.use('/person', bodyParser.urlencoded({ extended: false }));
app.use(function(req, res, next){
  console.log(`Requested url: ${req.url}`)

  Person.find({}, function(err, users){
    if(err) throw err;

    console.log(users)
  })

  next()
})

// Setting up the View Engine
app.set('view engine', 'ejs')

// Setting up the routing
app.use('/', basicRoute)
app.use('/person', apiRoute)

// Handeling the 404 Errors
app.use(function(req, res){
  res.render('error')
})

// Setting up the port id
app.listen(port)
