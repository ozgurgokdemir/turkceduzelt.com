import {
  History,
  MoreHorizontal,
  NotepadTextDashed,
  PencilLine,
} from 'lucide-react';
import { Button, Icon, Typography } from '@/components/ui';
import { Editor } from '@/features/editor';
import { ParaphraserDocument } from '@/features/paraphraser';

function Sekillendirici() {
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
      <Editor className="rounded-b-none md:rounded-r-none md:rounded-bl-xl" />
      <ParaphraserDocument className="hidden rounded-t-none border-t-0 md:block md:rounded-l-none md:rounded-tr-xl md:border-l-0 md:border-t" />
    </main>
  );
}

export default Sekillendirici;
