import { getMedicalExaminationTypes } from '../pages';
import { type LoaderFunctionArgs } from 'react-router-dom';
import { getListFilter } from '@core/helpers';

export type medicalExaminationTypeDynamicFilters = '';

export const loaderMedicalExaminationTypeList = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const filters = getListFilter<medicalExaminationTypeDynamicFilters>({
    url,
  });

  const { data: medicalExaminationType, error: errorMedicalExaminationType } = await getMedicalExaminationTypes.execute({
    limit: filters.limit,
    page: filters.page,
    search: filters.search,
  });

  if (!medicalExaminationType || errorMedicalExaminationType) {
    throw new Response('Error del servidor', { status: 500, statusText: 'No se pueden cargar los datos' });
  }

  return { medicalExaminationType, filters };
};
