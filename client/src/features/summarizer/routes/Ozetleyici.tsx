import { History, MoreHorizontal, NotepadTextDashed } from 'lucide-react';
import { Button, Icon, Separator, Typography } from '@/components/ui';
import { Editor } from '@/features/editor';
import { SummarizerDocument } from '@/features/summarizer';

function Ozetleyici() {
  return (
    <main className="container grid grid-cols-1 gap-y-8 py-12 xs:py-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:py-20 2xl:py-24">
      <header className="flex items-center justify-between">
        <Typography variant="heading-2xl" asChild>
          <h1 className="whitespace-nowrap text-primary xs:text-3xl xs:leading-9 md:text-4xl md:leading-10">
            Metin özetleyici
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
      <Button
        variant="outline"
        className="ml-auto hidden self-center lg:inline-flex"
      >
        <Icon icon={History} variant="secondary" />
        Geçmiş
      </Button>
      <div className="col-span-full flex flex-col lg:flex-row">
        <Editor className="flex-1 rounded-b-none lg:rounded-r-none lg:rounded-bl-xl" />
        <SummarizerDocument className="flex-1 rounded-t-none border-t-0 lg:rounded-l-none lg:rounded-tr-xl lg:border-l-0 lg:border-t" />
      </div>
    </main>
  );
}

export default Ozetleyici;
