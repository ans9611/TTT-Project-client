const store = require('./../store')

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
  store.token = response.user.token;
  $('#sign-up').trigger('reset');
  $('#sign-in').hide();
  $('#sign-up').hide();
  $('#sign-out').show()
}

const onSignInFailure = () => {
  $('#message').text(`Unable to sign in :( check email or password again!`);
  console.log(response);
  $('#sign-up').trigger('reset');
}

const onSignOutSuccess = () => {
    $('#message').text('Successfully Signed out! Thank you! Come Again!');
    $('#sign-in').show();
    $('#sign-up').show();
    $('#sign-out').hide();

}
const onSignOutFailure = () => {
  $('#message').text('Unable to Signed out! You are destined to play one more game :)')
}


module.exports = {
  onSignUpSuccess,
  onSighUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure
};
