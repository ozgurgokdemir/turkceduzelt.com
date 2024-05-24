import * as React from 'react';

type State = {
  result: string | null;
  setResult: React.Dispatch<React.SetStateAction<string | null>>;
  clearResult: () => void;
  wording: string;
  setWording: React.Dispatch<React.SetStateAction<string>>;
};

const ParaphraserContext = React.createContext<State | null>(null);

export default ParaphraserContext;
