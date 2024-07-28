import React from "react";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "highlight.js/styles/atom-one-light.css";
import "react-markdown-editor-lite/lib/index.css";

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const mdParser = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
});

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({ value, onChange }) => {
  //
  const handleEditorChange = ({ text }: { text: string }) => {
    onChange(text);
  };
  //
  function renderHTML(text: string) {
    return mdParser.render(text);
  }
  //
  return (
    <MdEditor
      style={{
        height: "200px",
      }}
      value={value}
      onChange={handleEditorChange}
      renderHTML={renderHTML}
      custom-html-style
    />
  );
};

export default MarkdownEditor;
