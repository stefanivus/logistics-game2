import React from 'react';
import s from './Header.css';

import Link from '../../../../components/Link';

class Header extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {
    return (
      <header className={`mdl-layout__header ${s.header}`} ref={node => (this.root = node)}>
        <div className={`mdl-layout__header-row ${s.row}`}>

          <Link className={`mdl-layout-title ${s.title}`} to="/">
            Logistics
          </Link>

          <div className="mdl-layout-spacer" />

        </div>
      </header>
    );
  }

}

export default Header;
