import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import sanitizeHtml from "sanitize-html";

export default function QuillEditor({ value, setStateCallback }) {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "font",
    "syntax",
  ];

  const handleChange = (value, delta, source, editor) => {
    const sanitizedHtml = sanitizeHtml(value);

    setStateCallback(sanitizedHtml);
  };

  return (
    <ReactQuill
      {...{
        value,
        onChange: handleChange,
        theme: "snow",
        modules,
        formats,
        placeholder: "Start typing your article...",
        style: { height: 250, margin: "20px 0 70px" },
      }}
    />
  );
}
