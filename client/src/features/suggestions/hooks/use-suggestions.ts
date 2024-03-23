import * as React from 'react';
import { useMutation } from '@tanstack/react-query';
import {
  SuggestionsContext,
  postSuggestions,
  type SuggestionType,
} from '@/features/suggestions';

type Data = {
  cumle: {
    doğru: string;
    yanlış: string;
  }[];
  kelimeler: {
    doğru: string;
    yanlış: string;
  }[];
};

function formatSuggestions(data: unknown) {
  const words: SuggestionType['words'] = [];
  const sentences: SuggestionType['sentences'] = [];

  if (Array.isArray((data as Data).kelimeler)) {
    (data as Data).kelimeler.forEach((kelime) => {
      words.push({
        correct: kelime.doğru,
        incorrect: kelime.yanlış,
      });
    });
  }
  if (Array.isArray((data as Data).cumle)) {
    (data as Data).cumle.forEach((cumle) => {
      sentences.push({
        correct: cumle.doğru,
        incorrect: cumle.yanlış,
      });
    });
  }

  return { words, sentences };
}

function useSuggestions() {
  const suggestions = React.useContext(SuggestionsContext);

  if (!suggestions) {
    throw new Error('useSuggestions must be used within a SuggestionsProvider');
  }

  const mutation = useMutation({
    mutationFn: postSuggestions,
    onSuccess: (data: unknown) => {
      const formattedSuggestions = formatSuggestions(data);
      suggestions.setSuggestions(formattedSuggestions);
    },
  });

  return { ...suggestions, mutation };
}

export default useSuggestions;
