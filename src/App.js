import React, { useState } from "react";
import './App.css';
import NewTodoInput from "./components/NewTodoInput/NewTodoInput.js";
import TodoList from "./components/TodoList/TodoList.js";
import Todo from "./components/Todo/Todo.js";
import EditTodo from "./components/Edit/Edit.js";


const addTodoBtn = "+";
const placeholder = "new task";
const labelResetBtn = "reset"

/*const todosData = [
  {
    id: "134713749319748913",
    title: "Get vaccine",
    isDone: false
  },
  {
    id: "34954629579425425",
    title: "Meet friends",
    isDone: false
  },
  {
    id: "724095784927859",
    title: "Relax",
    isDone: false
  }
];*/

export default function App() {
  const [todosState, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);

function handleDelete(todoId) {
  const newTodos = todosState.filter(({ id }) => id !== todoId )
  handleSaveTodo(newTodos);
}

function handleNewTodo(newTodo) {
  const newTodos = [newTodo, ...todosState];
  handleSaveTodo(newTodos);
}


function handleCompleteTodo(todoId) {
  const newTodos = todosState.map((todo) => {
    if(todo.id === todoId) {
      todo.isDone = !todo.isDone;
    }
    return todo
  });
  handleSaveTodo(newTodos);
}

function handleSaveTodo(newTodos) {
  localStorage.setItem('todos', JSON.stringify(newTodos));
  setTodos(newTodos);
}

function handleEdit(todoId, newTitle) {
  const newTodos = todosState.map((todo) => {
    if(todo.id === todoId) {
      todo.title = newTitle;
    }
    return todo
  });
  handleSaveTodo(newTodos);
}


  return (
    <div className="App">
      <header className="header">
        <div className="header__title">
          <h1>Get stuff done!</h1>
        </div>
      <div className="header__subtitle">
        <h3>The easy way to reach your goals</h3>
      </div>
      </header>
      <main>
        <div className="container__todo">
          <NewTodoInput addTodo={handleNewTodo} labelBtn={addTodoBtn} placeholder={placeholder} />
          <div className="container__deleteButton">
            <TodoList
            todos={todosState}
            labelResetBtn={labelResetBtn}
            deleteTodo={handleDelete}
            completedTodo={handleCompleteTodo}
            editTodo={handleEdit}/>
          </div>
          <div className="container__deleteButton">
          <button  onClick={() => handleSaveTodo([])} className="button reset__Button rounded">{labelResetBtn}</button>
          </div>
        </div>

      </main>
      <footer className="footer">Contact information + Copyright</footer>
    </div>
  );
}
