/*  Map
  --------------------------------------
  Example Coordinates: (dropzone and basecamp)
    {
      id: 1,
      row: -1,
      col: -1
    }
*/
const mapInitialState = {
  gridSize: 0,        // length of one side; N x N Map
  dropzoneCoords: [
    { id: 0, row: 0, col: 0}, // id will correspond to company.clients.id
    // { id: 1, row: 1, col: 1},
    // { id: 2, row: 2, col: 2},
  ],
  basecampCoords: [

  ]  // base camp (row, col)
}

const mapReducer = (state = mapInitialState, action) => {
  switch (action.type) {
    /*
    case 'ADD_DROPZONE':
    case 'REMOVE_DROPZONE':
    case 'ADD_BASECAMP':
    case 'REMOVE_BASECAMP':
    case 'ADD_GRIDSIZE':
    case 'EDIT_GRIDSIZE':
    */
    default:
      return state;
  }
}


export default mapReducer;
