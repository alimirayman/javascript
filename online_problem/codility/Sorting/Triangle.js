// find triangular number

function solution(A = []) {
  // write your code in JavaScript (Node.js 8.9.4)
  A = A.sort((a, b) => a - b)
  console.log(A)
  for (let i = 0; i < A.length - 2; i++) {
    if (A[i] + A[i + 1] > A[i + 2]) {
      return 1
    }
  }
  return 0
}

// let A = [10, 2, 5, 1, 8, 20]
// let B = [5, 10, 50, 1]
let C = [1, 1, 2, 3, 5]
// console.log(solution(A))
// console.log(solution(B))
console.log(solution(C))
