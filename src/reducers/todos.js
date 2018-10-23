import * as constants from '../actions/constants';

const Todo = (state, action) => {
  switch (action.type) {
    case constants.ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case constants.TOGGLE_TODO:
      if (state.id === action.id) {
        return {
          ...state,
          completed: !state.completed
        };
      }
      return state; 
    default:
      return state;
  }
}

const Todos = (state = [], action) => {
  switch (action.type) {
    case constants.ADD_TODO:
      return [
        ...state, 
        Todo(undefined, action)
      ];
    case constants.TOGGLE_TODO:
      return state.map(t => Todo(t, action));
    default:
      return state;
  }
}

export default Todos;