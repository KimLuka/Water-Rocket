import { ReactNode } from 'react';
import InputContext from './input-context';
import { InputContextType } from './input-types';
import Input from './input';
import Label from './label';
import Description from './description';
import ErrorMessage from './error-message';

interface Props extends InputContextType {
  children: ReactNode;
}

const FormField = ({
  id,
  value,
  type = 'text',
  onChange,
  description,
  message,
  children,
}: Props) => {
  return (
    <InputContext.Provider
      value={{ id, value, type, onChange, description, message }}
    >
      {children}
    </InputContext.Provider>
  );
};

FormField.Input = Input;
FormField.Label = Label;
FormField.Description = Description;
FormField.ErrorMessage = ErrorMessage;

export default FormField;
