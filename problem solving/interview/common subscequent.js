/*
Largest common subsequest

s1 = "ASDGETTDD"
s2 = "BSERRYTTGD"

result = "SETTD"

*/

function solution(s1 = '', s2 = '') {
  let mem = {}
  return recurSolve(s1, s2, 0, 0, '', mem)
}

function recurSolve(s1 = '', s2 = '', i1 = 0, i2 = 0, str = '', mem = {}) {
  if (mem[`${i1}  ${i2} ${str}`]) return mem[`${i1}  ${i2} ${str}`]
  if (i2 == s2.length || i1 == s1.length) {
    return str
  }

  if (s1.charAt(i1) === s2.charAt(i2)) {
    str += s1.charAt(i1)
    return recurSolve(s1, s2, ++i1, ++i2, str, mem)
  }
  let solve1 = recurSolve(s1, s2, i1 + 1, i2, str, mem)
  let solve2 = recurSolve(s1, s2, i1, i2 + 1, str, mem)
  let rightSolve = ''
  if (solve1.length > solve2.length) rightSolve = solve1
  else rightSolve = solve2
  // memoization
  mem[`${i1}  ${i2} ${str}`] = rightSolve
  return rightSolve
}

let s1 = 'ASDGETTDD'
let s2 = 'BSERRYTTGDD'
console.time('time')
console.log(solution(s1, s2))
console.timeEnd('time')
