import React from 'react';

import Tile from './Tile';


class Board extends React.Component {
  constructor(props) {
    super(props);

    this.updateGame = props.updateGame.bind(this);
  }

  render() {
    return (
      <div>
        Board
        {this.props.board.grid.map((row, rowIndex) => {
          const rowElement = row.map((tile, colIndex) => {
            return (
              <Tile />
            );
          });

          return rowElement;
        })}
      </div>
    );
  }


}

export default Board;
