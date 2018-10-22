import React from 'react';
import PropTypes from "prop-types";
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

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    })
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
};


const getVisibleTodos = (todos, visibilityFilter) => {
  switch (visibilityFilter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_ACTIVE':
      return todos.filter(todo => {
        return !todo.completed;
      });
    case "SHOW_COMPLETED": 
      return todos.filter(todo => {
        return todo.completed;
      });
    default:
      return todos;
  }
}

const mapStateToProps = (state) => {
  return { 
    todos: getVisibleTodos(state.todos, state.visibilityFilter) 
  };

}


export default connect(mapStateToProps, { toggleTodo })(TodoList);