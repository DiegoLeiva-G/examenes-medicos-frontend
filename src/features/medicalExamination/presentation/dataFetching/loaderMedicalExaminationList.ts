import { getMedicalExaminations } from '../pages';
import { type LoaderFunctionArgs } from 'react-router-dom';
import { getListFilter } from '@core/helpers';

export type medicalExaminationDynamicFilters = '';

export const loaderMedicalExaminationList = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const filters = getListFilter<medicalExaminationDynamicFilters>({
    url,
  });

  const { data: medicalExaminations, error: errorMedicalExaminations } = await getMedicalExaminations.execute({
    limit: filters.limit,
    page: filters.page,
  })

  if (!medicalExaminations || errorMedicalExaminations) {
    throw new Response('Error del servidor', { status: 500, statusText: 'No se pueden cargar los datos' });
  }

  return { medicalExaminations, filters };
};
