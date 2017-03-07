import React, { PropTypes } from 'react';
import cx from 'classnames';
import s from './Board.css';

import Tile from './Tile';

class Board extends React.Component {
  constructor() {
    this.state = {
      boardHeight: 0,
      boardWidth: 0,
      tileHeight: 0,
      tileWidth: 0,
    }

    // Bind Functions
    this.resizeBoard = this.resizeBoard.bind(this);
  }

  componentDidMount() {
    this.resizeBoard();
  }

  resizeBoard() {}

  render() {
    return (
      <Tile />
    );
  }
}

export default Board;
