import React, { useContext } from 'react';
import Auth from './Auth';
import Navbar from './Navbar';
import { AuthContext } from '../Contexts/AuthContext';

export default function SignIn() {
  const { auth } = useContext(AuthContext);
  
  return (
    <div className='App'>
      <Navbar />
      <Auth auth={auth} />
    </div>
  );
}