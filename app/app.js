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
  $('.square').on('click', addEvents.onPlayGame)
  $(".box").on("click", addEvents.onBoxClick);

// let currentPlayer = "✕";

// // Our box click event handler
// const onBoxClick = (event) => {
//   console.log("click");

//   // Select the box that was clicked, event.target
//   const box = $(event.target);

//   // Then set the text to the current player
//   box.css("background", "transparent")
//   box.text(currentPlayer);

//   // Change the current player
//   currentPlayer = currentPlayer === "O" ? "✕" : "O";
// };

// // Select all of the boxes, $('.box'), add an event listener so that `on`
// // every 'click' the `onBoxClick` event handler is called.
// // $(".box").on("click", onBoxClick);

})
