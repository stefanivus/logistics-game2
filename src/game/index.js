import React from 'react'
//import s from './game.css'

import GameLayout from './components/GameLayout/Layout'
import MapContainer from './containers/Map'
// import GameDashboard from './components/GameDashboard'


class Logistics extends React.Component {
  render() {
    return (
      <GameLayout>

        <MapContainer>

        </MapContainer>

        {/* <GameDashboard /> */}

      </GameLayout>
    );
  }
}

export default Logistics;
