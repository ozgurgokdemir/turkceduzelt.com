import * as React from 'react';
import FormItemContext from './form-item-context';

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} {...props} />
    </FormItemContext.Provider>
  );
});

FormItem.displayName = 'FormItem';

export default FormItem;
