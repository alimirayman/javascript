function solution(A = []) {
  for (let i = 1; i < A.length; i++) {
    A[i] = A[i] + A[i - 1]
  }
  let total = A[A.length - 1]
  let sumPassing = A[0] === 0 ? total - A[0] : 0
  for (let i = 1; i < A.length && sumPassing <= 1000000000; i++) {
    if (A[i] == A[i - 1]) sumPassing += total - A[i]
  }
  return sumPassing > 1000000000 ? -1 : sumPassing
}
A = [0, 1, 0, 1, 1]
console.log(solution(A))
