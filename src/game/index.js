import React from 'react'
import Layout from '../../components/Layout/Layout'

import GameOverlays from './components/GameOverlay'
import CompanyDashboard from '../../components/GameDashboard'
import Map from './components/Map/Map'

class Logistics extends React.Component {
  render() {
    return (
      <Layout>

        <Map gridSize={4} />

        <GameOverlays>
          <CompanyDashboard />

        </GameOverlays>
      </Layout>
    );
  }
}

export default Logistics;
