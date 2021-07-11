import React, { createContext, useReducer } from 'react';

export const BudgetContext = createContext();

const BudgetReducer = (state, action) => {
  switch (action.type) {
    case 'GET_BUDGETS':
      return {
        ...state,
        budgetName: [...state.budgetName, action.payload],
      };
    default:
      return state;
  }
};

const initialState = {
  budgetName: [],
};

export const BudgetProvider = props => {
  const [state, dispatch] = useReducer(BudgetReducer, initialState);

  return (
    <BudgetContext.Provider
      value={{
        budgetName: state.budgetName,
        dispatch,
      }}
    >
      {props.children}
    </BudgetContext.Provider>
  );
};
