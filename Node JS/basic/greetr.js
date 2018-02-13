var Emitter = require('events')

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Old JavaScript
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // function Greetr(){
  //   this.greeting = 'Hello World'
  // }

  // util.inherits(Greetr, Emitter)

  // Greetr.prototype.greet = function(data){
  //   console.log(`${this.greeting}: ${data}`);
  //   this.emit('greet', data)
  // }
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// New ES6 version of the old code
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
class Greetr extends Emitter{
  constructor(){
    super()
    this.greeting = 'Hello World!!'
  }

  greet(data){
    console.log(`${this.greeting}: ${data}`);
    this.emit('greet', data)
  }
}
module.exports = Greetr;