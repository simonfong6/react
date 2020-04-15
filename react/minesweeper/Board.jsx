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
          const rowElements = row.map((tile, colIndex) => {
            return (
              <Tile
                key={colIndex.toString()}
                tile={tile}
                updateGame={this.updateGame}
              />
            );
          });

          return (
            <div key={rowIndex.toString()}>
              {rowElements}
            </div>
          );
        })}
      </div>
    );
  }


}

export default Board;
