// PART 1
// const blankLine = '  |   |  ';

// console.log('This is what an empty board would look like: ');
// console.log(blankLine);
// console.log(blankLine);
// console.log(blankLine);

// const guessLine = '1 |   |  ';
// const bombLine = '  | B |  ';

// console.log('This is what a board with a guess and a bomb on it would look like: ');
// console.log(guessLine);
// console.log(bombLine);
// console.log(blankLine);

// PART 2
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

const printBoard = board => {
  console.log('Current Board:');
  for(let i=0; i<board.length; i++){
    console.log(board[i].join(' | '));
  }
}

printBoard(board);

board[0][1] = '1';
board[2][2] = 'B';

printBoard(board);

