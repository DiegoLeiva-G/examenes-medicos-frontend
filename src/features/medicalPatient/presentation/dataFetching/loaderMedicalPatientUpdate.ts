import { type LoaderFunctionArgs } from 'react-router-dom';
import { getMedicalPatientById } from '../pages';

export const loaderMedicalPatientUpdate = async ({ params }: LoaderFunctionArgs) => {
  const { medicalPatientId = '' } = params;

  const { data: medicalPatient, error: errorMedicalPatient } = await getMedicalPatientById.execute(medicalPatientId);

  if (!medicalPatient || errorMedicalPatient) {
    throw new Response('Error del servidor', { status: 500, statusText: 'No se pueden cargar los datos' });
  }

  return {
    medicalPatient,
    medicalPatientId,
  };
};
