import { CreateMedicalExaminationPage, MedicalExaminationListPage, UpdateMedicalExaminationPage } from '../pages';
import type { RouteObject } from 'react-router-dom';
import { ErrorPage } from '../../../_global';
import {
  loaderMedicalExaminationCreate,
  loaderMedicalExaminationList,
  loaderMedicalExaminationUpdate,
} from '../dataFetching';

export const MedicalExaminationRoutes: RouteObject[] = [
  {
    path: 'examenes-medicos',
    element: <MedicalExaminationListPage />,
    loader: loaderMedicalExaminationList,
    hydrateFallbackElement: <p>Cargando...</p>,
    errorElement: <ErrorPage />,
  },
  {
    path: 'examenes-medicos/crear',
    element: <CreateMedicalExaminationPage />,
    loader: loaderMedicalExaminationCreate,
    hydrateFallbackElement: <p>Cargando...</p>,
    errorElement: <ErrorPage />,
  },
  {
    path: 'examenes-medicos/:medicalExaminationId/editar',
    element: <UpdateMedicalExaminationPage />,
    loader: loaderMedicalExaminationUpdate,
    hydrateFallbackElement: <p>Cargando...</p>,
    errorElement: <ErrorPage />,
  },
];
