import { getMedicalExaminations } from '../pages';
import { type LoaderFunctionArgs } from 'react-router-dom';
import { getListFilter } from '@core/helpers';
import { MedicalExaminationType } from '../../../medicalExaminationType';

export type medicalExaminationDynamicFilters = 'medicalExaminationType';

export const loaderMedicalExaminationList = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const filters = getListFilter<medicalExaminationDynamicFilters>({
    url,
    dynamicFilters: {
      medicalExaminationType: {
        value: '',
        label: 'tipo',
      },
    },
  });

  const { data: medicalExaminations, error: errorMedicalExaminations } = await getMedicalExaminations.execute({
    limit: filters.limit,
    page: filters.page,
  },
    filters.dynamics?.medicalExaminationType.value && filters.dynamics?.medicalExaminationType.value !== 'mostrar-todo'
      ? [filters.dynamics?.medicalExaminationType.value]
      : [
        MedicalExaminationType.Ultrasound,
        MedicalExaminationType.Ray,
        MedicalExaminationType.Resonance,
      ],
  );

  if (!medicalExaminations || errorMedicalExaminations) {
    throw new Response('Error del servidor', { status: 500, statusText: 'No se pueden cargar los datos' });
  }

  return { medicalExaminations, filters };
};
