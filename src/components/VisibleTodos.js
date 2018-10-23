import TodoList from './TodoList';
import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from '../actions/todos';

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

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleClick: (id) => {
      dispatch(toggleTodo(id));
    },
    onDeleteClick: (id) => {
      dispatch(deleteTodo(id));
    }
  };
};

const VisibleTodoList = connect(
  mapStateToProps, 
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;