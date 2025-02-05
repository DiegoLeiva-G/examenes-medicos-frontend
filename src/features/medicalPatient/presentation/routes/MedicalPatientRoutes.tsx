import { CreateMedicalPatientPage, MedicalPatientListPage, UpdateMedicalPatientPage } from '../pages';
import type { RouteObject } from 'react-router-dom';
import { ErrorPage } from '../../../_global';
import { loaderMedicalPatientList, loaderMedicalPatientUpdate } from '../dataFetching';

export const MedicalPatientRoutes: RouteObject[] = [
  {
    path: 'pacientes-medicos',
    element: <MedicalPatientListPage />,
    loader: loaderMedicalPatientList,
    hydrateFallbackElement: <p>Cargando...</p>,
    errorElement: <ErrorPage />,
  },
  {
    path: 'pacientes-medicos/crear',
    element: <CreateMedicalPatientPage />,
  },
  {
    path: 'pacientes-medicos/:medicalPatientId/editar',
    element: <UpdateMedicalPatientPage />,
    loader: loaderMedicalPatientUpdate,
    hydrateFallbackElement: <p>Cargando...</p>,
    errorElement: <ErrorPage />,
  },
];
