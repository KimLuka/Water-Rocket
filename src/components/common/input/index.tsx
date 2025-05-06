import { ReactNode } from 'react';
import InputContext from './input-context';
import { InputContextType } from './input-types';
import Input from './input';
import Label from './label';
import Description from './description';

interface Props extends InputContextType {
  children: ReactNode;
}

const InputWrapper = ({
  id,
  value,
  type = 'text',
  onChange,
  description,
  children,
}: Props) => {
  return (
    <InputContext.Provider value={{ id, value, type, onChange, description }}>
      {children}
    </InputContext.Provider>
  );
};

InputWrapper.Input = Input;
InputWrapper.Label = Label;
InputWrapper.Description = Description;

export default InputWrapper;
