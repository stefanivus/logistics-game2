import React, { PropTypes } from 'react';
import cx from 'classnames';
// import s from './Layout.css';

class Icon extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };

  handleClickEvent({ target }) {

  }

  render() {
    return (
      // <i className={cx(s.icon)}></i>
      <i className={"fa fa-bicycle fa-4x"}></i>
    );
  }
}

export default Icon;
