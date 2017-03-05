import React, { PropTypes } from 'react';
import cx from 'classnames';
import s from './Layout.css';

// import Header from './Header';
// import Footer from './Footer';
import GameNavbar from '../GameNavbar';
import IconsContainer from '../../containers/NavbarIcons';

const navIcons = [
  {title: "Vehicles",  css: "fa-truck"},
  {title: "Employees", css: "fa-id-card-o"},
  {title: "Clients",   css: "fa-users"},
];

class Layout extends React.Component {
  render() {
    return (
      <div className={s.layout}>

        {/* <Header /> */}

        {/* Fixed Navbar and Side Menu */}
        <GameNavbar title="Logistics">
          <IconsContainer faIcons={navIcons} />
        </GameNavbar>

        {/* Children */}
        <div {...this.props} className={cx(s.links)}/>

      </div>
    );
  }
}

export default Layout;
