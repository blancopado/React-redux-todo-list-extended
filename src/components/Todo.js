import React from 'react';

const Todo = ({ text, completed, onToggleClick, onDeleteClick }) => {
  return (
    <li data-test='component-todo' 
        onClick={onToggleClick} 
        style={{textDecoration: completed ? 'line-through' : 'none'}}>
        <button onClick={onDeleteClick}>X</button>
        <span>{text}</span>
    </li>
  )
}

export default Todo;