import React from 'react'
import s from './GridTile.css'

class GridTile extends React.Component {
  render() {
    var tileSize = {
      height: this.props.size - 10,
      width: this.props.size - 10
    }

    return (
      <div style={tileSize} className={s.tile}>
        <p>number: {this.props.text}</p>
        <p>size: {this.props.size}</p>
      </div>
    )
  }
}

export default GridTile;
