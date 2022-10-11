import React from "react";

export default function Todo(props) {

  return (
    <li className="todo">
      <div className="stack-small">
        <div className="c-cb">
          <label className="todo-label" htmlFor={props.id}>
            {props.name}
          </label>
        </div>
        <div className="btn-group">
          <button id={props.id} type="button" className="btn" onClick={() => props.toggleTaskComplete(props.id)}>
            Mark as Complete
          </button>
          <button type="button" className="btn btn__danger" onClick={() => props.deleteTask(props.id)}>
            Delete
          </button>
        </div>
      </div>
    </li>
  );
} 
