const store = require('./../store')
// const game = require('./../gameStore')

const onSignUpSuccess = (response) => {
  $('#message').text(`Thank you for signing! ${response.user.email}`)
  console.log(response)
}

const onSighUpFailure = () => {
    $('#message').text(`Unable to Sign Up...:( Check email or password`);
    $('#sign-up').trigger('reset');
}

const onSignInSuccess = (response) => {
  $('#message').text(`Welcome Back! ${response.user.email}`);
  console.log(response)
  console.log(response.user)
  console.log(response.user.token)
  store.token = response.user.token
  store.id = response.user._id
  $('#sign-up').trigger('reset')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#sign-out').show()
  $('#new-game').show()
}

const onSignInFailure = () => {
  $('#message').text(`Unable to sign in :( check email or password again!`);
  console.log(response);
  $('#sign-in').trigger('reset');
}

const onSignOutSuccess = () => {
    $('#message').text('Successfully Signed out! Thank you! Come Again!');
    $('#sign-in').show();
    $('#sign-up').show();
    $('#sign-out').hide();
    $("#new-game").hide()
    $('.box').hide()

}
const onSignOutFailure = () => {
  $('#message').text('Unable to Signed out! You are destined to play one more game :)')
}

const onCreateNewGameSuccess = (response) => {
  $('#message').text(`Game Begins`)
  $('.box').show()
    store.game = response.game
  $("#new-game").hide();
}

const onCreateNewGameFailure = () => {
  $('#message').text(`Unable to start Game :( you are destined to study instead of playing a game!`)
}

const onPlayGameSuccess = (response) => {
  $('#message').text('onPlayGameSuccess')
  store.game = response.game
}

const onPlayGameFailure = () => {
  $('#message').text('on play game faile')
}

const onGameWin = (winner) => {
  $("#gameMessage").text(`${winner} WINS!`);
  $("#play-again").show()
}

const onGameTie = () => {
  $("#gameMessage").text(`There Cannot be two suns in the sky. Play Again!`);
  $("#play-again").show();
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
  onPlayGameFailure,
  onGameWin,
  onGameTie,
};
