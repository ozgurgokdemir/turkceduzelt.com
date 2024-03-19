import * as React from 'react';
import { EditorContext } from '@/features/editor';

function useEditor() {
  const editor = React.useContext(EditorContext);

  if (!editor) {
    throw new Error('useEditor must be used within a EditorProvider');
  }

  return editor;
}

export default useEditor;
