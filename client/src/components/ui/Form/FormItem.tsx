import * as React from 'react';
import { cx } from 'class-variance-authority';
import FormItemContext from './form-item-context';

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cx('space-y-2', className)} {...props} />
    </FormItemContext.Provider>
  );
});

FormItem.displayName = 'FormItem';

export default FormItem;
