import { CreateDoctorPage, DoctorListPage, UpdateDoctorPage } from '../pages';
import type { RouteObject } from 'react-router-dom';
import { ErrorPage } from '../../../_global';
import { loaderDoctorList, loaderDoctorUpdate } from '../dataFetching';

export const DoctorRoutes: RouteObject[] = [
  {
    path: 'medicos',
    element: <DoctorListPage />,
    loader: loaderDoctorList,
    hydrateFallbackElement: <p>Cargando...</p>,
    errorElement: <ErrorPage />,
  },
  {
    path: 'medicos/crear',
    element: <CreateDoctorPage />,
  },
  {
    path: 'medicos/:doctorId/editar',
    element: <UpdateDoctorPage />,
    loader: loaderDoctorUpdate,
    hydrateFallbackElement: <p>Cargando...</p>,
    errorElement: <ErrorPage />,
  },
];
