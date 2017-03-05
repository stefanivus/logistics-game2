import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import MapContainer from '../components/Map/Map'

/* Map Container
  * Exposes Map properties, from Redux State, to Component
      - gridSize           =>  the side length of N x N grid
      - dropZoneLocations  =>  location of dropzones on grid, i.e. [(row, col), (row, col)]
      - baseCampLocations  =>  location of base camp on grid
*/

// Redux
// =====================
const mapStateToProps = (state, props) => {
  return {
    Map: state.map
  }
}

const connectedMapContainer = connect(mapStateToProps)(MapContainer);

export default connectedMapContainer;

















// class MapContainer extends React.Component {
//   render() {
//     return (
//       <div>
//
//       </div>
//     )
//   }
// }
