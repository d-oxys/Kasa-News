import { ReactNode } from 'react';

export type State = {
  headlines: any[];
};

export type Action = {
  type: string;
  payload: any;
};

export type NewsProviderProps = {
  children: ReactNode;
};
