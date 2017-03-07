

/*

  Client Reducer
    * Add and remove employees
    * Change employee happiness levels 0-5
        - 3 is neutral
        - 5 is happy
        - 0 is unhappy/'about to quit'


*/


const initial_state = [
  {name: 'Clients Incorporated',  happiness: 3, id: 0},
  {name: 'Angry Clients, LLC',    happiness: 1, id: 1},
  {name: 'Too Happy To Function', happiness: 5, id: 2},
];

const clientReducer = (state = initial_state, action) => {
  switch (action.type) {
    case 'ADD_CLIENT':
      return [
        {
          id: state.length,
          ...action.newClient
        },
        ...state
      ];

    case 'REMOVE_CLIENT':
      return state.filter(client => {
        return client.id !== action.id;
      });

    default:
      return state;
  }
}

export default clientReducer;
