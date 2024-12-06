import { Editor } from '@tiptap/react';

export const toggleBold = (editor: Editor) => editor.chain().focus().toggleBold().run();
export const toggleItalic = (editor: Editor) => editor.chain().focus().toggleItalic().run();
export const toggleList = (editor: Editor) => editor.chain().focus().toggleBulletList().run();
export const toggleLink = (editor: Editor) => {
  const previousUrl = editor.getAttributes('link').href;
  const url = window.prompt('URL', previousUrl);

  if (url === null) {
    return;
  }

  if (url === '') {
    editor.chain().focus().extendMarkRange('link').unsetLink().run();
    return;
  }

  editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
};

export const insertImage = (editor: Editor) => {
  const url = window.prompt('Image URL');

  if (url) {
    editor.chain().focus().setImage({ src: url }).run();
  }
};

export const insertTable = (editor: Editor) => {
  editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run();
};

export const undo = (editor: Editor) => editor.chain().focus().undo().run();
export const redo = (editor: Editor) => editor.chain().focus().redo().run();