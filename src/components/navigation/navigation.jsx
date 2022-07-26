// import React from "react";
import {NavLink , Outlet} from 'react-router-dom';
export function Navigation(){
    return (
        <>  
        <nav>
<NavLink to="/">Главная</NavLink>
<NavLink to="/films">Фильмы</NavLink>
  </nav>
  <Outlet/>
  </>

    )
}