let numCellMatrix = [
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1]
]

let currentyPlayer = "X"


const numWinnerAdd = function(currentPlayer, ) {
    If (currentPlayer === "X") {
      if (requestIndex === 0 || 1 || 2) {
        numCellMatrix[0][requestIndex] = 0
      }
      else if (requestIndex === 3 || 4 || 5) {
        numCellMatrix[1][requestIndex-3] = 0
      }
      else if (requestIndex === 6 || 7 || 8) {
        numCellMatrix[2][requestIndex-6] = 0
      }
    }
}

let x = true
let o = false
const numWinner = function {
  //if column has all 0 then X wins
  for (let i = 0; i < numCellMatrix[0].length ; i++) {
    if (cellMatrix[i].every(cell => cell === 0) {
      return true
    })
  }

  //when a column has 0, return true
  for (let i = 0; i < numCellMatrix[0].length; i++) {
    let checkWin = true
    for (let j = 0; j < cellMatrix.length[0]; j++) {
      if (numCellMatirx[i][j] === 1) {
        return checkWin = false
      }
    }
  }

    //diagnoal check top left to bottom right
    //if there is false, return false

  let checkWin = true

    for (let i = 0 ; i < cellMatrix[0].length ; i++) {
     if (cellMatrix[i][i] === 1) {
       return checkWin = false
     }
   }

   //diagonal check bottom left to top right

  for (let i = 0 ; i < cellMatrix[0].length; i++) {
    for (let j = 0 ; j < cellMatrix[0].length; j--)
    if (cellMatrix[i][j] === 1) {
      return checkWin = false
    }
  }
  return checkWin
}


let cellMatrix = [
  [, , ],
  [, , ],
  [, , ]
]
// made empty matrix
// inside of clcik function,
// when I the event target, it adds to coressponding matrix
//if the current player is X then it adds true to corresponding position of 3 * 3 matrix
//if it is null, it adds false

const boolWinnerAdd = function() {
    If (currentPlayer === "X") {
      if (requestIndex === 0 || 1 || 2) {
        cellMatrix[0].push('true')
      }
      else if (requestIndex === 3 || 4 || 5) {
        cellMatrix[1].push('true')
      }
      else if (requestIndex === 6 || 7 || 8) {
        cellMatrix[2].push('true')
      }
    }

  for (let i = 0 ; i < cellMatrix.length ; i ++) {
    for (let j = 0; j < cellMatrix[i]; j ++) {
      if (cellMatrix[i][j] === null) {
        cellMatrix[i][j] === false
      }
    }
  }
}

const boolWinner = function() {
  //row win
  for (let i = 0; i < cellMatrix[0].length ; i++) {
    if (cellMatrix[i].every(cell => cell === true) {
      return true
    })
  }

  //when a column has false, return false
  for (let i = 0; i < cellMatirx[0].length; i++) {
    let checkWin = true
    for (let j = 0; j < cellMatrix.length[0]; j++) {
      if (cellMatrix[i][j] === false) {
        return checkWin = false
      }
    }

    //diagnoal check top left to bottom right
    //if there is false, return false

   let checkWin = true

    for (let i = 0 ; i < cellMatrix[0].length ; i++) {
     if (cellMatrix[i][i] === false) {
       return checkWin = false
     }
   }

   //diagonal check bottom left to top right

  for (let i = 0 ; i < cellMatrix[0].length; i++) {
    for (let j = 0 ; j < cellMatrix[0].length; j--)
    if (cellMatrix[i][j] === false) {
      return checkWin = false
    }
  }
  return checkWin
}


let numCellMatrix = [
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1]
]

const numWinnerAdd = function() {
    If (currentPlayer === "X") {
      if (requestIndex === 0 || 1 || 2) {
        numCellMatrix[0][requestIndex] = 0
      }
      else if (requestIndex === 3 || 4 || 5) {
        numCellMatrix[1][requestIndex-3] = 0
      }
      else if (requestIndex === 6 || 7 || 8) {
        numCellMatrix[2][requestIndex-6] = 0
      }
    }
}


let x = true
let o = false
const numWinner = function {
  //if column has all 0 then X wins
  for (let i = 0; i < numCellMatrix[0].length ; i++) {
    if (cellMatrix[i].every(cell => cell === 0) {
      return true
    })
  }

  //when a column has 0, return true
  for (let i = 0; i < numCellMatrix[0].length; i++) {
    let checkWin = true
    for (let j = 0; j < cellMatrix.length[0]; j++) {
      if (numCellMatirx[i][j] === 1) {
        return checkWin = false
      }
    }
  }

    //diagnoal check top left to bottom right
    //if there is false, return false

  let checkWin = true

    for (let i = 0 ; i < cellMatrix[0].length ; i++) {
     if (cellMatrix[i][i] === 1) {
       return checkWin = false
     }
   }

   //diagonal check bottom left to top right

  for (let i = 0 ; i < cellMatrix[0].length; i++) {
    for (let j = 0 ; j < cellMatrix[0].length; j--)
    if (cellMatrix[i][j] === 1) {
      return checkWin = false
    }
  }
  return checkWin
}
