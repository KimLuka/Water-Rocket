import { createContext, useContext } from 'react';

interface FormFieldContextType {
  isValidate: boolean;
}

const FormFieldContext = createContext<FormFieldContextType | null>(null);

export const useFormFieldContext = () => {
  const context = useContext(FormFieldContext);
  if (!context) {
    throw new Error(
      'useFormFieldContext는 FormField 내부에서만 사용해야 합니다.',
    );
  }
  return context;
};

export default FormFieldContext;
