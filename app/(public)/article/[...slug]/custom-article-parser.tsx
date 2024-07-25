import React from "react";
import MarkdownIt from "markdown-it";
import "highlight.js/styles/atom-one-light.css";

interface CustomArticleParserProps {
  content: string;
}

export const CustomArticleParser: React.FC<CustomArticleParserProps> = ({
  content,
}) => {
  const mdParser = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
  });

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: mdParser.render(content) }} />
    </>
  );
};
