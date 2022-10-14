import React, { useEffect, useContext } from 'react';
import Auth from './Auth';
import firebase from 'firebase/compat/app';
import Navbar from './Navbar';
import { onAuthStateChanged } from 'firebase/auth';
import { AuthContext } from '../Contexts/AuthContext';

export default function SignIn() {
  const { setUser } = useContext(AuthContext);
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_TODO_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_TODO_FIREBASE_AUTH_DOM,
    projectId: process.env.REACT_APP_TODO_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_TODO_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_TODO_FIREBASE_MSG_SENDER_ID,
    appId: process.env.REACT_APP_TODO_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_TODO_FIREBASE_MEASUREMENT_ID
  };
  firebase.initializeApp(firebaseConfig);

  useEffect(() => {
    const unsub = onAuthStateChanged(firebase.auth(), (currentUser) => {
      try {
        setUser(currentUser);
      } catch(error) {
        console.log(error);
      }
      console.log(currentUser);
    });
    return () => {
      unsub();
    }
  }, []);

  return (
    <div className='App'>
      <Navbar />
      <Auth auth={firebase.auth()} />
    </div>
  );
}