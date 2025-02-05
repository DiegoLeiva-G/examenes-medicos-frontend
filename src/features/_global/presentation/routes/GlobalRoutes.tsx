import { NotFoundPage, RootPage } from '../pages';
import { HomeRoutes } from './HomeRoutes.tsx';
import { type RouteObject } from 'react-router-dom';
import { DoctorRoutes } from '../../../doctor';
import { MedicalPatientRoutes } from '../../../medicalPatient';
import { MedicalExaminationTypeRoutes } from '../../../medicalExaminationType';

export const GlobalRoutes: RouteObject[] = [
  {
    path: '/',
    element: <RootPage />,
    children: [...HomeRoutes, ...DoctorRoutes, ...MedicalPatientRoutes, ...MedicalExaminationTypeRoutes],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];
