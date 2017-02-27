import React from 'react'
import Layout from '../../components/Layout/Layout'
import CompanyDashboard from '../../components/Dashboard'

class Logistics extends React.Component {
  render() {
    return (
      <Layout>

        <h3>Client List - with smiley face </h3>

        <h1>Map</h1>

        <CompanyDashboard />

      </Layout>
    );
  }
}

export default Logistics;
