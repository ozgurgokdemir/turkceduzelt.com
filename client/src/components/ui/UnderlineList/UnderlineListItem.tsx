import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import useUnderlineList from './use-underline-list';

type UnderlineListItemProps = React.ComponentPropsWithoutRef<'button'> & {
  value: string;
  asChild?: boolean;
};

function UnderlineListItem({
  value,
  asChild,
  ...props
}: UnderlineListItemProps) {
  const { addItem } = useUnderlineList();

  const ref = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    addItem(value, ref);
  }, [addItem, value]);

  const Component = asChild ? Slot : 'button';

  return <Component ref={ref} {...props} />;
}

export default UnderlineListItem;
