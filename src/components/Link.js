import React from 'react';
import PropTypes from "prop-types";

const Link = ({ active, onClick, children }) => {
  if (active) {
    return <span data-test="component-link-span">{children}</span>
  };
  return (
    <a href="# "
      data-test="component-link" 
      onClick={onClick}>
      {children}
    </a>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Link;