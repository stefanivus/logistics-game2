import React, { PropTypes } from 'react';
// import Promise from 'bluebird';
import cx from 'classnames';
import s from './Board.css';

import Tile from './Tile';

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      boardHeight: 0,
      boardWidth: 0,
      tileHeight: 0,
      tileWidth: 0,
      tiles: [[]] // 2-D array of <Tile>
    }

    // Bind Functions
  }

  componentDidMount() {
    Promise.resolve()
    .then(this.getDimensions())
    .then(this.getTiles())
    // this.getDimensions();
    // this.getTiles();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state);
  }

  getDimensions() {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    let tileHeight = 0;
    let tileWidth = 0;

    [tileHeight, tileWidth] = this.getTileDimensions(windowHeight, windowWidth);

    this.setState({
      boardHeight: windowHeight,
      boardWidth: windowWidth,
      tileHeight: tileHeight,
      tileWidth: tileWidth
    });
  }

  getTileDimensions(windowHeight, windowWidth) {
    let tileHeight = 0;
    let tileWidth = 0;

    tileHeight = windowHeight / this.props.size;
    tileWidth = windowWidth / this.props.size;
    return [tileHeight, tileWidth];
  }

  getTiles() {
    const tileSize = Math.floor(Math.max(this.state.tileHeight, this.state.tileWidth));
    const totalSize = this.props.size * this.props.size;
    var currRow = [];
    var allTiles = [];

    for (let i = 0; i < totalSize; i++) {
      if (i % this.props.size === 0 && i !== 0) {
        allTiles.push(currRow.slice());
        currRow = [];
      }
      currRow.push(<Tile size={tileSize} />);
    }

    return allTiles;
  }

  render() {
    const allTiles = this.getTiles();

    return (
      <div className={s['tiles-container']}>
        {allTiles.map(row => {
          return (
            <div className={s['tiles-row']}>
              {row}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Board;
