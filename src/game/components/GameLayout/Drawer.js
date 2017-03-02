import React, { PropTypes } from 'react'
import s from './Drawer.css'

class Drawer extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.string
  };

  static defaultProps = {
    title: "Drawer Title"
  }

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {
    const { className, title } = this.props;

    return (
      <div className={`mdl-layout__drawer ${s.rightSide} ${className}`} ref={node => (this.root = node)}>

        {/* Title */}
        <span className="mdl-layout-title">{title}</span>

        <div {...this.props}></div>

      </div>
    )
  }
}

export default Drawer;
