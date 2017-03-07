import React from 'react';
import { connect } from 'react-redux';

import Layout from '../../components/Layout/Layout';
import GameNavbar from './containers/GameNavbar';
import Board from '../../components/Board/Board';


// Need to be Refactored and Moved
// import MapContainer from './containers/Map';

class MainGame extends React.Component {
  render() {

    console.log("==================================");
    console.log("Company State: ");
    console.log(this.props.Company);
    console.log("==================================");
    console.log("Vehicles State: ");
    console.log(this.props.Vehicles);
    console.log("==================================");
    console.log("Employees State: ");
    console.log(this.props.Employees);
    console.log("==================================");
    console.log("Clients State: ");
    console.log(this.props.Clients);
    console.log("==================================");

    return (
      <Layout>
        {/* Fixed-to-Top Navbar and Side Menu, Contains Navbar and Side Menu */}
        <GameNavbar title="Logistics" />

        <Board></Board>

      </Layout>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    Company: state.company,
    Vehicles: state.vehicles,
    Employees: state.employees,
    Clients: state.clients,
  }
}
const ConnectedMainGame = connect(mapStateToProps)(MainGame);

export default ConnectedMainGame;
