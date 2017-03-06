import React, { PropTypes } from 'react';
import cx from 'classnames';
import s from './Navbar.css';

/*
    NOTE: change Logo to a Link and send back to /home
*/

export default class NavbarContainer extends React.Component {
  static propTypes = {
    title: PropTypes.string,
  };

  static defaultProps = {
    title: "Default",
  };

  render() {
    return (
      <nav className={s.container}>
        {/* Title/Logo */}
        <div className={s.title}>{this.props.title}</div>

        <div {...this.props} />
      </nav>
    );
  }
}
