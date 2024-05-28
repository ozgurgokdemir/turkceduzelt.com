import type { FieldValues, FieldPath } from 'react-hook-form';
import * as React from 'react';

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue | null>(
  {} as FormFieldContextValue,
);

export default FormFieldContext;
