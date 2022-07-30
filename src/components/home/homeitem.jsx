import React from 'react';
import PropTypes from 'prop-types';
import { Link   } from 'react-router-dom';
import css from './home.module.css'
export function HomeItem({ title, id }) {

 

  // function usePageViews() {
  //   let location = useLocation();
  //   useEffect(() => {
  //     ga.send(["pageview", location.pathname]);
  //   }, [location]);
  // }

  return (
    <li>
      <Link className={css.Link} to={
        `films/${id}`}
        >{title}</Link>
    </li>
  );
}
HomeItem.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
};
