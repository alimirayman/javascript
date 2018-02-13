(()=>{

  var changingText = function(text = [], place = "", speed = ""){
    return new changingText.init(text, place, speed);
  }
  
  changingText.init = function(text, place, speed) {
    this.place = document.getElementById(place) || document.getElementById('placeholder')
    this.blink = document.getElementById('blink')
    this.text = text || []
    this.sentence = []
    this.current = []
    this.nextWord = ""
    this.index = 0
    this.forward = true
    this.pause = false
    this.getCurrent()
    setInterval(()=>{
      this.next()
    }, this.typingSpeed(speed))
  }
  
  changingText.prototype = {
    // get the element from text array and store it in the current variable as char array	
    getCurrent(){
      let el = this.text[this.index] || ""
      this.current = el.split('')
      this.getNextWord()
      // console.log(this.current + " || " + this.nextWord)
    },
    // get the next word from the array
    getNextWord(){
      this.changeIndex()
      this.nextWord = this.text[this.index]
    },
    // change the index accordingly
    changeIndex(){
      if(this.index == this.text.length - 1) this.index = 0
      else this.index++
    },
    // this joins the char array of the complete output and put it in the correct place
    viewText(){
      this.place.innerHTML = this.sentence.join('')
      // console.log(this.sentence.join(''))
    },
    // adds a single char to the output siring  
    addText(char){
      this.sentence.push(char)
      this.viewText()
    },
    // removes a single char to the output siring      
    removeText(){
      this.sentence.pop()
      this.viewText()
    },
    // returns the next char which needs to be pushed
    nextChar(){
      return this.current[this.sentence.length]
    },
    // check if we need to add or remove char
    checkForward(){
      if(this.sentence.length == this.current.length){
        this.forward = false
        this.pauseTyping()
      } 
      else if(this.sentence.length == 0 || (!this.forward && this.checkSimilarity())) {
        this.forward = true
        this.getCurrent()
      }
      else this.forward = this.forward
    },
    // add or remove char to output string
    next(){
      if(this.forward) this.addText(this.nextChar())
      else if(!this.pause) this.removeText()
      this.checkForward()
    },
    // pause the typing
    pauseTyping(){
      this.pause = true
      setTimeout(()=>{
        this.pause = false
      }, 2000)
    },
    // check Similarity between current and next line
    checkSimilarity(){
      // console.log( this.nextWord.slice(0,this.sentence.length) + " => " + this.sentence.join('') )
      return this.nextWord.includes(this.sentence.join('')) && this.nextWord.slice(0,this.sentence.length) == this.sentence.join('')
    },
    // change typing speed
    typingSpeed(speed = ""){
      let count = 300
      switch (speed.toUpperCase()) {
        case 'FAST':
          count = 100
          break;
        case 'MEDIUM':
          count = 200
          break;
        case 'SLOW':
          count = 300
          break;
        default:
          break;
      }
      let speedCount = Math.round( count + Math.random()*100) || 350
      this.blink.setAttribute('style',`animation-duration:${speedCount}ms`)      
      return speedCount
    }
  }
  changingText.init.prototype = changingText.prototype
  if(!window.changingText) window.changingText = changingText
})()


var cont = "placeholder"
var text = [
  "I Love You",
  "I Miss You",
  "Come Home :'( please",
  "Eid Mubarak :P"
]
var speed = 'fast'

changingText(text, cont, speed)
