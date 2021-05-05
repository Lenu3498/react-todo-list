import React, {useState} from 'react';
import "./Edit.css";

function EditTodo({ labelBtn, placeholder, handleIsEdit, title, id, editTodo }) {
  const [inputValue, setInputValue] = useState(title);

function handleSaveButton() {
  handleIsEdit(false);
  editTodo(id, inputValue);
}


function handleInputValue({target}) {
  setInputValue(target.value);
}


  return (
    <div className="taskAdder">
    <input
    type='text'
    value={inputValue}
    className="newInput__edit rounded-top"
    onChange={handleInputValue}
    />

    <button
    onClick={handleSaveButton}
    className="submit__Button__update rounded-bottom">update todo
    </button>
    </div>
  )
}

export default EditTodo;
