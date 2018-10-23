import React from 'react';
import PropTypes from "prop-types";
import Todo from './Todo';

const TodoList = ({ todos, onTodoClick }) => {

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

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    })
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
};

export default TodoList;