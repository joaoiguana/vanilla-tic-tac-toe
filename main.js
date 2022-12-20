let gameBoard = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
]

const squares = document.querySelectorAll('.square');

squares.forEach(square => {
  square.addEventListener('click', function() {
    console.log('Was clicked');
    handleMove(square);
  })
})

function handleMove(square) {
  // Determine the row and column of the clicked square
  let row, col;
  const id = square.id;
  const parts = id.split('-');
  row = parseInt(parts[1], 10);
  col = parseInt(parts[2], 10);

  gameBoard[row][col] = 'X';
  square.textContent = 'X';
}
