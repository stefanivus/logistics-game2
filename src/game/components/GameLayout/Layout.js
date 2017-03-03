import React, { PropTypes } from 'react';
import cx from 'classnames';
import s from './Layout.css';

// import Header from './Header';
// import Footer from '../Footer';

class Layout extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    return (
      <div className={s.layout}>
        hello
      </div>
    );
  }
}

export default Layout;
