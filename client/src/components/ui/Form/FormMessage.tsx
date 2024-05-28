import * as React from 'react';
import { cx } from 'class-variance-authority';
import useFormField from './use-form-field';
import { Typography } from '@/components/ui';

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error.message) : children;

  if (!body) {
    return null;
  }

  return (
    <Typography
      ref={ref}
      id={formMessageId}
      variant="body-sm"
      className={cx('text-critical', className)}
      {...props}
    >
      {body}
    </Typography>
  );
});

FormMessage.displayName = 'FormMessage';

export default FormMessage;
