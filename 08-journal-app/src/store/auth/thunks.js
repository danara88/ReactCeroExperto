import { authenticationLoading, login, logout } from './authSlice';
import {
  registerUserWithEmailAndPassword,
  signInWithEmailPassword,
  signInWithGoogle,
} from '../../firebase';

/**
 * @constant checkingAuthentication
 * @description Thunk to check the user authentication
 */
export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(authenticationLoading());
  };
};

/**
 * @constant startGoogleSignIn
 * @description Thunk to check the user authentication using Google provider
 */
export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(authenticationLoading());

    const result = await signInWithGoogle();
    if (!result.ok) return dispatch(logout({ errorMessage: result.errorMessage }));

    dispatch(login(result));
  };
};

/**
 * @constant startEmailPasswordSignIn
 * @description Thunk to sign in user using email and password
 */
export const startEmailPasswordSignIn = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(authenticationLoading());

    const result = await signInWithEmailPassword({ email, password });

    if (!result.ok) return dispatch(logout({ errorMessage: result.errorMessage }));

    dispatch(login(result));
  };
};

/**
 * @constant startCreatingUserWithEmailPassword
 * @description Thunk to register a user with email and password
 */
export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
  return async (dispatch) => {
    dispatch(authenticationLoading());

    const result = await registerUserWithEmailAndPassword({ email, password, displayName });

    if (!result.ok) return dispatch(logout({ errorMessage: result.errorMessage }));

    dispatch(login(result));
  };
};
