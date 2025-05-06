import { forwardRef, InputHTMLAttributes } from 'react';
import { useInputContext } from './useInputContext';

const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  const { id, value, type, onChange, description } = useInputContext();
  return (
    <input
      ref={ref}
      id={id}
      aria-describedby={description ? `${id}-desc` : ''}
      value={value}
      type={type}
      onChange={onChange}
      {...props}
    />
  );
});

Input.displayName = 'Input';
export default Input;
