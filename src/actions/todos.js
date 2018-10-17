import * as constants from './constants';

export const addTodo = todo => {
  return {
    type:  constants.ADD_TODO,
    payload: {
      id: todo.id,
      text: todo.text
    }
  };
};

export const toggleTodo = todoId => {
  return {
    type: constants.TOGGLE_TODO,
    payload: {
      id: todoId
    }
  };
};