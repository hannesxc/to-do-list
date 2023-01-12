import React from 'react';
import './App.css'
import ReactDOM from 'react-dom/client';
import App from './App';
import SignIn from './components/SignIn';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { AuthProvider } from './Contexts/AuthContext';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <AuthProvider>
    <HashRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/to-do-list' element={<App />} />
          <Route path='/to-do-list/signin' element={<SignIn />} />
        </Routes>
    </HashRouter>
  </AuthProvider>
);