import React, { PropTypes } from 'react';
import cx from 'classnames';
import s from './Layout.css';

class GameLayout extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };

  /* These are handlers used by MDL */
  // componentDidMount() {
  //   window.componentHandler.upgradeElement(this.root);
  // }
  //
  // componentWillUnmount() {
  //   window.componentHandler.downgradeElements(this.root);
  // }

  render() {
    return (
      <div className={s.layout}>
        <div {...this.props} className={this.props.className} />
      </div>
    );
  }
}

export default GameLayout;
