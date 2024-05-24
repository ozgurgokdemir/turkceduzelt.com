import * as React from 'react';
import { ParaphraserContext } from '@/features/paraphraser';

type ParaphraserProviderProps = {
  children: React.ReactNode;
};

function ParaphraserProvider({ children }: ParaphraserProviderProps) {
  const [result, setResult] = React.useState<string | null>(null);

  const [wording, setWording] = React.useState<string>('neutral');

  const clearResult = React.useCallback(() => {
    setResult(null);
  }, []);

  return (
    <ParaphraserContext.Provider
      value={{ result, setResult, clearResult, wording, setWording }}
    >
      {children}
    </ParaphraserContext.Provider>
  );
}

export default ParaphraserProvider;
