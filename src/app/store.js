import { configureStore } from '@reduxjs/toolkit';
import mailSlice from '../features/mailSlice';

export const store = configureStore({
  reducer: {
    counter: mailSlice,
  },
});
