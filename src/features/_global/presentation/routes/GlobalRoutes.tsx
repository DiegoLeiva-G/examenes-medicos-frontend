import { NotFoundPage, RootPage } from '../pages';
import { HomeRoutes } from './HomeRoutes.tsx';
import { type RouteObject } from 'react-router-dom';
import { DoctorRoutes } from '../../../doctor';
import { MedicalPatientRoutes } from '../../../medicalPatient';
import { MedicalExaminationTypeRoutes } from '../../../medicalExaminationType';
import { MedicalExaminationRoutes } from '../../../medicalExamination';

export const GlobalRoutes: RouteObject[] = [
  {
    path: '/',
    element: <RootPage />,
    children: [
      ...HomeRoutes,
      ...DoctorRoutes,
      ...MedicalPatientRoutes,
      ...MedicalExaminationTypeRoutes,
      ...MedicalExaminationRoutes,
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];
