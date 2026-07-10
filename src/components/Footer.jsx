import React from 'react';

const Footer = () => {
  return (
    <div className="page__footer">
      <footer>
        <div className="page__footer-follow">
          <ul className="social-icons">
            <li><strong>Follow:</strong></li>
            <li><a href="https://github.com/chhayanshporwal"><i className="fab fa-github" aria-hidden="true"></i> GitHub</a></li>
          </ul>
        </div>
        <div className="page__footer-copyright">
          &copy; 2026 Chhayansh Porwal, Powered by React & Vite. (Migrated from Jekyll / AcademicPages).<br />
          Site last updated 2026-07-10
        </div>
      </footer>
    </div>
  );
};

export default Footer;
