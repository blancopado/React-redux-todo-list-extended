import visibilityFilter from '../visibilityFilter';
import * as constants from '../../actions/constants';

describe('Visibility Filter reducer', () => {

  it ('should change the visibility filter to show all todos', () => {
    const stateBefore = constants.SHOW_COMPLETED;
    const action = { type: constants.SET_VISIBILITY_FILTER, payload: { filter: constants.SHOW_ALL } }
    const stateAfter = constants.SHOW_ALL;
    expect(visibilityFilter(stateBefore, action)).toEqual(stateAfter);
  });

  it('should change the visibility filter to show completed todos', () => {
    const stateBefore = constants.SHOW_ALL;
    const action = { type: constants.SET_VISIBILITY_FILTER, payload: { filter: constants.SHOW_COMPLETED }}
    const stateAfter = constants.SHOW_COMPLETED;
    expect(visibilityFilter(stateBefore, action)).toEqual(stateAfter);
  });

  it('should change the visibility filter to show active todos', () => {
    const stateBefore = constants.SHOW_COMPLETED;
    const action = { type: constants .SET_VISIBILITY_FILTER, payload: { filter: constants.SHOW_ACTIVE }};
    const stateAfter = constants.SHOW_ACTIVE;
    expect(visibilityFilter(stateBefore, action)).toEqual(stateAfter);
  });

});