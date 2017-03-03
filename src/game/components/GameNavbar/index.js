import React, { PropTypes } from 'react';
import cx from 'classnames';
import s from './styles.css';

class GameNavbar extends React.Component {

  static propTypes = {
    title: PropTypes.string
  }

  static defaultProps = {
    title: "Title"
  }

  render() {
    const { title, children, style } = this.props;

    return (
      <nav className={s.container} style={style}>

        <div className={s.title}>{title}</div>

        <div {...this.props} className={cx(s.links)}/>

      </nav>
    )
  }
}

export default GameNavbar;
