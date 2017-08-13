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
		return function (firstName = '', lastName = '') {
			if (language === 'en') console.log( 'Hello, ' + firstName + ' ' + lastName )
			else if ( language === 'es') console.log( 'Aloha, ' + firstName + ' ' + lastName )
		}
	}

	var greetEng = genGreetings('en');
	var greetSpan = genGreetings('es');

	greetEng('Humaira', 'Ragman');
	greetSpan('Google', 'Foobar');
	