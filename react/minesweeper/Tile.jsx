import React from 'react';


class Tile extends React.Component {
  constructor(props) {
    super(props);

    let tileState = this.updateTile();

    let explored = "";

    if (this.props.explored) {
      explored = "explored";
    }

    this.state = {
      tileState: tileState,
      explored: explored
    }
  }

  updateTile() {
    let tileState = " ";

    if (this.props.tile.explored) {
      tileState = " ";
    }

    if (this.props.tile.bombed) {
      tileState = "💣";
    }

    if (this.props.tile.flagged) {
      tileState = "🚩";
    }

    return tileState
    
  }

  render() {
    return (
      <div className="tile {this.state.explored}">
        {
          this.state.tileState
        }
      </div>
    );
  }


}

export default Tile;
