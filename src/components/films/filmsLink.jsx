import {Link , useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './film.module.css'
export function FilmLink({ id, title }) {
const location = useLocation()

  return (
    <li>
      <Link className={css.Link} to={`${id}`} state={{from:location.pathname}}  >{title}</Link>
    </li>
  );
}
FilmLink.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
};
