import React, { PropTypes } from 'react';
import cx from 'classnames';
// import s from './Layout.css';

import Icon from '../components/Icon';
import SideMenu from '../components/GameNavbar/SideMenu';

/*
  Navbar Icons Container
  State Manages:
    Content in Side Menu
    Which icon is open (with :hover)

  Methods:
    pull vehicles, employees, and clients from redux
    display content
    change :hover to "isActive" className so we can keep icon highlighted

    // Icon
    send click handler to icon


    // Side Menu
      - open and close side Menu
      -  side menu content
*/
class NavbarIconsContainer extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    faIcons: PropTypes.array,
  };

  static defaultProps = {
    className: "",
    faIcons: ["fa-bicycle", "fa-truck"]
  };

  render() {
    const { className } = this.props;

    return (
      <div className={className}>

        {/* Icons that toggle side menu */}
        {this.props.faIcons.map((icon) => {
          return (<Icon className={"fa fa-3x " + icon} key={icon} />);
        })}

        <SideMenu />

      </div>
    );
  }
}

export default NavbarIconsContainer;
