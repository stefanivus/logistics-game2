import React, { PropTypes } from 'react'
import s from './MapTile.css'

/*
  Square Game Tile
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

    return (
      <div style={tileSize} className={s.tile}>
        <p>number: {this.props.text}</p>
        <p>size: {this.props.size}</p>
      </div>
    )
  }
}

export default MapTile;
