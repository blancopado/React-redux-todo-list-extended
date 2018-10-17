import React from 'react';

const Todo = ({ id, text, completed, onClick }) => {
  return (
    <li data-test='component-todo' 
        onClick={onClick} 
        style={{textDecoration: completed ? 'line-through' : 'none'}}>
      {text}
    </li>
  )
}

export default Todo;