import React, { PropTypes } from 'react';
import s from './Tile.css';

class Tile extends React.Component {

  static propTypes = {
    road: PropTypes.bool,     // is a road; can be used by vehicles
    obstacle: PropTypes.bool, // cannot be used by vehicles
    dropzone: PropTypes.bool, // can be either dropzone or basecamp, but never both
    basecamp: PropTypes.bool,
  }

  render() {
    return (
      <div className={s.container} style={{
        height: this.props.size + 'px',
        width: this.props.size + 'px'
      }}>
        <span>{this.props.number}</span>
      </div>
    );
  }
}

export default Tile;
