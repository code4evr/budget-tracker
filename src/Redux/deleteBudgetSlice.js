import { createSlice } from '@reduxjs/toolkit';

const deleteBudgetSlice = createSlice({
  name: 'del',
  initialState: {
    budgetToDelete: [],
  },
  reducers: {
    deleteBudget: (state, action) => {
      console.log(action.payload);
      if (!state.budgetToDelete.includes(action.payload.val)) {
        state.budgetToDelete.push(action.payload.val);
      }
    },
  },
});

export const { deleteBudget } = deleteBudgetSlice.actions;
export default deleteBudgetSlice.reducer;
