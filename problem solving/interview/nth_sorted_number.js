/*
  Find the nth sorted number in an unsorted array
  time complexity less then => N*log(N)
*/

function solution(Arr = [], nth) {
  return findNumber(Arr, nth)
}

function findNumber(Arr = [], nth) {
  let left = []
  let right = []
  for (let i = 0; i < Arr.length; i++) {
    if (Arr[i] < Arr[nth]) left.push(Arr[i])
    else if (Arr[i] > Arr[nth]) right.push(Arr[i])
  }
  if (nth < left.length) return findNumber(left, nth)
  else if (nth > left.length && right.length > 0)
    return findNumber(right, nth - left.length - 1)
  else if (nth === left.length) return Arr[nth]
}

let A = [5, 9, 8, 2, 3]
console.log(solution(A, 3))
