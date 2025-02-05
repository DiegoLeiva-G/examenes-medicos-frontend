import { type LoaderFunctionArgs } from 'react-router-dom';
import { getMedicalExaminationTypeById } from '../pages';

export const loaderMedicalExaminationTypeUpdate = async ({ params }: LoaderFunctionArgs) => {
  const { medicalExaminationTypeId = '' } = params;

  const { data: medicalExaminationType, error: errorMedicalExaminationType } = await getMedicalExaminationTypeById.execute(medicalExaminationTypeId);

  if (!medicalExaminationType || errorMedicalExaminationType) {
    throw new Response('Error del servidor', { status: 500, statusText: 'No se pueden cargar los datos' });
  }

  return {
    medicalExaminationType,
    medicalExaminationTypeId,
  };
};
