import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
export function FilmLink({ id, title }) {
  return (
    <li>
      <NavLink to={`${id}`}>{title}</NavLink>
    </li>
  );
}
FilmLink.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
};
