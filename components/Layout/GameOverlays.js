import React from 'react'
import cx from 'classnames'
import s from './GameOverlays.css'

class GameOverlays extends React.Component {
  render() {
    return (
        <div {...this.props} className={cx(s.overlayContainer, this.props.className)} />
    );
  }
}

export default GameOverlays;
