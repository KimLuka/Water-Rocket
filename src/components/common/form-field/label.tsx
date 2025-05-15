import { LabelHTMLAttributes, ReactNode } from 'react';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children?: ReactNode;
}

export default function Label({ children, className }: LabelProps) {
  return <label className={className}>{children}</label>;
}
