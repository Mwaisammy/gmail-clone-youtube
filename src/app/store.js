import { configureStore } from '@reduxjs/toolkit';
import mailReducer, { selectSendMessageIsOpen } from '../features/mailSlice';
export const store = configureStore({
  reducer: {
    mail: mailReducer,
  },
});


console.log('sendMessageIsOpen:', selectSendMessageIsOpen); // Add this line
