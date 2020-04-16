import React from 'react';


class Tile extends React.Component {
  constructor(props) {
    super(props);

    let tileState = this.updateTile();

    let explored = "";

    console.log("tile con");
    if (this.props.tile.explored) {
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
      const bombCount = this.props.tile.adjacentBombCount();
      if (bombCount == 0){
        tileState = " ";
      } else {
        tileState = bombCount.toString();
      }
      
    }

    if (this.props.tile.bombed) {
      tileState = "💣";
    }

    if (this.props.tile.flagged) {
      tileState = "🚩";
    }

    return tileState
    
  }

  tileState(tile) {
    let tileState = " ";

    if (tile.explored) {
      const bombCount = tile.adjacentBombCount();
      if (bombCount == 0){
        tileState = " ";
      } else {
        tileState = bombCount.toString();
      }
      
    }

    if (tile.bombed && tile.explored) {
      tileState = "💣";
    }

    if (tile.flagged) {
      tileState = "🚩";
    }

    return tileState
  }

  isExplored(tile) {
    let explored = "";

    if (tile.explored) {
      explored = "explored";
    }
    return explored;
  }

  handleClick(event) {
    console.log("Click");

    let flag = false;
    const tile = this.props.tile;

    if(event.altKey) {
      flag = true;
      console.log("Flag");
    }

    this.props.updateGame(tile, flag);
    
  }

  render() {
    return (
      <div
        className={"tile " + this.isExplored(this.props.tile)}
        onClick={this.handleClick.bind(this)}
      >
        {
          this.tileState(this.props.tile)
        }
      </div>
    );
  }


}

export default Tile;
