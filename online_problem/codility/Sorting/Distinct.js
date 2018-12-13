/* Find how many distinct value are present */
function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let res = {}
  for (let i = 0; i < A.length; i++) {
    res[A[i]] = 1
  }
  return Object.entries(res).length
}
