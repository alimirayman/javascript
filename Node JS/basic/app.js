var Emitter = require('events'),
    eventConfig = require('./magicConfig').events,
    emtr = new Emitter()

emtr.on(eventConfig.GREET, function () {
  console.log("Aloha Sinorita");
})

emtr.on(eventConfig.GREET, function () {
  console.log("Humaira Rahman");
})

console.log('Hello')

emtr.emit(eventConfig.GREET)
