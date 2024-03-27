import * as React from 'react';
import { Tabs } from '@/components/ui';
import { Suggestion, type SuggestionType } from '@/features/suggestions';

type SuggestionTabsProps = React.ComponentPropsWithoutRef<typeof Tabs> &
  SuggestionType;

function SuggestionTabs({ words, sentences, ...props }: SuggestionTabsProps) {
  return (
    <Tabs defaultValue="all" {...props}>
      <Tabs.List className="w-full">
        <Tabs.Trigger value="all" className="w-full">
          Hepsi
        </Tabs.Trigger>
        <Tabs.Trigger value="words" className="w-full">
          Kelime
        </Tabs.Trigger>
        <Tabs.Trigger value="sentences" className="w-full">
          Cümle
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="all" className="space-y-4">
        {words.map((word, index) => (
          <Suggestion
            key={index}
            variant="word"
            showTag={true}
            {...word}
            className="w-full"
          />
        ))}
        {sentences.map((sentence, index) => (
          <Suggestion
            key={index}
            variant="sentence"
            showTag={true}
            {...sentence}
            className="w-full"
          />
        ))}
      </Tabs.Content>
      <Tabs.Content value="words" className="space-y-4">
        {words.map((word, index) => (
          <Suggestion
            key={index}
            variant="word"
            showTag={false}
            {...word}
            className="w-full"
          />
        ))}
      </Tabs.Content>
      <Tabs.Content value="sentences" className="space-y-4">
        {sentences.map((sentence, index) => (
          <Suggestion
            key={index}
            variant="sentence"
            showTag={false}
            {...sentence}
            className="w-full"
          />
        ))}
      </Tabs.Content>
    </Tabs>
  );
}

export default SuggestionTabs;
