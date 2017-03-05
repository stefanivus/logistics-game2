import React, { PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import s from './map.css'

import MapTile from './MapTile'


/*
  TODO:
    * Add random dropzone locations
    * Add random basecamp location
    * Have tiles change style if they're dropzone
    * Send dropzone locations and base camp to
      State
*/
class Map extends React.Component {
  render() {

    console.log("===========================================");
    console.log("Map:");
    console.log(this.props.Map);
    console.log("===========================================");

    return (
      <div>
        <h1>Map!</h1>

        {/* Map being used - pass event handlers */}
        <div {...this.props} />
      </div>
    );
  }
}

export default Map;










class OldMap extends React.Component {

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
      tileSize: 0, // square tile's size
    }
  }

  updateDimensions() {
    let gridWidth = findDOMNode(this.refs.tileContainer).offsetWidth - 30; // subtract padding
    let tileSize = gridWidth / this.state.gridN;

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
    let gridTiles = []; // Put all <Tiles> in Array
    let currRow = [];
    let totalSquares = this.state.gridN * this.state.gridN;

    for (var i = 1; i <= totalSquares; i++) {
      currRow.push((
        <MapTile
          number={i}
          N={this.state.gridN}
          key={'tile'+i}
          size={this.state.tileSize} />
      ));

      if (i % this.state.gridN == 0) {
        var row = currRow.slice();
        gridTiles.push(row); // .slice will create copy of array
        currRow = [];
      }
    }
    return gridTiles;
  }

  componentDidMount() {
    // There's a problem rendering the tile sizes
    // pushing this function back in the call stack
    // seems to fix the problem
    fetch('NonExistentPage')
    .catch()
    .then(this.updateDimensions.bind(this));

    // Add Event Listeners to Resize Tiles
    window.addEventListener('resize', this.updateDimensions.bind(this), false);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this), false);
  }

  render() {
    let gridTiles = this.createGameBoard();

    return (
      <div className={s.mapContainer} ref="mapContainer">
        <h2 style={{textAlign: 'center'}}>Grid Size: {this.state.gridN} x {this.state.gridN}</h2>

        {/* Create Board */}
        <div ref="tileContainer">
          {gridTiles.map((row, idx) => {
            return (
              <div className={s.tileContainer}>
                {row}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
