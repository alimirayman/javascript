/*
  Given an array find the min. avg slice start index
  A = [4,2,2,5,1,5,8]
    // 0 1 2 3 4 5 6
  for slice
    {1,2} => 2 + 2 / ((2-1) + 1) = 2
    {3,4} => 5 + 1 / ((4-3) + 1) = 3
    {1,4} => 2 + 2 + 5 + 1 / ((4-1) + 1) = 2.5

  slice {1,2} returns min avg
    thus start index 1

  returns 1

  **NB: Every slice is merge of slice of 2 or 3
*/

function solution(A = []) {
  let len = A.length
  let min = 10001
  let index = 0
  for (let i = 0; i < len - 1; i++) {
    if ((A[i + 1] + A[i]) / 2 < min) {
      min = (A[i + 1] + A[i]) / 2
      index = i
    }
    if (i < len - 2 && (A[i + 2] + A[i + 1] + A[i]) / 3 < min) {
      min = (A[i + 2] + A[i + 1] + A[i]) / 3
      index = i
    }
  }
  return index
}

A = [4, 2, 2, 5, 1, 5, 8]

console.log(solution(A))
