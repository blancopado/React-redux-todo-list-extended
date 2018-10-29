import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ todos, onToggleClick, onDeleteClick }) => {

  return (
    <div data-test="component-todolist">
      <ul>
      {todos.map((todo) => {
        return <Todo 
                  key={todo.id}
                  text={todo.text} 
                  completed={todo.completed} 
                  onToggleClick={() => onToggleClick(todo.id)}
                  onDeleteClick={() => onDeleteClick(todo.id)}
                /> })}
      </ul>
    </div>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    })
  ).isRequired,
  onToggleClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default TodoList;