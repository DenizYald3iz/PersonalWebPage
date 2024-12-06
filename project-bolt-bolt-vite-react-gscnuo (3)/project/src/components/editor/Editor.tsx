import React from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import { EditorProps } from '../../types/editor';
import { getEditorExtensions } from './extensions';
import { MenuBar } from './MenuBar';


const defaultContent = `
<h2>Welcome to the Editor</h2>
<p>This is a feature-rich text editor with support for:</p>
<ul>
  <li>Rich text formatting</li>
  <li>Multiple heading levels</li>
  <li>Code blocks with syntax highlighting</li>
  <li>And much more!</li>
</ul>
`;

export function Editor({ showPreview, isDarkMode, contentType }: EditorProps) {
  const editor = useEditor({
    extensions: getEditorExtensions(contentType),
    content: defaultContent,
    editorProps: {
      attributes: {
        class: `prose max-w-none ${isDarkMode ? 'prose-invert' : ''} focus:outline-none`,
      },
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <div className={showPreview ? 'pointer-events-none' : ''}>
      <MenuBar />
      <EditorContent editor={editor} />
    </div>
  );
}