import React, { useState } from 'react';
import './NewTodoInput.css';

function NewTodoInput({ labelBtn, placeholder, addTodo }) {
  const [inputValue, setInputValue] = useState("");

function handleOnKeyDown({keyCode, target}) {
  if (keyCode === 13) {
    saveNewTodo();
  }
}

function handleInputValue({target}) {
  setInputValue(target.value);
}

function saveNewTodo() {
  const newTodo = {
    id: (Date.now() + Math.random()).toString(),
    title: inputValue,
    isDone: false,
  };
  addTodo(newTodo);

  setInputValue("");

}


  return (
    <div className="taskAdder">
    <input
    type='text'
    value={inputValue}
    className="newInput rounded-top"
    placeholder={placeholder}
    onKeyDown={handleOnKeyDown}
    onChange={handleInputValue}
    />

    <button onClick={saveNewTodo}className="submit__Button rounded-bottom">{labelBtn}</button>
    </div>
  )

}

export default NewTodoInput;
