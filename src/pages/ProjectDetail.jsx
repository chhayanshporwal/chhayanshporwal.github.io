import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { parseMarkdown } from '../utils/markdown';

const rawFiles = import.meta.glob('../../_portfolio/*.md', { eager: true, query: '?raw', import: 'default' });

const ProjectDetail = () => {
  const { slug } = useParams();
  const [content, setContent] = useState('');
  const [meta, setMeta] = useState(null);

  useEffect(() => {
    const fileKey = Object.keys(rawFiles).find(key => key.includes(`/${slug}.md`));
    if (fileKey) {
      const parsed = parseMarkdown(rawFiles[fileKey]);
      setContent(parsed.content);
      setMeta(parsed.data);
    }
  }, [slug]);

  useEffect(() => {
    if (window.mermaid) {
      window.mermaid.run({ querySelector: '.language-mermaid' }).catch(e => console.error(e));
    }
  }, [content]);

  if (!meta) return <div>Loading...</div>;

  return (
    <div>
      <p>
        <Link to="/projects/">← Back to Projects</Link>
      </p>
      <h1 className="page__title">{meta.title}</h1>
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

export default ProjectDetail;
