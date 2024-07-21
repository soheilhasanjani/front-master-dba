import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { IRANYekanX } from "@/theme/fonts";

interface TinymceReactProps {
  value?: string;
  onChange: (value: string) => void;
}

const TinymceReact: React.FC<TinymceReactProps> = ({ value, onChange }) => {
  //
  return (
    <>
      <Editor
        apiKey="yurj267z31lh8o051op519uv6dckf4igjwnups2fix5zq0st"
        onEditorChange={onChange}
        value={value}
        init={{
          height: 600,
          menubar: true,
          directionality: "rtl",
          // language: 'fa',
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "imagetools",
            "charmap",
            "fontfamily",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "codesample",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "preview",
            "help",
            "wordcount",
            "emoticons",
            "quickbars",
            "pagebreak",
            "nonbreaking",
            "searchreplace ",
            "directionality",
            "textcolor colorpicker",
            "print",
            "textpattern",
          ],
          toolbar:
            "undo redo | bold italic underline strikethrough |formats blocks fontsize fontfamily|" +
            "alignleft aligncenter alignright justify alignjustify  " +
            "pagebreak nonbreaking searchreplace| bullist numlist outdent indent | " +
            "removeformat forecolor| codesample |table image media link emoticons |preview fullscreen " +
            "styleselect ltr rtl forecolor backcolor print ",

          quickbars_image_toolbar:
            "alignleft aligncenter alignright rotateleft rotateright | flipv fliph | editimage imageoptions ",
          quickbars_selection_toolbar: "bold italic | quicklink blockquote",
          quickbars_insert_toolbar: "quickimage quicktable | hr pagebreak",
          advlist_bullet_styles: "square",
          a11y_advanced_options: true,
          image_title: true,
          codesample_global_prismjs: true,
          font_family_formats: "BYekan=IranSanse;Arial=arial",
          forced_root_block: "div",
          images_file_types: "jpg,png,jpeg,sql,pdf,docx",
          file_picker_types: "file image media",
          extended_valid_elements:
            "img[class=zoom-img-class|style|src|border=0|alt|title|hspace|vspace|width|height|align|onmouseover|onmouseout|name]",
          //   images_upload_handler: handleImageUpload,
          codesample_languages: [
            { text: "Python", value: "python" },
            { text: "HTML/XML", value: "markup" },
            { text: "CSS", value: "css" },
            { text: "JavaScript", value: "javascript" },
            { text: "C#", value: "csharp" },
            { text: "SQL", value: "sql" },
          ],
          textpattern_patterns: [{ start: "`", replacement: "'" }],
          content_style: `body { font-family: ${IRANYekanX.style.fontFamily}; font-size:14px }`,
        }}
      />
    </>
  );
};

export default TinymceReact;
