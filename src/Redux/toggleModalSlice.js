import { createSlice } from '@reduxjs/toolkit';

const toggleModalSlice = createSlice({
  name: 'modal',
  initialState: {
    toggle: false,
  },
  reducers: {
    toggleModal: (state, action) => {
      state.toggle = action.payload.val;
    },
  },
});

export const { toggleModal } = toggleModalSlice.actions;
export default toggleModalSlice.reducer;
