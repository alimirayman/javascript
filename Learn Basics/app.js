$('#login').click(function(e){
  e.preventDefault();

  var firstName = $('#fname').val();
  var lastName = $('#lname').val();
  var language = $('#lang').val();

  var person = G$(firstName, lastName, language)

  $('.card').addClass('d-none')

  person.HTMLGreeting('.jumbotron h2', true).log()

  $('.jumbotron').removeClass('d-none')
})
