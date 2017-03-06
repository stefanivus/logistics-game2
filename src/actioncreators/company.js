

/*
    Company Action Creators

    1. Add/Remove from Budget

*/

export function addBudget(income=0) {
  return {
    type: 'ADD_BUDGET',
    income
  }
}


export function removeBudget(cost=0) {
  return {
    type: 'REMOVE_BUDGET',
    cost
  }
}
