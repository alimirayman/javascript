(function(global, $){

  var Greetr = function( firstName = '', lastName = '', language = 'en' ){
    return new Greetr.init(firstName, lastName, language)
  }

  var supportedLang = ['en', 'es']

  var greetings = {
    en: 'Hello',
    es: 'Hola'
  }

  var formalGreetings = {
    en: 'Greetings',
    es: 'Saludos'
  }

  var logMessages = {
    en: 'Logged in',
    es: 'Conectado'
  }

  Greetr.prototype = {

    fullName: function(){
      return this.fName + ' ' + this.lName
    },

    validate: function(){
      if(supportedLang.indexOf(this.lang) == -1){
        throw new Error("Invalid Language")
      }
    },

    greeting: function(){
      return greetings[this.lang]+ ', ' + this.fName
    },

    formalGreeting: function(){
      return formalGreetings[this.lang]+ ', '+ this.fullName()
    },

    greet: function(formal){
      var msg

      // if 'formal' is undefined it will be considered as 'false'
      if (formal) {
        msg = this.formalGreeting()
      } else {
        msg = this.greeting()
      }

      if (console) {
        console.log( msg )
      }

      // Making this function chaninable
      return this
    },

    log: function(){
      if(console){
        console.log(logMessages[this.lang] + ' as ' + this.fullName())
      }

      return this
    },

    setLang: function(lang){
      this.lang = lang

      this.validate()

      return this
    },

    HTMLGreeting: function( selector, formal ){
      if(!$){
        throw new Error('jQuery not loaded')
      }

      if(!selector){
        throw new Error('Missing jQuery Selecor')
      }

      var msg

      // if 'formal' is undefined it will be considered as 'false'
      if (formal) {
        msg = this.formalGreeting()
      } else {
        msg = this.greeting()
      }

      $(selector).html(msg)

      return this

    }
  }

  Greetr.init = function(fName, lName, lang){
    var self = this
    
    self.fName = fName
    self.lName = lName
    self.lang = lang

    self.validate()
  }

  Greetr.init.prototype = Greetr.prototype

  global.Greetr = global.G$ = Greetr

}(window, jQuery))