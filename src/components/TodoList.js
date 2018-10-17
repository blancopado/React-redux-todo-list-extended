import React from 'react';
import { connect } from 'react-redux';

const TodoList = ({ todos }) => {
  return (
    <div data-test="component-todolist">
      <ul>
      {todos.map((todo) => {
        return <li key={todo.id}>{todo.text}</li> 
      })}
      </ul>
    </div>
  );
}

export default connect(state => ({ todos: state }), null)(TodoList);