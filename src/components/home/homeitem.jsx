import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import css from './home.module.css'
export function HomeItem({ title, id }) {
  return (
    <li>
      <Link className={css.Link} to={`films/${id}`}>{title}</Link>
    </li>
  );
}
HomeItem.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
};
