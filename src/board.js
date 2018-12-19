// Board Class

const getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}

export class Board {
  constructor(numberOfRows, numberOfColumns, numberOfBombs){
    this._numberOfBombs = numberOfBombs;
    this._numberOfTiles = numberOfRows * numberOfColumns;
    this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
    this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
  }

  get playerBoard(){
    return this._playerBoard;
  }

  flipTile(rowIndex, columnIndex){
    const playerBoard = this._playerBoard;
    const bombBoard = this._bombBoard;
    if(playerBoard[rowIndex][columnIndex] != ' '){
      console.log('This tile has been flipped!');
      return;
    }
    else{
      this._numberOfTiles--;
      if(bombBoard[rowIndex][columnIndex] === 'B'){
        playerBoard[rowIndex][columnIndex] = 'B';
        return 'B';
      }
      else{
        playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
        return;
      }
    }
  }

  getNumberOfNeighborBombs(rowIndex, columnIndex){
    const bombBoard = this._bombBoard;
    const neighborOffset = [[-1,-1], [-1,0], [-1,1], [0,-1], [0,1], [1,-1], [1,0], [1,1]];
    const numberOfRows = bombBoard.length;
    const numberOfColumns = bombBoard[0].length;
    let numberOfBombs = 0;

    neighborOffset.forEach((offset) => {
      const neighborRowIndex = rowIndex + offset[0];
      const neighborColumnIndex = columnIndex + offset[1];

      if(neighborRowIndex >= 0 && neighborRowIndex < numberOfRows &&
        neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns){
        if(bombBoard[neighborRowIndex][neighborColumnIndex] == 'B'){
          numberOfBombs++;
        }
      }
    });
    return numberOfBombs;
  }

  hasSafeTitle(){
    return this._numberOfTiles == this._numberOfBombs;
  }

  print(){
    const board = this._playerBoard;
    const printableBoard = board.map((row) => row.join(' | ')).join('\n');
    console.log(printableBoard);
  }

  static generatePlayerBoard(numberOfRows, numberOfColumns){
    let board = [];
    for(let i=0; i<numberOfRows; i++){
      board.push([]);
      for(let j=0; j<numberOfColumns; j++){
        board[i].push(' ');
      }
    }
    return board;
  }

  static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs){
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
  }
}