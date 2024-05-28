import * as React from 'react';

type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue | null>(
  {} as FormItemContextValue,
);

export default FormItemContext;
