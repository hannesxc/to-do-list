import React from "react";

export default function Completed(props) {
    return (
        <li className="todo">
            <div className="stack-small">
                <div className="c-cb">
                    <label className="todo-label" htmlFor={props.id}>
                        {props.name}
                    </label>
                </div>
            </div>
        </li>
    );
}