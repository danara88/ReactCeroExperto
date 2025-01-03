import { createSlice } from '@reduxjs/toolkit';

export const authStatus = {
  NOT_AUTHENTICATED: 'not-authenticated',
  AUTHENTICATED: 'authenticated',
  LOADING: 'loading',
};

const authInitialState = {
  status: authStatus.NOT_AUTHENTICATED,
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

/**
 * @constant authSlice
 * @description Slice to handle auth module
 */
export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    ...authInitialState,
  },
  reducers: {
    login: (state, { payload }) => {
      state.status = authStatus.AUTHENTICATED;
      state.uid = payload.uid;
      state.email = payload.email;
      state.displayName = payload.displayName;
      state.photoURL = payload.photoURL;
      state.errorMessage = null;
    },

    logout: (state, { payload }) => {
      state.status = authStatus.NOT_AUTHENTICATED;
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.photoURL = null;
      state.errorMessage = payload.errorMessage;
    },

    authenticationLoading: (state) => {
      state.status = authStatus.LOADING;
      state.errorMessage = null;
    },
  },
});

export const { login, logout, authenticationLoading } = authSlice.actions;
