import * as React from 'react';
import { cx } from 'class-variance-authority';
import { Typography } from '@/components/ui';

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
  return (
    <Typography variant="body-md" asChild>
      <input
        ref={ref}
        type={type}
        className={cx(
          'flex h-12 w-full rounded-lg border border-primary bg-surface px-4 ring-offset-bg-surface transition-colors file:border-0 file:bg-transparent file:py-3 file:font-medium placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        {...props}
      />
    </Typography>
  );
});

Input.displayName = 'Input';

export default Input;
