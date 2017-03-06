

/*
    Company Reducer
      * Manages the Player's company
*/
const initialState_company = {
  budget: 70000,    // default start $70,000
};

const companyReducer = (state = initialState_company, action) => {
  switch (action.type) {
    case 'ADD_BUDGET':
      return {
        budget: (state.budget + action.income),
        ...state
      }

    case 'REMOVE_BUDGET':
      return {
        budget: (state.budget - action.cost),
        ...state
      }

    default:
      return state;
  }
}

export default companyReducer;
