import React, { useState } from "react";

export default function Form(props) {

    const [name, setName] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (name.length) {
            props.addTask(name);
            setName('');
        } else {
            alert("Can't enter empty tasks!");
        }
    }

    function handleChange(e) {
        setName(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            Do something productive today!
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          value={name}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
    );
}
