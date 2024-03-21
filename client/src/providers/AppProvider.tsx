import * as React from 'react';
import { EditorProvider } from '@/features/editor';

type AppProviderProps = {
  children: React.ReactNode;
};

function AppProvider({ children }: AppProviderProps) {
  return <EditorProvider>{children}</EditorProvider>;
}

export default AppProvider;
