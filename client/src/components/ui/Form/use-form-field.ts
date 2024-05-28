import * as React from 'react';
import { useFormContext } from 'react-hook-form';
import FormFieldContext from './form-field-context';
import FormItemContext from './form-item-context';

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);

  if (!fieldContext) {
    throw new Error('useFormField must be used within a FormField');
  }

  const itemContext = React.useContext(FormItemContext);

  if (!itemContext) {
    throw new Error('useFormItem must be used within a FormItem');
  }

  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

export default useFormField;
