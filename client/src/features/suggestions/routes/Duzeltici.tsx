import * as React from 'react';
import {
  NotepadTextDashed,
  SpellCheck,
  History,
  MoreHorizontal,
} from 'lucide-react';
import { Button, Icon, Skeleton, Spinner, Typography } from '@/components/ui';
import { Editor, useEditor } from '@/features/editor';
import { SuggestionTabs, useSuggestions, NoData } from '@/features/suggestions';

function Duzeltici() {
  const { text } = useEditor();

  const { suggestions, setSuggestions, mutation } = useSuggestions();

  const mutateRef = React.useRef(mutation.mutate);

  React.useEffect(() => {
    if (text.trim() === '') {
      setSuggestions(null);
      return;
    }

    const timeoutId = setTimeout(() => {
      mutateRef.current(text);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [text, setSuggestions]);

  return (
    <main className="container grid grid-cols-1 gap-y-6 py-12 xs:gap-y-8 xs:py-16 md:grid-cols-[1fr_19rem] md:grid-rows-[auto_1fr] md:gap-x-8 md:py-20 lg:grid-cols-[1fr_24rem] lg:gap-x-12 xl:py-24">
      <header className="flex items-center justify-between">
        <Typography variant="heading-2xl" asChild>
          <h1 className="whitespace-nowrap text-primary xs:text-3xl xs:leading-9 sm:text-4xl sm:leading-10">
            Metin düzeltici
          </h1>
        </Typography>
        <div className="flex items-center gap-2 md:hidden">
          <Button variant="outline" size="icon" className="sm:w-fit sm:px-4">
            <Icon
              icon={SpellCheck}
              variant="primary"
              className="sm:icon-secondary"
            />
            <span className="hidden sm:inline-block">Öneriler</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="hidden xs:inline-flex sm:w-fit sm:px-4"
          >
            <Icon
              icon={NotepadTextDashed}
              variant="primary"
              className="sm:icon-secondary"
            />
            <span className="hidden sm:inline-block">Taslaklar</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="hidden xs:inline-flex sm:w-fit sm:px-4"
          >
            <Icon
              icon={History}
              variant="primary"
              className="sm:icon-secondary"
            />
            <span className="hidden sm:inline-block">Geçmiş</span>
          </Button>
          <Button variant="outline" size="icon" className="xs:hidden">
            <Icon icon={MoreHorizontal} variant="primary" />
          </Button>
        </div>
        <Button variant="outline" className="hidden md:inline-flex">
          <Icon icon={NotepadTextDashed} variant="secondary" />
          Taslaklar
        </Button>
      </header>
      <Button
        variant="outline"
        className="ml-auto hidden self-center md:inline-flex"
      >
        <Icon icon={History} variant="secondary" />
        Geçmiş
      </Button>
      <Editor
        className="row-start-2 h-fit"
        renderAction={
          (!!suggestions || mutation.isPending) && (
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full rounded-bl-none bg-fill-critical"
              disabled={mutation.isPending}
            >
              {mutation.isPending ? (
                <Spinner className="icon-critical-on-bg-fill" />
              ) : (
                <Typography
                  variant="body-lg"
                  className="text-critical-on-bg-fill"
                >
                  {(suggestions?.words.length ?? 0) +
                    (suggestions?.sentences.length ?? 0)}
                </Typography>
              )}
            </button>
          )
        }
      />
      <aside className="row-start-2 hidden md:block">
        {mutation.isPending ? (
          <div className="space-y-6">
            <Skeleton className="h-11" />
            <div className="space-y-4">
              <Skeleton className="h-20" />
              <Skeleton className="h-20" />
            </div>
          </div>
        ) : suggestions ? (
          <SuggestionTabs {...suggestions} />
        ) : (
          <div className="flex flex-col items-center gap-8 py-8">
            <NoData className="h-auto w-full max-w-48" />
            <div className="space-y-2 text-center">
              <Typography variant="heading-xl" asChild>
                <h3 className="text-primary">
                  Kontrol edebileceğimiz bir yazı yok
                </h3>
              </Typography>
              <Typography variant="body-md" asChild>
                <p className="text-secondary">
                  Yazmaya başlayın, bir metin yapıştırın, bir taslak açın veya
                  bir metin belgesi yükleyin.
                </p>
              </Typography>
            </div>
          </div>
        )}
      </aside>
    </main>
  );
}

export default Duzeltici;
