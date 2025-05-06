import { useContext } from 'react';
import InputContext from './input-context';

export const useInputContext = () => {
  const context = useContext(InputContext);
  if (!context)
    throw new Error(
      'Input 컴포넌트는 InputWrapper 내부에서 사용되어야 합니다.',
    );
  return context;
};
