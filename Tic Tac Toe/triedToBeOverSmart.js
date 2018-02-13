class TicTacToe{
  constructor(boardName = 'bord', cellName = 'cell', buttonName = 'reset', result = 'result'){
    this.board;
    this.cells = document.getElementsByClassName(cellName) || [];
    this.resultBox = document.getElementById(result)
    this.huPlayer = '0'
    this.aiPlayer = 'X'
    this.winCombos = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
    this.resetGame(buttonName)
  }
  resetGame(buttonName = ''){
    document.getElementById(buttonName).addEventListener('click', this.startGame.bind(this))
  }
  startGame(){
    this.board = Array.from(Array(9).keys())
    this.resultBox.classList.add('d-none')    
    for(let i=0; i < this.cells.length; i++){
      this.cells[i].innerText = ''
      this.cells[i].style.removeProperty('background-color')
      this.cells[i].addEventListener('click', this.turnClick.bind(this), false)
    }
  }
  result(text = ''){
    this.resultBox.querySelector('.text').innerHTML = text
    this.resultBox.classList.remove('d-none')
  }
  turnClick(cell = {}){
    this.turn(cell.target.id, this.huPlayer)
    this.turn(this.bestSpotID(this.emptySpots(this.board)), this.aiPlayer)
  }
  bestSpotID(emptySpots = []){
    return emptySpots[0]

  }
  emptySpots(board = []){
    return board.filter(el => {
      return !(el === this.huPlayer) && !(el === this.aiPlayer) 
    })
  }
  turn(cellId, player){
    this.board[cellId] = player;
    document.getElementById(cellId).innerHTML = player
    let gameWon = this.checkWin(this.board, player)
    if(gameWon) this.gameOver(gameWon)
  }
  checkWin(board = [], player = ''){
    let play = board.reduce((a,el,index) => (el === player) ? a.concat(index) : a, []);
    let gameWon = null
    this.winCombos.forEach((win, index) => {
      if(win.every(el => play.indexOf(el) > -1)){
        gameWon = {index: index, player: player}
      }
    })
    return gameWon
  }
  gameOver(gameWon = {index: -1, player: ''}){
    this.winCombos[gameWon.index].forEach(el=>{
      document.getElementById(el).style.backgroundColor = 
        (gameWon.player === this.huPlayer) ? '#18FFFF' : '#FFFF00';
    })
    for(let i =0; i < this.cells.length; i++){
      this.cells[i].removeEventListener('click', this.turnClick)
    }
    this.result((gameWon.player === this.huPlayer) ? 'You Won!': 'I Won :P')
  }
}

var game = new TicTacToe('bord', 'cell', 'reset', 'result')
game.startGame()
