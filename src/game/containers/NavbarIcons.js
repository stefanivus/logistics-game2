import React, { PropTypes } from 'react';
import cx from 'classnames';
import s from './NavbarIcons.css';
import { connect } from 'react-redux';
import * as actionCreators from '../actioncreators/company';

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
    faIcons: [
      {title: "Vehicles",  css: "fa-truck"},
      {title: "Employees", css: "fa-id-card-o"},
    ]
  };

  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false,
      title: "Vehicles",
      data: [], // array of vehicles/employees/client objects
    }

    // Bind Functions
    this.toggleSideMenu = this.toggleSideMenu.bind(this);
  }

  /*
    category => employee, vehicles, clients
  */
  getItemsFromState(category){

  }

  toggleSideMenu(title) {
    if (this.state.title !== title) {
      this.setState({
        title: title,
        // data: [] // change data too
        menuOpen: true
      });
    } else { // close menu
      this.setState({menuOpen: !this.state.menuOpen});
    }


    // Add vehicle
    this.props.dispatch(actionCreators.addVehicle());
    console.log(this.props.stateCompany);

    if (!this.state.menuOpen) {
      this.props.dispatch(actionCreators.removeVehicle());
    }
  }

  render() {
    const { className } = this.props;

    console.log(this.props.stateCompany);

    return (
      <div className={s.iconContainer}>

        <div className={className}>
          {/* Icons that toggle side menu */}
          {this.props.faIcons.map((icon) => {
            return (
              <Icon key={icon.css}
                title={icon.title}
                className={"fa fa-3x " + icon.css}
                onClick={this.toggleSideMenu}/>
            );
          })}
        </div>

        <SideMenu
          open={this.state.menuOpen}
          title={this.state.title}
          data={this.state.data} />

      </div>
    );
  }
}



// Redux
// =====================
// Get State and give as Prop to Component
const mapStateToProps = (state, props) => {
  return {
    stateCompany: state.company
  }
}

const ConnectedNavbarIconsContainer = connect(mapStateToProps)(NavbarIconsContainer);

export default ConnectedNavbarIconsContainer;
