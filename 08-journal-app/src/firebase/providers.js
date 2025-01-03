import {
  AuthCredential,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

/**
 * @constant signInWithGoogle
 * @description Method to sign user in using Google Provider
 */
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);

    // Aqui viene el token
    //const credentials = GoogleAuthProvider.credentialFromResult(result);

    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    const errorMessage = error.message;
    return {
      ok: false,
      errorMessage,
    };
  }
};

/**
 * @constant signInWithEmailPassword
 * @description Method to sign in using email and password
 */
export const signInWithEmailPassword = async ({ email, password }) => {
  try {
    const { user } = await signInWithEmailAndPassword(FirebaseAuth, email, password);
    const { uid, photoURL, displayName, email } = user;

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    const errorMessage = error.message;
    return {
      ok: false,
      errorMessage,
    };
  }
};

/**
 * @constant registerUserWithEmailAndPassword
 */
export const registerUserWithEmailAndPassword = async ({ email, password, displayName }) => {
  try {
    const { user } = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
    const { uid, photoURL } = user;

    await updateProfile(FirebaseAuth.currentUser, { displayName });

    return {
      ok: true,
      uid,
      photoURL,
      email,
      displayName,
    };
  } catch (error) {
    const errorMessage = error.message;

    return {
      ok: false,
      errorMessage,
    };
  }
};
