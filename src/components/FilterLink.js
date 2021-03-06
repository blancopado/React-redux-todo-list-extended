import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const FilterLink = ({ filter, children }) => {
  return (
    <NavLink exact to={filter === 'all' ? '/' : `/${ filter }`} activeStyle={{textDecoration: 'none', color: 'black'}}>
      {children}
    </NavLink>
  );
}

FilterLink.propTypes = {
  filter: PropTypes.oneOf(['all', 'completed', 'active']).isRequired,
  children: PropTypes.node.isRequired,
};

export default FilterLink;