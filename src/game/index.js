import React from 'react'
//import s from './game.css'

import GameLayout from './components/GameLayout/Layout'
// import GameDashboard from './components/GameDashboard'
import Map from './components/Map/Map'

class Logistics extends React.Component {
  render() {
    return (
      <GameLayout>

        <Map gridSize={5} />

        {/* <GameDashboard /> */}

      </GameLayout>
    );
  }
}

export default Logistics;
