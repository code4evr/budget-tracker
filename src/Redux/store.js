import { configureStore } from '@reduxjs/toolkit';
import deleteBudgetSlice from './deleteBudgetSlice';
import toggleModalSlice from './toggleModalSlice';
import toggleUtilityButton from './toggleUtilityButton';

export default configureStore({
  reducer: {
    modal: toggleModalSlice,
    utility: toggleUtilityButton,
    del: deleteBudgetSlice,
  },
});
