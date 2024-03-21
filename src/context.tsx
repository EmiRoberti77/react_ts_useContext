import { createContext, useContext } from 'react';

export interface AppContext {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export const myContext = createContext<AppContext | undefined>(undefined);

export const useMyContext = () => {
  const context = useContext(myContext);
  if (context === undefined)
    throw new Error('Context Error: context is undefined');

  return context;
};
