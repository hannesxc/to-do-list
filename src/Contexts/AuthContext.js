import { createContext, useState, useEffect } from "react";
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { app } from '../config';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [ user, setUser ] = useState(null)
    const auth = getAuth(app)
    
    useEffect(() => {
      onAuthStateChanged( auth, user => {
        setUser(user)
      })
      // eslint-disable-next-line
    }, [])
  
    return (
      <AuthContext.Provider value={{ user, auth }}>{children}</AuthContext.Provider>
    )
  }