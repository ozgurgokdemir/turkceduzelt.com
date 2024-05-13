import * as React from 'react';

type State = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  clearText: () => void;
  copyText: () => Promise<void>;
  pasteText: () => Promise<void>;
  triggerImport: (ref: React.RefObject<HTMLInputElement>) => void;
  importText: (event: React.ChangeEvent<HTMLInputElement>) => void;
  downloadText: () => void;
};

const EditorContext = React.createContext<State | null>(null);

export default EditorContext;
