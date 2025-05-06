import { HTMLAttributes } from 'react';
import { useInputContext } from './useInputContext';

interface DescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  description: string;
}

const Description = (props: DescriptionProps) => {
  const { id, description } = useInputContext();
  if (!description) return null;
  return (
    <p id={`${id}-desc`} {...props}>
      {description}
    </p>
  );
};

export default Description;
