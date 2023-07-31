import { configureStore } from '@reduxjs/toolkit';
import mailReducer from '../features/mailSlice';
import userReducer from "../userSlice";
export const store = configureStore({
  reducer: {
    mail: mailReducer,
    user: userReducer,
  },
});


// console.log('sendMessageIsOpen:', selectSendMessageIsOpen); // Add this line
