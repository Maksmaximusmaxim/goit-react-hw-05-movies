import React from 'react';
import { NavLink } from 'react-router-dom';
export function HomeItem({ title, img , id }) {
    
  return (
    <li>
        <NavLink to={`films/${id}`}>{title}</NavLink>
     
    </li>
  );
}
