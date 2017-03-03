import React, { PropTypes } from 'react';
import cx from 'classnames';
// import s from './Layout.css';

import Icon from '../components/Icon';

/*
  Navbar Icons Container
  State Manages:
    Content in Side Menu
    Which icon is open (with :hover)

  Methods:
    pull vehicles, employees, and clients from redux
    display content
    open and close side Menu
    change :hover to "isActive" className so we can keep icon highlighted
*/
class NavbarIconsContainer extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: "",
  };

  render() {
    const { className } = this.props;

    return (
      <div className={className}>
        <Icon className="fa fa-truck fa-3x"/>
        <Icon className="fa fa-id-card-o fa-3x"/>
        <Icon className="fa fa-users fa-3x"/>
      </div>
    );
  }
}

export default NavbarIconsContainer;
