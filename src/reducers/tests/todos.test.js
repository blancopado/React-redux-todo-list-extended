import todos from '../todos';
import * as constants from '../../actions/constants';

describe('Todos reducer', () => {

  it('should add a Todo', () => {
    const stateBefore = [];
    const action = {
      type:  constants.ADD_TODO,
      id: 1,
      text: "Learn Webpack"
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
      id: 1
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

  it('should delete a Todo', () => {
    const stateBefore = [
      {
        id: 1,
        text: "Buy milk",
        completed: true
      },
      {
        id: 2,
        text: "Call mum",
        completed: true
      }
    ];
    const action = {
      type: constants.DELETE_TODO,
      id: 2
    };
    const stateAfter = [
      {
        id: 1,
        text: "Buy milk",
        completed: true
      }
    ];

    expect(todos(stateBefore, action)).toEqual(stateAfter);
  });

});