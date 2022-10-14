import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import SignIn from './components/SignIn';
import { Routes, Route, HashRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
const data = [];
const completed = [];
root.render(
  <HashRouter>
      <Routes>
        <Route path='/' element={<App tasks={data} comp={completed} />} />
        <Route path='/to-do-list' element={<App tasks={data} comp={completed} />} />
        <Route path='/to-do-list/signin' element={<SignIn />} />
      </Routes>
  </HashRouter>
);