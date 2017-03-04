import { createStore, combineReducers } from 'redux';

/*
    The main states we need to keep track of:

    1. Company
      - List of Employees
      - List of Vehicles
      - List of Clients

    2. Clients
      - Each Client:
          - Current Mood
          - Delivery Schedule
          - Products
      - NOTE all of this can be sent from the component
             and State creates a new client object

    3. Map
      - Size of Map
      - Location of Drop Zones
      - Location of Base camp
*/

//  Company
// --------------------------------------
// Each property is a list of ID's
const initialState_company = {
  employees: [],
  vehicles: [],
  clients: []
};

const reducer_company = (state = initialState_company, action) => {
  switch (action.type) {
    /*
    case 'ADD_EMPLOYEE':
    case 'REMOVE_EMPLOYEE':
    case 'ADD_CLIENT':
    case 'REMOVE_CLIENT':
    */

    case 'ADD_VEHICLE':
      return {
        ...state,
        vehicles: [
          ...state.vehicles,
          {
            ...action.vehicle,
            // id = next largest id
            id: state.vehicles.reduce((maxId, todo) => {
              return Math.max(todo.id, maxId)
            }, -1) + 1
          }
        ]
      }

      // else return default state
    case 'REMOVE_VEHICLE':
      return {
        ...state,
        vehicles: state.vehicles.filter(vehicle => {
          return vehicle.id !== action.vehicle.id;
        })
      }
    default:
      return state;
  }
}

function hasVehicle(arr, id) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id == id) {
      return true;
    }
  }
  return false;
}


/*  Map
  --------------------------------------
  Example Coordinates: (dropzone and basecamp)
    {
      id: 1,
      row: -1,
      col: -1
    }
*/
const initialState_map = {
  gridSize: 0,        // length of one side; N x N Map
  dropzoneCoords: [], // drop zone (row, col)
  basecampCoords: []  // base camp (row, col)
}

const reducer_map = (state = initialState_map, action) => {
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


//  Client
// --------------------------------------
/*
const initialState_clients = {

}

const reducer_company = (state = initialState_clients, action) => {
  switch (action.type) {
    default:
      return state;
  }
}
*/



//  Demo
// --------------------------------------
const initialState = {
  count: 0
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'COUNT':
      return { ...state, count: (state.count) + 1 };
    default:
      return state;
  }
};

const finalReducer = combineReducers({
  "company": reducer_company,
  "map": reducer_map
});
const store = createStore(finalReducer);

export default store;
