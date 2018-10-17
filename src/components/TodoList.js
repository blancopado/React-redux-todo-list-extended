import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions/todos';

const TodoList = ({ todos, toggleTodo }) => {
  
  const onTodoClick = (id) => {
    toggleTodo(id);
  }

  return (
    <div data-test="component-todolist">
      <ul>
      {todos.map((todo) => {
        return <Todo 
                  key={todo.id}
                  id={todo.id} 
                  text={todo.text} 
                  completed={todo.completed} 
                  onClick={() => onTodoClick(todo.id)}
                /> })}
      </ul>
    </div>
  );
}

export default connect(state => ({ todos: state }), { toggleTodo })(TodoList);