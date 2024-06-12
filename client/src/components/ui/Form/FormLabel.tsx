import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { cx } from 'class-variance-authority';
import useFormField from './use-form-field';
import { Label } from '@/components/ui';

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof Label>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();

  return (
    <Label
      ref={ref}
      htmlFor={formItemId}
      className={cx(error && 'text-critical', className)}
      {...props}
    />
  );
});

FormLabel.displayName = 'FormLabel';

export default FormLabel;
