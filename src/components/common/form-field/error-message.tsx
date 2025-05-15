import React, { HTMLAttributes, ReactNode } from 'react';
import { useFormFieldContext } from './form-field-context';

interface ErrorMessageProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

const ErrorMessage = ({ children, className }: ErrorMessageProps) => {
  const { isValidate } = useFormFieldContext();
  return (
    isValidate && (
      <p role="alert" className={className}>
        {children}
      </p>
    )
  );
};

export default ErrorMessage;
