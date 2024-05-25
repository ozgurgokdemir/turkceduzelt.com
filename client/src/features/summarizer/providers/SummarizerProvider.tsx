import * as React from 'react';
import { SummarizerContext } from '@/features/summarizer';

type SummarizerProviderProps = {
  children: React.ReactNode;
};

function SummarizerProvider({ children }: SummarizerProviderProps) {
  const [result, setResult] = React.useState<string | null>(null);

  const [length, setLength] = React.useState(2);

  const clearResult = React.useCallback(() => {
    setResult(null);
  }, []);

  return (
    <SummarizerContext.Provider
      value={{ result, setResult, clearResult, length, setLength }}
    >
      {children}
    </SummarizerContext.Provider>
  );
}

export default SummarizerProvider;
