import React, { PropTypes } from 'react';
import cx from 'classnames';
import s from './Layout.css';

// import Header from './Header';
// import Footer from './Footer';
import GameNavbar from '../GameNavbar';
import Icon from '../Icon';

class Layout extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: "",
  };

  render() {
    return (
      <div className={s.layout}>

        {/* <Header /> */}

        <GameNavbar title="Logistics">
          <Icon />
          <Icon />
          <Icon />
        </GameNavbar>

        <div {...this.props} className={cx(s.links)}/>

      </div>
    );
  }
}

export default Layout;
