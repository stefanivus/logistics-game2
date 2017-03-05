

const initialState_company = {
  employees: [
    {},
  ],
  vehicles: [
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
  ],
  clients: [
    {},
  ]
};

const companyReducer = (state = initialState_company, action) => {
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


export default companyReducer;
