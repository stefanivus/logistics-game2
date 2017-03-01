import React from 'react'
//import s from './game.css'

import Layout from './components/Layout/Layout'
import GameDashboard from './components/GameDashboard'
import Map from './components/Map/Map'

class Logistics extends React.Component {
  render() {
    return (
      <Layout>
        
        <Map gridSize={5} />

        <GameDashboard />

      </Layout>
    );
  }
}

export default Logistics;
