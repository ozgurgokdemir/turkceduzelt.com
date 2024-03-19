import * as React from 'react';
import { EditorContext } from '@/features/editor';

type EditorProviderProps = {
  children: React.ReactNode;
};

function EditorProvider({ children }: EditorProviderProps) {
  const [text, setText] = React.useState('');

  return (
    <EditorContext.Provider value={{ text, setText }}>
      {children}
    </EditorContext.Provider>
  );
}

export default EditorProvider;
