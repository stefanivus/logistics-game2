
import React from 'react';
import Link from '../../../../components/Link';

class Navigation extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {
    return (
      <nav className="mdl-navigation" ref={node => (this.root = node)}>
        <Link className="mdl-navigation__link" to="/">Employees</Link>
        <Link className="mdl-navigation__link" to="/about">Vehicles</Link>
        <Link className="mdl-navigation__link" to="/login">Clients</Link>
      </nav>
    );
  }

}

export default Navigation;
