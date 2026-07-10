import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar sticky">
      <div itemScope itemType="http://schema.org/Person">
        <div className="author__avatar">
          <img src="/assets/images/profile.png" className="author__avatar" alt="Chhayansh Porwal" fetchpriority="high" />
        </div>

        <div className="author__content">
          <h3 className="author__name">Chhayansh Porwal</h3>
          <p className="author__bio">Computer Science Engineer bridging native Android development, AI/CV pipelines, and full-stack solutions. Currently preparing for high-tier technical roles in the Japanese tech market.</p>
        </div>

        <div className="author__urls-wrapper">
          <button className="btn btn--inverse">Follow</button>
          <ul className="author__urls social-icons">
            <li className="author__desktop"><i className="fas fa-fw fa-location-dot icon-pad-right" aria-hidden="true"></i>Kota, Rajasthan</li>
            <li className="author__desktop"><i className="fas fa-fw fa-building-columns icon-pad-right" aria-hidden="true"></i>Rajasthan Technical University (B.Tech CSE)</li>
            <li><a href="mailto:chayansh@gmail.com"><i className="fas fa-fw fa-envelope icon-pad-right" aria-hidden="true"></i>Email</a></li>
            <li><a href="https://github.com/chhayanshporwal"><i className="fab fa-fw fa-github icon-pad-right" aria-hidden="true"></i>GitHub</a></li>
            <li><a href="https://kaggle.com/chhayanshporwal"><i className="fab fa-fw fa-kaggle icon-pad-right" aria-hidden="true"></i>Kaggle</a></li>
            <li><a href="https://www.linkedin.com/in/chhayansh-porwal"><i className="fab fa-fw fa-linkedin icon-pad-right" aria-hidden="true"></i>LinkedIn</a></li>
            <li><a href="https://twitter.com/ChhayanshPorwal"><i className="fab fa-fw fa-x-twitter icon-pad-right" aria-hidden="true"></i>X (formerly Twitter)</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
