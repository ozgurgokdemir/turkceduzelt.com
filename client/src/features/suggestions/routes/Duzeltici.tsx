import * as React from 'react';
import { Button, Tabs, Typography } from '@/components/ui';
import { Editor, useEditor } from '@/features/editor';
import { Suggestion, useSuggestions } from '@/features/suggestions';

function Duzeltici() {
  const { text } = useEditor();

  const {
    suggestions,
    setSuggestions,
    mutation: { mutate: mutateSuggestions },
  } = useSuggestions();

  React.useEffect(() => {
    if (text.trim() === '') {
      setSuggestions(null);
      return;
    }

    const timeoutId = setTimeout(() => {
      mutateSuggestions(text);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [text, setSuggestions, mutateSuggestions]);

  return (
    <main className="grid-row container grid grid-cols-[1fr_24rem] grid-rows-[auto_1fr] gap-x-12 gap-y-8 py-24">
      <header className="flex items-center justify-between">
        <Typography variant="heading-4xl" asChild>
          <h1 className="text-primary">Metin düzeltici</h1>
        </Typography>
        <Button variant="ghost">TASLAKLAR</Button>
      </header>
      <Editor className="row-start-2 h-fit" />
      <Tabs defaultValue="all" className="row-start-2">
        <Tabs.List className="w-full">
          <Tabs.Trigger value="all" className="flex-1">
            Hepsi
          </Tabs.Trigger>
          <Tabs.Trigger value="words" className="flex-1">
            Kelime
          </Tabs.Trigger>
          <Tabs.Trigger value="sentences" className="flex-1">
            Cümle
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="all" className="space-y-4">
          {suggestions?.words.map((word, index) => (
            <Suggestion
              key={index}
              variant="word"
              correct={word.correct}
              incorrect={word.incorrect}
              className="w-full"
            />
          ))}
          {suggestions?.sentences.map((sentence, index) => (
            <Suggestion
              key={index}
              variant="sentence"
              correct={sentence.correct}
              incorrect={sentence.incorrect}
              className="w-full"
            />
          ))}
        </Tabs.Content>
        <Tabs.Content value="words" className="space-y-4">
          {suggestions?.words.map((word, index) => (
            <Suggestion
              key={index}
              variant="word"
              showTag={false}
              correct={word.correct}
              incorrect={word.incorrect}
              className="w-full"
            />
          ))}
        </Tabs.Content>
        <Tabs.Content value="sentences" className="space-y-4">
          {suggestions?.sentences.map((sentence, index) => (
            <Suggestion
              key={index}
              variant="sentence"
              showTag={false}
              correct={sentence.correct}
              incorrect={sentence.incorrect}
              className="w-full"
            />
          ))}
        </Tabs.Content>
      </Tabs>
    </main>
  );
}

export default Duzeltici;
