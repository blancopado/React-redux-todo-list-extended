import * as constants from './constants';

const setVisibilityFilter = (filter) => {
  return {
    type: constants.SET_VISIBILITY_FILTER,
    payload: {
      filter: filter 
    }
  }
}

export default setVisibilityFilter;