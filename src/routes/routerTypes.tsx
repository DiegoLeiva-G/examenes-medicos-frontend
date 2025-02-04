import { type ReactNode } from 'react';

export interface routerType {
  title: string;
  path: string;
  element: ReactNode;
  children?: routerType[];
}
