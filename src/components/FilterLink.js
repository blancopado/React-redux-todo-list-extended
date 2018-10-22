import React from 'react';
import PropTypes from "prop-types";

const FilterLink = ({ filter, currentVisibilityFilter, onClick, children }) => {
  if (filter === currentVisibilityFilter) {
    return <span data-test="component-filter-link-span">{children}</span>
  }

  return (
    <a href="#"
      data-test="component-filter-link" 
      onClick={onClick}>
      {children}
    </a>
  )
}

FilterLink.propTypes = {
  filter: PropTypes.string.isRequired,
  currentVisibilityFilter: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default FilterLink;