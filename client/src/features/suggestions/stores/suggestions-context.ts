import type { SuggestionType } from '@/features/suggestions';
import * as React from 'react';

type State = {
  suggestions: SuggestionType | null;
  setSuggestions: React.Dispatch<React.SetStateAction<SuggestionType | null>>;
};

const SuggestionsContext = React.createContext<State | null>(null);

export default SuggestionsContext;
