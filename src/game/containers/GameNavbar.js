import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

// Components
import Navbar from '../../../components/Navbar/Navbar';
import SideMenu from '../../../components/SideMenu/SideMenu';
import Icon from '../../../components/Icon';

/*
// Action Creators
import * as vehicleAC from '../../actioncreators/vehicle';
import * as employeeAC from '../../actioncreators/employee';
import * as clientAC from '../../actioncreators/client';
*/

const navIcons = [
  {title: "Vehicles",  css: "fa fa-3x fa-truck"},
  {title: "Employees", css: "fa fa-3x fa-id-card-o"},
  {title: "Clients",   css: "fa fa-3x fa-users"},
];

class GameNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Default",
      loading: false,   // or spinner
      menuOpen: false,  // opens side menu
      data: [],         // array of vehicles/employees/client objects
    }

    // Bind Functions
    this.toggleSideMenu = this.toggleSideMenu.bind(this);
  }

  /*
      If same icon is clicked twice, close side menu
      If diff. icon is clicked, change this.state title and data
  */
  toggleSideMenu(title) {
    if (this.state.title !== title) {
      this.setState({
        title: title,
        data: this.props[title],
        menuOpen: true
      });
    }
    else {
      this.setState({
        menuOpen: !this.state.menuOpen
      });
    }
  }

  render() {
    return (
      <Navbar title={this.props.title}>
        <div style={{position: 'relative'}}>
          {/* Icons and Side Menu on Right Side */}

          {/* Load Icons */}
          {navIcons.map((icon) => {
            return (
              <Icon
                title={icon.title}
                className={icon.css}
                onClick={this.toggleSideMenu}
                key={icon.css} />
            );
          })}

          {/* Side Menu */}
          <SideMenu
            open={this.state.menuOpen}
            title={this.state.title}
            data={this.state.data} />

        </div>
      </Navbar>
    )
  }
}

/* Redux
   ============================
   Get State and give as Prop to Component
*/
const mapStateToProps = (state, props) => {
  return {
    Company: state.company,
    Vehicles: state.vehicles,
    Employees: state.employees,
    Clients: state.clients,
  }
}

const ConnectedGameNavbar = connect(mapStateToProps)(GameNavbar);

export default ConnectedGameNavbar;
