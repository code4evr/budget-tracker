import { configureStore } from '@reduxjs/toolkit';
import toggleModalSlice from './toggleModalSlice';

export default configureStore({
  reducer: {
    modal: toggleModalSlice,
  },
});
