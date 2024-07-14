import React from "react";
import MarkdownIt from "markdown-it";

interface MarkdownProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownProps> = ({ content }) => {
  //
  const mdParser = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
  });
  //
  return <div dangerouslySetInnerHTML={{ __html: mdParser.render(content) }} />;
};

export default MarkdownRenderer;
