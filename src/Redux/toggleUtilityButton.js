import { createSlice } from '@reduxjs/toolkit';

const toggleUtilityButton = createSlice({
  name: 'utility',
  initialState: {
    toggleUtility: false,
  },
  reducers: {
    clickCheckbox: (state, action) => {
      state.toggleUtility = action.payload.val;
    },
  },
});

export const { clickCheckbox } = toggleUtilityButton.actions;

export default toggleUtilityButton.reducer;
