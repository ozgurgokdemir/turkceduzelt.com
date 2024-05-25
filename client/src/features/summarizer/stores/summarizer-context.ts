import * as React from 'react';

type State = {
  result: string | null;
  setResult: React.Dispatch<React.SetStateAction<string | null>>;
  clearResult: () => void;
  length: number;
  setLength: React.Dispatch<React.SetStateAction<number>>;
};

const SummarizerContext = React.createContext<State | null>(null);

export default SummarizerContext;
