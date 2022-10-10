import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import Todo from './components/Todo';
import Form from './components/Form';
import FilterButton from './components/FilterButton';

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  function addTask(name) {
    const newTask = {
      id: `todo-${nanoid()}`,
      name: name,
      isCompleted: false,
      key: `todo-${nanoid()}`
    };
    setTasks([...tasks, newTask]);
  }

  function toggleTaskComplete(id) {
    const updatedTask = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, isCompleted: !task.isCompleted }
      }
      return task;
    })
    setTasks(updatedTask);
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
  const plural = taskList.length === 1 ? "task" : "tasks";
  const headText = `${taskList.length} ${plural} remaining`;

  return (
    <div className="todoapp stack-large">
      <h1>To-Do List</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">
        {headText}
      </h2>
      <ul
        className="todo-list stack-large">
        {taskList}
      </ul>
    </div>
  );
}

export default App;
