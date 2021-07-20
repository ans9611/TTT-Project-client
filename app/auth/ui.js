const store = require('./../store')
// const game = require('./../gameStore')
const addNestedValue = require('./../../lib/add-nested-value')


const onSignUpSuccess = (response) => {
  $('#message').text(`Thank you for signing! ${response.user.email}`)
  console.log(response)
  $('#sign-out').hide()
  $('#new-game').hide()
  $('#board').hide();
}

const onSighUpFailure = () => {
    $('#message').text(`Unable to Sign Up...:( Check email or password`);
    $('#sign-up').trigger('reset');
    $('#sign-out').hide();
    $('#new-game').hide();
    $('#board').hide();
}

const onSignInSuccess = (response) => {
  $('#message').text(`Welcome Back! ${response.user.email}`);
  console.log(response)
  console.log(response.user)
  console.log(response.user.token)
  store.token = response.user.token
  store.id = response.user._id
  console.log(store.id)
  $('#sign-up').trigger('reset')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#sign-out').show()
  $('#new-game').show()
  $('#board').hide();
}

const onSignInFailure = () => {
  $('#message').text(`Unable to sign in :( check email or password again!`);
  console.log(response);
  $('#sign-in').trigger('reset');
  $('#board').hide();
}

const onSignOutSuccess = () => {
    $('#message').text('Successfully Signed out! Thank you! Come Again!');
    $('#sign-in').show();
    $('#sign-up').show();
    $('#sign-out').hide();
    $('#board').hide()

}
const onSignOutFailure = () => {
  $('#message').text('Unable to Signed out! You are destined to play one more game :)')
}

const onCreateNewGameSuccess = (response) => {
  $('#message').text(`Game Begins`)
  $('#board').show()
    store.game = response.game
    // //returns {game = {cells [], over, id}}
    // console.log(store.game)
}

const onCreateNewGameFailure = () => {
  $('#message').text(`Unable to start Game :( you are destined to study instead of playing a game!`)
}

const onPlayGameSuccess = (response) => {
  $('#message').text('onPlayGameSuccess')
  let board = response.game.cells
  console.log(board)
}

const onPlayGameFailure = () => {
  $('#message').text('on play game faile')

}

module.exports = {
  onSignUpSuccess,
  onSighUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onCreateNewGameSuccess,
  onCreateNewGameFailure,
  onPlayGameSuccess,
  onPlayGameFailure
};
