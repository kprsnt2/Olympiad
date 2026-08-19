import React, { useEffect, useRef } from 'react';
import katex from 'katex';

interface LatexRendererProps {
  content: string;
  className?: string;
  block?: boolean;
}

export const LatexRenderer: React.FC<LatexRendererProps> = ({ content, className = '', block = false }) => {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    try {
      katex.render(content, containerRef.current, {
        throwOnError: false,
        displayMode: block,
        output: 'htmlAndMathml'
      });
    } catch (e) {
      if (containerRef.current) {
        containerRef.current.innerText = content;
      }
    }
  }, [content, block]);

  return <span ref={containerRef} className={`inline-block ${className}`} />;
};

// Helper component that parses text with inline $...$ or \\( ... \\) LaTeX expressions
export const RichMathText: React.FC<{ text: string; className?: string }> = ({ text, className = '' }) => {
  if (!text) return null;

  // Split by $...$
  const parts = text.split(/(\$[^$]+\$)/g);

  return (
    <span className={className}>
      {parts.map((part, index) => {
        if (part.startsWith('$') && part.endsWith('$') && part.length > 2) {
          const formula = part.slice(1, -1);
          return <LatexRenderer key={index} content={formula} className="mx-1 text-indigo-300 font-semibold" />;
        }
        return <span key={index}>{part}</span>;
      })}
    </span>
  );
};
