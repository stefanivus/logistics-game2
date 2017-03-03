import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import cx from 'classnames';
import s from './SideMenu.css';

/*
  SideMenu
*/
class SideMenu extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    open: PropTypes.bool.isRequired
  };

  static defaultProps = {
    className: "",
  };

  shouldComponentUpdate(nextProps) {
    return (nextProps.open !== this.props.open);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.open !== this.props.open)
      this.toggleOpen();
  }

  toggleOpen() {
      var container = findDOMNode(this.container);

      /* Toggle .open
        This works because there is a global style sheet
        loaded in the index.ejs that overwrites via:

          transform: translateX(0) !important; <= I know. temp solution

      */
      if (container.classList.contains('open'))
        container.classList.remove('open');
      else container.classList.add('open');

      console.log(container.classList);
  }

  // changeContent() {}


  render() {
    const { className } = this.props;

    return (
      <div ref={node => (this.container = node)} className={`.jc-sideMenu ${s.container}`}>
        SideMenu
      </div>
    );
  }
}

export default SideMenu;
