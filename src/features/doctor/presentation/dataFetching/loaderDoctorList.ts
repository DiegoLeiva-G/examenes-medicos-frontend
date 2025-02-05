import { getDoctors } from '../pages';
import { type LoaderFunctionArgs } from 'react-router-dom';
import { getListFilter } from '@core/helpers';

export type doctorDynamicFilters = '';

export const loaderDoctorList = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const filters = getListFilter<doctorDynamicFilters>({
    url,
  });

  const { data: doctors, error: errorMeasureUnits } = await getDoctors.execute({
    limit: filters.limit,
    page: filters.page,
    search: filters.search,
  });

  if (!doctors || errorMeasureUnits) {
    throw new Response('Error del servidor', { status: 500, statusText: 'No se pueden cargar los datos' });
  }

  return { doctors, filters };
};
