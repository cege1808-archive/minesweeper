// Game Class

import { Board } from './board.js';

class Game {
  constructor(numberOfRows, numberOfColumns, numberOfBombs){
    this._numberOfRows = numberOfRows;
    this._numberOfColumns = numberOfColumns;
    this._numberOfBombs = numberOfBombs;
    this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
  }
  playMove(rowIndex, columnIndex){
    const turned_status = this._board.flipTile(rowIndex, columnIndex);
    if(turned_status == 'B'){
      console.log('Game Over. You lose');
      this._board.print();
    }
    else if(this._board.hasSafeTitle()){
      console.log('Game Over. You Win');
      this._board.print();
    }
    else{
      console.log('Current Board:');
      this._board.print();
    }
  }
  restart(){
    console.log('Restart the Game');
    this._board = new Board(this._numberOfRows, this._numberOfColumns, this._numberOfBombs);
  }
}