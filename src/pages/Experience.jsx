import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Link } from 'react-router-dom';
import rawContent from '../../_pages/experience.md?raw';

const stripFrontmatter = (md) => {
  return md.replace(/^---[\s\S]+?---/, '');
};

const Experience = () => {
  const content = stripFrontmatter(rawContent);
  return (
    <div>
      <h1 className="page__title">Experience</h1>
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
    </div>
  );
};

export default Experience;
