import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import css from 'components/page/navigation/navigation.module.css'
export function Navigation() {
  return (
    <>
      <nav>
        <NavLink className={css.navLink}  to="/">Главная</NavLink>
        <NavLink className={css.navLink} to="/films">Фильмы</NavLink>
      </nav>
      <Outlet />
    </>
  );
}
