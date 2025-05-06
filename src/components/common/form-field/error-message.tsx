import { HTMLAttributes } from 'react';
import { useInputContext } from './useInputContext';

interface ErrorMessageProps extends HTMLAttributes<HTMLParagraphElement> {
  message: string;
}

const ErrorMessage = (props: ErrorMessageProps) => {
  const context = useInputContext();
  const message = props.message || context.message;

  if (!message) return null;
  return (
    <p role="alert" {...props}>
      {message}
    </p>
  );
};

export default ErrorMessage;
