import * as React from 'react';
import {
  NotepadTextDashed,
  SpellCheck,
  History,
  MoreHorizontal,
} from 'lucide-react';
import { Button, Icon, Separator, Typography } from '@/components/ui';
import { Editor, useEditor } from '@/features/editor';
import { SuggestionTabs, useSuggestions } from '@/features/suggestions';

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
    <main className="container grid grid-cols-1 gap-y-8 py-12 xs:py-16 lg:grid-cols-[1fr_19rem] lg:grid-rows-[auto_1fr] lg:gap-x-8 lg:py-20 xl:grid-cols-[1fr_24rem] xl:gap-x-12 2xl:py-24">
      <header className="flex items-center justify-between">
        <Typography variant="heading-2xl" asChild>
          <h1 className="whitespace-nowrap text-primary xs:text-3xl md:text-4xl">
            Metin düzeltici
          </h1>
        </Typography>
        <div className="flex items-center gap-1 rounded-xl border border-primary p-1 lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="hidden xs:inline-flex md:w-fit md:px-4"
          >
            <Icon
              icon={NotepadTextDashed}
              variant="primary"
              className="md:icon-secondary"
            />
            <span className="hidden md:inline-block">Taslaklar</span>
          </Button>
          <Separator
            orientation="vertical"
            className="hidden min-h-4 xs:inline-block"
          />
          <Button variant="ghost" size="icon" className="md:w-fit md:px-4">
            <Icon
              icon={SpellCheck}
              variant="primary"
              className="md:icon-secondary"
            />
            <span className="hidden md:inline-block">Öneriler</span>
          </Button>
          <Separator orientation="vertical" className="min-h-4" />
          <Button
            variant="ghost"
            size="icon"
            className="hidden xs:inline-flex md:w-fit md:px-4"
          >
            <Icon
              icon={History}
              variant="primary"
              className="md:icon-secondary"
            />
            <span className="hidden md:inline-block">Geçmiş</span>
          </Button>
          <Button variant="ghost" size="icon" className="xs:hidden">
            <Icon icon={MoreHorizontal} variant="primary" />
          </Button>
        </div>
        <Button variant="outline" className="hidden lg:inline-flex">
          <Icon icon={NotepadTextDashed} variant="secondary" />
          Taslaklar
        </Button>
      </header>
      <Editor className="row-start-2 h-fit" />
      <aside className="row-start-2 hidden lg:block">
        {suggestions ? <SuggestionTabs {...suggestions} /> : null}
      </aside>
    </main>
  );
}

export default Duzeltici;
