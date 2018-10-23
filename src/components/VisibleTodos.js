import TodoList from './TodoList';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions/todos';

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

const VisibleTodoList = connect(
  mapStateToProps, 
  { onTodoClick: toggleTodo }
)(TodoList);

export default VisibleTodoList;