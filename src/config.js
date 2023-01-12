import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_TODO_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_TODO_FIREBASE_AUTH_DOM,
    projectId: process.env.REACT_APP_TODO_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_TODO_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_TODO_FIREBASE_MSG_SENDER_ID,
    appId: process.env.REACT_APP_TODO_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_TODO_FIREBASE_MEASUREMENT_ID
  };

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { app, db }