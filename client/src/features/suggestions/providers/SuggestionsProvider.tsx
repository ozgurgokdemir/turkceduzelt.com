import * as React from 'react';
import {
  SuggestionsContext,
  type SuggestionType,
} from '@/features/suggestions';

type SuggestionsProviderProps = {
  children: React.ReactNode;
};

function SuggestionsProvider({ children }: SuggestionsProviderProps) {
  const [suggestions, setSuggestions] = React.useState<SuggestionType | null>(
    null,
  );

  return (
    <SuggestionsContext.Provider value={{ suggestions, setSuggestions }}>
      {children}
    </SuggestionsContext.Provider>
  );
}

export default SuggestionsProvider;
