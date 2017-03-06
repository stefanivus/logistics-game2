import React from 'react';
//import s from './game.css';

// Refactored
import Layout from '../../components/Layout/Layout';
import GameNavbar from './containers/GameNavbar';

// Need to be Refactored and Moved
import MapContainer from './containers/Map';

class MainGame extends React.Component {
  render() {
    return (
      <Layout>
        {/* Fixed-to-Top Navbar and Side Menu, Contains Navbar and Side Menu */}
        <GameNavbar title="Logistics" />


        {/* <MapContainer /> */}

      </Layout>
    );
  }
}

export default MainGame;
