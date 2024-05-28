import {
  type FieldValues,
  type FieldPath,
  type ControllerProps,
  Controller,
} from 'react-hook-form';
import FormFieldContext from './form-field-context';

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

export default FormField;
