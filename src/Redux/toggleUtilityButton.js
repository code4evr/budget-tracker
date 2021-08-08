import { createSlice } from '@reduxjs/toolkit';

const toggleUtilityButton = createSlice({
  name: 'utility',
  initialState: {
    toggleUtility: false,
    isChecked: false,
    isIndeterminate: false,
  },
  reducers: {
    clickCheckbox: (state, action) => {
      state.toggleUtility = action.payload.toggleUtility;
      state.isChecked = action.payload.isChecked;
      state.isIndeterminate = action.payload.isIndeterminate;
    },
  },
});

export const { clickCheckbox } = toggleUtilityButton.actions;

export default toggleUtilityButton.reducer;
