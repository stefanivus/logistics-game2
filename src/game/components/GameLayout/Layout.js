import React, { PropTypes } from 'react';
import cx from 'classnames';
import s from './Layout.css';

// import Header from './Header';
// import Footer from './Footer';
import GameNavbar from '../GameNavbar';
import IconsContainer from '../../containers/NavbarIcons';

class Layout extends React.Component {
  render() {
    return (
      <div className={s.layout}>

        {/* <Header /> */}

        <GameNavbar title="Logistics">
          <IconsContainer />
        </GameNavbar>

        <div {...this.props} className={cx(s.links)}/>

      </div>
    );
  }
}

export default Layout;
