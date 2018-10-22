import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import FilterLink from './FilterLink';
import setVisibilityFilter from '../actions/visibilityFilter';
import * as constants from '../actions/constants';

const FilterLinkList = ({ currentVisibilityFilter, setVisibilityFilter }) => {
  
  const onClick = (filter) => {
    setVisibilityFilter(filter);
  };

  return (
    <div data-test="component-filter-link-list">
      <p>Show:</p>
      <FilterLink data-test="show-all-filterlink" filter= {constants.SHOW_ALL} currentVisibilityFilter={currentVisibilityFilter} onClick={() => onClick(constants.SHOW_ALL)}>All</FilterLink>{", "}
      <FilterLink data-test="show-completed-filterlink" filter= {constants.SHOW_COMPLETED} currentVisibilityFilter={currentVisibilityFilter} onClick={() => onClick(constants.SHOW_COMPLETED)}>Completed</FilterLink>{", "}
      <FilterLink data-test="show-active-filterlink" filter= {constants.SHOW_ACTIVE} currentVisibilityFilter={currentVisibilityFilter} onClick={() => onClick(constants.SHOW_ACTIVE)}>Active</FilterLink>
    </div>
  )
}

FilterLinkList.propTypes = {
  currentVisibilityFilter: PropTypes.string.isRequired,
  setVisibilityFilter: PropTypes.func.isRequired
};

export default connect(
  state => ({ currentVisibilityFilter: state.visibilityFilter }), { setVisibilityFilter })(FilterLinkList);