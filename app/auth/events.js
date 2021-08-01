const store = require('../store')
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../lib/get-form-fields')

const onSignUp = function(event){
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  console.log(form)
  console.log(data)

  api.signUp(data)
  .then(ui.onSignUpSuccess)
  .catch(ui.onSighUpFailure)
}

const onSignIn = function(event){
  event.preventDefault()
  form = event.target
  console.log(form)
  data = getFormFields(form)
  console.log(data)

  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onSignOut = function (event) {
  api.signOut()
  .then(ui.onSignOutSuccess)
  .catch(ui.onSignOutFailure)
};

const onNewGame = function (event) {
  event.preventDefault()
  form = event.target;
  data = getFormFields(form);

  console.log(data)

    api.newGame(data)
    .then(ui.onCreateNewGameSuccess)
    .catch(ui.onCreateNewGameFailure)
}


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
      ui.onPlayGameFailure
      return;
    }

    if (gameBoard[requestData.gameIndex] === "X" || gameBoard[requestData.gameIndex] === "O") {
      ui.onPlayGameFailure;
      return
    }

    if (box.text() === "") {
      box.css("background", "transparent");
      box.text(currentPlayer);
      gameOver = false
    }

  gameBoard[requestData.gameIndex] = requestData.gameCurrentPlayer;

  console.log(gameBoard)
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
    console.log('tie!')
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

 api.playGame(game).then(ui.onPlayGameSuccess).catch(ui.onPlayGameFailure);



}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onNewGame,
  onBoxClick

};
