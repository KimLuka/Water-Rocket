import { HTMLAttributes, ReactNode } from 'react';

interface DescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

const Description = ({ className, children }: DescriptionProps) => {
  return <p className={`sr-only ${className ?? ''}`}>{children}</p>;
};

export default Description;
