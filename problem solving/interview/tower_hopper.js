/*
  given an array of the highets of tower if a person is at the top of first tower can he go out of the array?

  arr = [4,2,0,0,2,0]

  5| :)
  4|--|
  3|  |
  2|  |--|     |--|
  1|     |     |  |
  0|     |--|--|  |--|
  -------------------------
  true
*/
function solution(arr = []) {
  return recJump(arr, arr.length - 1, 1)
}
function recJump(arr = [], ind = 0, jump = 0) {
  if (ind === -1) return false
  if (ind === 0 && arr[ind] >= jump) return true
  if (arr[ind] >= jump) return recJump(arr, ind - 1, 1)
  return recJump(arr, ind - 1, jump + 1)
}

let arr = [4, 2, 0, 0, 2, 0]
let arr2 = [0, 2, 0, 0, 2, 0]
console.time('time')
console.log(solution(arr))
console.timeEnd('time')
