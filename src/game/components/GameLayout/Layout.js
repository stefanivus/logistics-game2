import React, { PropTypes } from 'react';
import cx from 'classnames';

import Header from './Header';
import Drawer from './Drawer';
// import Footer from '../Footer';
import s from './Layout.css';

class GameLayout extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };

  /* These are handlers used by MDL */
  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {
    return (
      <div className="mdl-layout mdl-js-layout" ref={node => (this.root = node)}>
        <div className="mdl-layout__inner-container">

          <Header />
          <Drawer title="Company Dashboard"></Drawer>

          <main className="mdl-layout__content" style={{flex: '1 0 auto'}}>
            {/* Child Componenta */}
            <div {...this.props} className={this.props.className}></div>

            {/* <Footer /> */}

          </main>

        </div>
      </div>
    );
  }
}

        export default GameLayout;
