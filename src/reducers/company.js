
const initialState_company = {
  employees: [
    {},
  ],
  vehicles: [
    { name: "Bicycle", vehicleId: 0, mpg: 1000, capacity: 4, speed: 2, id: 0 },
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
