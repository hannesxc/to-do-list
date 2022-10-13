import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import SignIn from './components/SignIn';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
const data = [];
const completed = [];
root.render(
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<App tasks={data} comp={completed} />} />
        <Route path='/to-do-list' element={<App tasks={data} comp={completed} />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
  </BrowserRouter>
);
