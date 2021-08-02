// let numCellMatrix = [
//   [1, 1, 1],
//   [1, 1, 1],
//   [1, 1, 1]
// ]

// // when x player clicks, corresponding position
// //of matrix changes to 0
// const matrixOne = function(requestIndex) {
//   if (requestIndex === 0 || 1 || 2) {
//     numCellMatrix[0][requestIndex] = 0
//   }
// }

// const matrixTwo = function (requestIndex) {
//   if (requestIndex === 3 || 4 || 5) {
//     numCellMatrix[1][requestIndex - 3] = 0;
//   }
// };

// const matrixThree = function (requestIndex) {
//   if (requestIndex === 6 || 7 || 8) {
//     numCellMatrix[2][requestIndex - 6] = 0;
//   }
// };


// let numCellMatrix = [
//   [0, 0, 1],
//   [0, 1, 1],
//   [0, 1, 1],
// ];

// const numWinner = function () {
//   //if column has all 0 then X wins
//   for (let i = 0; i < numCellMatrix[0].length ; i++) {
//     if (numCellMatrix[i].every((cell) => cell === 0)) {
//       console.log("bingo");
//     }


// const numWinner1 = function () {
//   for (let i = 0; i < numCellMatrix[0].length; i++) {

//     for (let j = 0; j < numCellMatrix[0].length; j++) {
//       if (numCellMatrix[i][j].every((cell) => cell === 1)) {
//         console.log("not bingo");
//       } else {
//         console.log("bingo");
//       }
//     }


//   }

// }











