/*  Map
  --------------------------------------
  Example Coordinates: (dropzone and basecamp)
    {
      id: 1,
      row: -1,
      col: -1
    }
*/
const initialState = {
  gridSize: 10,        // length of one side; N x N Map; default to 10x10 board
  dropzoneCoords: [
    { id: 0, row: 0, col: 0}, // id will correspond to company.clients.id
  ],
  basecampCoords: [],  // base camp (row, col)

}

const mapReducer = (state = initialState, action) => {
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
