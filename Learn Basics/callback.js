// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Callback
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function tellMeWhenItIsDone(Callback) {
  setTimeout(function() {
    Callback();
  }, (3*1000));
}

tellMeWhenItIsDone( function() {
  console.log('google Foobar');
})