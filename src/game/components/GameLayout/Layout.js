import React, { PropTypes } from 'react';
import cx from 'classnames';
import s from './Layout.css';

import GameNavbar from '../GameNavbar/Navbar';

const navIcons = [
  {title: "Vehicles",  css: "fa fa-3x fa-truck", stateName: "vehicles"},
  {title: "Employees", css: "fa fa-3x fa-id-card-o", stateName: "employees"},
  {title: "Clients",   css: "fa fa-3x fa-users", stateName: "clients"},
];

class GameLayout extends React.Component {
  render() {
    return (
      <div className={s.layout}>

        {/* Fixed-to-Top Navbar and Side Menu */}
        <GameNavbar title="Logistics" icons={navIcons} />

        {/* Children */}
        <div {...this.props} className={cx(s.links)}/>

      </div>
    );
  }
}

export default GameLayout;
