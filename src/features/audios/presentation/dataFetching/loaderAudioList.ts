import { getAudios } from '../pages';
import { type LoaderFunctionArgs } from 'react-router-dom';
import { getListFilter } from '@core/helpers';

export type audioDynamicFilters = '';

export const loaderAudioList = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const filters = getListFilter<audioDynamicFilters>({
    url,
  });

  const { data: audios, error: errorMeasureUnits } = await getAudios.execute({
    limit: filters.limit,
    page: filters.page,
    search: filters.search,
  });

  if (!audios || errorMeasureUnits) {
    throw new Response('Error del servidor', { status: 500, statusText: 'No se pueden cargar los datos' });
  }

  return { audios, filters };
};
