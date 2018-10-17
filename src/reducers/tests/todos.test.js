import todos from '../todos';
import * as constants from '../../actions/constants';

describe('Todos reducer', () => {

  it('should add a Todo', () => {
    const stateBefore = [];
    const action = {
      type:  constants.ADD_TODO,
      payload: {
        id: 1,
        text: "Learn Webpack"
      }
    };
    const stateAfter = [
      {
        id: 1,
        text: "Learn Webpack",
        completed: false
      }
    ];

    expect(todos(stateBefore, action)).toEqual(stateAfter);
  });

  it('should toggle a Todo', () => {
    const stateBefore = [
      {
        id: 1,
        text: "Learn Webpack",
        completed: false
      }
    ];
    const action = {
      type:  constants.TOGGLE_TODO,
      payload: {
        id: 1
      }
    };
    const stateAfter = [
      {
        id: 1,
        text: "Learn Webpack",
        completed: true
      }
    ];

    expect(todos(stateBefore, action)).toEqual(stateAfter);
  });

});