import React, { useState } from "react";
import './App.css';
import NewTodoInput from "./components/NewTodoInput/NewTodoInput.js";
import TodoList from "./components/TodoList/TodoList.js";
import Todo from "./components/Todo/Todo.js";


const addTodoBtn = "+";
const placeholder = "new task";
const labelResetBtn = "reset"

const todosData = [
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
];

export default function App() {
  const [todosState, setTodos] = useState(todosData);

function handleDelete(todoId) {
  console.log(`Todo id = ${todoId}`);
  const newTodos = todosState.filter(({ id }) => id !== todoId )

  setTodos(newTodos);
}

function handleNewTodo(newTodo) {
  const newTodos = [newTodo, ...todosState];
  console.log(newTodos)
  setTodos(newTodos);
}

function clearAll() {
  setTodos([]);
}

function handleCompleteTodo(todoId) {
  const newTodos = todosState.map((todo) => {
    if(todo.id === todoId) {
      todo.isDone = !todo.isDone;
    }
    return todo
  })

  setTodos(newTodos)
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
      This is the main section
          <NewTodoInput addTodo={handleNewTodo} labelBtn={addTodoBtn} placeholder={placeholder} />
          <div className="container__deleteButton">
            <TodoList
            todos={todosState}
            labelResetBtn={labelResetBtn}
            deleteTodo={handleDelete}
            completedTodo={handleCompleteTodo}
            />
            <button onClick={clearAll}>Clear all</button>
          </div>
        </div>

      </main>
      <footer className="footer">Contact information + Copyright</footer>
    </div>
  );
}
