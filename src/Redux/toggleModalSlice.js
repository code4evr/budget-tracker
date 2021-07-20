import { createSlice } from '@reduxjs/toolkit';

const toggleModalSlice = createSlice({
  name: 'modal',
  initialState: {
    toggleBudget: false,
    toggleExpense: false,
  },
  reducers: {
    toggleBudgetModal: (state, action) => {
      state.toggleBudget = action.payload.val;
    },
    toggleExpenseModal: (state, action) => {
      state.toggleExpense = action.payload.val;
    },
  },
});

export const {
  toggleBudgetModal,
  toggleExpenseModal,
} = toggleModalSlice.actions;
export default toggleModalSlice.reducer;
