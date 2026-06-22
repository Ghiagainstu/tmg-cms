"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import { useCallback, useEffect } from "react";

interface RichEditorProps {
  content: string;
  onChange: (html: string) => void;
}

function ToolbarButton({ onClick, active, children, title }: { onClick: () => void; active?: boolean; children: React.ReactNode; title: string }) {
  return (
    <button type="button" onClick={onClick} title={title}
      className={"px-2 py-1 text-xs rounded border " + (active ? "bg-blue-100 border-blue-300 text-blue-700" : "bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100")}>
      {children}
    </button>
  );
}

export default function RichEditor({ content, onChange }: RichEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({ heading: { levels: [2, 3] } }),
      Image,
      Link.configure({ openOnClick: false }),
    ],
    content: content || "",
    onUpdate: ({ editor }) => { onChange(editor.getHTML()); },
    editorProps: { attributes: { class: "prose prose-sm max-w-none p-4 min-h-[300px] focus:outline-none" } },
  });

  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content || "", { emitUpdate: false });
    }
  }, [content]);

  const addImage = useCallback(() => {
    if (!editor) return;
    const url = prompt("Image URL:");
    if (url) editor.chain().focus().setImage({ src: url }).run();
  }, [editor]);

  const addLink = useCallback(() => {
    if (!editor) return;
    const url = prompt("Link URL:");
    if (url) editor.chain().focus().setLink({ href: url }).run();
  }, [editor]);

  if (!editor) return <div className="border rounded min-h-[300px] p-4 text-gray-400">Loading editor...</div>;

  return (
    <div className="border rounded">
      <div className="flex flex-wrap gap-1 p-2 border-b bg-gray-50">
        <ToolbarButton onClick={() => editor.chain().focus().toggleBold().run()} active={editor.isActive("bold")} title="Bold">B</ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleItalic().run()} active={editor.isActive("italic")} title="Italic"><em>I</em></ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} active={editor.isActive("heading", { level: 2 })} title="H2">H2</ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} active={editor.isActive("heading", { level: 3 })} title="H3">H3</ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleBulletList().run()} active={editor.isActive("bulletList")} title="Bullet List">• List</ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleOrderedList().run()} active={editor.isActive("orderedList")} title="Ordered List">1. List</ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleBlockquote().run()} active={editor.isActive("blockquote")} title="Quote">&ldquo;</ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleCodeBlock().run()} active={editor.isActive("codeBlock")} title="Code">&lt;/&gt;</ToolbarButton>
        <ToolbarButton onClick={addLink} active={editor.isActive("link")} title="Link">Link</ToolbarButton>
        <ToolbarButton onClick={addImage} title="Image">Img</ToolbarButton>
      </div>
      <EditorContent editor={editor} />
    </div>
  );
}

