const store = require('./../store')
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../lib/get-form-fields')
const addNestedValue = require('./../../lib/add-nested-value')



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
  event.preventDefault()
  api.signOut()
  .then(ui.onSignOutSuccess)
  .catch(ui.onSignOutFailure)
};

const onNewGame = function (event) {
  event.preventDefault()

    api.newGame(data)
    .then(ui.onCreateNewGameSuccess)
    .catch(ui.onCreateNewGameFailure)
}

// let turn = true;
// let currentPlayer = "x";
let currentPlayer = 'x'
// const gameCell = ["", "", "", "", "", "", "", "", ""]
// console.log(gameCell)


const onPlayGame = (event) => {
  event.preventDefault()
  const form = event.target
  //clcicked form

  console.log(form)
  const cellIndex = $(form).attr('data-cell')
  console.log(cellIndex)


// for (let i = 0; i < gameCell.length; i++) {
//   if (gameCell[i] === ""){
//     gameCell[cellIndex] = currentPlayer
//   } else if(gameCell[i] === "o" || gameCell[i] === "x"){
//     console.log('no')
//   }
// }

currentPlayer = currentPlayer === "o" ? "x" : "o";

// for (index of store.cells) {
//   if (index === 'o' || index === 'x') {
//     return ui.onPlayGameFailure
//   }
//   else {
//     game.cell.index = cellIndex
//     game.cell.value = currentPlayer
//   }
// }
// console.log(store.cells)

  const game = {
    cell: {
      index: cellIndex,
      value: currentPlayer
    },
    over: false,
  };

  api.playGame(game)
  .then(ui.onPlayGameSuccess)
  .catch(ui.onPlayGameFailure)
}

const onBoxClick = function (event) {
  console.log("click")
  const box = $(event.target)
  box.css("background", "transparent")
  box.text(currentPlayer);
  currentPlayer = currentPlayer === "O" ? "✕" : "O";



  const requestIndex = box.data('index')
  console.log(requestIndex)

  // board.data('board', currentPlayer[requestIndex])

  const game = {
    cell: {
      index: requestIndex,
      value: currentPlayer
    },
    over: false,
  }

  api.playGame(game)
    .then(ui.onPlayGameSuccess)
    .catch(ui.onPlayGameFailure)
}




module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onNewGame,
  onPlayGame,
  onBoxClick

};
