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
  form = event.target
  data = getFormFields(form)
    api.newGame(data)
    .then(ui.onCreateNewGameSuccess)
    .catch(ui.onCreateNewGameFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onNewGame
};
