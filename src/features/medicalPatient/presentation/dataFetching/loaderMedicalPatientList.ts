import { getMedicalPatients } from '../pages';
import { type LoaderFunctionArgs } from 'react-router-dom';
import { getListFilter } from '@core/helpers';

export type medicalPatientDynamicFilters = '';

export const loaderMedicalPatientList = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const filters = getListFilter<medicalPatientDynamicFilters>({
    url,
  });

  const { data: medicalPatients, error: errorMedicalPatients } = await getMedicalPatients.execute({
    limit: filters.limit,
    page: filters.page,
    search: filters.search,
  });

  if (!medicalPatients || errorMedicalPatients) {
    throw new Response('Error del servidor', { status: 500, statusText: 'No se pueden cargar los datos' });
  }

  return { medicalPatients, filters };
};
