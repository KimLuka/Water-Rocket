import { LabelHTMLAttributes } from 'react';
import { useInputContext } from './useInputContext';

const Label = ({
  children,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement>) => {
  const { id } = useInputContext();
  return (
    <label htmlFor={id} {...props}>
      {children}
    </label>
  );
};

export default Label;
