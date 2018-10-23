import React from 'react';
import FilterLink from './FilterLink';
import * as constants from '../actions/constants';

const FilterLinkList = () => {
  
  return (
    <div data-test="component-filter-link-list">
      <p>Show:</p>
      <FilterLink filter={constants.SHOW_ALL}>All</FilterLink>
      <FilterLink filter={constants.SHOW_COMPLETED}>Completed</FilterLink>
      <FilterLink filter= {constants.SHOW_ACTIVE}>Active</FilterLink>
    </div>
  )
}

export default FilterLinkList;