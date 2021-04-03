import React from "react";
import Todo from "../Todo/Todo";
import "./TodoList.css";

function TodoList ({ todos , labelResetBtn }) {
console.log('todos', todos);

  return (
    <div className="task__list">
      <h2>TASKS</h2>
      <ul  className="list-group">
        {todos.map((todo, index) => (

          <Todo key={index} title={todo.title} isDone={todo.isDone} />
        ))}
        </ul>

    <div className="container__deleteButton">
    <button className="button reset__Button rounded">{labelResetBtn}</button>
    </div>

    </div>
  );
}

export default TodoList;