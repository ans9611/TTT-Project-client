let cellMatrix = [
  [, , ,],
  [, , ,],
  [, , ,]
]

const boolWinner = function() {
  for (let i = 0; i < cellMatrix.length[0] ; i++) {
    if (cellMatrix[i].every(cell => cell === true) {
      return true
    })
  }

  for (let i = 0; i < cellMatirx[0].length; i++) {
    let checkWin = true
    for (let j = 0; j < cellMatrix.length[0]; j++) {
      if (cellMatrix[i][j] === false) {
        return checkWin = false
      }
    }

   for (let i = 0 ; i < cellMatrix[0].length ; i++) {
     if (cellMatrix[i][i] === false) {
       return false
     }
   }

   checkWin = true

    for (let i = 0 ; i < cellMatrix[0].length ; i++) {
     if (cellMatrix[i][i] === false) {
       return checkWin = false
     }
   }

  for (let i = 0 ; i < cellMatrix[0].length; i++) {
    for (let j = 0 ; j < cellMatrix[0].length; j--)
    if (cellMatrix[i][j] === false) {
      return checkWin = false
    }
  }

  return checkWin

}

const boolWinnerAdd = function() {
    If (currentPlayer === "X" && requestIndex === 0 || 1 || 2) {
    cellMatrix[0].push('true')
  }

  else if (currentPlayer === "X" && requestIndex === 3 || 4 || 5) {
    cellMatrix[1].push('true')
  }

  else if (currentPlayer === "X" && requestIndex === 6 || 7 || 8) {
    cellMatrix[2].push('true')
  }
}



let cellMatrix = [
  [, , ,],
  [, , ,],
  [, , ,]
]

let rowWin = 0
let colWin = 0
let cross = 0

const numWin = function () {
 for (let i = 0; i < cellMatrix.length[0] ; i++) {
    if (cellMatrix[i].every(cell => cell === true) {
      return true
    })
  }

  for (let i = 0; i < cellMatirx[0].length; i++) {
    let checkWin = true
    for (let j = 0; j < cellMatrix.length[0]; j++) {
      if (cellMatrix[i][j] === false) {
        return checkWin = false
      }
    }

   for (let i = 0 ; i < cellMatrix[0].length ; i++) {
     if (cellMatrix[i][i] === false) {
       return false
     }
   }

   checkWin = true

    for (let i = 0 ; i < cellMatrix[0].length ; i++) {
     if (cellMatrix[i][i] === false) {
       return checkWin = false
     }
   }

  for (let i = 0 ; i < cellMatrix[0].length; i++) {
    for (let j = 0 ; j < cellMatrix[0].length; j--)
    if (cellMatrix[i][j] === false) {
      return checkWin = false
    }
  }

  return checkWin

}

//In event function
const numWinAdd = function () {
    If (currentPlayer === "X" && requestIndex === 0 || 1 || 2) {
      cellMatrix[0][requestIndex] = 0
  } else {cellMatrix[0][requestIndex] = 1}


    if (currentPlayer === "X" && requestIndex === 3 || 4 || 5) {
    cellMatrix[1][requestIndex] = 0
  } else {cellMatrix[1][requestIndex] = 1}

  else if (currentPlayer === "X" && requestIndex === 6 || 7 || 8) {
    cellMatrix[2][requestIndex] = 0
  } else {cellMatrix[2][requestIndex] = 1}
}
