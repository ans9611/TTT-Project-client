const store = require('./../store')
// const game = require('./../gameStore')
const addNestedValue = require('./../../lib/add-nested-value')


const onSignUpSuccess = (response) => {
  $('#message').text(`Thank you for signing! ${response.user.email}`)
  console.log(response)
  $('#sign-out').hide()
  $('#new-game').hide()
  $("#game-board").hide();
}

const onSighUpFailure = () => {
    $('#message').text(`Unable to Sign Up...:( Check email or password`);
    $('#sign-up').trigger('reset');
    $('#sign-out').hide();
    $('#new-game').hide();
    $('#game-board').hide();
}

const onSignInSuccess = (response) => {
  $('#message').text(`Welcome Back! ${response.user.email}`);
  console.log(response)
  console.log(response.user)
  console.log(response.user.token)
  store.token = response.user.token
  $('#sign-up').trigger('reset')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#sign-out').show()
  $('#new-game').show()
  $('#game-board').hide();
}

const onSignInFailure = () => {
  $('#message').text(`Unable to sign in :( check email or password again!`);
  console.log(response);
  $('#sign-in').trigger('reset');
  $('#game-board').hide();
}

const onSignOutSuccess = () => {
    $('#message').text('Successfully Signed out! Thank you! Come Again!');
    $('#sign-in').show();
    $('#sign-up').show();
    $('#sign-out').hide();
    $('#game-board').hide()

}
const onSignOutFailure = () => {
  $('#message').text('Unable to Signed out! You are destined to play one more game :)')
}

const onCreateNewGameSuccess = (response) => {
  $('#message').text(`Game Begins`)
  $('#game-board').show()

  store.cells = response.game.cells
  store.id = response.game.owner

  game = store.cells
  userId = store.id

  console.log(game)
  console.log(userId)
  console.log(response)




}

const onCreateNewGameFailure = () => {
  $('#message').text(`Unable to start Game :( you are destined to study instead of playing a game!`)
}

module.exports = {
  onSignUpSuccess,
  onSighUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onCreateNewGameSuccess,
  onCreateNewGameFailure
};
