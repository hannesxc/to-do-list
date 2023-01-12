import React, { useState, useEffect, useContext } from 'react';
import { nanoid } from 'nanoid';
import Navbar from './components/Navbar';
import Todo from './components/Todo';
import Completed from './components/Completed';
import Form from './components/Form';
import { AuthContext } from './Contexts/AuthContext';
import { db } from './config';
import { collection, query, where, updateDoc, doc, deleteDoc, onSnapshot, setDoc } from "firebase/firestore";

function App() {
  const { user } = useContext(AuthContext)
  const collectionRef = collection(db, 'users');
  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
    if (user) {
      fetchData()
    }
    // eslint-disable-next-line
  }, [user]);

  function fetchData() {
    const q = query(collectionRef, where('uid', '==', `${user.uid}`))
    onSnapshot(q, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach( doc => {
        items.push(doc.data());
      });
      setTasks(items)
    });
  }

  async function addTask(name) {
    const randId = `todo-${nanoid()}`
    const newTask = {
      id: randId,
      name: name,
      isCompleted: false,
      uid: user ? user.uid : randId
    };
    if (user) {
      const newTodo = doc(collectionRef, newTask.id);
      await setDoc(newTodo, newTask);
    } else {
      setTasks([...tasks, newTask]);
    }
  }

  async function toggleTaskComplete(id) {
    if (user) {
      const docRef = doc(db, "users", id);
      await updateDoc(docRef, { isCompleted: true });
    } else {
      setTasks(tasks.map( task => {
        if (task.id === id) {
          task.isCompleted = true;
        }
        return task
      }))
    }
  }

  async function deleteTask(id) {
    if (user) {
      const docRef = doc(db, "users", id);
      await deleteDoc(docRef);
    } else {
      setTasks(tasks.filter( task => task.id !== id))
    }
  }

  const taskList = tasks.map( task => {
    if (task.isCompleted === false) {
      return <Todo
        id={task.id}
        name={task.name}
        isCompleted={task.isCompleted}
        toggleTaskComplete={toggleTaskComplete}
        deleteTask={deleteTask}
        key={task.id}
      />
    }
  });

  const compList = tasks.map( task => {
    if (task.isCompleted === true) {
      return <Completed id={task.id} name={task.name} key={task.id}/>
    }
  });

  const pluralTask = taskList.filter( el => el !== undefined).length === 1 ? "task" : "tasks";
  const pluralComp = compList.filter( el => el !== undefined).length === 1 ? "task" : "tasks";
  const headText = `${taskList.filter( el => el !== undefined).length} ${pluralTask} remaining`;
  const footText = `${compList.filter( el => el !== undefined).length} ${pluralComp} completed`;

  return (
    <>
      <Navbar />
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
    </>
  );
}

export default App;
