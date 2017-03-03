import React, { PropTypes } from 'react';
import cx from 'classnames';
import s from './styles.css';


/*
  Game Icon
  These Provide a dropdown menu managed in Navbar
*/
class Icon extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: "",
  };

  handleClickEvent({ target }) {

  }

  render() {
    const { className } = this.props;
    return (
      // <i className={cx(s.icon)}></i>
      <i className={cx(s.icon, className)}
        onClick={e => (this.handleClickEvent(e))} ></i>
    );
  }
}

export default Icon;
