import React, { PropTypes } from 'react';
import s from './Tile.css';

class Tile extends React.Component {

  static propTypes = {
    road: PropTypes.bool,     // is a road; can be used by vehicles
    obstacle: PropTypes.bool, // cannot be used by vehicles
    dropzone: PropTypes.bool, // can be either dropzone or basecamp
    basecamp: PropTypes.bool, //   never both
  }

  render() {
    return (
      <div style={{
        border: '1px solid red',
        overflow: 'hidden',
        height: this.props.size + 'px',
        width: this.props.size + 'px',
        // margin: '15px'
      }}>
        <h2>{this.props.size}</h2>
      </div>
    );
  }
}

export default Tile;
