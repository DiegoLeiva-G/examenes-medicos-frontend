import { type routerType } from '../../../../routes';
import HomePage from '../pages/HomePage.tsx';

export const HomeRoutes: routerType[] = [
  {
    path: 'home',
    element: <HomePage />,
    title: 'Home',
  },
];
