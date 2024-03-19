import * as React from 'react';

type State = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
};

const EditorContext = React.createContext<State | null>(null);

export default EditorContext;
