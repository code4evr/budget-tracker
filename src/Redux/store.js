import { configureStore } from '@reduxjs/toolkit';
import toggleModalSlice from './toggleModalSlice';
import toggleUtilityButton from './toggleUtilityButton';

export default configureStore({
  reducer: {
    modal: toggleModalSlice,
    utility: toggleUtilityButton,
  },
});
