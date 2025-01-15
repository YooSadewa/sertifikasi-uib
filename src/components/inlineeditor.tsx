import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import type { Editor as TinyMCEEditor } from "tinymce";

interface InlineEditorProps {
  initialValue?: string;
  onSave?: (content: string) => void;
  apiKey?: string;
  height?: number;
  menubar?: boolean;
}

const InlineEditor: React.FC<InlineEditorProps> = ({
  initialValue = "",
  onSave,
  apiKey = "ftxlybb0speqss8rsyqql221sjpyfvnu8bh7qlzqr9hq1reb",
  height = 300,
  menubar = false,
}) => {
  const editorRef = useRef<TinyMCEEditor | null>(null);

  const handleEditorChange = (content: string) => {
    if (onSave) {
      onSave(content);
    }
  };

  return (
    <Editor
      apiKey={apiKey}
      onInit={(_, editor) => {
        editorRef.current = editor;
      }}
      initialValue={initialValue}
      init={{
        height,
        menubar,
        inline: true,
        plugins: [
          "advlist",
          "autolink",
          "lists",
          "link",
          "image",
          "charmap",
          "preview",
          "anchor",
          "searchreplace",
          "visualblocks",
          "code",
          "fullscreen",
          "insertdatetime",
          "media",
          "table",
          "code",
          "help",
          "wordcount",
        ],
        toolbar:
          "undo redo | blocks | " +
          "bold italic forecolor | alignleft aligncenter " +
          "alignright alignjustify | bullist numlist outdent indent | " +
          "removeformat | help",
        content_style:
          "body { font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif; font-size: 14px; }",
      }}
      onEditorChange={handleEditorChange}
    />
  );
};

export default InlineEditor;
