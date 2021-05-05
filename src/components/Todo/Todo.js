import React, { useState } from 'react';
import "./Todo.css";
import EditTodo from "../Edit/Edit.js";


function Todo({title, isDone, id, deleteTodo, completedTodo, editTodo }) {
  const [isEdit, setIsEdit] = useState(false);

function newEditState(editState) {
  setIsEdit(editState);
}

  return (
    <div>
    {isEdit ?
      (
      <EditTodo title={title}
      handleIsEdit={newEditState}
      editTodo={editTodo}
      id={id}
      />
    ) : (
    <li className={isDone ? "list-group-item checkedBox" : "list-group-item"}>
      <input class="form-check-input"
      type="checkbox"
      checked={isDone}
      onChange={() => completedTodo(id)} />
      {title}
      <div className="container__buttons">
      <button className="btn btn-secondary rounded delete" onClick={() => deleteTodo(id)}> remove </button>
      <button className="btn btn-secondary rounded delete" onClick={() => newEditState(true)}> edit </button>
      </div>
    </li>
  )}
    </div>
  );
}

export default Todo;
