/*
  Brackets Mathcing
  {[()()]} => valid
  ([)()] => not valid
*/

function solution(S = '') {
  // write your code in JavaScript (Node.js 8.9.4)
  let store = []
  for (let i = 0; i < S.length; i++) {
    if (store.length && matcher(store[store.length - 1]) === S.charAt(i))
      store.pop()
    else store.push(S.charAt(i))
    console.log(store)
  }
  return store.length ? 0 : 1
}

function matcher(SB = '') {
  let EB
  switch (SB) {
    case '(':
      EB = ')'
      break
    case '{':
      EB = '}'
      break
    case '[':
      EB = ']'
      break
  }
  return EB
}

let valid = '{[()()]}'
let invalid = '([)()]'

console.log(solution(valid))
console.log(solution(invalid))
