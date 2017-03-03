import React, { PropTypes } from 'react';
import cx from 'classnames';
import s from './SideMenu.css';

/*
  SideMenu
*/
class SideMenu extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: "",
  };

  constructor(props) {
    super(props);

    this.state = {
      open: false,

    }
  }

  toggleOpen() {
    if (this.state.open) { // its open, close it!

    } else { // else open it
      
    }

    this.setState({ open: !this.state.open });
  }

  changeContent() {}


  render() {
    const { className } = this.props;

    return (
      <div className={s.container}>
        SideMenu
      </div>
    );
  }
}

export default SideMenu;
