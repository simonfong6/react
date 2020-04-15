import React from 'react';

import * as Minesweeper from './minesweeper';
import Board from './Board';


class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: new Minesweeper.Board(4, 1)
    };
  }

  updateGame() {

  }

  render() {
    return (
      <Board
        board = {this.state.board}
        updateGame = {this.updateGame}
      />
    );
  }


}

export default Game;
