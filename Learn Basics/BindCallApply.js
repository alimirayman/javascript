// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// bind(), call(), apply()
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

class person {
  constructor(firstName = '', lastName = '') {
    this.firstName = firstName;
    this.lastName = lastName;
  };

  getFullName () {
    return this.firstName + ' ' + this.lastName;
  };
};

var person1 = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName: function() {
    return this.firstName + ' ' + this.lastName
  }
};

var person2 = new person('Humaira', 'Mitul');

var logPerson = function (pram1 = '', parm2 = '') {
  console.log( 'Hello, ' + this.getFullName() );
  console.log( "pram1 => " + pram1 );
  console.log( "pram2 => " + parm2 );
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
};

var logPersonBind = logPerson.bind(person1);

logPersonBind('Google', 'foober');

var logPersonCall = logPerson.call(person2, pram2='foobar', parm1 = 'Google');

var logPersonApply = logPerson.apply(person1, [pram2='foobar', parm1 = 'position']);