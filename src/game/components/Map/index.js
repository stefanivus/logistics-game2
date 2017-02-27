import React, { PropTypes } from 'react'

import GridTile from './GridTile'

class Map extends React.Component {

  static propTypes = {
    gridSize: PropTypes.number
  }

  constructor(props) {
    super(props);

    // Default grid size = 10
    let gridSize = 10;
    if (this.props.gridSize && this.props.gridSize > 0)
      gridSize = this.props.gridSize;

    this.state = {
      gridSize: gridSize,
      totalSquares: gridSize * gridSize
    }
  }

  render() {
    var gridTiles = [];
    for (var i = 1; i <= this.state.totalSquares; i++) {
      gridTiles.push(<GridTile text={i} key={"tile" + i} />);
    }

    return (
      <div>
        <h2>Grid Size: {this.state.gridSize} x {this.state.gridSize}</h2>

        <div className="">
          {gridTiles}
        </div>

      </div>
    );
  }
}

export default Map;
