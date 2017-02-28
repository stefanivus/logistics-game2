import React, { PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import s from './map.css'


import MapTile from './MapTile'

class Map extends React.Component {

  static propTypes = {
    gridSize: PropTypes.number
  }

  constructor(props) {
    super(props);

    // Default grid size = 10
    let gridN = 10;
    if (this.props.gridSize && this.props.gridSize > 0)
      gridN = this.props.gridSize;

    this.state = {
      gridN: gridN,
      totalSquares: gridN * gridN,
      gridTiles: [],
      tileSize: 0, // square tile's size
    }
  }

  updateDimensions() {
    var gridWidth = findDOMNode(this.refs.mapContainer).offsetWidth;
    var tileSize = gridWidth / this.state.gridN;

    this.setState({ tileSize });
  }

  createGameBoard () {
    /*
      Determine Width of <Tile>
      width of main <div> divided by gridN (i.e. width / N)

      Have to use componentDidMount instead of constructor because
      we don't have access to 'refs' until then, and cannot set
      tileSize
    */
    var gridTiles = []; // Put all <Tiles> in Array
    var currRow = [];
    for (var i = 1; i <= this.state.totalSquares; i++) {
      currRow.push((
        <MapTile
          text={i}
          key={'tile'+i}
          size={this.state.tileSize} />
      ));

      if (i % this.state.gridN == 0) {
        var row = currRow.slice();
        gridTiles.push(row); // .slice will create copy of array
        currRow = [];
      }
    }
    this.setState({ gridTiles });
  }

  redrawBoard() {
    return fetch('pageThatDoesntExist') // use 'fetch' for the Promise
    .catch()
    .then(this.updateDimensions.bind(this)) // need this.state.tileSize
    .then(this.createGameBoard.bind(this)); // for game board
  }

  componentDidMount() {
    this.redrawBoard();
    
    // Add Event Listeners to Resize Tiles
    window.addEventListener('resize', this.redrawBoard.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.redrawBoard.bind(this));
  }

  render() {
    return (
      <div className={s.mapContainer} ref="mapContainer">
        <h2>Grid Size: {this.state.gridN} x {this.state.gridN}</h2>

        {/* Create Board */}
        <div ref="gridContainer">
          {this.state.gridTiles.map((row, idx) => {
            return (
              <div className={s.tileContainer} key={"row" + idx}>
                {row}
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default Map;
