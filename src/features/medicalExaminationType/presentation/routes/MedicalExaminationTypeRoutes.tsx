import { CreateMedicalExaminationTypePage, MedicalExaminationTypeListPage, UpdateMedicalExaminationTypePage } from '../pages';
import type { RouteObject } from 'react-router-dom';
import { ErrorPage } from '../../../_global';
import { loaderMedicalExaminationTypeList, loaderMedicalExaminationTypeUpdate } from '../dataFetching';

export const MedicalExaminationTypeRoutes: RouteObject[] = [
  {
    path: 'tipos-de-examenes-medicos',
    element: <MedicalExaminationTypeListPage />,
    loader: loaderMedicalExaminationTypeList,
    hydrateFallbackElement: <p>Cargando...</p>,
    errorElement: <ErrorPage />,
  },
  {
    path: 'tipos-de-examenes-medicos/crear',
    element: <CreateMedicalExaminationTypePage />,
  },
  {
    path: 'tipos-de-examenes-medicos/:medicalExaminationTypeId/editar',
    element: <UpdateMedicalExaminationTypePage />,
    loader: loaderMedicalExaminationTypeUpdate,
    hydrateFallbackElement: <p>Cargando...</p>,
    errorElement: <ErrorPage />,
  },
];
