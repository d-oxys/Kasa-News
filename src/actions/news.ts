import { Dispatch } from 'react';
import { Action } from '../types/newsTypes';
import { getTopHeadlines } from '../services/news';
import { getEverything } from '../services/news';

export const fetchTopHeadlines = async (dispatch: Dispatch<Action>) => {
  const articles = await getTopHeadlines();
  dispatch({ type: 'SET_HEADLINES', payload: articles });
};

export const fetchEverything = async (dispatch: Dispatch<Action>, query: string, actionType = 'SET_EVERYTHING', pageSize = 5) => {
  const articles = await getEverything(query, pageSize);
  dispatch({ type: 'SET_EVERYTHING', payload: articles });
};

export const fetchArticlesByFilter = async (dispatch: Dispatch<Action>, query: string, actionType = 'SET_ARTICLES_BY_FILTER', pageSize = 5) => {
  const articles = await getEverything(query, pageSize);
  dispatch({ type: 'SET_ARTICLES_BY_FILTER', payload: articles });
};
