import React, { PropTypes } from 'react';
import cx from 'classnames';
import s from './Board.css';

import Tile from './Tile';

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tileHeight: 0,
      tileWidth: 0,
      tiles: [[]] // 2-D array of <Tile>
    }

    // Bind Functions
    this.getDimensions = this.getDimensions.bind(this);
  }

  componentDidMount() {
    this.getDimensions();

    window.addEventListener('resize', this.getDimensions, false);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.getDimensions, false);
  }

  getDimensions() {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    let tileHeight = 0;
    let tileWidth = 0;

    [tileHeight, tileWidth] = this.getTileDimensions(windowHeight, windowWidth);

    if (Math.max(tileHeight, tileWidth) > 25) {
      this.setState({
        tileHeight: tileHeight,
        tileWidth: tileWidth
      });
    }
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
      currRow.push(<Tile size={tileSize} number={i+1} />);
    }

    allTiles.push(currRow.slice());

    return allTiles;
  }


  render() {
    const allTiles = this.getTiles();
    console.log(allTiles);

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
