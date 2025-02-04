import { CreateFundingSourcePage, FundingSourceListPage, UpdateFundingSourcePage } from '../pages';
import { ErrorPage } from '../../../_global';
import { loaderFundingSourceList, loaderFundingSourceUpdate } from '../dataFetching';
import type { RouteObject } from 'react-router-dom';

export const FundingSourceRoutes: RouteObject[] = [
  {
    path: 'fuentes-de-financiamiento',
    element: <FundingSourceListPage />,
    loader: loaderFundingSourceList,
    hydrateFallbackElement: <p>Cargando...</p>,
    errorElement: <ErrorPage />,
  },
  {
    path: 'fuentes-de-financiamiento/crear',
    element: <CreateFundingSourcePage />,
  },
  {
    path: 'fuentes-de-financiamiento/:fundingSourceId/editar',
    element: <UpdateFundingSourcePage />,
    loader: loaderFundingSourceUpdate,
    hydrateFallbackElement: <p>Cargando...</p>,
    errorElement: <ErrorPage />,
  },
];
