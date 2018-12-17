/*
  L = 0
  R = 1

  comand L => 2L - R
  comand R => 2R - L

  given target number `num`
  shortest commands to rach L = num OR R = num
*/
class provlem3 {
  constructor(number) {
    this.L = 0
    this.R = 1
    this.limit = number
    this.stack = []
    this.command = ['L', 'R']
  }
  solve() {
    if (this.runCommand(this.L, this.R, 'L')) {
      this.stack.push('L')
      return this.stack.reverse()
    } else if (this.runCommand(this.R, this.L, 'R')) {
      this.stack.push('R')
      return this.stack.reverse()
    }
    return 'impossible'
  }
  runCommand(first, second, command) {
    // console.log(`first => ${first} || second => ${second}`)
    first = first * 2 - second

    if (first === this.limit) {
      return command
    }

    if (this.limit > 0) {
      if (first > this.limit || first < -this.limit) return false
      if (second > this.limit || second < -this.limit) return false
    } else {
      if (first < this.limit || first > -this.limit) return false
      if (second < this.limit || second > -this.limit) return false
    }
    // if (
    //   Math.abs(first) > Math.abs(this.limit) ||
    //   Math.abs(second) > Math.abs(this.limit)
    // )
    //   return false
    if (this.runCommand(first, second, command)) {
      this.stack.push(command)
      return command
    } else if (this.runCommand(second, first, command === 'L' ? 'R' : 'L')) {
      this.stack.push(command === 'L' ? 'R' : 'L')
      return command
    }
    // if (this.stack.length) this.stack.pop()
    return false
  }
}

console.time('solve')
let some = new provlem3(-1254)
console.log(some.solve())
console.timeEnd('solve')
