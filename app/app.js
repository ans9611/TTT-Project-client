// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const addEvents = require('./auth/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', addEvents.onSignUp)
  $('#sign-in').on('submit', addEvents.onSignIn)
  $('#sign-out').on('submit', addEvents.onSignOut)
  $('#new-game').on('submit', addEvents.onNewGame)
  $(".box").on("click", addEvents.onBoxClick)
  $("#sign-out").hide()
  $("#new-game").hide()
  $(".box").hide()
})
