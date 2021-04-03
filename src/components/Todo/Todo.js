import React from 'react';
import "./Todo.css";


function Todo({title, isDone}) {
  return (
    <li className={isDone ? "list-group-item checkedBox" : "list-group-item"}>
      <input type="checkbox" defaultChecked={isDone} />
      {title}
      <button>-</button>
    </li>
  );
}

export default Todo;
