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
// const getRandomInteger = (min, max) => {
//   return Math.floor(Math.random() * (max - min) + min);
// }

// const printBoard = (board) => {
//   const printableBoard = board.map((row) => row.join(' | ')).join('\n');
//   console.log(printableBoard);
// }

// const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
//   let board = [];
//   for(let i=0; i<numberOfRows; i++){
//     board.push([]);
//     for(let j=0; j<numberOfColumns; j++){
//       board[i].push(' ');
//     }
//   }
//   return board;
// };

// const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
//   let board = [];
//   for(let i=0; i<numberOfRows; i++){
//     board.push([]);
//     for(let j=0; j<numberOfColumns; j++){
//       board[i].push(' ');
//     }
//   }

//   let numberOfBombsPlaced = 0;
//   while(numberOfBombsPlaced < numberOfBombs){
//     let randomRowIndex = getRandomInteger(0, numberOfRows);
//     let randomColumnIndex = getRandomInteger(0, numberOfColumns);
//     if(board[randomRowIndex][randomColumnIndex] === ' '){
//       board[randomRowIndex][randomColumnIndex] = 'B';
//       numberOfBombsPlaced++;
//     }
//   }
//   return board;
// };

// console.log('Player Board: ');
// playerBoard = generatePlayerBoard(3,4);
// printBoard(playerBoard);

// console.log('Bomb Board:');
// bombBoard = generateBombBoard(3,4,5);
// printBoard(bombBoard);

// PART 4
// const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {
//   const neighborOffset = [[-1,-1], [-1,0], [-1,1], [0,-1], [0,1], [1,-1], [1,0], [1,1]];
//   const numberOfRows = bombBoard.length;
//   const numberOfColumns = bombBoard[0].length;
//   let numberOfBombs = 0;

//   neighborOffset.forEach((offset) => {
//     const neighborRowIndex = rowIndex + offset[0];
//     const neighborColumnIndex = columnIndex + offset[1];

//     if(neighborRowIndex >= 0 && neighborRowIndex < numberOfRows &&
//       neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns){
//       if(bombBoard[neighborRowIndex][neighborColumnIndex] == 'B'){
//         numberOfBombs++;
//       }
//     }
//   });
//   return numberOfBombs;
// };

// const flipTile = (playerBoard, bombBoard, rowIndex, columnIndex) => {
//   if(playerBoard[rowIndex][columnIndex] != ' '){
//     console.log('This tile has been flipped!');
//     return;
//   }

//   if(bombBoard[rowIndex][columnIndex] === 'B'){
//     playerBoard[rowIndex][columnIndex] = 'B';
//   } else{
//     playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex);
//   }
// };

// flipTile(playerBoard, bombBoard, 0, 0);
// console.log('Updated Player Board:');
// printBoard(playerBoard);

// PART 5
// class Board {
//   constructor(numberOfRows, numberOfColumns, numberOfBombs){
//     this._numberOfBombs = numberOfBombs;
//     this._numberOfTiles = numberOfRows * numberOfColumns;
//     this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
//     this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
//   }

//   get playerBoard(){
//     return this._playerBoard;
//   }

//   flipTile(rowIndex, columnIndex){
//     const playerBoard = this._playerBoard;
//     const bombBoard = this._bombBoard;
//     if(playerBoard[rowIndex][columnIndex] != ' '){
//       console.log('This tile has been flipped!');
//       return;
//     }
//     else{
//       this._numberOfTiles--;
//       if(bombBoard[rowIndex][columnIndex] === 'B'){
//         playerBoard[rowIndex][columnIndex] = 'B';
//         return 'B';
//       }
//       else{
//         playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex);
//         return;
//       }
//     }
//   }

//   getNumberOfNeighborBombs(rowIndex, columnIndex){
//     const bombBoard = this._bombBoard;
//     const neighborOffset = [[-1,-1], [-1,0], [-1,1], [0,-1], [0,1], [1,-1], [1,0], [1,1]];
//     const numberOfRows = bombBoard.length;
//     const numberOfColumns = bombBoard[0].length;
//     let numberOfBombs = 0;

//     neighborOffset.forEach((offset) => {
//       const neighborRowIndex = rowIndex + offset[0];
//       const neighborColumnIndex = columnIndex + offset[1];

//       if(neighborRowIndex >= 0 && neighborRowIndex < numberOfRows &&
//         neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns){
//         if(bombBoard[neighborRowIndex][neighborColumnIndex] == 'B'){
//           numberOfBombs++;
//         }
//       }
//     });
//     return numberOfBombs;
//   }

//   hasSafeTitle(){
//     return this._numberOfTiles == this._numberOfBombs;
//   }

//   print(){
//     const board = this._playerBoard;
//     const printableBoard = board.map((row) => row.join(' | ')).join('\n');
//     console.log(printableBoard);
//   }

//   static generatePlayerBoard(numberOfRows, numberOfColumns){
//     let board = [];
//     for(let i=0; i<numberOfRows; i++){
//       board.push([]);
//       for(let j=0; j<numberOfColumns; j++){
//         board[i].push(' ');
//       }
//     }
//     return board;
//   }

//   static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs){
//     let board = [];
//     for(let i=0; i<numberOfRows; i++){
//       board.push([]);
//       for(let j=0; j<numberOfColumns; j++){
//         board[i].push(' ');
//       }
//     }

//     let numberOfBombsPlaced = 0;
//     while(numberOfBombsPlaced < numberOfBombs){
//       let randomRowIndex = getRandomInteger(0, numberOfRows);
//       let randomColumnIndex = getRandomInteger(0, numberOfColumns);
//       if(board[randomRowIndex][randomColumnIndex] === ' '){
//         board[randomRowIndex][randomColumnIndex] = 'B';
//         numberOfBombsPlaced++;
//       }
//     }
//     return board;
//   }
// }

// class Game {
//   constructor(numberOfRows, numberOfColumns, numberOfBombs){
//     this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
//   }
//   playMove(rowIndex, columnIndex){
//     const turned_status = this._board.flipTile(rowIndex, columnIndex);
//     if(turned_status == 'B'){
//       console.log('Game Over. You lose');
//       this._board.print();
//     }
//     else if(this._board.hasSafeTitle()){
//       console.log('Game Over. You Win');
//       this._board.print();
//     }
//     else{
//       console.log('Current Board:');
//       this._board.print();
//     }
//   }
// }

// const g = new Game(3,3,3);
// g.playMove(0,0);
