import React from "react";
import Todo from "../Todo/Todo";
import "./TodoList.css";

function TodoList ({ todos , labelResetBtn, deleteTodo, completedTodo, editTodo }) {

  return (
    <div className="task__list">
      <h2>MY TASKS</h2>
      <ul  className="list-group">
        {todos.map((todo, index) => (

          <Todo
          id={todo.id}
          key={index}
          title={todo.title}
          isDone={todo.isDone}
          deleteTodo={deleteTodo}
          completedTodo={completedTodo}
          editTodo={editTodo}
          />
        ))}
        </ul>



    </div>
  );
}

export default TodoList;
