import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cx } from 'class-variance-authority';

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    className={cx(
      'inline-flex items-center justify-center gap-1 rounded-xl border border-primary bg-surface p-1',
      className,
    )}
    ref={ref}
    {...props}
  />
));

TabsList.displayName = TabsPrimitive.List.displayName;

export default TabsList;
