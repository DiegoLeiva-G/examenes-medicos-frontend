import { getFundingSources } from '../pages';
import { type LoaderFunctionArgs } from 'react-router-dom';
import { getListFilter } from '@core/helpers';

export type fundingSourceDynamicFilters = '';
export const loaderFundingSourceList = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const filters = getListFilter<fundingSourceDynamicFilters>({
    url,
  });

  const { data: fundingSources, error: errorFundingSources } = await getFundingSources.execute({
    limit: filters.limit,
    page: filters.page,
    search: filters.search,
  });

  if (!fundingSources || errorFundingSources) {
    throw new Response('Error del servidor', { status: 500, statusText: 'No se pueden cargar los datos' });
  }

  return { fundingSources, filters };
};
