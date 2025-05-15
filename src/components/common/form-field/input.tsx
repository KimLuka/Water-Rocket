import { forwardRef, InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...rest }, ref) => {
    return (
      <input
        ref={ref}
        className={`flex w-full disabled:cursor-not-allowed disabled:opacity-50
      ${className}`}
        {...rest}
      />
    );
  },
);

Input.displayName = 'Input';
export default Input;
