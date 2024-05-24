import {
  History,
  MoreHorizontal,
  NotepadTextDashed,
  PencilLine,
  Settings2,
  Wand2,
} from 'lucide-react';
import { Button, Icon, Spinner, Typography } from '@/components/ui';
import { Editor, useEditor } from '@/features/editor';
import { ParaphraserDocument, useParaphraser } from '@/features/paraphraser';
import { cx } from 'class-variance-authority';

function Sekillendirici() {
  const { text } = useEditor();

  const { result, wording, mutation } = useParaphraser();

  function handleParaphrase() {
    mutation.mutate({ text, wording });
  }

  return (
    <main className="container grid grid-cols-1 gap-y-6 py-12 xs:gap-y-8 xs:py-16 md:grid-cols-2 md:grid-rows-[auto_1fr] md:py-20 xl:py-24">
      <header className="flex items-center justify-between">
        <Typography variant="heading-2xl" asChild>
          <h1 className="whitespace-nowrap text-primary xs:text-3xl xs:leading-9 sm:text-4xl sm:leading-10">
            Metin şekillendirici
          </h1>
        </Typography>
        <div className="flex items-center gap-2 md:hidden">
          <Button variant="outline" size="icon" className="sm:w-fit sm:px-4">
            <Icon
              icon={PencilLine}
              variant="primary"
              className="sm:icon-secondary"
            />
            <span className="hidden sm:inline-block">Sonuç</span>
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
        className="rounded-b-none md:rounded-r-none md:rounded-bl-xl"
        renderAction={
          <div className="flex gap-2">
            <Button variant="outline" size="icon" className="md:hidden">
              <Icon icon={Settings2} className="icon-primary" />
            </Button>
            <Button
              variant="filled"
              tone="brand"
              disabled={mutation.isPending}
              onClick={handleParaphrase}
            >
              <div
                className={cx(
                  'flex items-center gap-3',
                  mutation.isPending && 'opacity-0',
                )}
              >
                <Icon icon={Wand2} className="icon-brand-on-bg-fill" />
                Şekillendir
              </div>
              {mutation.isPending && (
                <div className="absolute inset-0 grid place-items-center">
                  <Spinner className="icon-brand-on-bg-fill" />
                </div>
              )}
            </Button>
          </div>
        }
      />
      <ParaphraserDocument className="hidden rounded-t-none border-t-0 md:flex md:rounded-l-none md:rounded-tr-xl md:border-l-0 md:border-t">
        <Typography
          variant="body-md"
          className={mutation.isPending ? 'animate-pulse' : undefined}
        >
          {!result && mutation.isPending ? text : result}
        </Typography>
      </ParaphraserDocument>
    </main>
  );
}

export default Sekillendirici;
