import { ReactNode } from 'react';
import { AuthorType } from './globalTypes';

export type Article = {
  id: number;
  title: string;
  category: string;
  imgUrl: string;
  author: string;
  content: string;
  date: Date;
};

export type ArticlesByFilter = Record<ArticleFilter, Article[]>;

export type State = {
  headlines: any[];
  everything: any[];
  articlesByFilter: any[];
};

export type Action = { type: 'SET_HEADLINES'; payload: Article[] } | { type: 'SET_EVERYTHING'; payload: Article[] } | { type: 'SET_ARTICLES_BY_FILTER'; payload: Article[] };

export type NewsProviderProps = {
  children: ReactNode;
};

export type ArticleFilter = 'All' | 'Tips and Trick' | 'Interior Design' | 'Design Inspiration' | 'Color Guide';
