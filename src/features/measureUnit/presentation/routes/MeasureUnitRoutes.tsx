import { CreateMeasureUnitPage, MeasureUnitListPage, UpdateMeasureUnitPage } from '../pages';
import type { RouteObject } from 'react-router-dom';
import { ErrorPage } from '../../../_global';
import { loaderMeasureUnitList, loaderMeasureUnitUpdate } from '../dataFetching';

export const MeasureUnitRoutes: RouteObject[] = [
  {
    path: 'unidades-de-medida',
    element: <MeasureUnitListPage />,
    loader: loaderMeasureUnitList,
    hydrateFallbackElement: <p>Cargando...</p>,
    errorElement: <ErrorPage />,
  },
  {
    path: 'unidades-de-medida/crear',
    element: <CreateMeasureUnitPage />,
  },
  {
    path: 'unidades-de-medida/:measureUnitId/editar',
    element: <UpdateMeasureUnitPage />,
    loader: loaderMeasureUnitUpdate,
    hydrateFallbackElement: <p>Cargando...</p>,
    errorElement: <ErrorPage />,
  },
];
