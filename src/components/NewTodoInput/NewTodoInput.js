import React from 'react';
import './NewTodoInput.css';

function NewTodoInput({ labelBtn, placeholder}) {

  return (
    <div>
    <input type='text' className="newInput rounded-top" placeholder={placeholder} />
    <button className="button reset__Button rounded">{labelBtn}</button>
    </div>
  );
}

export default NewTodoInput;
