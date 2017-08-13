// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Closures Part-1
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function greet (whattosay) {
  return function (name) {
    console.log(whattosay + ' ' + name)
  }
}

var hello = greet('hello');
hello('Mitul');

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Closures Part-2
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function buildFunctions () {
  var arr = [];

  for (var i = 0; i < 3; i++) {
    arr.push(
      (function (j) {
        return function () {
          console.log(j);
        }
      }(i))
    );
  }

  return arr;
}

var func =  buildFunctions();

func[0]();
func[1]();
func[2]();

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Closures Part-3
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function genGreetings(language = '') {
  var greet = function (type, fname, lname) {
    console.log( type +  ' ' + fname + ' ' + lname );
  }
  if (language === 'en'){
    return function (firstName = '', lastName = '') {
      return greet( 'hello', firstName, lastName );
    }
  } 
  else if ( language === 'es') {
    return function (firstName = '', lastName = '') {
      return greet('Aloha', firstName, lastName)
    } 
  }
}

var greetEng = genGreetings('en');
var greetSpan = genGreetings('es');

greetEng('Humaira', 'Ragman');
greetSpan('Google', 'Foobar');
