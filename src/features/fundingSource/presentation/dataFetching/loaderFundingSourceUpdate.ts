import { type LoaderFunctionArgs } from 'react-router-dom';
import { getFundingSourceById } from '../pages';

export const loaderFundingSourceUpdate = async ({ params }: LoaderFunctionArgs) => {
  const { fundingSourceId = '' } = params;

  const { data: fundingSourceData, error: errorFundingSourceUpdate } =
    await getFundingSourceById.execute(fundingSourceId);

  if (!fundingSourceData || errorFundingSourceUpdate) {
    throw new Response('Error del servidor', { status: 500, statusText: 'No se pueden cargar los datos' });
  }

  return {
    fundingSourceData,
    fundingSourceId,
  };
};
