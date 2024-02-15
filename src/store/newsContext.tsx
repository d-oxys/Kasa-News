import { createContext, useReducer, useContext } from 'react';
import { State, Action, NewsProviderProps } from '@/types/newsTypes';
import { newsReducer } from './newsReducer';

const NewsStateContext = createContext<State | undefined>(undefined);
const NewsDispatchContext = createContext<React.Dispatch<Action> | undefined>(undefined);

export const NewsProvider = ({ children }: NewsProviderProps) => {
  const [state, dispatch] = useReducer(newsReducer, { headlines: [], everything: [], articlesByFilter: [], searchResults: [] });

  return (
    <NewsDispatchContext.Provider value={dispatch}>
      <NewsStateContext.Provider value={state}>{children}</NewsStateContext.Provider>
    </NewsDispatchContext.Provider>
  );
};

export const useNewsState = () => {
  const context = useContext(NewsStateContext);
  if (context === undefined) {
    throw new Error('useNewsState must be used within a NewsProvider');
  }
  return context;
};

export const useNewsDispatch = () => {
  const context = useContext(NewsDispatchContext);
  if (context === undefined) {
    throw new Error('useNewsDispatch must be used within a NewsProvider');
  }
  return context;
};
