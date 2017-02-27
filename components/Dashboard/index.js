import React from 'react'
import s from './styles.css'

class Dashboard extends React.Component {
  render() {
    return (
      <div className={"mdl-grid " + s.border}>
        <div className="mdl-cell mdl-cell--1-col">1</div>
      </div>
    );
  }
}

export default Dashboard;
