import React, { PropTypes } from 'react'
import s from './MapTile.css'

/*
  Square Game Tile

  TODO:
    * Border on Left and bottom
    * if first row Border on top
    * if last col, border on right
*/
class MapTile extends React.Component {
  static propTypes = {
    size: PropTypes.number.isRequired
  }

  render() {
    let adjustedTileSize = this.props.size - 10;

    let tileSize = {
      height: adjustedTileSize,
      width: adjustedTileSize
    }

    // Display Row and Col
    let row = Math.floor((this.props.number / this.props.N)) + 1;
    let col = this.props.number;
    if (row > 1 && (this.props.number % this.props.N == 0))
      row -= 1;
    if (this.props.number > this.props.N)
      col -= ((row-1) * this.props.N);

    return (
      <div style={tileSize} className={s.tile}>
        <p>(row, col)</p>
        <p>{this.props.number}</p>
        <p>({row}, {col})</p>
      </div>
    )
  }
}

export default MapTile;
