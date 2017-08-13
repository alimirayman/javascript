// ~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Objects, prototypes
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~

// strict
"use strict"

// Pollyfill
if(!Object.create){
  Object.create = function(obj){
    if(arguments.length > 1) 
      throw new Error('Object.create implimentation only accepts first parameter')
    function F() {}
    F.prototype = obj
    return new F()
  }
}

var person = {
  firstName: 'Default',
  lastName: 'Default',
  greetPerson: function() {
    return 'Hello, ' + this.firstName + ' ' + this.lastName 
  }
}

var john = Object.create(person);

john.firstName = "John"
john.lastName = "Doe"

console.log(john.greetPerson());

var Company = function(name = '', year = 0, type = ''){
  this.name = name;
  this.year = year;
  this.type = type;
}

var google = new Company('Google', 1998, 'Tech')

console.log(google.name)

Company.prototype.founded = function(){
  return this.name + ' was founded on ' + this.year
}

console.log(google.founded())
