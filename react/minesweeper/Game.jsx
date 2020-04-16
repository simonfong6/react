import React from 'react';

import * as Minesweeper from './minesweeper';
import Board from './Board';

const BOARD_SIZE = 9;
const BOMB_COUNT = 9;

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: new Minesweeper.Board(BOARD_SIZE, BOMB_COUNT)
    };
  }

  updateGame(tile, flag) {
    console.log("Update Game");

    if (flag) {
      tile.toggleFlag();
    } else {
      tile.explore();
    }

    this.setState({ board: this.state.board })
  }

  restartGame() {
    this.setState({ board: new Minesweeper.Board(BOARD_SIZE, BOMB_COUNT) })
  }

  render() {
    return (
      <Board
        board = {this.state.board}
        updateGame = {this.updateGame.bind(this)}
        restartGame = {this.restartGame.bind(this)}
      />
    );
  }


}

export default Game;
