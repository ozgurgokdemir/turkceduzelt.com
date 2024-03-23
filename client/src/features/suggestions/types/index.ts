export type Spelling = {
  correct: string;
  incorrect: string;
};

export type SuggestionType = {
  words: Spelling[];
  sentences: Spelling[];
};
