import './App.css';
import NewTodoInput from "./components/NewTodoInput/NewTodoInput.js";
import TodoList from "./components/TodoList/TodoList.js";
import Todo from "./components/Todo/Todo.js";


const addTodoBtn = "+";
const placeholder = "new task";
const labelResetBtn = "reset"

const todos = [
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
    isDone: true
  }
];

export default function App() {
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
          <NewTodoInput labelBtn={addTodoBtn} placeholder={placeholder} />
        </div>
        <div className="container__deleteButton">
          <TodoList todos={todos} labelResetBtn={labelResetBtn} />
          <Todo />
        </div>
      </main>
      <footer className="footer">Contact information + Copyright</footer>
    </div>
  );
}
