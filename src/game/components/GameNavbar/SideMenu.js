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
    return (nextProps.open !== this.props.open) || // close
          (nextProps.title !== this.props.title) // update info
  }

  componentDidUpdate(prevProps) {
    if (prevProps.open !== this.props.open)
      this.toggleOpen();
  }

  toggleOpen() {
      var container = findDOMNode(this.container);

      /* Toggle .open

        NOTE This works because there is a global style sheet
        loaded in the index.ejs that overwrites via:

          transform: translateX(0) !important; <= I know. temp solution

      */
      if (container.classList.contains('open'))
        container.classList.remove('open');
      else container.classList.add('open');
  }

  // changeContent() {}


  render() {
    const { className } = this.props;

    return (
      <div
        ref={node => (this.container = node)}
        className={`jc-sideMenu ${s.container}`}
      >
        <div className={s.title}>
          <h1>{this.props.title}</h1>
          <hr />
        </div>


        {/* Cateogry Data => i.e. Vehicle/Employee/Client Objects */}
        <h2>
          {this.props.data[0] && this.props.data[0].name}
        </h2>
        <h3>
          {this.props.data[0] && this.props.data[0].mpg}
        </h3>
      </div>
    );
  }
}

export default SideMenu;
