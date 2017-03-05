import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';

class MapContainer extends React.Component {
  render() {
    return (
      <div>

      </div>
    )
  }
}

// Redux
// =====================
const mapStateToProps = (state, props) => {
  return {
    map: state.map
  }
}
const connectedMapContainer = connect(mapStateToProps)(MapContainer);
export default connectedMapContainer;
