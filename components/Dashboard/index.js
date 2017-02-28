import React from 'react'
import s from './styles.css'

class Dashboard extends React.Component {
  render() {
    return (
      <div className={s.dashContainer}>

        <h1 style={{textAlign: "center"}}>Dashboard</h1>

        <div className={"mdl-grid"}>
          <div className="mdl-cell mdl-cell--4-col">Company Information</div>
          <div className="mdl-cell mdl-cell--2-col">Vehicle List</div>
          <div className="mdl-cell mdl-cell--2-col">Employee List</div>
          <div className="mdl-cell mdl-cell--2-col">Deliveries in Queue</div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
