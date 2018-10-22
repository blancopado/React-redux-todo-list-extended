import * as constants from '../constants';
import setVisibilityFilter from '../visibilityFilter';

describe('VisibilityFilter action creator', () => {

  it('should create an action to change the Visibility Filter to show all todos', () => {
    const visibilityFilterExpectedAction= { type: constants.SET_VISIBILITY_FILTER, payload: { filter: constants.SHOW_ALL } };
    expect(setVisibilityFilter(constants.SHOW_ALL)).toEqual(visibilityFilterExpectedAction);;
  });

  it('should create an action to change the Visibility Filter to show completed todos', () => {
    const visibilityFilterExpectedAction= { type: constants.SET_VISIBILITY_FILTER, payload: { filter: constants.SHOW_COMPLETED } };
    expect(setVisibilityFilter(constants.SHOW_COMPLETED)).toEqual(visibilityFilterExpectedAction);;
  });

  it('should create an action to change the Visibility Filter to show active todos', () => {
    const visibilityFilterExpectedAction= { type: constants.SET_VISIBILITY_FILTER, payload: { filter: constants.SHOW_ACTIVE } };
    expect(setVisibilityFilter(constants.SHOW_ACTIVE)).toEqual(visibilityFilterExpectedAction);;
  });

});