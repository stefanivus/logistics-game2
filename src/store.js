import { createStore, combineReducers } from 'redux';

import gameStateReducer from './reducers/gameState';
import mapReducer from './reducers/map';
import companyReducer from './reducers/company';
import vehiclesReducer from './reducers/vehicles';
// import employeesReducer from './reducers/employees';
// import clientsReducer from './reducers/clients';

const finalReducer = combineReducers({
  game: gameStateReducer,
  map: mapReducer,
  company: companyReducer,
  vehicles: vehiclesReducer,      // array of vehicles
  // employees: employeesReducer, // array of employees
  // cliets: clietsReducer,       // array of clients
});

const store = createStore(finalReducer);

export default store;




//  Demo Reducer
// --------------------------------------
// const initialState = {
//   count: 0
// }
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'COUNT':
//       return { ...state, count: (state.count) + 1 };
//     default:
//       return state;
//   }
// };
