import { createContext } from 'react';
import { InputContextType } from './input-types';

const InputContext = createContext<InputContextType | null>(null);
export default InputContext;
