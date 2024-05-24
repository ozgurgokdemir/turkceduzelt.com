import * as React from 'react';
import { Root, List, Trigger } from '@radix-ui/react-tabs';
import { Typography, UnderlineList } from '@/components/ui';
import { useParaphraser } from '@/features/paraphraser';

type WordingOptionsProps = React.ComponentPropsWithoutRef<typeof Root>;

function WordingOptions(props: WordingOptionsProps) {
  const { wording, setWording } = useParaphraser();

  return (
    <Root value={wording} onValueChange={setWording} {...props}>
      <Typography variant="body-sm" asChild>
        <UnderlineList active={wording} asChild>
          <List className="flex h-full items-center gap-1">
            <UnderlineList.Item value="formal" asChild>
              <Trigger
                value="formal"
                className="flex h-full items-center px-4 text-muted transition-colors data-[state=active]:text-primary"
              >
                Resmi
              </Trigger>
            </UnderlineList.Item>
            <UnderlineList.Item value="neutral" asChild>
              <Trigger
                value="neutral"
                className="flex h-full items-center px-4 text-muted transition-colors data-[state=active]:text-primary"
              >
                Nötr
              </Trigger>
            </UnderlineList.Item>
            <UnderlineList.Item value="friendly" asChild>
              <Trigger
                value="friendly"
                className="flex h-full items-center px-4 text-muted transition-colors data-[state=active]:text-primary"
              >
                Arkadaşça
              </Trigger>
            </UnderlineList.Item>
          </List>
        </UnderlineList>
      </Typography>
    </Root>
  );
}

export default WordingOptions;
