import React, {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // import styles

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
}

const toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"],
  ["link", "image", "video", "formula"],

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
  [{ script: "sub" }, { script: "super" }], // superscript/subscript
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ direction: "rtl" }], // text direction

  [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],

  ["clean"], // remove formatting button
];

const modules = {
  toolbar: toolbarOptions,
};

const RichTextEditor: React.ForwardRefRenderFunction<
  ReactQuill,
  RichTextEditorProps
> = ({ value, onChange, onBlur }, ref) => {
  const quillRef = useRef<ReactQuill>(null);

  useImperativeHandle(ref, () => quillRef.current!);

  useEffect(() => {
    if (quillRef.current) {
      const editor = quillRef.current.getEditor();
      // Set default direction to RTL
      editor.format("direction", "rtl");
      editor.format("align", "right");
      editor.root.addEventListener("blur", handleBlur);
    }

    return () => {
      if (quillRef.current) {
        const editor = quillRef.current.getEditor();
        editor.root.removeEventListener("blur", handleBlur);
      }
    };
  }, []);

  const handleBlur = () => {
    if (onBlur) {
      onBlur();
    }
  };

  return (
    <ReactQuill
      ref={quillRef}
      className="[&_.ql-editor]:min-h-96"
      value={value}
      onChange={onChange}
      modules={modules}
      theme="snow"
      style={{
        direction: "ltr",
        background: "white",
      }}
    />
  );
};

export default forwardRef(RichTextEditor);
