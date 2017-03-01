import React from 'react'
import cx from 'classnames'
import s from './styles.css'

import DashItem from '../DashItem'

/*
  TODO
    * grab current employees, vehicles, and clients
      from Redux
    * Add new employees, vehicles
    * Cannot move more vehicles than # of employees

*/
class GameOverlays extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentTab: -1,
    }
  }

  toggleTabContainerOpen() {
    if (this.refs.tabContentContainer.classList.contains('tab-content--open')) {
      this.refs.tabContentContainer.classList.remove(s['tab-content--open']);
      this.refs.tabContentContainer.classList.add(s['tab-content--close']);
    }
    else if (this.refs.tabContentContainer.classList.contains('tab-content--close')) {
      this.refs.tabContentContainer.classList.remove(s['tab-content--close']);
      this.refs.tabContentContainer.classList.add(s['tab-content--open']);
    }
  }

  handleTabChange(newId) {
    // Close Top Menu
    if (newId == this.state.currentTab) {

    } else {
      this.setState({ currentTab: newId });
    }

    // if (currentTab == -1) // minimize
    //
    //   this.refs.tabContentContainer.className += s['tab-content--close'];
    // else // maximize and show tab content
    //   this.refs.tabContentContainer.className += s['tab-content--open'];
  }

  handleTabClick({target}) {
    let tabId = target.getAttribute('data-id');
    this.handleTabChange(tabId);
  }




  render() {

    let tempDashItems = [];
    for (var i = 0; i < 10; i++) {
      tempDashItems.push(<DashItem />)
    }

    let iconClassnames = ['fa-truck', 'fa-id-card-o', 'fa-users'];

    return (
        <div className={s.overlayContainer}>

          {/* Tab Content */}
          <div ref="tabContentContainer" className={s['tab-content--container']}>
            {this.state.currentTab == 0 && <div ref="tab1">
              {tempDashItems}
            </div>}
            {this.state.currentTab == 1 && <div ref="tab1">
              two
            </div>}
            {this.state.currentTab == 2 && <div ref="tab1">
              three
            </div>}
          </div>


          {/* Tab Icons
            --------------
              Vehicle
              Employees
              Clients
          */}
          <div className={s['tab-icons']}>
            {iconClassnames.map((icon, id) => {
              return (
                <div
                  data-id={id}
                  className={s.icon}
                  onClick={(e) => this.handleTabClick(e)} key={icon}
                >
                  <i data-id={id} className={"fa fa-4x " + icon}></i>
                </div>
              );
            })}
          </div>

        </div>

    );
  }
}

export default GameOverlays;
