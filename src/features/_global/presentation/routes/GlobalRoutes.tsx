import { NotFoundPage, RootPage } from '../pages';
import { HomeRoutes } from './HomeRoutes.tsx';
import { MeasureUnitRoutes } from '../../../measureUnit';
import { FundingSourceRoutes } from '../../../fundingSource';
import { type RouteObject } from 'react-router-dom';

export const GlobalRoutes: RouteObject[] = [
  {
    path: '/',
    element: <RootPage />,
    children: [
          ...HomeRoutes,
          ...MeasureUnitRoutes,
          ...FundingSourceRoutes,
        ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];
