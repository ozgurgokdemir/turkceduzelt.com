import * as React from 'react';
import { Root, List, Trigger } from '@radix-ui/react-tabs';
import { Typography } from '@/components/ui';

function WordingOptions() {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const formalRef = React.useRef<HTMLButtonElement>(null);
  const neutralRef = React.useRef<HTMLButtonElement>(null);
  const friendlyRef = React.useRef<HTMLButtonElement>(null);

  const refs: Record<string, React.RefObject<HTMLButtonElement>> = {
    formal: formalRef,
    neutral: neutralRef,
    friendly: friendlyRef,
  };

  function getRef(value: string) {
    if (!Object.prototype.hasOwnProperty.call(refs, value)) {
      throw new Error(`getRef: ${value} is not a valid value`);
    }
    return refs[value];
  }

  const [active, setActive] = React.useState({
    value: 'neutral',
    ref: getRef('neutral'),
  });

  const hasResized = React.useRef(false);

  React.useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver(() => {
      if (hasResized.current) {
        observer.disconnect();
      } else {
        hasResized.current = true;
      }
      animateUnderline(containerRef, active.ref);
    });

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [active]);

  function handleChange(value: string) {
    setActive({ value, ref: getRef(value) });
  }

  function animateUnderline(
    containerRef: React.RefObject<HTMLElement>,
    activeRef: React.RefObject<HTMLElement>,
  ) {
    if (!containerRef.current || !activeRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const activeRect = activeRef.current.getBoundingClientRect();

    containerRef.current.style.setProperty(
      '--underline-width',
      `${activeRect.width}px`,
    );
    containerRef.current.style.setProperty(
      '--underline-left',
      `${activeRect.left - containerRect.left}px`,
    );
  }

  return (
    <Root value={active.value} onValueChange={handleChange} className="h-full">
      <Typography variant="body-sm" asChild>
        <List
          ref={containerRef}
          className="relative flex h-full items-center gap-1 after:absolute after:-bottom-px after:left-[var(--underline-left)] after:h-0.5 after:w-[var(--underline-width)] after:bg-fill-brand after:transition-all"
        >
          <Trigger
            ref={formalRef}
            value="formal"
            className="flex h-full items-center px-4 text-muted transition-colors data-[state=active]:text-primary"
          >
            Resmi
          </Trigger>
          <Trigger
            ref={neutralRef}
            value="neutral"
            className="flex h-full items-center px-4 text-muted transition-colors data-[state=active]:text-primary"
          >
            Nötr
          </Trigger>
          <Trigger
            ref={friendlyRef}
            value="friendly"
            className="flex h-full items-center px-4 text-muted transition-colors data-[state=active]:text-primary"
          >
            Arkadaşça
          </Trigger>
        </List>
      </Typography>
    </Root>
  );
}

export default WordingOptions;
