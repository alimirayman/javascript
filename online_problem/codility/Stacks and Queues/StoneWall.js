/*
  Minimum blocks to make a wall of different height
  H[0] = 8    H[1] = 8    H[2] = 5
  H[3] = 7    H[4] = 9    H[5] = 8
  H[6] = 7    H[7] = 4    H[8] = 8

    8  8  5  7  9  8  7  4  8
 9 |          |--|
 8 |----|     |  |--|     |--
 7 |    |  |--|     |--|  |
 6 |    |  |           |  |
 5 |    |--|           |  |
 4 |                   |--|
 3 |
 2 |
 1 |
 0 ----------------------------
  */

function solution(H = []) {
  // write your code in JavaScript (Node.js 8.9.4)
  let stones = 0
  let store = [H[0]]
  for (let i = 1; i < H.length; i++) {
    if (!store.length || H[i] > store[store.length - 1]) store.push(H[i])
    else if (H[i] < store[store.length - 1]) {
      while (H[i] <= store[store.length - 1]) {
        if (H[i] !== store[store.length - 1]) stones++
        store.pop()
      }
      store.push(H[i])
    }
    console.log(store, stones)
  }
  stones += store.length
  return stones
}

let H = [8, 8, 5, 7, 9, 8, 7, 4, 8]
console.log(solution(H))
