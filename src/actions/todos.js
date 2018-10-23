import * as constants from './constants';
import { v4 } from 'uuid';

export const addTodo = todo => {
  return {
    type:  constants.ADD_TODO,
    payload: {
      id: v4(),
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