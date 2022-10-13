import React, { useEffect, useContext } from 'react';
import Auth from './Auth';
import firebase from 'firebase/compat/app';
import Navbar from './Navbar';  
import { onAuthStateChanged } from 'firebase/auth';
import { AuthContext } from '../Contexts/AuthContext';

export default function SignIn() {
  const { setUser} = useContext(AuthContext);
  const firebaseConfig = {
    apiKey: "AIzaSyBzIuFxBQA6n87HO8l_DfuST3gkyqsVubE",
    authDomain: "todo-app-authv2.firebaseapp.com",
    projectId: "todo-app-authv2",
    storageBucket: "todo-app-authv2.appspot.com",
    messagingSenderId: "845849550740",
    appId: "1:845849550740:web:ac476a92923e9a34597981",
    measurementId: "G-EBDZ7QP82B"
  };
  firebase.initializeApp(firebaseConfig);

  useEffect(() => {
    const unsub = onAuthStateChanged(firebase.auth(), (currentUser) => {
        setUser(currentUser);
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