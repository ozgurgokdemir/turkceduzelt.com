import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { cx } from 'class-variance-authority';
import { Typography } from '@/components/ui';

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => (
  <Typography variant="body-md" asChild>
    <LabelPrimitive.Root
      ref={ref}
      className={cx(
        'text-primary peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        className,
      )}
      {...props}
    />
  </Typography>
));

Label.displayName = LabelPrimitive.Root.displayName;

export default Label;
