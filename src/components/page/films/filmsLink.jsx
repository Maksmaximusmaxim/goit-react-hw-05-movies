import {Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './film.module.css'
export function FilmLink({ id, title }) {
  return (
    <li>
      <Link className={css.Link} to={`${id}`}>{title}</Link>
    </li>
  );
}
FilmLink.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
};
