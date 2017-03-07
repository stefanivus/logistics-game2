

/*

  Employee Reducer
    * Add and remove employees
    * Change employee happiness levels 0-5
        - 3 is neutral
        - 5 is happy
        - 0 is unhappy/'about to quit'


*/

const initial_state = [
  {name: 'Jake',   happiness: 3, id: 0},
  {name: 'Jose',   happiness: 2, id: 1},
  {name: 'Arthur', happiness: 5, id: 2}
];

const employeeReducer = (state = initial_state, action) => {
  switch (action.type) {
    case 'ADD_EMPLOYEE':
      return [
        {
          id: state.length,
          ...action.newEmployee
        },
        ...state
      ];

    case 'REMOVE_EMPLOYEE':
      return state.filter(employee => {
        return employee.id !== action.id;
      });

    case 'INCREMENT_HAPPINESS':
      return state.map(employee => {
        if (employee.id === action.id) {
          if (employee.happiness < 5)
            employee.happiness = employee.happiness++;
        }

        return employee;
      });

    case 'DECREMENT_HAPPINESS':
      return state.map(employee => {
        if (employee.id === action.id) {
          if (employee.happiness > 0)
            employee.happiness = employee.happiness--;
        }

        return employee;
      });

    default:
      return state;
  }
}

export default employeeReducer;
