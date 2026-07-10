import React from 'react';
import { Link } from 'react-router-dom';
import { parseMarkdown } from '../utils/markdown';

const rawFiles = import.meta.glob('../../_portfolio/*.md', { eager: true, query: '?raw', import: 'default' });

const Portfolio = () => {
  const projects = Object.entries(rawFiles).map(([path, fileContent]) => {
    const slug = path.split('/').pop().replace('.md', '');
    const { data } = parseMarkdown(fileContent);
    return { slug, data };
  }).sort((a, b) => new Date(b.data.date || 0) - new Date(a.data.date || 0));

  return (
    <div>
      <h1 className="page__title">Projects</h1>
      <div className="premium-grid">
        {projects.map((project, index) => (
          <article key={index} className="premium-card">
            <h2 className="archive__item-title">
              <Link to={`/projects/${project.slug}`}>{project.data.title}</Link>
            </h2>
            <p className="archive__item-excerpt">{project.data.excerpt}</p>
            <p>
              <Link to={`/projects/${project.slug}`} className="premium-btn">Read Case Study</Link>
            </p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
