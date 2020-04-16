import React from 'react';

import * as Minesweeper from './minesweeper';
import Board from './Board';


class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: new Minesweeper.Board(9, 1)
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

  render() {
    return (
      <Board
        board = {this.state.board}
        updateGame = {this.updateGame.bind(this)}
      />
    );
  }


}

export default Game;
