import React from 'react';

import Tile from './Tile';


class Board extends React.Component {
  constructor(props) {
    super(props);

    this.updateGame = props.updateGame;
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
                updateGame={this.props.updateGame}
              />
            );
          });

          return (
            <div
              className="row"
              key={rowIndex.toString()}>
              {rowElements}
            </div>
          );
        })}

        <button onClick={this.props.restartGame}>
          Restart Game
        </button>
      </div>
    );
  }


}

export default Board;
