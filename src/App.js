import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import Navbar from './components/Navbar';
import Todo from './components/Todo';
import Completed from './components/Completed';
import Form from './components/Form';
import { AuthContext } from './Contexts/AuthContext';
import SignIn from './components/SignIn';

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const [comp, setComp] = useState(props.comp)
  const [user, setUser] = useState({});

  function addTask(name) {
    const newTask = {
      id: `todo-${nanoid()}`,
      name: name,
      isCompleted: false,
      key: `todo-${nanoid()}`
    };
    setTasks([...tasks, newTask]);
  }

  function completedTask(id, name) {
    const completed = {
      id: id,
      name: name,
      key: id
    };
    setComp([...comp, completed]);
  }

  function toggleTaskComplete(id) {
    tasks.map((task) => {
      if (id === task.id) {
        completedTask(id, task.name);
        deleteTask(id);
      }
      return task;
    })
  }

  function deleteTask(id) {
    const updatedTask = tasks.filter((task) => id !== task.id);
    setTasks(updatedTask);
  }

  const taskList = tasks.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      isCompleted={task.isCompleted}
      key={task.id}
      toggleTaskComplete={toggleTaskComplete}
      deleteTask={deleteTask}
    />
  ));
  const compList = comp.map((task) => (
    <Completed
      id={task.id}
      name={task.name}
      key={task.key}
    />
  ));

  const pluralTask = taskList.length === 1 ? "task" : "tasks";
  const pluralComp = compList.length === 1 ? "task" : "tasks";
  const headText = `${taskList.length} ${pluralTask} remaining`;
  const footText = `${compList.length} ${pluralComp} completed`;

  return (
    <div>
      <AuthContext.Provider value={{user, setUser}}>
        <Navbar />
        <div className='invis'>
          <SignIn />  
        </div>
      </AuthContext.Provider>
      <div className="row">
        <div className="todoapp stack-large">
          <h1>To-Do</h1>
          <Form addTask={addTask} />
          <h2 id="list-heading">
            {headText}
          </h2>
          <ul
            className="todo-list stack-large">
            {taskList}
          </ul>
        </div>
        <div className="todoapp stack-large">
          <h1>Completed</h1>
          <h2 id="list-heading">
            {footText}
          </h2>
          <ul
            className="todo-list stack-large">
            {compList}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
