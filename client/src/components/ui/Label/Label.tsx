import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { cx } from 'class-variance-authority';
import { Typography } from '@/components/ui';

type LabelProps = React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & {
  typography?: React.ComponentPropsWithoutRef<typeof Typography>['variant'];
};

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  LabelProps
>(({ typography = 'body-md', className, ...props }, ref) => (
  <Typography variant={typography} asChild>
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
