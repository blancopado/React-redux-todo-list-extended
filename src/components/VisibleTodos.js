import TodoList from './TodoList';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { toggleTodo, deleteTodo } from '../actions/todos';
import * as constants from '../actions/constants';

const getVisibleTodos = (todos, filter) => {
  console.log(filter);
  switch (filter) {
    case constants.SHOW_ALL:
      return todos;
    case constants.SHOW_ACTIVE:
      return todos.filter(todo => {
        return !todo.completed;
      });
    case constants.SHOW_COMPLETED: 
      return todos.filter(todo => {
        return todo.completed;
      });
    default:
      return todos;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { 
    todos: getVisibleTodos(state.todos, ownProps.match.params.filter || constants.SHOW_ALL) 
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

const VisibleTodoList = withRouter(connect(
  mapStateToProps, 
  mapDispatchToProps
)(TodoList));

export default VisibleTodoList;