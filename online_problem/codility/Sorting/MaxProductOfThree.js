// Max product of 3

function solution(A = []) {
  // write your code in JavaScript (Node.js 8.9.4)
  A = A.sort((a, b) => a - b)
  let twoNoneP = A[0] * A[1] * A[A.length - 1]
  let threeP = A[A.length - 1] * A[A.length - 2] * A[A.length - 3]
  return twoNoneP > threeP ? twoNoneP : threeP
}

let A = [-3, 1, 2, -2, 5, 6]
console.log(solution(A))
