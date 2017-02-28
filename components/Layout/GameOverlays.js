import React from 'react'
import cx from 'classnames'
import s from './GameOverlays.css'

import CompanyDashboard from '../GameDashboard'

class GameOverlays extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: 0,
    }
  }

  handleTabClick({target}) {
    var tabId = target.id[-1];
    this.setState({ currentTab: tabId });
  }

  render() {
    return (
        // <div {...this.props} className={cx(s.overlayContainer, this.props.className)} />
        <div className={s.overlayContainer}>

          {/* Tab Icons

              Vehicle
              Employees
              Clients
          */}
          <div className={s["tab-icons"]}>
            <div className={s.icon}><i className="fa fa-4x fa-truck"></i></div>
            <div className={s.icon}><i className="fa fa-4x fa-id-card-o"></i></div>
            <div className={s.icon}><i className="fa fa-4x fa-users"></i></div>
          </div>

          {/* Tab Content */}
          <div ref="tab1"></div>

          {/* <CompanyDashboard /> */}
        </div>
    );
  }
}

export default GameOverlays;
