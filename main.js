// Set up the game board as a 2D array with all elements initialized to an empty string
let gameBoard = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

// Select all of the squares on the game board
const squares = document.querySelectorAll('.square');

// Add an event listener to each square that listens for a click event
squares.forEach(square => {
  square.addEventListener('click', function() {
    // When a square is clicked, call a function to handle the move
    console.log('was clicked')
    handleMove(square);
  });
});

// Define the function to handle a player's move
function handleMove(square) {
  // Determine the row and column of the clicked square
  let row, col;
  // Use the square's id attribute to determine the row and column (e.g. 'square-1-1' for the top-left square)
  const id = square.id;
  const parts = id.split('-');
  row = parseInt(parts[1], 10);
  col = parseInt(parts[2], 10);

  if (isNaN(row) || isNaN(col)) {
    // If the row or column is not a number, do not update the game board
    return;
  }

  // Update the game board to reflect the player's move
  gameBoard[row][col] = 'X'; // or 'O' depending on the current player

  // Display the player's symbol in the square
  square.textContent = 'X'; // or 'O' depending on the current player

  // Check for a win or a draw
  checkGameStatus();
}

// Define the function to check for a win or a draw
function checkGameStatus() {
  // Check for a win by looking for a pattern of three in a row in the game board array
  // You can use a series of if statements or a loop to check for a win
  let winner = '';
  // Check rows
  for (let i = 0; i < 3; i++) {
    if (gameBoard[i][0] === gameBoard[i][1] && gameBoard[i][1] === gameBoard[i][2]) {
      winner = gameBoard[i][0];
      break;
    }
  }
  // Check columns
  for (let i = 0; i < 3; i++) {
    if (gameBoard[0][i] === gameBoard[1][i] && gameBoard[1][i] === gameBoard[2][i]) {
      winner = gameBoard[0][i];
      break;
    }
  }
  // Check diagonals
  if (gameBoard[0][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][2]) {
    winner = gameBoard[0][0];
  }
  if (gameBoard[0][2] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][0]) {
    winner = gameBoard[0][2];
  }

  // Check for a draw by checking if all squares have been filled and no player has won
  // You can use a loop to check if all elements in the game board array are not empty
  let draw = true;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (gameBoard[i][j] === '') {
        draw = false;
        break;
      }
    }
  }
}
