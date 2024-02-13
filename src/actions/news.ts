import { Dispatch } from 'react';
import { Action } from '../types/newsTypes';
import { getTopHeadlines } from '../services/news';

export const fetchTopHeadlines = async (dispatch: Dispatch<Action>) => {
  const articles = await getTopHeadlines();
  dispatch({ type: 'SET_HEADLINES', payload: articles });
};
