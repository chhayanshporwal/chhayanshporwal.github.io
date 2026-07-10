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
        {projects.map((project) => (
          <Link 
            key={project.slug} 
            to={`/projects/${project.slug}`} 
            style={{ textDecoration: 'none', color: 'inherit', display: 'flex' }}
          >
            <article className="premium-card" style={{ flex: 1 }}>
              <h2>
                {project.data.title}
              </h2>
              <p className="archive__item-excerpt">{project.data.excerpt}</p>
              <div className="premium-btn" style={{ marginTop: 'auto', display: 'inline-block' }}>Read More</div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
