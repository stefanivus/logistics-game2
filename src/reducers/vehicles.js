import vehicleDefaults from '../gameDefaults/vehicle-defaults.json';

let defaultBicycle = Object.assign({}, vehicleDefaults.bicycle);

const initialState = [
   defaultBicycle,   // start with a bicycle
];

const vehiclesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_VEHICLE':
      return [
        ...state,
        {
          ...action.vehicle,
          // id = next largest id
          id: state.vehicles.reduce((maxId, todo) => {
            return Math.max(todo.id, maxId)
          }, -1) + 1
        }
      ];

    case 'REMOVE_VEHICLE':
      return state.vehicles.filter(vehicle => {
        return vehicle.id !== action.vehicle.id;
      });

    case 'TOGGLE_INUSE':
      return state.vehicles.map(vehicle => {
        if (vehicle.id !== action.vehicle.id)
          return vehicle;
        else {
          // Toggle "inUse" property
          vehicle.inUse = !vehicle.inUse;
          return vehicle;
        }
      });


    // case 'UPDATE_WILLRETURN':
    // case 'CHANGE_MPG':
    // case 'CHANGE_CAPACITY':
    // case 'CHANGE_SPEED':


    default:
      return state;
  }
}

export default vehiclesReducer;
