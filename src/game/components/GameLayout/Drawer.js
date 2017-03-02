import React, { PropTypes } from 'react'

class Drawer extends React.Component {

  static propTypes = {
    className: PropTypes.string
  };

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {
    return (
      <div className="mdl-layout__drawer" ref={node => (this.root = node)}>

        {/* Title */}
        <span className="mdl-layout-title">Dashboard</span>

        {/* Nagivation */}
        <nav className="mdl-navigation">
          <a className="mdl-navigation__link" href="">Link</a>
          <a className="mdl-navigation__link" href="">Link</a>
          <a className="mdl-navigation__link" href="">Link</a>
          <a className="mdl-navigation__link" href="">Link</a>
        </nav>
        
      </div>
    )
  }
}

export default Drawer;
