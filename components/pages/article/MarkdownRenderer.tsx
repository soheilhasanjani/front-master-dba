import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import rehypeRaw from "rehype-raw";

interface MarkdownProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownProps> = ({ content }) => {
  const getClassLanguage = (classNames: string): string | null => {
    const match = classNames.match(/language-(\w+)/);
    return match ? match[1] : null;
  };
  const renderers = {
    // Custom renderer to detect language from class names
    pre: (props: any) => {
      const { children } = props;
      if (children && children.props) {
        const language = getClassLanguage(props.className);
        if (language) {
          return (
            <SyntaxHighlighter
              style={vscDarkPlus}
              language={language}
              children={children.props.children}
            />
          );
        }
      }

      return <pre {...props} />;
    },
    blockquote: (props: any) => {
      return (
        <blockquote className="my-4 border-s-8 border-[#ffe564] bg-[rgba(255,229,100,0.3)] p-[5px_8px_5px_30px] text-[#333]">
          {props.children}
        </blockquote>
      );
    },
  };

  return (
    <div>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        components={renderers}
        children={content}
      />
    </div>
  );
};

export default MarkdownRenderer;
