import { DescriptionProps } from './input-types';
import { useInputContext } from './useInputContext';

const Description = ({ srOnly = true }: DescriptionProps) => {
  const { description } = useInputContext();
  if (!description) return null;

  return <p className={srOnly ? 'sr-only' : ''}>{description}</p>;
};

export default Description;
