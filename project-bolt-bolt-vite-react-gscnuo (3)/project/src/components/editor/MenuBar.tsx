import React from 'react';
import { useCurrentEditor } from '@tiptap/react';

export function MenuBar() {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }

  return (
    <div className="button-group">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'is-active' : ''}
      >
        Bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'is-active' : ''}
      >
        Italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={editor.isActive('strike') ? 'is-active' : ''}
      >
        Strike
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={editor.isActive('code') ? 'is-active' : ''}
      >
        Code
      </button>
      <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
        Clear marks
      </button>
      <button onClick={() => editor.chain().focus().clearNodes().run()}>
        Clear nodes
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive('paragraph') ? 'is-active' : ''}
      >
        Paragraph
      </button>
      {[1, 2, 3, 4, 5, 6].map((level) => (
        <button
          key={level}
          onClick={() => editor.chain().focus().toggleHeading({ level }).run()}
          className={editor.isActive('heading', { level }) ? 'is-active' : ''}
        >
          H{level}
        </button>
      ))}
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'is-active' : ''}
      >
        Bullet List
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'is-active' : ''}
      >
        Ordered List
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive('codeBlock') ? 'is-active' : ''}
      >
        Code Block
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive('blockquote') ? 'is-active' : ''}
      >
        Blockquote
      </button>
      <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        Horizontal Rule
      </button>
      <button onClick={() => editor.chain().focus().setHardBreak().run()}>
        Hard Break
      </button>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
      >
        Undo
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
      >
        Redo
      </button>
      <button
        onClick={() => editor.chain().focus().setColor('#958DF1').run()}
        className={editor.isActive('textStyle', { color: '#958DF1' }) ? 'is-active' : ''}
      >
        Purple
      </button>
    </div>
  );
}