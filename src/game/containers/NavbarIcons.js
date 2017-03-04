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

      loading: false
    }

    // Bind Functions
    this.toggleSideMenu = this.toggleSideMenu.bind(this);
  }

  componendDidMount() {
    if (this.state.menuOpen &&
        (this.state.title !== "" || this.state.title.length < 3) ) {
      this.loadSideMenuData(this.state.title);
    }
  }

  /*
    category => employee, vehicles, clients
  */
  getSideMenuData(category){
    var categoryName = category.toLowerCase();
    return this.props.stateCompany[categoryName];
    // this.setState({
    //   data: this.props.stateCompany[categoryName]
    // });
  }

  toggleSideMenu(title) {
    // Add vehicle
    const defaultVehicle = {
      name: "Truck",
      mpg: 4,
      vehicleId: 1 // type of vehicle
    }
    this.props.dispatch({
      type: "ADD_VEHICLE",
      vehicle: defaultVehicle
    });


    // ACTUAL FUNCTION ======================
    /*
        When selecting a different category, change:
          - title
          - data
          - menuOpen
    */
    if (this.state.title !== title) {
      this.setState({
        title: title,
        data: this.getSideMenuData(title), // change data too
        menuOpen: true
      });
    }

    /*
      When selecting the same category and opening the menu, change:
          - data (update data displayed)
          - menuOpen
    */
    else if (!this.state.menuOpen) { // close menu
      this.setState({
        data: this.getSideMenuData(title), // change data too
        menuOpen: true
      });
    }
    else {
      this.setState({ menuOpen: !this.state.menuOpen });
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
              <Icon
                key={icon.css}
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
