import { ReactNode, useState } from 'react';
import Input from './input';
import Label from './label';
import Description from './description';
import ErrorMessage from './error-message';
import FormFieldContext from './form-field-context';

interface FormFieldProps {
  children: ReactNode;
}

const FormField = ({ children }: FormFieldProps) => {
  const [isValidate, setIsValidate] = useState(true);
  const providerValue = { isValidate, setIsValidate };

  return (
    <FormFieldContext.Provider value={providerValue}>
      {children}
    </FormFieldContext.Provider>
  );
};

FormField.Label = Label;
FormField.Input = Input;
FormField.Description = Description;
FormField.ErrorMessage = ErrorMessage;

export default FormField;
