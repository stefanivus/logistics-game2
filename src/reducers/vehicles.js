
/*
  Vehicle State:

  I. VEHICLE ID
          Type of Vehicle   |    ID
      ----------------------------------------
            Bicycle               0
            Truck                 1
            Train                 2
            Plane                 3

*/

const initialState = [
  {
    id: 0,          // id is usually index, but doesn't have to be
    name: "Bicycle",
    vehicleId: 0,   // used to quickly determine which type of vehicle this is (see above for list of vehicle ids)
    mpg: -1,        // cost of fuel per turn
    capacity: 4,    // how much weight can be carried
    speed: 2,       // how many tiles moved her turn
    inUse: false,   // whether vehicle is available right now
    willReturn: -1, // the turn this vehicle returns from delivery
  },
  { name: "Truck", vehicleId: 1, mpg: 4, capacity: 10, speed: 4, id: 1 },
  { name: "Train", vehicleId: 2, mpg: 10, capacity: 65, speed: 6, id: 2 },
  { name: "Plane", vehicleId: 3, mpg: 25, capacity: 40, speed: 12, id: 3 },
];

const vehiclesReducer = (state = initialState_company, action) => {
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
