import React, { PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import s from './map.css'

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
      totalSquares: gridSize * gridSize,
      gridTiles: [] // a 2-D array, (row, col)
    }
  }

  componentDidMount() {
    // Determine Width of <GridTile>
    // (width of main <div> / gridSize)
    var gridWidth = findDOMNode(this.refs.gridContainer).offsetWidth;
    var tileWidth = gridWidth / this.state.gridSize;

    // Put all <GridTiles> in Array
    var gridTiles = [];

    for (var i = 0; i < this.state.totalSquares; i++) {
      gridTiles.push((
        <GridTile
          text={i}
          key={"tile" + i}
          size={tileWidth} />
      ));
    }

    this.setState({ gridTiles });
  }

  render() {

    console.log(this.state.gridTiles);

    return (
      <div>
        <h2>Grid Size: {this.state.gridSize} x {this.state.gridSize}</h2>

        <div className={s.tileContainer} ref="gridContainer">
          {this.state.gridTiles.map((row) => {
            return row;
          })}
        </div>

      </div>
    );
  }
}

export default Map;
