import { useContext } from 'react';
import InputContext from './input-context';

export const useInputContext = () => {
  const context = useContext(InputContext);
  if (!context)
    throw new Error('해당 컴포넌트는 FormField 내부에서 사용되어야 합니다.');
  return context;
};
