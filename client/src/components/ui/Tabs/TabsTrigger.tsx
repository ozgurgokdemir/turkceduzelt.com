import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cx } from 'class-variance-authority';
import { Typography } from '@/components/ui';

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <Typography variant="body-sm" asChild>
    <TabsPrimitive.Trigger
      className={cx(
        'inline-flex h-9 items-center justify-center whitespace-nowrap rounded-lg px-4 text-secondary ring-offset-bg-surface transition-all hover:bg-surface-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-surface-active',
        className,
      )}
      ref={ref}
      {...props}
    />
  </Typography>
));

TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

export default TabsTrigger;
