/*
   X   = R
  A[0] = 1
  A[1] = 5
  A[2] = 2
  A[3] = 1
  A[4] = 4
  A[5] = 0

  find intersection
*/

function solution(A = []) {
  // write your code in JavaScript (Node.js 8.9.4)
  let store = []
  for (let i = 0; i < A.length; i++) {
    let start = i - A[i] > 0 ? i - A[i] : 0
    let end = i + A[i] >= A.length ? A.length - 1 : i + A[i]
    store.push({
      start,
      end
    })
    store = store.sort((a, b) => a.start - b.start)
  }
  let count = 0
  let checker = []
  for (let i = 0; i < store.length; i++) {
    for (let j = 0; j < checker.length; j++) {
      if (store[i].start <= checker[j]) count++
      else checker.splice(j--, 1)
    }
    checker.push(store[i].end)
  }
  return count
}

let A = [1, 5, 2, 1, 4, 0]
console.log(solution(A))
