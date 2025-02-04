import { createBrowserRouter } from 'react-router-dom';
import {  GlobalRoutes } from '../features';

export const router = createBrowserRouter([...GlobalRoutes], {});
