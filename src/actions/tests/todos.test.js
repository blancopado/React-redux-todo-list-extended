import * as constants from '../constants';
import * as actions from '../todos';
import { v4 } from 'uuid';

describe('Todos actions', () => {

  it('should create an action to add a Todo', () => {
    const todoText = 'Learn Webpack';
    const expectedAction = {type: constants.ADD_TODO, text: todoText };
    let actualAction = actions.addTodo(todoText);
    delete actualAction.id; // excludes a randomly generated id from actual action
    expect(actualAction).toEqual(expectedAction);
  });

  it('should create an action to toggle a Todo', () => {
    const todoId = v4();
    const expectedAction = {
      type: constants.TOGGLE_TODO,
      id: todoId
    };
    expect(actions.toggleTodo(todoId)).toEqual(expectedAction);
  });

});