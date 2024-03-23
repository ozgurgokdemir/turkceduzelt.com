import * as React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { EditorProvider } from '@/features/editor';
import { SuggestionsProvider } from '@/features/suggestions';

const queryClient = new QueryClient();

type AppProviderProps = {
  children: React.ReactNode;
};

function AppProvider({ children }: AppProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <EditorProvider>
        <SuggestionsProvider>{children}</SuggestionsProvider>
      </EditorProvider>
    </QueryClientProvider>
  );
}

export default AppProvider;
