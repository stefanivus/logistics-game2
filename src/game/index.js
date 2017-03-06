import React from 'react'
//import s from './game.css'

import GameLayout from './components/GameLayout/Layout'
import MapContainer from './containers/Map'


class Logistics extends React.Component {
  render() {
    return (
      <GameLayout> {/* Contains Navbar and Side Menu */}

        <MapContainer>

        </MapContainer>

        {/* <GameDashboard /> */}

      </GameLayout>
    );
  }
}

export default Logistics;
