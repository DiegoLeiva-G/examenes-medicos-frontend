import { getMeasureUnits } from '../pages';
import { type LoaderFunctionArgs } from 'react-router-dom';
import { getListFilter } from '@core/helpers';

export type measureUnitDynamicFilters = ''; // 'status' | 'name';

export const loaderMeasureUnitList = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const filters = getListFilter<measureUnitDynamicFilters>({
    url,
    // totalPageLimits: [1, 2, 3],
    // dynamicFilters: { status: { value: '', label: 'estado' }, name: { value: '', label: 'nombre' } },
  });

  const { data: measureUnits, error: errorMeasureUnits } = await getMeasureUnits.execute({
    limit: filters.limit,
    page: filters.page,
    search: filters.search,
  });

  if (!measureUnits || errorMeasureUnits) {
    throw new Response('Error del servidor', { status: 500, statusText: 'No se pueden cargar los datos' });
  }

  return { measureUnits, filters };
};
