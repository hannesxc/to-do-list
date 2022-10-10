import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const data = [
  {
    name: "Wake up",
    isCompleted: true,
    id: "todo-0"
  },
  {
    name: "Procrastinate",
    isCompleted: false,
    id: "todo-1"
  },
  {
    name: "Sleep",
    isCompleted: false,
    id: "todo-2"
  }
];
root.render(
  <App tasks={data}/>
);
