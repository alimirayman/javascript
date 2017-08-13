// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Functional Programming
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function mapForEachArr(arr = [], func) {
  var newArr = []
  
  for(var i = 0; i < arr.length; i++){
    newArr.push(
      // pushing callback data from users custom function to new Array
      func(arr[i])
    )
  }
  // returning the new array
  return newArr
};

var arr = [1,2,3]

var customArr = mapForEachArr(arr, function (item) {
  return item * 2
})

var customArr2 = mapForEachArr(arr, function (item) {
  return item > 2
})

console.log(customArr)
console.log(customArr2)

function checkPastLimit(linter, item){
  return item > linter
};

var custom3 = mapForEachArr(arr, checkPastLimit.bind(this, 1))

console.log(custom3)

function checkPastLimitSimplified(linter = 0) {
  return function(linter, item) {
    return item > linter
  }.bind(this, linter)
};

var custom4 = mapForEachArr(arr, checkPastLimitSimplified(5))

console.log(custom4)