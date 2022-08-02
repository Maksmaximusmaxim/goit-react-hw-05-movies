import React from 'react';
import PropTypes from 'prop-types';
import { Link , useLocation  } from 'react-router-dom';
import css from './home.module.css'
export function HomeItem({ title, id }) {

 

const location = useLocation()

  return (
    <li>
      <Link className={css.Link} to={
        `films/${id}`} state={{from:location.pathname}}
        >{title}</Link>
    </li>
  );
}
HomeItem.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
};
