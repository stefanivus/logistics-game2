/*
    Game State Reducer
        * Manages the games state, such as which turn it is,
          overall happiness of clients, etc.


*/

const initialState = {
  turn: 0,            // current game round
  overallHappiness: { // average happiness
    clients: 0,
    employees: 0
  }
}

const gameStateReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'NEXT_TURN':
      return {
        turn: (state.turn + 1),
        ...state
      }

    /*
    // Calculate Average Happiness
    case 'NEXT_CLIENT_HAPPINESS':
    case 'NEXT_EMPLOYEE_HAPPINESS':
    */

    default:
      return state;
  }
}

export default gameStateReducer;
