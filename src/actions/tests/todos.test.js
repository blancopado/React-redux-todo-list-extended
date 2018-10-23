import * as constants from '../constants';
import * as actions from '../todos';
import { v4 } from 'uuid';

describe('Todos actions', () => {

  it('should create an action to add a Todo', () => {
    const todo = { text: 'Learn Webpack' }
    const expectedAction = {type: constants.ADD_TODO, payload: todo};
    let actualAction = actions.addTodo(todo);
    delete actualAction.payload.id; // excludes a randomly generated id from actual action
    expect(actualAction).toEqual(expectedAction);
  });

  it('should create an action to toggle a Todo', () => {
    const todoId = v4();
    const expectedAction = {
      type: constants.TOGGLE_TODO,
      payload: { id: todoId }
    };
    expect(actions.toggleTodo(todoId)).toEqual(expectedAction);
  });

});