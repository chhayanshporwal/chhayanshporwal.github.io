import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Masthead = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="masthead">
      <div className="masthead__inner-wrap">
        <div className="masthead__menu">
          <nav id="site-nav" className="greedy-nav">
            <NavLink className="site-title site-title--desktop" to="/" style={{fontWeight: 700}}>Chhayansh Porwal</NavLink>
            <NavLink className="site-title site-title--mobile" to="/">Chhayansh Porwal</NavLink>
            <a id="theme-toggle-mobile" className="theme-toggle-mobile" role="button" aria-labelledby="theme-icon" onClick={toggleTheme}>
              <i className="fa-solid fa-sun" aria-hidden="true" title="toggle theme"></i>
            </a>
            <ul className="visible-links">
              <li className="masthead__menu-item">
                <NavLink to="/">About & Skills</NavLink>
              </li>
              <li className="masthead__menu-item">
                <NavLink to="/experience/">Experience</NavLink>
              </li>
              <li className="masthead__menu-item">
                <NavLink to="/projects/">Projects</NavLink>
              </li>
              <li className="masthead__menu-item">
                <NavLink to="/research/">Research</NavLink>
              </li>
              <li className="masthead__menu-item">
                <NavLink to="/cv/">CV</NavLink>
              </li>
              <li className="masthead__menu-item">
                <NavLink to="/year-archive/">Insights (Blog)</NavLink>
              </li>
              <li id="theme-toggle" className="masthead__menu-item persist tail">
                <a role="button" aria-labelledby="theme-icon" onClick={toggleTheme}>
                  <i id="theme-icon" className="fa-solid fa-sun" aria-hidden="true" title="toggle theme"></i>
                </a>
              </li>
              <li className="masthead__menu-item mobile-only-links">
                <button className="follow-toggle" type="button">Follow</button>
                <div className="follow-links">
                  <a href="mailto:chayansh@gmail.com" title="Email"><i className="fas fa-fw fa-envelope"></i></a>
                  <a href="https://github.com/chhayanshporwal" title="GitHub"><i className="fab fa-fw fa-github"></i></a>
                  <a href="https://kaggle.com/chhayanshporwal" title="Kaggle"><i className="fab fa-fw fa-kaggle"></i></a>
                  <a href="https://www.linkedin.com/in/chhayansh-porwal" title="LinkedIn"><i className="fab fa-fw fa-linkedin"></i></a>
                  <a href="https://twitter.com/ChhayanshPorwal" title="X"><i className="fab fa-fw fa-x-twitter"></i></a>
                </div>
              </li>
            </ul>
            <ul className="hidden-links hidden"></ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Masthead;
