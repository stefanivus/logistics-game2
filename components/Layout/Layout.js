import React, { PropTypes } from 'react';
import s from './Layout.css';

class Layout extends React.Component {
  render() {
    return (
      <div className={s.layout}>

        {/* Children */}
        <div {...this.props} />

      </div>
    );
  }
}

export default Layout;
