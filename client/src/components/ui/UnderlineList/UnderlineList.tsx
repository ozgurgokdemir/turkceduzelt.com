import * as React from 'react';
import { cx } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';
import useUnderlineList from './use-underline-list';

type UnderlineListProps = React.ComponentPropsWithoutRef<'div'> & {
  active: string;
  asChild?: boolean;
};

function UnderlineList({
  active,
  asChild = false,
  className,
  ...props
}: UnderlineListProps) {
  const listRef = React.useRef<HTMLDivElement>(null);

  const { items, animateUnderline } = useUnderlineList();

  const hasResized = React.useRef(false);

  React.useEffect(() => {
    const item = items.find((item) => item.value === active);

    if (!listRef.current || !item) return;

    const observer = new ResizeObserver(() => {
      if (hasResized.current) {
        observer.disconnect();
      } else {
        hasResized.current = true;
      }
      animateUnderline(listRef, item.ref);
    });

    observer.observe(listRef.current);

    return () => {
      observer.disconnect();
    };
  }, [active, items, animateUnderline]);

  const Component = asChild ? Slot : 'div';

  return (
    <Component
      ref={listRef}
      className={cx(
        'relative after:absolute after:-bottom-px after:left-[var(--underline-left)] after:h-0.5 after:w-[var(--underline-width)] after:bg-fill-brand after:transition-all',
        className,
      )}
      {...props}
    />
  );
}

export default UnderlineList;
