import React from 'react'
//import s from './game.css'

// Refactored
import Layout from '../../components/Layout/Layout';

// Need to be Refactored and Moved
import GameNavbar from './components/GameNavbar/Navbar';
import MapContainer from './containers/Map';



const navIcons = [
  {title: "Vehicles",  css: "fa fa-3x fa-truck"},
  {title: "Employees", css: "fa fa-3x fa-id-card-o"},
  {title: "Clients",   css: "fa fa-3x fa-users"},
];

class MainGame extends React.Component {
  render() {
    return (
      <Layout>

        {/* Fixed-to-Top Navbar and Side Menu, Contains Navbar and Side Menu */}
        <GameNavbar title="Logistics" icons={navIcons} />



        {/* <MapContainer /> */}

      </Layout>
    );
  }
}

export default MainGame;
