import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import s from './Navbar.css';

import Icon from './Icon'
import SideMenu from './SideMenu'

class GameNavbar extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    icons: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        css: PropTypes.string.isRequired
      })
    ),
  };

  static defaultProps = {
    title: "Title",
    icons: [
      {title: "Vehicles",  css: "fa fa-3x fa-truck"},
      {title: "Employees", css: "fa fa-3x fa-id-card-o"},
    ]
  };

  constructor() {
    super();

    this.state = {
      loading: false,   // or spinner
      title: "Default Title",
      menuOpen: false,  // opens side menu
      data: [],         // array of vehicles/employees/client objects
    }
  }

  render() {
    const { title, children, style } = this.props;

    console.log("==================================");
    console.log("Company State: ");
    console.log(this.props.Company);
    console.log("==================================");

    console.log("==================================");
    console.log("Vehicles State: ");
    console.log(this.props.Vehicles);
    console.log("==================================");

    return (
      <nav className={s.container} style={style}>


        {/* Title on Left Side */}
        <div className={s.title}>{title}</div>


        {/* Icons and Side Menu on Right Side */}
        <div className={s.iconsAndSideMenu}>
          {/* Load Icons */}
          {this.props.icons && this.props.icons.map((icon) => {
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


      </nav>
    );
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
