import { type LoaderFunctionArgs } from 'react-router-dom';
import { getMeasureUnitById } from '../pages';

export const loaderMeasureUnitUpdate = async ({ params }: LoaderFunctionArgs) => {
  const { measureUnitId = '' } = params;

  const { data: measureUnitData, error: errorMeasureUnitUpdate } = await getMeasureUnitById.execute(measureUnitId);

  if (!measureUnitData || errorMeasureUnitUpdate) {
    throw new Response('Error del servidor', { status: 500, statusText: 'No se pueden cargar los datos' });
  }

  return {
    measureUnitData,
    measureUnitId,
  };
};
