import React from 'react';
import { NavLink } from 'react-router-dom';

const BottomNav = () => {
  return (
    <nav className="bottom-nav">
      <ul className="bottom-nav__list">
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'bottom-nav__item active' : 'bottom-nav__item'}>
            <i className="fa-solid fa-house"></i>
            <span>About</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/experience/" className={({ isActive }) => isActive ? 'bottom-nav__item active' : 'bottom-nav__item'}>
            <i className="fa-solid fa-briefcase"></i>
            <span>Exp</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects/" className={({ isActive }) => isActive ? 'bottom-nav__item active' : 'bottom-nav__item'}>
            <i className="fa-solid fa-laptop-code"></i>
            <span>Projects</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/research/" className={({ isActive }) => isActive ? 'bottom-nav__item active' : 'bottom-nav__item'}>
            <i className="fa-solid fa-flask"></i>
            <span>Research</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/cv/" className={({ isActive }) => isActive ? 'bottom-nav__item active' : 'bottom-nav__item'}>
            <i className="fa-regular fa-file-lines"></i>
            <span>CV</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNav;
