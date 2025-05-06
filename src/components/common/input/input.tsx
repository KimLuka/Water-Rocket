import { forwardRef, InputHTMLAttributes } from 'react';
import { useInputContext } from './useInputContext';

const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  const { id, value, type, onChange } = useInputContext();
  return (
    <input
      ref={ref}
      id={id}
      value={value}
      type={type}
      onChange={onChange}
      {...props}
    />
  );
});

Input.displayName = 'Input';
export default Input;
