import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import sanitizeHtml from "sanitize-html";

export default function RichTextEditor({ value, setStateCallback }) {
  const handleEditorChange = (content) => {
    const sanitizedHtml = sanitizeHtml(content, {
      allowedTags: false,
      allowedAttributes: false,
    });
    setStateCallback(sanitizedHtml);
  };

  return (
    <section style={{ margin: 15 }}>
      <Editor
        {...{
          apiKey: process.env.REACT_APP_TINY_MCE_KEY,
          initialValue: value,
          init: {
            height: 300,
            menubar: false,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount",
            ],
            toolbar:
              "undo redo | formatselect | bold italic backcolor | \
          alignleft aligncenter alignright alignjustify | \
          bullist numlist outdent indent | removeformat | help",
          },
          onEditorChange: handleEditorChange,
        }}
      />
    </section>
  );
}
