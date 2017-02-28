import React from 'react'
import cx from 'classnames'
import s from './GameOverlays.css'


class GameOverlays extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentTab: -1,
    }
  }

  handleTabChange() {
    if (currentTab == -1) // minimize
      this.refs.overlayContainer.className += s['overlayContainer--close'];
    else // maximize and show tab content
      this.refs.overlayContainer.className += s['overlayContainer--open'];
  }

  handleTabClick({target}) {
    let tabId = target.getAttribute('data-id');
    this.setState({ currentTab: tabId });
  }

  render() {

    let faIcons = ['fa-truck', 'fa-id-card-o', 'fa-users'];

    console.log("id:", this.state.currentTab);

    return (
        <div ref="overlayContainer" className={s.overlayContainer}>

          {/* Tab Icons
            --------------
              Vehicle
              Employees
              Clients
          */}
          <div className={s['tab-icons']}>
            {faIcons.map((icon, id) => {
              return (
                <div data-id={id} className={s.icon} onClick={(e) => this.handleTabClick(e)} key={icon}>
                  <i data-id={id} className={"fa fa-4x " + icon}></i>
                </div>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className={s['tab-content']}>
            {this.state.currentTab == 0 && <div ref="tab1">
              one
            </div>}
            {this.state.currentTab == 1 && <div ref="tab1">
              two
            </div>}
            {this.state.currentTab == 2 && <div ref="tab1">
              three
            </div>}
          </div>
        </div>
    );
  }
}

export default GameOverlays;
