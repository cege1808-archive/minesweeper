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
// let board = [
//   [' ', ' ', ' '],
//   [' ', ' ', ' '],
//   [' ', ' ', ' ']
// ];

// const printBoard = board => {
//   console.log('Current Board:');
//   for(let i=0; i<board.length; i++){
//     console.log(board[i].join(' | '));
//   }
// }

// printBoard(board);

// board[0][1] = '1';
// board[2][2] = 'B';

// printBoard(board);

// PART 3
const getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}

const printBoard = (board) => {
  const printableBoard = board.map((row) => row.join(' | ')).join('\n');
  console.log(printableBoard);
}

const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = [];
  for(let i=0; i<numberOfRows; i++){
    board.push([]);
    for(let j=0; j<numberOfColumns; j++){
      board[i].push(' ');
    }
  }
  return board;
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  let board = [];
  for(let i=0; i<numberOfRows; i++){
    board.push([]);
    for(let j=0; j<numberOfColumns; j++){
      board[i].push(' ');
    }
  }

  let numberOfBombsPlaced = 0;
  while(numberOfBombsPlaced < numberOfBombs){
    let randomRowIndex = getRandomInteger(0, numberOfRows);
    let randomColumnIndex = getRandomInteger(0, numberOfColumns);
    if(board[randomRowIndex][randomColumnIndex] === ' '){
      board[randomRowIndex][randomColumnIndex] = 'B';
      numberOfBombsPlaced++;
    }
  }
  return board;
};

console.log('Player Board: ');
playerBoard = generatePlayerBoard(3,4);
printBoard(playerBoard);

console.log('Bomb Board:');
bombBoard = generateBombBoard(3,4,5);
printBoard(bombBoard);


