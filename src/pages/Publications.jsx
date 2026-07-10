import React from 'react';
import { Link } from 'react-router-dom';
import { parseMarkdown } from '../utils/markdown';

const rawFiles = import.meta.glob('../../_publications/*.md', { eager: true, query: '?raw', import: 'default' });

const Publications = () => {
  const publications = Object.entries(rawFiles).map(([path, fileContent]) => {
    const slug = path.split('/').pop().replace('.md', '');
    const { data } = parseMarkdown(fileContent);
    return { slug, data };
  }).sort((a, b) => new Date(b.data.date || 0) - new Date(a.data.date || 0));

  return (
    <div>
      <h1 className="page__title">Research</h1>
      <div className="premium-grid">
        {publications.map((pub) => (
          <Link 
            key={pub.slug} 
            to={`/research/${pub.slug}`} 
            style={{ textDecoration: 'none', color: 'inherit', display: 'flex' }}
          >
            <article className="premium-card" style={{ flex: 1 }}>
              <h2 className="archive__item-title">
                {pub.data.title}
              </h2>
              <p className="archive__item-excerpt">{pub.data.excerpt}</p>
              <div className="premium-btn" style={{ marginTop: 'auto', display: 'inline-block' }}>Read More</div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Publications;
