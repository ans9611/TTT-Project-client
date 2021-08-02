const store = require('./../store')
// const game = require('./../gameStore')

const onSignUpSuccess = (response) => {
  $('#message').text(`Thank you for signing Up! ${response.user.email} Sign in To play Game!!`)
}

const onSighUpFailure = () => {
    $('#message').text(`Unable to Sign Up...:( Check email or password`);
    $('#sign-up').trigger('reset');
}

const onSignInSuccess = (response) => {
  $('#message').text(`Welcome Back! ${response.user.email}`);
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
  $("#message").show()
  $('#message').text(`Game Begins`)
  $("#gameMessage").text("")
  $('.box').show()
  $(".box").trigger('reset')
  $('.board').trigger('reset');
  $('.box').css("background","");
  $(".box").css("transparent", "");
  $(".box").text("")
  $("#new-game").hide();

  store.game = response.game

}

const onCreateNewGameFailure = () => {
  $('#message').text(`Unable to start Game :( you are destined to study instead of playing a game!`)
}

const onPlayGameSuccess = (response) => {
  $('#message').text('Successfully Clicked!')
  store.game = response.game
}

const currentPlayerMessage = (currentPlayer, opponent) => {
  $("#playerMessage").text(
    `Player ${currentPlayer} just placed on the board. Now it's ${opponent}'s turn!`
  );
};

const onPlayGameFailure = () => {
  $('#message').text('Unable to Click!')
}

const onGameWin = (winner) => {
  $("#gameMessage").text(`Congrats! ${winner} WINS! Click "New Game" to play Again!`);
  $("#new-game").show();
  $("#playerMessage").text("")
  $("#message").hide()
}

const onGameTie = () => {
  $("#gameMessage").text(`It is Tie! There Cannot be two suns in the sky. Play Again!`);
  $("#new-game").show();
  $("#playerMessage").text("")
  $("#message").hide();
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
  currentPlayerMessage,
};
