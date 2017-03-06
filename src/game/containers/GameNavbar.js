import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Navbar from '../../../components/Navbar/Navbar';
import SideMenu from '../../../components/SideMenu';
import Icon from '../../../components/Icon';

const navIcons = [
  {title: "Vehicles",  css: "fa fa-3x fa-truck"},
  {title: "Employees", css: "fa fa-3x fa-id-card-o"},
  {title: "Clients",   css: "fa fa-3x fa-users"},
];

class GameNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title,
      loading: false,   // or spinner
      menuOpen: false,  // opens side menu
      data: [],         // array of vehicles/employees/client objects
    }
  }

  render() {
    console.log("==================================");
    console.log("Company State: ");
    console.log(this.props.Company);
    console.log("==================================");

    console.log("==================================");
    console.log("Vehicles State: ");
    console.log(this.props.Vehicles);
    console.log("==================================");


    return (
      <Navbar title="Logistics">
        {/* Icons and Side Menu on Right Side */}
        <div style={{position: 'relative'}}>
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
    Vehicles: state.vehicles
  }
}

const ConnectedGameNavbar = connect(mapStateToProps)(GameNavbar);

export default ConnectedGameNavbar;
