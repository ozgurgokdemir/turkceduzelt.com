import * as React from 'react';
import { cx } from 'class-variance-authority';

type SeperatorProps = React.ComponentPropsWithRef<'div'> & {
  orientation?: 'horizontal' | 'vertical';
};

const Separator = React.forwardRef<HTMLDivElement, SeperatorProps>(
  ({ orientation = 'horizontal', className, ...props }, ref) => (
    <div
      className={cx(
        'shrink-0 bg-border-primary',
        orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);

Separator.displayName = 'Separator';

export default Separator;
