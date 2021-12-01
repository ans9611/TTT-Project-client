Big O notation
  - linear time complexity

```
let gameOver = false
let currentPlayer = 'X'
//creating event handler which allows current game player (user) selects target spot of the board
const onBoxClick = function (event) {
  const box = $(event.target);
  let gameBoard = store.game.cells;
  let requestIndex = box.data("index");

  let requestData = {
    gameIndex: requestIndex,
    gameCurrentPlayer: currentPlayer
  }

    if (store.game.over === true) {
      ui.onPlayGameFailure()
      return;
    }

    if (gameBoard[requestData.gameIndex] === "X" || gameBoard[requestData.gameIndex] === "O") {
      ui.onPlayGameFailure();
      return
    }

  gameBoard[requestData.gameIndex] = requestData.gameCurrentPlayer;
   if (
     //  row win
     (gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2] && (gameBoard[2] === "X" || gameBoard[2] === "O")) ||
     (gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5] && (gameBoard[5] === "X" || gameBoard[5] === "O")) ||
     (gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8] && (gameBoard[8] === "X" || gameBoard[8] === "O")) ||
     // coloum win
     (gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6] && (gameBoard[0] === "X" || gameBoard[0] === "O")) ||
     (gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7] && (gameBoard[1] === "X" || gameBoard[1] === "O")) ||
     (gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8] && (gameBoard[8] === "X" || gameBoard[8] === "O")) ||
     //  diagnol win
     (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8] && (gameBoard[4] === "X" || gameBoard[4] === "O")) ||
     (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6] && (gameBoard[4] === "X" || gameBoard[4] === "O"))
   ) {
     gameOver = true
     ui.onGameWin(currentPlayer)
   }

  let count = gameBoard.filter(value => value != "").length
  if (count === 8) {
    gameOver = true
    ui.onGameTie()
  }

 const game = {
   cell: {
     index: requestData.gameIndex,
     value: requestData.gameCurrentPlayer,
   },
   over: gameOver,
 };

currentPlayer = currentPlayer === "O" ? "X" : "O";

 api.playGame(game)
 .then(ui.onPlayGameSuccess)
 .catch(ui.onPlayGameFailure);
}


```
