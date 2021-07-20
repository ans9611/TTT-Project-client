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
let currentPlayer = 'x';
const onPlayGame = (event) => {
  event.preventDefault()
  const form = event.target
  const cellIndex = $(form).attr('id')
//When I click, gets index number

currentPlayer = currentPlayer === "o" ? "x" : "o";

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


module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onNewGame,
  onPlayGame
};
