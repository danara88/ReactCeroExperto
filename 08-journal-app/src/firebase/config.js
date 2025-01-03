import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyBomUuWx1yMUcM37bE9HuaaxsX-0i6Py70',
  authDomain: 'react-cursos-e47a5.firebaseapp.com',
  projectId: 'react-cursos-e47a5',
  storageBucket: 'react-cursos-e47a5.appspot.com',
  messagingSenderId: '573180312279',
  appId: '1:573180312279:web:a878c8da1c3dc08cad8e92',
};

export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);
