import React from 'react';
import "./Todo.css";


function Todo({title, isDone, todoId, deleteTodo, completedTodo}) {
  return (
    <li className={isDone ? "list-group-item checkedBox" : "list-group-item"}>
      <input class="form-check-input"
      type="checkbox"
      checked={isDone}
      onChange={() => completedTodo(todoId)} />
      {title}
      <button onClick={() => deleteTodo(todoId)}> - </button>
    </li>
  );
}

export default Todo;
