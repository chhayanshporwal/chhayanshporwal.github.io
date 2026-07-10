import React from 'react';
import { useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const sidebarClass = `sidebar sticky ${!isHomePage ? 'sidebar--hidden-mobile' : ''}`;

  return (
    <div className={sidebarClass}>
      <div itemScope itemType="http://schema.org/Person">
        <div className="author__avatar">
          <img src="/assets/images/profile.png" className="author__avatar" alt="Chhayansh Porwal" fetchPriority="high" />
        </div>

        <div className="author__content">
          <h3 className="author__name">Chhayansh Porwal</h3>
          <p className="author__bio">Computer Science Engineer bridging native Android architecture, AI/Computer Vision pipelines, and highly scalable full-stack systems. Passionate about building high-performance, production-ready software.</p>
        </div>

        <div className="author__urls-wrapper">
          <button className="btn btn--inverse">Follow</button>
          <ul className="author__urls social-icons">
            <li className="author__desktop"><i className="fas fa-fw fa-location-dot" aria-hidden="true"></i><span>Kota, Rajasthan</span></li>
            <li className="author__desktop"><i className="fas fa-fw fa-building-columns" aria-hidden="true"></i><span>Rajasthan Technical University (B.Tech CSE)</span></li>
            <li><a href="mailto:chayansh@gmail.com"><i className="fas fa-fw fa-envelope" aria-hidden="true"></i><span>Email</span></a></li>
            <li><a href="https://github.com/chhayanshporwal"><i className="fab fa-fw fa-github" aria-hidden="true"></i><span>GitHub</span></a></li>
            <li><a href="https://kaggle.com/chhayanshporwal"><i className="fab fa-fw fa-kaggle" aria-hidden="true"></i><span>Kaggle</span></a></li>
            <li><a href="https://www.linkedin.com/in/chhayansh-porwal"><i className="fab fa-fw fa-linkedin" aria-hidden="true"></i><span>LinkedIn</span></a></li>
            <li><a href="https://twitter.com/ChhayanshPorwal"><i className="fab fa-fw fa-x-twitter" aria-hidden="true"></i><span>X (formerly Twitter)</span></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
