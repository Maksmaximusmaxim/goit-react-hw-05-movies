import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
export function HomeItem({ title, id }) {
  return (
    <li>
      <NavLink to={`films/${id}`}>{title}</NavLink>
    </li>
  );
}
HomeItem.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
};
