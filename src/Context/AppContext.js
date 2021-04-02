import React, { createContext, useReducer } from 'react';

const AppReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const initialState = {
  budget: 5000,
  expenses: [
    { id: 1, item: 'grocery', value: 200 },
    { id: 2, item: 'school fees', value: 100 },
    { id: 3, item: 'medicine', value: 300 },
    { id: 4, item: 'health insurance premium', value: 500 },
    { id: 5, item: 'electric bill', value: 55 },
    { id: 7, item: 'phone bill', value: 25 },
    { id: 8, item: 'dine out', value: 110 },
  ],
};

export const AppContext = createContext();

export const AppProvider = props => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
