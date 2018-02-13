
// Get Elements from html
var cells = document.getElementsByClassName('cell') || [];
var resultBox = document.getElementById('result') || {};
var reset = document.getElementById('reset') || {};

// confingig the game in self calling function
(function(cells = [], resultBox = {}, reset = {}){

  // Staging the Tic Tac Toe Game
  var board;
  
  const huPlayer = 'O';
  const huWin = 'You Won!!';
  const huWinColor = '#18FFFF';
  
  const aiPlayer = 'X';
  const aiWin = 'I Win :P';
  const aiWinColor = '#FFFF00';
  
  const tie = "It's a \nTie :(";
  const tieColor = '#1DE9B6';
  
  const winCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

  // starting the game and setting the initial setup
  (function startGame(){
    board = Array.from(Array(9).keys());
    reset.addEventListener( 'click' , startGame, false );
    resultBox.classList.add('d-none')
    for(let i = 0; i < cells.length; i++){
      cells[i].innerHTML = '';
      cells[i].style.removeProperty('background-color')
      cells[i].addEventListener('click', turnClick, false)
    }
    turn(bestSpotID(), aiPlayer)
  })();

  function turnClick(cell){
    if( typeof board[cell.target.id] == 'number'){
      if(turn(cell.target.id, huPlayer) && !checkTie()){
        turn(bestSpotID(), aiPlayer)
      }
    }
  }

  function turn(id, player){
    board[id] = player;
    cells[id].innerHTML = player
    let gameWon = checkWin(board, player)
    if(gameWon){
      gameOver(gameWon)
      return false
    }
    return true
  }

  function bestSpotID(){
    return minimax(board, aiPlayer).index;
  }

  function emptySpots(curBoard = []){
    return curBoard.filter(el => {
      return !(el === huPlayer) && !(el === aiPlayer)
    })
  }

  function checkWin(board, player){
    let play = board.reduce((a,el,index) => (el === player) ? a.concat(index) : a, []);
    let gameWon = null
    winCombos.forEach((win, index) => {
      if(win.every(el => play.indexOf(el) > -1)){
        gameWon = {index: index, player: player}
      }
    })
    return gameWon;
  }

  function gameOver(gameWon){
    winCombos[gameWon.index].forEach(el=>{
      document.getElementById(el).style.backgroundColor 
        = (gameWon.player === huPlayer) ? huWinColor : aiWinColor
    })
    for(let i =0; i < this.cells.length; i++){
      cells[i].removeEventListener('click', turnClick)
    }
    result((gameWon.player === huPlayer) ? huWin: aiWin)
  }

  function result(text = ''){
    resultBox.querySelector('.text').innerHTML = text
    resultBox.classList.remove('d-none')
  }

  function checkTie(){
    if(emptySpots(board).length === 0){
      for(let i =0; i < this.cells.length; i++){
        cells[i].style.backgroundColor = tieColor
        cells[i].removeEventListener('click', turnClick)
      }
      result(tie)
      return true;
    }
    else return false ;
  }

  function minimax(curBoard, player){
    let availableSpots = emptySpots(curBoard)
    
    if(checkWin(curBoard, huPlayer)) return {score: -10};
    else if(checkWin(curBoard, aiPlayer)) return {score: 10};
    else if(availableSpots.length === 0) return {score: 0};

    let moves = []
    for(let i = 0; i < availableSpots.length; i++){
      let move = {};
      move.index = curBoard[availableSpots[i]];
      curBoard[availableSpots[i]] = player;

      move.score 
        = minimax(
            curBoard,
            (player === aiPlayer) ? huPlayer : aiPlayer 
          ).score;
      curBoard[availableSpots[i]] = move.index;

      moves.push(move);
    }

    var bestMove;
    if(player === aiPlayer) {
      var bestScore = -10000;
      for(var i = 0; i < moves.length; i++) {
        if (moves[i].score > bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    } else {
      var bestScore = 10000;
      for(var i = 0; i < moves.length; i++) {
        if (moves[i].score < bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    }
  
    return moves[bestMove];
  }

})(cells, resultBox, reset)

