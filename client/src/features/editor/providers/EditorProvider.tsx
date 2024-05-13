import * as React from 'react';
import { EditorContext } from '@/features/editor';

type EditorProviderProps = {
  children: React.ReactNode;
};

function EditorProvider({ children }: EditorProviderProps) {
  const [text, setText] = React.useState('');

  function clearText() {
    setText('');
  }

  async function copyText() {
    await navigator.clipboard.writeText(text);
  }

  async function pasteText() {
    const text = await navigator.clipboard.readText();
    setText(text);
  }

  function triggerImport(ref: React.RefObject<HTMLInputElement>) {
    ref.current?.click();
  }

  function importText(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file || !file.name.endsWith('.txt')) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      const text = event.target?.result as string;
      setText(text);
    };

    reader.readAsText(file);
  }

  function downloadText() {
    const blob = new Blob([text], {
      type: 'text/plain',
    });

    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'türkçedüzelt.txt';

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  return (
    <EditorContext.Provider
      value={{
        text,
        setText,
        clearText,
        copyText,
        pasteText,
        triggerImport,
        importText,
        downloadText,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
}

export default EditorProvider;
