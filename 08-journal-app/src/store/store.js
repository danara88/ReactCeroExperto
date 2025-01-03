import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth';

/**
 * @constant store
 * @description This is the app store configuration
 */
export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});
