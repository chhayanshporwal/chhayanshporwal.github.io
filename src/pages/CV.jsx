import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Link } from 'react-router-dom';
import { parseMarkdown } from '../utils/markdown';
import rawContent from '../../_pages/cv.md?raw';

const portfolioFiles = import.meta.glob('../../_portfolio/*.md', { eager: true, query: '?raw', import: 'default' });
const pubFiles = import.meta.glob('../../_publications/*.md', { eager: true, query: '?raw', import: 'default' });

const CV = () => {
  const { content } = parseMarkdown(rawContent);

  const portfolio = Object.entries(portfolioFiles).map(([path, content]) => {
    const slug = path.split('/').pop().replace('.md', '');
    return { slug, ...parseMarkdown(content) };
  }).sort((a, b) => new Date(b.data.date || 0) - new Date(a.data.date || 0));

  const publications = Object.entries(pubFiles).map(([path, content]) => {
    const slug = path.split('/').pop().replace('.md', '');
    return { slug, ...parseMarkdown(content) };
  }).sort((a, b) => new Date(b.data.date || 0) - new Date(a.data.date || 0));

  return (
    <div>
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]} 
        rehypePlugins={[rehypeRaw]}
        components={{
          a: ({node, ...props}) => {
            if (props.href && props.href.startsWith('/')) {
              return <Link to={props.href}>{props.children}</Link>;
            }
            return <a {...props} target="_blank" rel="noopener noreferrer" />;
          }
        }}
      >
        {content}
      </ReactMarkdown>

      <h2>Research</h2>
      <ul>
        {publications.map((item, i) => (
          <li key={i}>
            <strong><Link to={`/research/${item.slug || ''}`}>{item.data.title}</Link></strong>
          </li>
        ))}
      </ul>

      <h2>Projects</h2>
      <ul>
        {portfolio.map((item, i) => (
          <li key={i}>
            <strong><Link to={`/projects/${item.slug || ''}`}>{item.data.title}</Link></strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CV;
