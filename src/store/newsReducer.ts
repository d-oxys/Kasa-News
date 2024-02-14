import { State, Action } from '@/types/newsTypes';

export const newsReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_HEADLINES':
      return { ...state, headlines: action.payload };
    case 'SET_EVERYTHING':
      return { ...state, everything: action.payload };
    case 'SET_ARTICLES_BY_FILTER':
      return { ...state, articlesByFilter: action.payload };
    default:
      return state;
  }
};
