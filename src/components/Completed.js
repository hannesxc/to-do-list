import React from "react";

export default function Completed(props) {
    return (
        <li className="todo">
            <label className="todo-label" htmlFor={props.id}>
                {props.name}
            </label>
        </li>
    );
}