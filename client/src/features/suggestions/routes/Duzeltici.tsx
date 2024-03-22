import { Button, Tabs, Typography } from '@/components/ui';
import { Editor } from '@/features/editor';

function Duzeltici() {
  return (
    <main className="grid-row grid w-content grid-cols-[1fr_24rem] grid-rows-[auto_1fr] gap-x-12 gap-y-8 justify-self-center px-6 py-24">
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
          <Tabs.Trigger value="word" className="flex-1">
            Kelime
          </Tabs.Trigger>
          <Tabs.Trigger value="sentence" className="flex-1">
            Cümle
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="all">Hepsi</Tabs.Content>
        <Tabs.Content value="word">Kelime</Tabs.Content>
        <Tabs.Content value="sentence">Cümle</Tabs.Content>
      </Tabs>
    </main>
  );
}

export default Duzeltici;
