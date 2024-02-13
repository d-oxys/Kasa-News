import { State, Action } from '@/types/newsTypes';

export const newsReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_HEADLINES':
      return { ...state, headlines: action.payload };
    default:
      return state;
  }
};
